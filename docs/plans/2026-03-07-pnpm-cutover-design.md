---
title: 2026-03-07-pnpm-cutover-design
date: 2026-03-07 16:33:53
permalink: /pages/a98ef2/
article: false
categories:
  - plans
tags:
  -
---

# 2026-03-07 pnpm 完整迁移设计

## 背景

当前仓库的脚本、README 与 GitHub Actions 全部以 Yarn 1 为默认路径，但工作区中已经出现 `pnpm-lock.yaml`，且此前混用 `yarn`/`pnpm` 导致过 `VuePress 1 + Vue 2.7` 编译链漂移。这个项目的核心问题不是“能不能用 pnpm”，而是“能否只保留一种包管理器，让依赖解析稳定、文档一致、CI 一致”。

## 目标

- 将仓库的唯一包管理器切换为 `pnpm`
- 让本地开发、CI、README、锁文件保持一致
- 避免再次出现 `yarn`/`pnpm` 混装污染 `node_modules`
- 保持现有 VuePress 站点行为不变

## 非目标

- 不升级 VuePress、Vue 或主题版本
- 不顺手清理与本次迁移无关的历史告警
- 不重构博客内容结构

## 方案对比

### 方案 A：保持 Yarn 1，不迁移

优点：
- 变更最小
- 与现有 README / CI 完全一致

缺点：
- 与迁移目标冲突
- 仓库已经存在 `pnpm-lock.yaml`，团队认知仍会分裂

### 方案 B：软兼容双包管理器

优点：
- 迁移阻力小

缺点：
- 双锁文件、双解析路径会让结果继续分叉
- 对 `VuePress 1 + Vue 2.7` 这种老依赖栈尤其危险

### 方案 C：hard cutover 到 pnpm（推荐）

优点：
- 规则最清晰，仓库记忆一致
- 可以从根上消除混装污染
- CI 与本地调试都能复用同一条安装链路

缺点：
- 需要一次性同步改脚本、文档、CI 与锁文件

## 决策

采用 **方案 C：hard cutover 到 pnpm**。

## 设计要点

### 脚本层

- `package.json` 中所有入口脚本不再调用 `yarn`
- `start` / `build` / `deploy` 统一改为 `pnpm` 路径
- 保留现有命令语义，降低迁移成本

### 依赖层

- 保留 `pnpm-lock.yaml`
- 删除 `yarn.lock`
- 继续显式锁定 `@vue/compiler-sfc@2.7.16`，避免 `pnpm` 把 Vue 2.7 工程拉到 Vue 3 编译器实现

### 文档层

- README 的安装、启动、构建说明全部切换为 `pnpm`
- 明确写出“不要与 Yarn 混用”

### CI 层

- GitHub Actions 使用 `pnpm/action-setup` + `actions/setup-node`
- 切到 `cache: 'pnpm'`
- 构建命令改为 `pnpm install --frozen-lockfile` 与 `pnpm build`

### 验证层

- 删除或隔离旧 `node_modules` 做一次干净安装
- 跑依赖兼容测试
- 跑生产构建
- 用浏览器打开本地产物首页与目标文章页，验证图片和页面正常

## 风险与缓解

- 风险：老依赖在 `pnpm` 下再次触发解析差异  
  缓解：保留 `@vue/compiler-sfc@2.7.16` 显式锁定，并做干净重装验证

- 风险：用户本地仍习惯运行 `yarn`  
  缓解：更新 README、脚本、CI，并删除 `yarn.lock`，让错误尽早暴露

- 风险：迁移后页面构建通过，但浏览器端静态资源异常  
  缓解：加入浏览器验收，检查首页与目标文章页
