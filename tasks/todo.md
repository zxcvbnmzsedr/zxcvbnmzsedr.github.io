# 调查清单

- [x] 确认仓库当前保留的是源码、构建产物，还是两者混合
- [x] 检查本地配置、脚本、提交历史中的发布链路线索
- [x] 核对 `siyuan-plugin-publisher` 官方文档中的发布模式
- [x] 交叉比对后还原你这套博客的实际发布路径

## Review

- 当前检出的 `gh-pages` 分支是静态产物分支。
- 真正的源码和思源接入配置在 `origin/vuepress` 分支。
- `siyuan-plugin-publisher` 会把文章发布到 VuePress 源码目录，再由 GitHub Actions 构建并发布到 Pages。

---

# 2026-03-07 VuePress 编译报错排障

- [x] 复现 `vuepress build` 报错并抓取完整堆栈
- [x] 确认 `vuepress@1` 在当前 `pnpm` 安装结果里误用了 `@vue/compiler-sfc@3.5.29`
- [x] 锁定与 `vue@2.7.x` 匹配的 `@vue/compiler-sfc`
- [x] 增加一个依赖兼容性回归测试
- [x] 重新安装依赖并验证 `vuepress build`
- [x] 修复构建过程中暴露的缺失文章资源

## 本次假设

- 当前报错的根因不是文章内容，而是依赖解析把 `vue/compiler-sfc` 指向了 Vue 3 编译器。
- 最小风险修复是显式声明 `@vue/compiler-sfc@2.7.16`，让 `pnpm` 和 `yarn` 都得到与 `vue@2.7.16` 匹配的实现。

## Review

- `pnpm` 安装路径下的根因已经确认：`node_modules/vue/compiler-sfc/index.js` 会转发到顶层 `@vue/compiler-sfc`，而顶层此前被装成了 `3.5.29`。
- 显式锁定 `@vue/compiler-sfc@2.7.16` 后，`OutboundLink.vue` / `GlobalLayout.vue` 的 `currentInput.slice is not a function` 报错消失。
- 回归测试 `scripts/__tests__/vuepress-compiler-compat.test.js` 已覆盖这个依赖约束，避免未来再次被 `pnpm` 拉回 3.x。
- 构建继续深入后发现唯一一处缺失资源：`docs/post/how-to-install-ipa-in-ios-203u8i.md` 引用的 `uPic202402191508672.png` 不存在。
- 已从线上站点回收该图片并落回 `docs/post/assets/how-to-install-ipa-in-ios-203u8i/uPic202402191508672.png`，最终 `pnpm exec vuepress build --no-cache --dest ./dist ./docs` 成功。

---

# 2026-03-07 pnpm 完整迁移

- [x] 写迁移设计文档与执行计划
- [x] 将仓库脚本从 `yarn` 切换到 `pnpm`
- [x] 将 README 和 CI 切换到 `pnpm`
- [x] 移除 `yarn.lock`，保留 `pnpm-lock.yaml`
- [x] 清理 `node_modules` 并用 `pnpm` 干净重装
- [x] 验证 `pnpm` 构建、测试与浏览器页面

## 本次假设

- 本次迁移采用 hard cutover，不再保留双锁文件与双包管理器并存。
- 迁移目标是“默认且唯一使用 `pnpm`”，而不是“兼容 `pnpm` 也兼容 `yarn`”。

## Review

- `package.json` 已切换为 `pnpm` 入口，并声明 `packageManager: pnpm@10.27.0`。
- `README.md` 与 `.github/workflows/tencentCloud.yml` 已统一改成 `pnpm` 安装与构建路径。
- `yarn.lock` 已删除，仓库仅保留 `pnpm-lock.yaml`。
- 新增 `scripts/__tests__/package-manager.test.js`，约束脚本、README、CI 与锁文件必须保持 `pnpm` 单轨。
- 迁移过程中发现 `docs/plans` 会被主题自动收录到首页文章流，已通过给计划文档补 `article: false` 消除副作用。
- 已执行干净迁移验证：`pnpm install --no-frozen-lockfile`、`pnpm run check:deps`、`pnpm build` 全部成功。
- 已执行浏览器验收：首页 `http://127.0.0.1:4173/` 正常，文章页 `http://127.0.0.1:4173/pages/d4b7af/` 正常，三张正文图片加载尺寸分别为 `2000x1440`、`1870x1286`、`820x536`。

---

# 2026-03-07 GitHub Pages 发布认证修复

- [x] 核对 `peaceiris/actions-gh-pages` 的工作流输入
- [x] 确认失败根因是仓库未配置 `HUB_TOKEN`
- [x] 切换到 `secrets.GITHUB_TOKEN` 并补充写权限
- [ ] 触发工作流并验证远端发布成功

## 本次假设

- 当前失败不是构建问题，而是发布步骤缺少可用认证凭据。
- 对同仓库发布 `gh-pages` 分支，优先使用 GitHub 默认下发的 `GITHUB_TOKEN`，避免再额外维护个人令牌。

## Review

- `.github/workflows/tencentCloud.yml` 原先把 `peaceiris/actions-gh-pages@v3` 绑定到 `secrets.HUB_TOKEN`，但日志明确显示运行时没有找到 deploy key 或 token。
- 已改为 `github_token: ${{ secrets.GITHUB_TOKEN }}`，并补 `permissions.contents: write`，让工作流具备向 `gh-pages` 分支推送构建产物的最小必要权限。
- 这样可以消除对仓库额外 secret 的依赖，发布链路回到 GitHub Actions 的默认同仓库部署模型。
