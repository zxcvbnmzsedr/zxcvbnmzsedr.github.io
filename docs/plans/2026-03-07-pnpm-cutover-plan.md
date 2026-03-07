---
title: 2026-03-07-pnpm-cutover-plan
date: 2026-03-07 16:33:53
permalink: /pages/8abf8d/
article: false
categories:
  - plans
tags:
  -
---

# 2026-03-07 pnpm 完整迁移实施计划

## 概览

- **目标**：将仓库从 Yarn 1 完整切换到 pnpm，并完成构建与浏览器验收
- **技术栈**：VuePress 1、Vue 2.7、GitHub Actions、pnpm

### Task 1：切换仓库脚本

**Files:**
- Modify: `package.json`

**Step 1: 保持脚本语义不变**

- 将 `start` / `build` / `deploy` 中对 `yarn` 的调用改为 `pnpm`
- 保留 `docs:dev` / `docs:build` 为底层真实命令

**Step 2: 保护 Vue 2.7 编译器约束**

- 保留 `@vue/compiler-sfc: 2.7.16`
- 不升级 VuePress 相关包版本

### Task 2：切换文档与 CI

**Files:**
- Modify: `README.md`
- Modify: `.github/workflows/tencentCloud.yml`

**Step 1: 更新 README**

- 安装命令改为 `pnpm install`
- 启动命令改为 `pnpm start`
- 增加“不要与 Yarn 混用”的提示

**Step 2: 更新 CI**

- 使用 `pnpm/action-setup`
- 将 Node 缓存改为 `pnpm`
- 构建命令改为 `pnpm install --frozen-lockfile` 与 `pnpm build`

### Task 3：切换锁文件与工作区状态

**Files:**
- Modify: `pnpm-lock.yaml`
- Delete: `yarn.lock`
- Modify: `tasks/todo.md`

**Step 1: 清理锁文件策略**

- 删除 `yarn.lock`
- 仅保留 `pnpm-lock.yaml`

**Step 2: 更新台账**

- 勾选 checklist
- 补充迁移复盘

### Task 4：验证迁移结果

**Files:**
- Verify: `dist/**`

**Step 1: 干净重装**

- Run: `pnpm install --no-frozen-lockfile`

**Step 2: 测试与构建**

- Run: `pnpm run check:deps`
- Run: `pnpm build`

**Step 3: 浏览器验收**

- 启动本地静态服务
- 打开首页 `/`
- 打开文章页 `/pages/d4b7af/`
- 确认图片和正文正常显示
