# Co-Cognition Lab — llm-intuition

LLM 与人类直觉：进化路线探索 —— 探究大语言模型与人类直觉的能力边界与互补空间。

网站：[co-cognition.org](https://co-cognition.org)

---

## 目录结构

```
├── llm-intuition-website/      ← VitePress 站点（构建入口）
│   └── docs/                   ← 网站内容
│       ├── zh/                 ← 中文页面
│       ├── en/                 ← 英文页面
│       └── .vitepress/         ← 站点配置
├── research-materials/         ← 研究源文件（source-of-truth）
│   ├── llm-intuition/          ← 项目1 主文档 + 附录 + 评审
│   ├── competition/            ← 竞争推演 v4/v5
│   ├── agent-replies/          ← 外部 Agent 回复存档
│   ├── task-briefs/            ← 协作任务简报
│   ├── creative-embodiment-breach/
│   └── reviews/                ← 外部评审材料
├── arxiv/                      ← 论文工程（LaTeX 源 + PDF 产出）
└── .github/workflows/          ← CI/CD（GitHub Actions 部署）
```

---

## 源与发布

```
research-materials/   ← source-of-truth，研究内容在这里迭代
    │
    └── (手动或脚本同步)
         │
         v
docs/zh/、docs/en/    ← 发布快照，网站渲染的内容
```

更新流程：先改 `research-materials/`，再同步到网站 `docs/`。**不要只改网站而不同步源文件**。

---

## 本地工作层 vs GitHub 发布层

GitHub 仓库仅含**可公开内容**。本地工作目录（`llm-intuition-exploration/`）包含未脱敏材料（邮件、个人评审邀请、v2.0 草稿、P1 评审工作流等），**有意不纳入 GitHub**。两个文件的差额是设计意图，不是 bug。

---

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点生成
- GitHub Actions + GitHub Pages — 自动部署
- CC BY 4.0 — 内容许可
