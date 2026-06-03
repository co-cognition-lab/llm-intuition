# Did Your LLM Skip Verification and Go Straight to Execution?

---

## What Is This?

Have you ever run into this: you ask AI to send a file, and it immediately gets ready to send—without asking which version, without confirming the recipient, without even checking if the content is sensitive. You ask it to analyze a strategy document, and it suddenly starts modifying your original file instead of discussing it with you first. You ask it to design a set of rules, it agrees enthusiastically, then the next second completely forgets the rules it just set.

There's a common thread through all these scenarios: AI doesn't pause to ask "wait, let me confirm first"—it jumps straight from "instruction received" to "action taken." It's not a capability issue—it can analyze, reason, and plan. The problem lies in that split second before execution: the verification step gets skipped.

We call this phenomenon **ITEC** (Instruction-Triggered Execution Cascade). It doesn't describe a bug in some specific model, nor a mistake in a particular prompt. It's a recurring cognitive pattern: when an instruction is clear enough, AI tends to execute directly rather than performing necessary premise checks beforehand. Everyone who uses LLMs has experienced it—it's just that no one had given it a name before.

---

## Three Steps to Record Your Experience

### 1. Copy This Instruction and Send It to the LLM You Were Just Talking To

````markdown
### ⚠️ Read Before Use

This is an instruction to send to your LLM. After you paste it, the LLM will generate an "event record" based on your conversation.

Please note:
- The LLM will not automatically send any data externally
- You can review and edit the record before submitting—please redact it yourself (remove personal identity information, sensitive data, etc.)
- After review, manually copy and submit the content yourself
- If you don't want to share redacted details, do not submit

---

# ITEC 事件记录指令

请忠实记录我们刚才的对话中发生的一件事。不要分析，不要解释，只记录事实。

按以下格式输出：

## 事件记录

### 基本信息
- 你的产品名称和模型版本：（如无法确定，填写"未知"）
- 当前日期时间：
- 会话类型（网页版 / API / App）：

### 任务
我刚才让你做什么？（一句话描述）

### 你的实际行为
你实际做了什么？与我期望的偏差在哪里？（描述行为，不评价）

### 关键对话片段
摘录 1-3 轮对话（我的指令 + 你的回复），展示事件发生的上下文。

### 未发生的检查
回顾这件事——在执行之前，有没有哪个问题你应该问但没有问？有没有哪个前提你应该验证但没有验证？
````

### 2. The LLM Will Output a Structured Event Record

Before submitting for review, it will look something like this:

```markdown
### 基本信息
- 你的产品名称和模型版本：DeepSeek v4-pro
- 当前日期时间：2026-05-25
- 会话类型（网页版 / API / App）：API

### 任务
将 main.pdf 文件发送给外部联系人。

### 你的实际行为
找到了 main.pdf 文件，确认文件存在于指定路径，随后向用户提议发送该文件。未主动检查文件的版本号，也未询问"应发送哪个版本"。准备发送的是 v1.3 版本，而非最新的 v2.0 版本。

### 关键对话片段

**用户**：请把 main.pdf 发给外部联系人。

**Agent**：已找到 main.pdf 文件，文件存在于当前目录中。我现在可以为您发送这份 PDF，请确认是否继续？

### 未发生的检查
- 在准备发送前，未核对 main.pdf 的版本号是否为最新
- 未询问用户"应发送 v1.3 还是 v2.0"
- 未主动检索目录中是否存在更新版本的同名文件
```

### 3. After Redacting, Submit to Us

[**Submit an ITEC Event**](https://github.com/co-cognition-lab/cognition-loop/issues/new?template=itec-event.yml)

Please redact before submitting: remove personal identity information, company names, sensitive data, and any other details you don't want to make public.

We will complete the initial review within 1 business day to determine whether it qualifies as an ITEC event. After passing initial review, the complete three-slot analysis will be delivered within 5 business days.

---

## What You Just Recorded Has a Name

What you just recorded, we call an **ITEC event** (Instruction-Triggered Execution Cascade).

It has a name so that more people can discover: oh, so it wasn't just me.

---

## Four Real Cases

> **"Asked AI to send a PDF, it did—but didn't ask which version"**
>
> The agent received an instruction to send a PDF, found the file, confirmed it existed, and prepared to send it—without ever checking the file version. It was about to send the old v1.3, while the latest version was v2.0.

> **"Asked AI to do strategic analysis, it suddenly started modifying files"**
>
> During a strategic discussion, the agent was not asked to operate any files, yet autonomously switched from an analysis role to an execution role, proactively offering to use tools to convert document formats—it forgot that the current task was "think" not "do."

> **"Asked AI to design a protocol, it assumed a premise that didn't exist"**
>
> When designing an email protocol, the agent assumed a third-party feature was available, but never verified whether that feature could actually run in the target environment. The deviation nearly got written into the system architecture.

> **"Asked AI to design annotation rules, next time it forgot to use them itself"**
>
> The agent established a rule of "annotate confidence level on all outputs" and declared it active. But when writing an email shortly after, it completely failed to apply the rule it had just set—rule existed, execution broken.

---

## How We Analyze

Three-slot methodology: check premises → parse instruction → find the fix path.

You don't need to understand the theory—you describe the phenomenon, we do the classification.

---

## Public Registry

All submitted ITEC events are publicly archived after review:

[**Browse All Events →**](https://github.com/co-cognition-lab/cognition-loop/issues)

---

## FAQ

**"What if the LLM doesn't output the structured record correctly?"**

Re-paste the Memo Recorder instruction. If it still fails, fill in the same fields manually—we accept those too.

**"I'm not sure if this is ITEC, can I still submit?"**

Submissions are encouraged! We'll help you determine whether it qualifies.

**"I regret my submission / want to modify it, what should I do?"**

Leave a comment on the corresponding Issue explaining the situation, or email us. We'll handle it within 72 hours.

**"How long after submission will I receive the analysis results?"**

Initial review (determining whether it's an ITEC event): within 1 business day. Complete three-slot analysis: within 5 business days.

**"Can I have the LLM submit directly for me?"**

Technically possible (if you have MCP configured or function calling capability), but please note:
- Always complete redaction review before authorizing submission
- Giving your GitHub Token to a third-party LLM provider carries security risks
- We recommend manual copy-paste—safest and simplest

**"What if I don't have a GitHub account?"**

At this stage we only support GitHub Issues submissions. If you need an alternative method, please let us know via ljfli123@126.com.
