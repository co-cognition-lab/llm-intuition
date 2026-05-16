# GitHub 组织与仓库创建手册

> 创建日期：2026-05-16
> 用途：LLM-Intuition 项目公开发布的基础设施搭建

---

## 一、创建 GitHub 组织（推荐）还是用个人账号？

### 建议：创建组织

**理由**：
- 组织可以承载多个仓库（llm-intuition + 后续其他项目），统一品牌
- 组织的 README 可以介绍你的整体研究/探索方向
- 支持多人协作（未来可邀请合作者）
- 免费

**替代方案**：如果你不做多项目扩展，个人账号下建单个 repo 也可以。组织随时可创建。

---

## 二、步骤（按顺序执行）

### 步骤 1：注册/登录 GitHub

访问 `https://github.com`，登录你的账号。如果没有，先注册。

### 步骤 2：创建组织

1. 点击右上角头像 → **Settings**
2. 左侧菜单 → **Organizations**（在 "Access" 下）
3. 点击 **New organization**
4. 选择 **"Free"** 方案（免费即可）
5. 填写：
   - **Organization name**：你的组织名（见下方建议）
   - **Contact email**：你的邮箱
   - **This organization belongs to**：选择 "My personal account"
6. 完成验证 → 创建成功

### 组织名建议（与域名配套）

| 候选名 | 配套域名示例 | 风格 |
|--------|------------|------|
| `co-cognition-lab` | co-cognition.org | 精准、学术感 |
| `symbiotic-mind` | symbiotic-mind.org | 哲学深度 |
| `cognitive-frontier` | cognitive-frontier.org | 探索感 |
| `co-cognition-lab` | co-cognition.org | 简洁学术 |

**我的推荐**：`co-cognition-lab`（与域名 co-cognition.org 一致）——组织和域名一致，branding 最干净。也是最终选定名。

### 步骤 3：创建仓库

进入你的组织主页 → **Repositories** → **New repository**

填写：
- **Repository name**：`llm-intuition`（小写，连字符分隔）
- **Description**：`LLM 与人类直觉：进化路线探索 —— 探究大语言模型与人类直觉的能力边界与互补空间`
- **Visibility**：**Public**（公开）
- **Initialize with**：✅ Add a README file
- **Add .gitignore**：选择 `Python`（后续可能有分析脚本）
- **Add a license**：建议 `CC BY 4.0`（知识共享署名 4.0）——方便学术引用，保留署名权

点击 **Create repository**

### 步骤 4：上传项目文件

两种方式：

**方式 A：直接在网页上传**（最简单）
- 进入仓库 → **Add file** → **Upload files**
- 将 `llm-intuition-exploration` 文件夹内的所有 md 文件拖入
- 填写 commit message（如 "Initial project upload v1.1"）
- 点击 **Commit changes**

**方式 B：用 Git 命令行**（后续更新更方便）
```bash
git clone https://github.com/co-cognition-lab/llm-intuition.git
cd llm-intuition
# 复制项目文件到仓库目录
cp -r D:/文档/LobsterProject/LiteratureHistoryPhilosophy/llm-intuition-exploration/* .
git add .
git commit -m "Initial project upload v1.1"
git push
```

推荐方式 A 用于初次上传，后续 LobsterAI 可以通过 exec 用 Git 管理版本。

### 步骤 5：配置仓库基本信息

1. 仓库页面 → 右侧 **About** 齿轮图标
   - Description：保留
   - Website：先留空（网站搭建后填域名）
   - Topics：添加标签 `llm` `intuition` `cognitive-science` `ai-safety` `human-ai-collaboration`
2. **Settings** → **General** → 确认默认分支为 `main`

---

## 三、后续与 LobsterAI 的协作

仓库创建后，告诉 LobsterAI：
1. 组织名和仓库 URL（如 `https://github.com/co-intelligence-lab/llm-intuition`）
2. LobsterAI 可以进行后续的文件管理、版本更新

---

## 四、许可证说明

### 推荐：CC BY 4.0

- **全称**：Creative Commons Attribution 4.0 International
- **含义**：任何人可以分享、改编你的内容，但必须署名
- **优点**：最大化传播（arxiving 兼容）+ 保留署名权
- **替代**：CC BY-NC 4.0（加"禁止商业用途"限制）或 MIT（代码项目更常见）

对于本项目，CC BY 4.0 最合适——内容是研究/探索性质的，鼓励传播和学术引用。

### 设置方法

GitHub 创建仓库时选择 "Add a license" → 搜索 "Creative Commons Attribution 4.0"

---

*有问题随时问 LobsterAI。*
