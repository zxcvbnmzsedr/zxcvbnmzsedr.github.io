#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const DEFAULT_DOMAINS = [
  'raw.githubusercontent.com',
  'zxcvbnmzsedr.github.io',
  'www.ztianzeng.com',
  'image.ztianzeng.com',
  'www.shiyitopo.tech',
  'shiyitopo.tech',
]

const MARKDOWN_EXTENSIONS = new Set(['.md'])
const ASSET_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.mov', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ico',
])

function walkMarkdownFiles(rootDir, currentDir = rootDir, result = []) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const fullPath = path.join(currentDir, entry.name)
    const relativePath = path.relative(rootDir, fullPath)
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules' || relativePath.startsWith(path.join('docs', 'plans'))) {
        continue
      }
      walkMarkdownFiles(rootDir, fullPath, result)
      continue
    }
    if (MARKDOWN_EXTENSIONS.has(path.extname(entry.name))) {
      result.push(fullPath)
    }
  }
  return result
}

function normalizeUrlCandidate(candidate) {
  try {
    return new URL(candidate)
  } catch {
    return null
  }
}

function shouldLocalizeUrl(url, domains) {
  const parsed = normalizeUrlCandidate(url)
  if (!parsed) {
    return false
  }
  if (!domains.includes(parsed.hostname)) {
    return false
  }
  const pathname = decodeURIComponent(parsed.pathname)
  const ext = path.extname(pathname).toLowerCase()
  if (ASSET_EXTENSIONS.has(ext)) {
    return true
  }
  return pathname.includes('/uPic') || pathname.includes('/localized-assets/')
}

function collectUrlsFromMarkdown(content) {
  const pattern = /https?:\/\/[^\s)>'"`]+/g
  return Array.from(content.matchAll(pattern), (match) => match[0])
}

function collectRemoteAssetReferences({ rootDir, markdownFiles, domains = DEFAULT_DOMAINS }) {
  const files = markdownFiles || walkMarkdownFiles(rootDir)
  const references = []
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8')
    const seen = new Set()
    for (const url of collectUrlsFromMarkdown(content)) {
      if (!shouldLocalizeUrl(url, domains)) {
        continue
      }
      if (seen.has(url)) {
        continue
      }
      seen.add(url)
      references.push({ filePath, url })
    }
  }
  return references
}

function buildLocalAssetPath(url) {
  const parsed = new URL(url)
  const decodedPath = decodeURIComponent(parsed.pathname)
  const extension = path.extname(decodedPath).toLowerCase() || '.bin'
  const baseName = path.basename(decodedPath, extension)
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'asset'
  const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 12)
  const fileName = `${baseName}-${hash}${extension}`
  const relativeFilePath = path.join('docs', '.vuepress', 'public', 'localized-assets', fileName)
  return {
    fileName,
    relativeFilePath,
    publicPath: `/localized-assets/${fileName}`,
  }
}

function buildDownloadCandidates(url) {
  const parsed = new URL(url)
  const candidates = [url]
  if (parsed.hostname === 'www.shiyitopo.tech' || parsed.hostname === 'shiyitopo.tech') {
    candidates.push(url.replace(/^https:/, 'http:'))
    const imageHostUrl = url.replace(parsed.hostname, 'image.ztianzeng.com')
    candidates.push(imageHostUrl)
    candidates.push(imageHostUrl.replace(/^https:/, 'http:'))
  }
  return Array.from(new Set(candidates))
}

function findExistingLocalAsset(rootDir, url) {
  const parsed = new URL(url)
  const rawBaseName = path.basename(parsed.pathname)
  const decodedBaseName = path.basename(decodeURIComponent(parsed.pathname))
  const homeDir = process.env.HOME || ''
  const candidates = [
    path.join(rootDir, 'uPic', rawBaseName),
    path.join(rootDir, 'uPic', decodedBaseName),
    path.join(rootDir, rawBaseName),
    path.join(rootDir, decodedBaseName),
    path.join(homeDir, 'Documents', 'Siyuan', 'data', 'assets', rawBaseName),
    path.join(homeDir, 'Documents', 'Siyuan', 'data', 'assets', decodedBaseName),
    path.join(homeDir, 'Documents', 'SiYuan', 'data', 'assets', rawBaseName),
    path.join(homeDir, 'Documents', 'SiYuan', 'data', 'assets', decodedBaseName),
  ]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate
    }
  }
  return null
}

async function downloadToFile(rootDir, url, relativeFilePath) {
  const targetPath = path.join(rootDir, relativeFilePath)
  if (fs.existsSync(targetPath)) {
    return { targetPath }
  }
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  const existingLocalPath = findExistingLocalAsset(rootDir, url)
  if (existingLocalPath) {
    fs.copyFileSync(existingLocalPath, targetPath)
    return { targetPath }
  }
  let lastError = null
  for (const candidate of buildDownloadCandidates(url)) {
    try {
      const response = await fetch(candidate)
      if (!response.ok) {
        throw new Error(`下载失败 ${response.status} ${candidate}`)
      }
      const arrayBuffer = await response.arrayBuffer()
      fs.writeFileSync(targetPath, Buffer.from(arrayBuffer))
      return { targetPath, sourceUrl: candidate }
    } catch (error) {
      lastError = error
    }
  }
  throw lastError || new Error(`下载失败 ${url}`)
}

async function localizeMarkdownFiles({ rootDir, markdownFiles, domains = DEFAULT_DOMAINS }) {
  const references = collectRemoteAssetReferences({ rootDir, markdownFiles, domains })
  const assetMap = new Map()
  const downloadedFiles = []
  const failures = []

  for (const reference of references) {
    if (!assetMap.has(reference.url)) {
      const asset = buildLocalAssetPath(reference.url)
      try {
        await downloadToFile(rootDir, reference.url, asset.relativeFilePath)
        assetMap.set(reference.url, asset)
        downloadedFiles.push(asset)
      } catch (error) {
        failures.push({ url: reference.url, message: error.message })
      }
    }
  }

  const fileToUrls = new Map()
  for (const reference of references) {
    if (!fileToUrls.has(reference.filePath)) {
      fileToUrls.set(reference.filePath, new Set())
    }
    fileToUrls.get(reference.filePath).add(reference.url)
  }

  for (const [filePath, urls] of fileToUrls.entries()) {
    let content = fs.readFileSync(filePath, 'utf8')
    for (const url of urls) {
      const asset = assetMap.get(url)
      if (!asset) {
        continue
      }
      content = content.split(url).join(asset.publicPath)
    }
    fs.writeFileSync(filePath, content, 'utf8')
  }

  return {
    scannedCount: references.length,
    downloadedCount: downloadedFiles.length,
    failedCount: failures.length,
    failures,
    downloadedFiles,
    updatedFiles: Array.from(fileToUrls.keys()),
  }
}

function parseArgs(argv) {
  const args = { rootDir: process.cwd(), apply: false }
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (token === '--root') {
      args.rootDir = path.resolve(argv[index + 1])
      index += 1
    } else if (token === '--apply') {
      args.apply = true
    }
  }
  return args
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const references = collectRemoteAssetReferences({ rootDir: args.rootDir })
  if (!args.apply) {
    console.log(JSON.stringify({ scannedCount: references.length, references }, null, 2))
    return
  }
  const result = await localizeMarkdownFiles({ rootDir: args.rootDir })
  console.log(JSON.stringify(result, null, 2))
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = {
  DEFAULT_DOMAINS,
  collectRemoteAssetReferences,
  buildLocalAssetPath,
  buildDownloadCandidates,
  localizeMarkdownFiles,
  shouldLocalizeUrl,
}
