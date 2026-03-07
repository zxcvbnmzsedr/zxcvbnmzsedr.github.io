const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const http = require('node:http')
const crypto = require('node:crypto')

const {
  collectRemoteAssetReferences,
  buildLocalAssetPath,
  buildDownloadCandidates,
  localizeMarkdownFiles,
} = require('../localize-remote-assets')

function createTempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'localize-assets-'))
}

test('collectRemoteAssetReferences only captures targeted remote assets', async () => {
  const rootDir = createTempDir()
  const docsDir = path.join(rootDir, 'docs', 'post')
  fs.mkdirSync(docsDir, { recursive: true })
  const markdownPath = path.join(docsDir, 'sample.md')
  fs.writeFileSync(
    markdownPath,
    [
      '![img](https://image.ztianzeng.com/uPic/demo.png)',
      '![skip](https://example.com/demo.png)',
      '<video src="https://www.shiyitopo.tech/uPic/demo.mp4"></video>',
      '[site](https://www.ztianzeng.com/about)',
    ].join('\n'),
    'utf8',
  )

  const references = collectRemoteAssetReferences({ rootDir })
  assert.equal(references.length, 2)
  assert.deepEqual(
    references.map((item) => item.url).sort(),
    [
      'https://image.ztianzeng.com/uPic/demo.png',
      'https://www.shiyitopo.tech/uPic/demo.mp4',
    ],
  )
})

test('buildLocalAssetPath creates deterministic public asset paths', async () => {
  const url = 'https://image.ztianzeng.com/uPic/demo.png'
  const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 12)
  const result = buildLocalAssetPath(url)
  assert.equal(result.publicPath, `/localized-assets/demo-${hash}.png`)
  assert.equal(result.relativeFilePath, path.join('docs', '.vuepress', 'public', 'localized-assets', `demo-${hash}.png`))
})

test('localizeMarkdownFiles downloads remote assets and rewrites markdown', async () => {
  const rootDir = createTempDir()
  const docsDir = path.join(rootDir, 'docs', 'post')
  fs.mkdirSync(docsDir, { recursive: true })

  const payload = Buffer.from('fake-image')
  const server = http.createServer((req, res) => {
    if (req.url === '/uPic/demo.png') {
      res.writeHead(200, { 'Content-Type': 'image/png' })
      res.end(payload)
      return
    }
    res.writeHead(404)
    res.end('missing')
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  const remoteUrl = `http://127.0.0.1:${address.port}/uPic/demo.png`

  const markdownPath = path.join(docsDir, 'sample.md')
  fs.writeFileSync(markdownPath, `![img](${remoteUrl})\n`, 'utf8')

  const result = await localizeMarkdownFiles({
    rootDir,
    domains: ['127.0.0.1'],
    markdownFiles: [markdownPath],
  })

  assert.equal(result.downloadedCount, 1)
  const updatedContent = fs.readFileSync(markdownPath, 'utf8')
  assert.match(updatedContent, /!\[img\]\(\/localized-assets\/demo-[a-f0-9]{12}\.png\)/)

  const downloadedFile = path.join(rootDir, result.downloadedFiles[0].relativeFilePath)
  assert.deepEqual(fs.readFileSync(downloadedFile), payload)

  await new Promise((resolve) => server.close(resolve))
})

test('localizeMarkdownFiles falls back to existing local asset copies', async () => {
  const rootDir = createTempDir()
  const docsDir = path.join(rootDir, 'docs', 'post')
  const upicDir = path.join(rootDir, 'uPic')
  fs.mkdirSync(docsDir, { recursive: true })
  fs.mkdirSync(upicDir, { recursive: true })

  const existingPayload = Buffer.from('from-local-upic')
  fs.writeFileSync(path.join(upicDir, 'demo.png'), existingPayload)

  const remoteUrl = 'https://image.ztianzeng.com/uPic/demo.png'
  const markdownPath = path.join(docsDir, 'sample.md')
  fs.writeFileSync(markdownPath, `![img](${remoteUrl})\n`, 'utf8')

  const result = await localizeMarkdownFiles({ rootDir, markdownFiles: [markdownPath] })

  assert.equal(result.downloadedCount, 1)
  const downloadedFile = path.join(rootDir, result.downloadedFiles[0].relativeFilePath)
  assert.deepEqual(fs.readFileSync(downloadedFile), existingPayload)
})

test('buildDownloadCandidates adds fallback hosts for shiyitopo assets', async () => {
  const candidates = buildDownloadCandidates('https://www.shiyitopo.tech/uPic/demo.png')
  assert.deepEqual(candidates, [
    'https://www.shiyitopo.tech/uPic/demo.png',
    'http://www.shiyitopo.tech/uPic/demo.png',
    'https://image.ztianzeng.com/uPic/demo.png',
    'http://image.ztianzeng.com/uPic/demo.png',
  ])
})

test('localizeMarkdownFiles reports failed downloads and continues', async () => {
  const rootDir = createTempDir()
  const docsDir = path.join(rootDir, 'docs', 'post')
  fs.mkdirSync(docsDir, { recursive: true })

  const payload = Buffer.from('ok-image')
  const server = http.createServer((req, res) => {
    if (req.url === '/uPic/ok.png') {
      res.writeHead(200, { 'Content-Type': 'image/png' })
      res.end(payload)
      return
    }
    res.writeHead(404)
    res.end('missing')
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  const okUrl = `http://127.0.0.1:${address.port}/uPic/ok.png`
  const badUrl = `http://127.0.0.1:${address.port}/uPic/missing.png`

  const markdownPath = path.join(docsDir, 'sample.md')
  fs.writeFileSync(markdownPath, `![ok](${okUrl})\n![bad](${badUrl})\n`, 'utf8')

  const result = await localizeMarkdownFiles({
    rootDir,
    domains: ['127.0.0.1'],
    markdownFiles: [markdownPath],
  })

  assert.equal(result.downloadedCount, 1)
  assert.equal(result.failedCount, 1)
  assert.equal(result.failures[0].url, badUrl)
  const updatedContent = fs.readFileSync(markdownPath, 'utf8')
  assert.match(updatedContent, /!\[ok\]\(\/localized-assets\/ok-[a-f0-9]{12}\.png\)/)
  assert.match(updatedContent, new RegExp(`!\\[bad\\]\\(${badUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`))

  await new Promise((resolve) => server.close(resolve))
})
