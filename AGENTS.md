# 仓库骨架

```text
.
├── docs/                    # 公开博客内容与 VuePress 配置
│   ├── .vuepress/           # 主题、导航、公共静态资源
│   ├── post/                # 扁平文章与其本地资源
│   ├── posts/               # 树形博客文章与同目录 assets
│   ├── topic/               # 专题内容与同目录 assets
│   └── plans/               # 本次整改计划文档
├── scripts/                 # 本地化资源与历史清理脚本
├── tasks/                   # 当前任务清单与复盘
├── README.md                # 项目说明与同步流程
├── package.json             # 构建、资源本地化、历史清理入口
└── config.js                # 本地思源连接配置（仅本地使用）
```

# 模块职责

- `docs/posts` / `docs/topic`：公开内容正文，只允许引用本地 `assets/` 或明确保留的正文链接。
- `docs/post`：扁平导出的文章，资源统一落到 `docs/post/assets/<slug>/`。
- `docs/.vuepress/public`：全站共享静态资源；`readme-assets/` 只服务仓库说明文档。
- `scripts/localize_blog_assets.py`：扫描仓库与思源工作区中的旧图床 / GitHub 原图引用，并尽量落地为本地资源。
- `scripts/cleanup-history.sh`：从 Git 全历史中清除误上传的大桶附件与根目录杂物。

# 边界规则

- 公开仓库禁止再出现根目录 `uPic/` 这类泛用附件桶。
- 博客正文图片优先使用文章目录下的 `assets/`；共享静态资源只放 `docs/.vuepress/public/`。
- 思源是内容源，发布仓库是公开产物；二者同步前先做资源白名单与脱敏检查。

# 本次调整

- 新增资源本地化脚本，减少对旧 GitHub/raw 与旧图床域名的依赖。
- 新增历史清理脚本，准备彻底移除误上传附件的 Git 历史痕迹。
- 新增任务与计划文档，记录本次整改过程。
