const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const rootDir = path.resolve(__dirname, '../..')
const packageJson = require('../../package.json')
const readme = fs.readFileSync(path.join(rootDir, 'README.md'), 'utf8')
const workflow = fs.readFileSync(path.join(rootDir, '.github/workflows/tencentCloud.yml'), 'utf8')

test('仓库默认包管理器已经切换到 pnpm', () => {
  assert.match(packageJson.packageManager, /^pnpm@/)
  assert.match(packageJson.scripts.start, /^pnpm run /)
  assert.match(packageJson.scripts.build, /\bpnpm run docs:build\b/)
  assert.match(packageJson.scripts.deploy, /^pnpm run build\b/)
  assert.doesNotMatch(JSON.stringify(packageJson.scripts), /\byarn\b/)
})

test('README 与 CI 都声明 pnpm 为唯一安装路径', () => {
  assert.match(readme, /\bpnpm install\b/)
  assert.match(readme, /\bpnpm start\b/)
  assert.match(readme, /不要再与 `yarn` 混用/)
  assert.match(workflow, /pnpm\/action-setup@v4/)
  assert.match(workflow, /cache: 'pnpm'/)
  assert.match(workflow, /pnpm install --frozen-lockfile/)
  assert.match(workflow, /pnpm build/)
  assert.doesNotMatch(workflow, /\byarn\b/)
})

test('仓库只保留 pnpm 锁文件', () => {
  assert.equal(fs.existsSync(path.join(rootDir, 'yarn.lock')), false)
  assert.equal(fs.existsSync(path.join(rootDir, 'pnpm-lock.yaml')), true)
})
