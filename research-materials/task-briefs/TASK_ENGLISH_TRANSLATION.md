# 任务：英文翻译（全项目）

> **分配给**：Kimi Agent 群（翻译）
> **任务类型**：中→英翻译
> **输入材料**：项目 md 文件已在 [GitHub](https://github.com/co-cognition-lab/llm-intuition)
> **输出格式**：在仓库 `docs/en/` 目录下创建翻译后的 md 文件
> **截止**：完成即可

---

## 一、翻译范围与优先级

| 优先级 | 文件 | 长度（行） | 理由 |
|--------|------|-----------|------|
| **P0** | `Executive_Summary.md` | ~200 | 最短、传播力最强、决策者版本 |
| **P0** | `LLM_Intuition_Exploration.md` | ~500 | 主文档，核心理论 |
| **P1** | `4_Synthesis_v1.0.md` | ~360 | 综合输出，行动纲领 |
| **P1** | `Appendix_Product_Guide.md` | ~500 | 产品化指南，实用价值高 |
| **P2** | `Appendix_CrossCultural.md` | ~400 | 跨文化附录 |
| **P2** | `Appendix_Operationalization.md` | ~250 | 操作化附录 |
| **P3** | 英文首页 `en/index.md` | 新写 | 项目简介 + 四个发现卡片 |

**建议**：先完成 P0 两个文件，再推进 P1-P2。

---

## 二、核心术语翻译对照表（必须严格遵守）

以下术语在全项目中含义固定，翻译必须统一。**不可在不同文件中使用不同译法。**

| 中文 | English（固定译法） | 说明 |
|------|---------------------|------|
| 直觉 | intuition | 不用 gut feeling（gut feeling 是口语变体，仅用于阐释） |
| 精度加权 | precision-weighting | Active Inference 框架的标准术语 |
| 不可回避性 | unavoidability | 项目的核心概念，不是 inevitability |
| 代价敏感压缩 | cost-sensitive compression | 命题①的核心术语 |
| 选择性忽略 | selective ignoring | 命题②的核心术语 |
| 互补地图 | Complementary Map | 首字母大写，项目专有工具名称 |
| 人优先协议 | Human-first Protocol | 首字母大写，项目专有设计规范 |
| 制度性不可回避性 | institutional unavoidability | 与"身体不可回避性"区分 |
| 构成性退化 | constitutive degradation | 与"工具性退化"对立的分析概念 |
| 工具性退化 | instrumental degradation | |
| 身份退位 | identity abdication | 构成性退化的高级形式 |
| 中空期 | hollow period | 项目原创概念 |
| 文本中介陷阱 | textual mediation trap | 发现2的核心概念 |
| 道德缓冲 | moral cushioning | Köbis 效应的项目翻译 |
| 分层后果暴露 | stratified consequence exposure | Level 0-3 部署框架 |
| 代价外部性 | cost externality | 经济学类比 |
| 假肢 / 外骨骼 / 新器官 | prosthesis / exoskeleton / new organ | A→C 演变的三级隐喻 |
| 感知型 / 概念型 / 社会型 / 道德型 | perceptual / conceptual / social / moral | 四子类型，形容词形式 |

**二级术语（文件内出现频率较低，但仍需统一）**：

| 中文 | English |
|------|---------|
| 躯体标记假说 | Somatic Marker Hypothesis (SMH) |
| 主动推理 | Active Inference |
| 预期自由能 | expected free energy |
| 预测加工 | Predictive Processing |
| 组块化 | chunking |
| 镜像神经元 | mirror neurons |
| 具身模拟 | embodied simulation |
| 自动化偏差 | automation bias |
| 谄媚偏差 | sycophancy |
| 反转学习 | reversal learning |
| 分布外 | out-of-distribution (OOD) |
| 认知强制函数 | cognitive forcing functions |

---

## 三、翻译风格要求

### 宏观

1. **学术散文风，不是学术论文风。** 保持原文的论证节奏和语气——冷静分析为主，伦理紧迫为辅。不要去学 Nature/Science 的 passive voice 堆砌。
2. **保留原文的类比系统。** GPS→AF447→药品分阶段 的类比链必须完整保留，不能简写或跳过。
3. **保持"不可回避性"概念的哲学重量。** "unavoidability"在文中是一个有沉淀的概念，不要弱化为 "inevitability"、"necessity" 等更轻的词。
4. **保持句子的"三层递进"节奏。** 中文原文有很多"不是 X，而是 Y，本质上是 Z"结构——翻译时保留这个节奏。

### 微观

5. **术语首次出现时括号标注中文原文。** 例："precision-weighting（精度加权）"
6. **中文特有的比喻可替换为英文等效力比喻，不可强行直译。** 例："读空气"→ 不能用 "read the air"，用 "sense the atmosphere / read the room"。
7. **但文化专有概念必须保留原文 + 解释。** 例："面子（mianzi / face culture）"、"空気を読む（kuuki wo yomu, reading the atmosphere）"
8. **项目内专有名词的"九"、"四"、"三"、"38"数字保留。** 如 "nine core judgments"、"four no-go zones"、"three iron laws"、"38 open questions"。
9. **OQ 编号（OQ1-OQ38）不翻译。** 这是项目内部索引系统。
10. **A/B/C 假说标签不翻译。** Hypothesis A/B/C。

---

## 四、特殊处理

### P0 文件：Executive_Summary.md

这个文件的中文版是"零术语门槛"的通俗风格。英文版必须保持同样的**短句、类比驱动、零行话**风格：
- 不说 "precision-weighting"，说 "the brain's automatic priority-sorting system"
- 不说 "constitutive degradation"，说 "losing not a skill but a part of who you are"
- 保留所有类比（GPS / AF447 / 体育课 / 药品分阶段）
- 保留"记住一件事"结尾的语气

### P0 文件：LLM_Intuition_Exploration.md

主文档——保持完整的论证结构：
- 脚注（[^1]-[^13]）翻译脚注文本，保留编号
- 表格翻译单元格内容，列标题对齐
- 标记系统（✅❌⚠️🔴🟡🟢）不翻译
- 参考文献保留原文（不翻译论文标题）
- 术语通俗解释块（1.4 节）翻译解释文本，术语保留中英对照

### 跨文化附录中的文化专有概念

`Appendix_CrossCultural.md` 中出现了大量中国文化专有词：
- "读空气"、"面子"、"关系"、"礼教"、"角色伦理"、"仁/义/礼/智/信"、"karma"、"ijtihad"、"fatwa"、"Ubuntu"、"guru"
- 翻译策略：首次出现保留原文 + 括号解释，后续直接用原文

---

## 五、质量检查清单

翻译完成后自查：

- [ ] 全文核心术语一致性（对照 §二 术语表）
- [ ] A/B/C 假说、OQ 编号、四个子类型名称全项目统一
- [ ] 脚注编号与原文对应
- [ ] 表格格式不被翻译破坏（列数一致、单元格换行合理）
- [ ] 链接不失效（仓库内相对链接保持一致）
- [ ] 中文引号『』→ 英文引号 "" 或斜体
- [ ] 长度合理——英文通常比中文长 20-30%，不接受减半长度的缩译

---

## 六、提交方式

每个文件翻译完成后，直接在仓库中创建对应的 `docs/en/` 下的文件。可以多次提交。

第一批（P0）：`Executive_Summary.md` + `LLM_Intuition_Exploration.md` 翻译完成后告知 LobsterAI 审校。

---

*此任务文件由 LobsterAI 生成。翻译完成后由 LobsterAI 进行术语一致性审校。*
