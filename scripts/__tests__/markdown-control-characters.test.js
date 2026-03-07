const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const markdownRoot = path.join(__dirname, '..', '..', 'docs', 'post')
const forbiddenCharacters = /[\u200B\u200C\u200D\uFEFF]/

function collectMarkdownFiles(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath))
      continue
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

test('docs/post markdown 不应包含会污染资源路径的零宽字符', () => {
  const pollutedFiles = collectMarkdownFiles(markdownRoot)
    .filter((filePath) => forbiddenCharacters.test(fs.readFileSync(filePath, 'utf8')))
    .map((filePath) => path.relative(process.cwd(), filePath))

  assert.deepEqual(pollutedFiles, [])
})
