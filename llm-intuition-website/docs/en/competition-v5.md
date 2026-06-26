---
prev: false
---

# LLM Competition Landscape · Belief Tracker v5

> From "whose model is strongest" to "who controls which link in the value chain."

**v5 upgrade**: Introduces a four-layer value chain model and deep China Agent ecosystem analysis. v4 is the initial prior (2026-05-19). v5 is the first formal posterior (2026-06-09). v5 baseline reassessment (2026-06-11) based on Kimi's 42-signal full scan to correct systematic underestimation.

> 📖 **Reading guide**: 3 min → "Four-Layer Value Chain" + "Probability Changes" | 10 min → 8 Scenario Cards | Full report → [v5 complete report](https://github.com/co-cognition-lab/llm-intuition/blob/main/competition/llm_competition_v5_final.md) (~620 lines, with full evidence chains and source tracing)

---

## Evidence Levels

We annotate all key judgments with evidence strength, so readers know what is data-backed and what remains speculative:

| L1 Framework | L2 Analogy | L3 Single Signal | L4 Convergent Pattern | L5 Causal Proof |
|:--|:--|:--|:--|:--|
| Pure reasoning | Cross-domain transfer | One verifiable event | Multiple independent signals | Counterfactual evidence |
| Most uncertain | | | | Extremely rare |

Most judgments sit at L3-L4. We label L1 judgments honestly—they are our framework's load-bearing pillars and the most likely to be revised by future evidence.

---

## I. Analytical Framework: The Four-Layer Value Chain

Models don't compete in isolation. Who controls the compute supply chain? Who locks in developer ecosystems? Who owns user entry points? These forces shape the boundary conditions of model competition.

```
Layer 4: Terminal / Entry — Agent products users interact with
   ↕  Doubao (2.3B MAU via TikTok), Yuanbao (114M MAU via WeChat)
Layer 3: Platform / Tools — Agent development & orchestration infrastructure
   ↕  Coze (ByteDance ecosystem), Dify (20K+ GitHub Stars), MaxKB (1M+ installs)
Layer 2: Model / Infrastructure — Foundation models & API services
   ↕  Kimi K2.6, GLM-5.1, DeepSeek V4-Pro, Qwen3.7-Max
Layer 1: Hardware / Compute — Physical substrate for training & inference
     NVIDIA (restricted) vs Huawei Ascend (domestic alternative) vs edge chips
```

**Layer relations**: Lower layers enable upper layers. Competition happens *within* layers, not *between* them. Supply relationships bind layers together—stress in one layer propagates through the chain.

**Dual-axis within each layer**: Consumer (C-end) and Enterprise (B-end).

---

## II. Key Findings by Layer

### Compute Layer

GLM-5.1 was trained entirely on 100,000 Huawei Ascend 910B chips—the first flagship model with zero NVIDIA hardware. (L4·Convergent Pattern)

But the migration cost from CUDA for inference workloads far exceeds that for training. The compute decoupling is irreversible at the training layer, but a substantial buffer remains at the inference layer.

### Model Layer (China)

The three open-source leaders (Kimi K2.6 / GLM-5.1 / DeepSeek V4-Pro) have closed the gap with frontier closed-source models in coding and mathematics—from "generational" to "percentage-point-level." (L4·Convergent Pattern)

DeepSeek's ¥0.02/M token pricing has redefined the unit economics baseline for model APIs—the API commoditization inflection point has been triggered. (L4·Convergent Pattern)

Social intuition (reading people, judging trustworthiness) remains **structurally inaccessible** to all models—this is not a performance gap but an embodiment gap. Model-layer power has a hard ceiling in upward transmission to the terminal layer. (L1·Framework Deduction)

### Platform Layer

MCP (97M monthly downloads, 10K+ servers) has effectively won the model-tool standardization layer. A platform's "100+ plugins" is no longer a differentiator. (L4·Convergent Pattern)

Coze 3.0's "develop = distribute" closed loop validates the "platform-layer entry integration" trend. Pure tool platforms face the risk of being bypassed by super-app-embedded Agent capabilities. (L3·Single Signal)

### Terminal / Entry Layer

China's C-end has formed a Doubao-Yuanbao duopoly (both exceeding 100M MAU). Agent distribution efficiency by entry type: WeChat (social trust transfer) > TikTok (content immersion) > Taobao (transaction triggers) > Baidu Search (retrieval-to-delegation gap). (L3→L2)

**Degradation risk correlates positively with entry strength**: If 1.2 billion WeChat users outsource social judgment to Agents embedded in the ecosystem, the scale of constitutive degradation is unprecedented. (L1·Framework Deduction—our core theoretical hypothesis, awaiting empirical verification)

Smartphone manufacturers hold "zero-layer entry points" (system-level voice assistants), but model capability is the binding constraint. A collaboration with Kimi/DeepSeek could break the duopoly—but the obstacle is commercial (data ownership, brand revenue-sharing) rather than technical. (L1·Framework Deduction)

---

## III. 8-Scenario Belief Tracker

> These 8 scenarios originate from the [v4 analytical framework](https://co-cognition.org/en/competition) (2026-05-19)—our initial prior. v5 reinterprets each scenario as "stress distribution across the four-layer value chain," updating posterior probabilities based on new observations.

### Scenario ① Stable Coexistence (35%, unchanged) → **Baseline reassessment: 28%** (-7pp)

Gradual competition within existing frameworks. Full-signal scan reveals multi-directional structural pressures compressing the "business as usual" narrative space.

### Scenario ② Intelligence Democratization (30% → 32% → **Baseline reassessment: 30%**)

Open-source models catch up. A countervailing force: open-source diffusion is real (GLM-5.1 MIT, DeepSeek price cuts), but entry concentration (ChatGPT 900M weekly active, Doubao/Yuanbao duopoly) means open capability ≠ decentralized market.

**Value chain stress**: Model ████████░░ → Platform ████░░░░░░ → Terminal ████░░░░░░

### Scenario ③ Agent Symbiosis (20% → 22% → **Baseline reassessment: 18%**)

Agents embed in workflows, humans retain judgment. Recent deployment data (Q1 78,557 tech layoffs, 47.9% AI-attributed) points to replacement, not symbiosis. Infrastructure for symbiosis is being built, but near-term deployment tilts toward replacement.

### Scenario ③B Degradation Exposure (18% → 16% → **Baseline reassessment: 22%**)

Agent disaster exposes eroded human judgment → regulatory hard brake. Upgrade reflects degradation evidence upgrading from "narrative signals" to "quantified trend + CEO-level confirmation"—Q1 78,557 tech layoffs (47.9% AI-attributed, L4), three CEOs publicly confirming AI-driven structural layoffs.

### Scenario ④ Intelligence Leap (10%, unchanged) → **Baseline reassessment: 7%** (-3pp)

Training paradigm breakthrough. Two months elapsed since v4 with no non-Transformer flagship model. Probability naturally contracting.

### Scenario ⑤ Agent Oligopoly (8% → 12% → **Baseline reassessment: 20%**)

Super-apps control Agent distribution. Upgrade reflects global entry concentration far exceeding prior assessment—ChatGPT 900M WAU/50M paid + Doubao 315M MAU/Yuanbao embedded in WeChat + DeepSeek $7B funding concentration + Meta Llama 4 Behemoth still absent 1+ year after announcement. Oligopoly is not "possibly forming"—it has formed and is deepening.

### Scenario ⑥ Geotech Decoupling (5%, unchanged) → **Baseline reassessment: 10%** (+5pp)

China-US AI ecosystems split. Upgrade reflects decoupling faster at engineering layer than policy layer—DeepSeek V4 full-link abandoning NVIDIA for Huawei Ascend (L3, pending confirmation), Huawei 950PR mass production/1.6M chip target, GLM-5.1 zero-NVIDIA training confirmed.

### Scenario ⑦ Price War Margin Squeeze (10%→12%→15% → **Baseline reassessment: 20%**)

API pricing anchored near cost. Upgrade reflects price war evolving from DeepSeek's unilateral move to industry equilibrium—Tencent Cloud matching ¥0.02/M + DeepSeek $7B war chest = model API commoditization is now market structure, not temporary strategy.

### Scenario ⑧ Unknown Unknowns (2%, unchanged)

---

## IV. The Three-Thread Race

v4 introduced the "hollowing-out window" metaphor—Agent capability rising while human capability erodes. v5 adds a third thread:

| Thread | Direction | Status |
|------|:--:|------|
| Agent Capability | ↑ Rising | Perceptual nearing frontier (L4); super-apps bring Agents to 1B+ users |
| Human Capability | ↓ Declining | Silent (L1); stronger entry = deeper degradation—1.2B WeChat users outsourcing social judgment |
| Governance Capability | ↑ Rising | Latest start, fastest acceleration (L4). But the Fable 5 nationality lock (Jun 2026) reveals the actual direction is sovereign control (nationality verification, forced data retention) rather than user-protective symbiosis—governance is accelerating, but its direction is shifting |

**Core uncertainty**: The relative speed of the three threads. New uncertainty: the governance thread's directional shift—sovereign governance can prevent cross-border Agent incidents, but cannot prevent the silent accumulation of degradation itself.

---

## V. Relationship to v4

This page is the v5 Belief Tracker (2026-06-09). The [v4 competition page](https://co-cognition.org/en/competition) (2026-05-19) is our initial prior—it used model-layer competition as its analytical axis and produced the first probability estimates for all 8 scenarios.

Both versions coexist. v4 is not replaced by v5—readers can track how our judgments evolve over time. This is the point of the Bayesian update framework: not "correcting errors," but "updating beliefs based on new evidence."

**Main v4→v5 changes**: Expanded from single-layer (model) to four-layer value chain analysis; Scenarios ⑤ (oligopoly) and ⑦ (price war) significantly upgraded; introduced L1-L5 evidence levels for explicit judgment traceability.

> 📄 The complete report includes detailed methodology, full source tracing, cross-layer transmission analysis, and explicit blind-spot declarations. See [v5 complete report](https://github.com/co-cognition-lab/llm-intuition/blob/main/competition/llm_competition_v5_final.md).

---

*Analysis based on public data as of April–June 2026. Valid for approximately 4–6 weeks. All probabilities are directional judgments, not investment advice. Data gaps are explicitly marked.*
*CC BY 4.0 · Co-Cognition Lab · Humble, traceable, open source*
