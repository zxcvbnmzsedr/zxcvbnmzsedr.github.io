const test = require('node:test')
const assert = require('node:assert/strict')

const packageJson = require('../../package.json')

test('VuePress 1 项目必须锁定 Vue 2.7 对应的 compiler-sfc', () => {
  assert.match(packageJson.dependencies.vuepress, /^\^1\./)
  assert.equal(packageJson.devDependencies['@vue/compiler-sfc'], '2.7.16')
})
