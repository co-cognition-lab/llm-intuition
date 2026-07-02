# 任务：VitePress 网站搭建（前端代码）

> **分配给**：Kimi Agent 群（前端生成）
> **任务类型**：代码生成——VitePress 静态站点
> **输入材料**：项目 md 文件已在 [GitHub](https://github.com/co-cognition-lab/llm-intuition)
> **输出格式**：直接向 GitHub 仓库提交 PR（Pull Request），包括 docs/ 目录完整结构 + .vitepress/ 配置
> **截止**：完成即可，不设硬 deadline

---

## 一、项目定位

网站是项目内容的多格式阅读入口，面向两类受众：
1. **人类读者**：中英双语切换阅读，页面简洁，有搜索
2. **AI Agent**：语义化 HTML + sitemap.xml，可被 agent 高效解析

域名：`co-cognition.org`，已配置 Cloudflare DNS + GitHub Pages。

---

## 二、技术选型

**VitePress**（Vue 官方文档工具）：
- 纯 Markdown 驱动——项目的 md 文件直接作为页面源码，零转换
- 内置 i18n——`zh/` + `en/` 目录，语言切换按钮自动生成
- 本地搜索——Pagefind（静态搜索，无第三方依赖，agent 友好）
- 部署方式——GitHub Actions 自动构建 → 部署到 GitHub Pages 的 `gh-pages` 分支

---

## 三、必须实现的目录结构

```
llm-intuition/
├── docs/
│   ├── index.md                    # 重定向到 /zh/ 或语言选择页
│   ├── public/
│   │   └── favicon.svg             # 网站图标（简洁几何图案）
│   ├── zh/
│   │   ├── index.md                # 中文首页——项目简介 + 核心叙事摘要
│   │   ├── main.md                 # 主文档（映射 LLM_Intuition_Exploration.md）
│   │   ├── synthesis.md            # 综合输出（映射 4_Synthesis_v1.0.md）
│   │   ├── summary.md              # 决策者摘要（映射 Executive_Summary.md）
│   │   ├── product-guide.md        # 产品化指南（映射 Appendix_Product_Guide.md）
│   │   ├── cross-cultural.md       # 跨文化附录（映射 Appendix_CrossCultural.md）
│   │   ├── operationalization.md   # 操作化附录（映射 Appendix_Operationalization.md）
│   │   └── peer-review.md          # 同行评议——三份 kimi 评审报告摘要
│   ├── en/
│   │   ├── index.md                # 英文首页
│   │   ├── main.md                 # 英文主文档
│   │   ├── synthesis.md            # 英文综合输出
│   │   ├── summary.md              # 英文摘要
│   │   ├── product-guide.md
│   │   ├── cross-cultural.md
│   │   ├── operationalization.md
│   │   └── peer-review.md
│   └── .vitepress/
│       ├── config.ts               # 全局配置 + i18n + 搜索
│       └── theme/
│           └── index.ts            # 主题定制（极简风格）
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions：构建 + 部署到 gh-pages
├── package.json                    # VitePress 依赖
└── README.md                       # 仓库首页（已有，无需修改）
```

---

## 四、config.ts 关键配置要求

### i18n

```ts
// 伪代码示意
export default defineConfig({
  locales: {
    root: { label: '中文', lang: 'zh-CN', link: '/zh/' },
    en: { label: 'English', lang: 'en-US', link: '/en/' }
  }
})
```

**要求**：
- 语言切换按钮在导航栏右上角
- 中文站 URL：`co-cognition.org/zh/xxx`
- 英文站 URL：`co-cognition.org/en/xxx`
- 根路径 `/` 重定向到 `/zh/`（中文默认）

### 搜索（Pagefind）

- 使用 `vitepress-plugin-pagefind` 插件
- 搜索索引在每次构建时自动生成
- 支持中文分词（Pagefind 原生支持）

### 导航

中文站导航栏：
```
首页 | 主文档 | 综合输出 | 执行摘要 | 产品指南 | 跨文化 | 操作化 | 同行评议
```

英文站导航栏镜像。

### 页面元数据

每页需包含：
```yaml
---
title: 页面标题
description: 页面描述（用于 SEO 和 agent 解析）
---
```

---

## 五、设计风格要求（极简）

- **配色**：白底 + 深灰文字 + 蓝色链接（类似 GitHub 风格）
- **字体**：系统默认字体栈（无 Google Fonts，减少外部依赖）
- **布局**：单栏内容区，最大宽度 720px，居中
- **无多余视觉元素**：无 hero 大图、无动画、无渐变、无阴影
- **Logo**：纯文字 `co-cognition.org/lab` 即可，不需要图标设计
- **移动端**：响应式，小屏幕字体略缩

整体风格参照：https://slimwiki.com/ 或 VitePress 默认主题去除非必要装饰。

---

## 六、GitHub Actions 部署

`.github/workflows/deploy.yml` 需实现：

```yaml
name: Deploy VitePress to Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist
      - uses: actions/deploy-pages@v4
```

部署目标：GitHub Pages（仓库 Settings → Pages → Source: GitHub Actions）。

---

## 七、内容映射

| 网站页面 | 仓库源文件 | 说明 |
|---------|-----------|------|
| zh/main.md | LLM_Intuition_Exploration.md | 完整复制，无需修改格式（VitePress 原生渲染 MD） |
| zh/synthesis.md | 4_Synthesis_v1.0.md | 同上 |
| zh/summary.md | Executive_Summary.md | 同上 |
| zh/product-guide.md | Appendix_Product_Guide.md | 同上 |
| zh/cross-cultural.md | Appendix_CrossCultural.md | 同上 |
| zh/operationalization.md | Appendix_Operationalization.md | 同上 |
| zh/peer-review.md | 三份 review_*.md | 摘录每份报告的"总体评分"和"核心发现"，不是全文复制 |
| zh/index.md | **新写** | 200-300 字项目简介 + 四个发现在首页以卡片呈现 |

**注意**：所有 md 文件引用的是仓库中的实际路径。请确认仓库文件结构——主文档等技术文件在根目录，不在子文件夹中。如果 VitePress 页面需要引用根目录文件，使用相对路径 `../../LLM_Intuition_Exploration.md` 或直接放置内容。

最简单的做法：直接把仓库现有 md 文件的内容复制到对应网站页面，而不是引用路径。

---

## 八、英文站占位

英文站创建全部 8 个页面文件，但内容可以用占位文本：
```md
# [Page Title]

*English translation in progress. See [Chinese version](../zh/xxx.md) for full content.*
```

首页（en/index.md）除外——英文首页需要写完整内容（项目简介 + 四个发现摘要）。其余英文页面占位即可，后续由翻译任务填充。

---

## 九、提交方式

**直接向仓库提交 PR**：

1. Fork `co-cognition-lab/llm-intuition`
2. 创建所有上述文件
3. 提交 PR 到主仓库的 `main` 分支
4. 在 PR 描述中写："VitePress 网站初始化：中文站完整内容 + 英文站占位 + GitHub Actions 自动部署"

---

## 十、验证标准

完成后，以下应当全部成立：
- `npm run docs:dev` 在本地启动，浏览器访问 `localhost:5173`
- 中文站所有页面正常渲染
- 英文站占位页正常渲染
- 语言切换按钮可用
- 搜索（Pagefind）索引生成
- GitHub Actions 成功构建并部署
- `co-cognition.org` 显示网站首页

---

*此任务文件由 LobsterAI 生成。Kimi Agent 生成的 PR 将被 LobsterAI 审查和合并。*
