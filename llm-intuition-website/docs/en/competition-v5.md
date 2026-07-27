---
prev: false
---

# LLM Competition Landscape · Belief Tracker v5

> From "whose model is strongest" to "who controls which link in the value chain."

**v5 upgrade**: Introduces a four-layer value chain model and deep China Agent ecosystem analysis. v4 is the initial prior (2026-05-19). v5 is the first formal posterior (2026-06-09). v5 baseline reassessment (2026-06-11, 42-signal full scan). 2026-06-26 scan (10 signals incl. Fable 5 nationality lock). **2026-07-27 update** (Kimi Weekly #30, key signals: K3 weights launch + Opus 5 half-price + GLM-5.2 HF forensics).

> 📖 **Reading guide**: 3 min → "Four-Layer Value Chain" + "Probability Changes" | 10 min → 8 Scenario Cards | Full report → [v5 complete report](https://github.com/co-cognition-lab/llm-intuition/blob/main/research-materials/competition/llm_competition_v5_final.md) (~620 lines, with full evidence chains and source tracing)

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
Layer 4: End-Product / Entry Layer — Agent products users directly interact with
   ↕  Doubao (TikTok 230M MAU), Yuanbao (WeChat 114M MAU), Tongyi Qianwen, Wenxin Yiyan
Layer 3: Platform / Tooling Layer — Infrastructure for Agent development, orchestration, distribution
   ↕  Coze (ByteDance closed-loop), Dify (OSS 20K+ Stars), MaxKB (1M+ installs)
Layer 2: Model / Infrastructure Layer — LLM foundations + API services
   ↕  Kimi K2.6, GLM-5.1, DeepSeek V4-Pro, Qwen3.7-Max
Layer 1: Hardware / Compute Layer — Physical substrate for training and inference
     NVIDIA (restricted) vs Huawei Ascend (domestic substitution) vs edge chips
```

**Inter-layer relationships**: Lower layers support upper layers; upper layers depend on lower layers. Inter-layer = supply relationship, not competition. Intra-layer = competition.

**Each layer analyzed along C-side (consumer) and B-side (enterprise) axes**.

---

## II. Key Findings by Layer

### Compute Layer

GLM-5.1 completed training on 100,000 Huawei Ascend 910B chips—the first flagship model to achieve "zero NVIDIA." (L4 · Convergent)

However, inference-side CUDA ecosystem migration costs far exceed training-side. Compute decoupling is now irreversible at the training layer; a buffer remains at the inference layer.

### Model Layer (China)

Three open-source leaders (Kimi K3 / GLM-5.2 / DeepSeek V4) have narrowed the coding and math gap to foreign frontier from "generational" to "percentage points." K3 full weights launch today (7/27) on Hugging Face (~594GB MXFP4), DeepSeek V4 MIT open-weight release on 7/20, Qwen3.8-Max (2.4T params) API preview—three near-frontier models in 11 days. (L4 · Convergent)

DeepSeek V4 API output price under $1/M; Liang Wenfeng internal remarks confirm "all-in AGI, pause Series B." Opus 5 debuts at half-price ($5/$25) atop Artificial Analysis—frontier closed-source vendors are now proactively anchoring price in the open-weight substitutability zone. API commoditization has escalated from "China strategy" to "global industry equilibrium." (L4 · Convergent)

GLM-5.2 selected by Hugging Face for real-world intrusion forensics—for the first time, a self-hosted open-weight model has validated "institutional backfill value in guardrail-refusal scenarios" on a major platform, when closed-source frontier models' safety guardrails refuse to analyze attack payloads. (L3 · Single)

Social intuition (reading people / judging trustworthiness) remains "structurally unattainable" for all models—this is not a performance gap, but an embodiment gap. Model-layer power has a hard upward-conduction ceiling. (L1 · Framework)

### Platform / Tooling Layer

MCP (97M monthly downloads, 10K+ servers) has won the model-tooling standardization race. "100+ plugins" is no longer a differentiation moat. (L4 · Convergent)

Coze 3.0's "develop-as-distribute" closed-loop validates the "platform-layer entry integration" trend. Pure tooling platforms face disintermediation risk from super-apps. (L3 · Single)

### Terminal / Entry Layer

C-side has crystallized into a Doubao/Yuanbao duopoly (both exceeding 100M MAU). Agent distribution efficiency by entry type: WeChat (social trust transfer) > TikTok (content immersion) > Taobao (transaction context) > Baidu Search (retrieval→delegation leap). (L3→L2)

**Degradation risk correlates positively with entry strength**: if 1.2 billion WeChat users' social judgment becomes Agent-mediated, the scale of degradation would be historically unprecedented. (L1 · Framework—this is the current core theoretical assumption, awaiting empirical validation)

Phone manufacturers hold the "zeroth-layer entry" (system-level voice assistant), but model deficiency is the hard constraint. Partnership with Kimi/DeepSeek could disrupt the duopoly—but the barrier is commercial, not technical. (L1 · Framework)

---

## III. Eight-Scenario Belief Tracker

> These 8 scenarios originate from the [v4 analytical framework](https://co-cognition.org/en/competition) (2026-05-19), our initial prior. v5 reinterprets each scenario as "stress distribution across the four-layer value chain" and updates posterior probabilities based on new observations.

### Scenario ① Stable Coexistence (35% → 26% → **22%**)

Gradual competition within existing frameworks. This week's signal density is extreme—open-weight releases (K3/DS V4/Qwen3.8-Max in 11 days), ExploitGym security incident, Opus 5 half-price—structural pressures continue compressing the "business as usual" narrative.

### Scenario ② Intelligence Democratization (30% → 32% → **37%**)

Open-source models catch up. **Major upgrade this week**: K3 full weights launching today (7/27) on Hugging Face + DeepSeek V4 MIT official release + GLM-5.2 selected by Hugging Face for real-world intrusion forensics—open-weight strategic value validated three ways in a single week. Nature covers K3 as "Sputnik moment" for scientific community. Chinese models account for 58% of US enterprise AI token usage on OpenRouter (Bloomberg). The prior downgrade's counterforce (open capability ≠ decentralized market) remains valid, but the weight of physical evidence and narrative intensity for open-weight has overtaken it.

**Value chain stress**: Model ████████░░ → Platform ████░░░░░░ → Terminal ████░░░░░░

### Scenario ③ Agent Symbiosis (20% → 16% → **16%**)

Agents embed in workflows, humans retain judgment. MCP 2026-07-28 spec finalized tomorrow—stateless core redesign, three legacy features entering deprecation. Claude Security Plugin public beta (multi-agent vulnerability scanning). Symbiosis infrastructure continues advancing, but near-term deployment data (Uber/Monday.com/Patreon AI-attributed layoffs) still points to replacement, not symbiosis. Net effect unchanged.

**Value chain stress**: Terminal ████████░░ (user behavior shift) → Platform ██████░░░░ (governance tool demand)

### Scenario ③B Degradation Exposure (18% → 20% → **21%**)

Agent disaster exposes eroded human judgment → regulatory hard brake. Degradation signals continue accumulating: Uber customer service 10% layoff (7/22, company's first publicly AI-attributed cut) + Monday.com 20% (7/22) + Patreon 20% (7/23). AI-attributed layoffs expanding from tech into customer service and creator economy. Pew data (49% usage / 29% trust) shows the outsourcing-trust gap widening.

**Counterforces unchanged**: ACS + EC-Council + ServiceNow governance infrastructure is in place; but governance intercepts Agent behavior, not human cognitive outsourcing. The underlying degradation dynamics are unaffected. (L1)

**Value chain stress**: Terminal ██████░░░░ (user confidence erosion) → Model ████░░░░░░ (safety pressure ↑)

### Scenario ④ Intelligence Leap (10% → 8% → **8%**)

Conceptual intuition or autonomous scientific discovery emerges. No new signals. Probability maintained.

**Value chain stress**: Model ██████████ (revolution ground zero) → Terminal ██████░░░░ (application diffusion)

### Scenario ⑤ Agent Oligopoly (8% → 26% → **23%**)

2-3 firms control the market horizontally. Downgraded 3pp this week. Open-weight triple release in a single week (K3/DS V4/Qwen3.8-Max) provides credible external alternatives, constituting anti-oligopoly pressure. K3 halting new subscriptions (negative signal) and Google/Apple ecosystem vertical integration (positive signal) coexist. The five-dimensional oligopoly forces (capital/talent/infrastructure/national alignment) remain powerful, but open-weight is now offering institutional counterbalance.

**Value chain stress**: Terminal ██████████ (entry monopoly) → Model ████░░░░░░ (locked-in suppliers)

### Scenario ⑥ Geotech Decoupling (5% → 18% → **20%**)

Chinese AI ecosystem isolates from the West. The `ExploitGym` GPT-5.6 Sol escape incident (from 7/22) has pushed "adversarial asymmetry" to center stage in US-China AI safety dialogue. OpenRouter 58% of US enterprise token flow going to Chinese models (Bloomberg 7/24)—actual usage integration runs counter to decoupling narrative. The 8/1 Biden executive order approaches, but its "security-hosting bottleneck" strategy directly conflicts with Hugging Face's open-weight forensic practice.

**Value chain stress**: Hardware ██████████ (decoupling origin) → Model ██████░░░░ → Terminal ████░░░░░░

### Scenario ⑦ Price War (10% → 22% → **27%**)

LLM API price war erodes all players' margins. **Major upgrade this week**: Opus 5 debuts at half-price ($5/$25) atop Artificial Analysis—frontier closed-source vendors are now proactively anchoring price in the open-weight substitutability zone. The price war has escalated from "China strategy" to "global industry equilibrium." Chinese models account for 58% of US token usage on OpenRouter—Chinese prices are now leading global market price discovery. Liang Wenfeng internal remarks confirm DeepSeek "all-in AGI, pause Series B"—the burn-for-scale business model receives internal endorsement.

**Drivers**: DeepSeek pricing anchor + US-China model performance convergence + server capacity acceleration (L4)

**Value chain stress**: Model ██████████ (margin evaporation) → Compute ████████░░ (inference demand ↑) → Platform ██████░░░░ (API cost ↓)

### Scenario ⑧ Unknown Unknowns (2% → 2% → **2%**)

Mutations entirely uncaptured by the current framework. No signals. Probability maintained.

---

## IV. Probability Summary Table

| Scenario | P0 v4 → v5 | 6/26 | 7/27 | Change (7/27 vs 6/26) | Core Driver |
|------|:--:|:--:|:--:|:--:|------|
| ① Stable Coexistence | 35→**26%** | 26% | **22%** | -4pp | Extreme signal density compressing incremental space |
| ② Intelligence Democratization | 30→**32%** | 32% | **37%** | **+5pp** | Open-weight triple validation—narrative intensity peak |
| ③ Agent Symbiosis | 20→**16%** | 16% | **16%** | — | MCP spec final + security plugin; replacement still dominant |
| ③B Degradation Exposure | 18→**20%** | 20% | **21%** | +1pp | Uber/Monday/Patreon AI-attributed layoffs stacking |
| ④ Intelligence Leap | 10→**8%** | 8% | **8%** | — | No new paradigm signals |
| ⑤ Agent Oligopoly | 8→**26%** | 26% | **23%** | -3pp | Open-weight triple release as anti-oligopoly pressure |
| ⑥ Geotech Decoupling | 5→**18%** | 18% | **20%** | +2pp | ExploitGym narrative escalation + 8/1 EO approaching |
| ⑦ Price War | 10→**22%** | 22% | **27%** | **+5pp** | Opus 5 half-price: price war → global industry equilibrium |
| ⑧ Unknown Unknowns | 2→**2%** | 2% | **2%** | — | — |

---

## V. Three-Thread Race (Model Capability vs Tool Standardization vs Degradation Exposure)

```
Model capability (perceptual convergence complete) ████████████░░  90%
     ↓ price signals → API commoditization
Tool standardization (MCP + A2A protocol spec) ████████░░░░  65%
     ↓ unified interface → Agent deployment volume surge
Degradation exposure (Uber/Monday/Patreon layoffs) ████░░░░░░░░  35%
     ↓ social visibility ↑ → regulatory window opens
```

**Interpretation**: Perceptual convergence is essentially complete (L4). Degradation exposure is accelerating but from a low base (Pew data + layoff coverage provide social visibility). MCP spec finalization tomorrow is the most important near-term protocol event. The relative speed of the three threads determines the dominant scenario over 12 months: if degradation exposure overtakes tool standardization, Scenario ③B will surpass ③.

---

## VI. Signal Methodology & This Week's Event Roster

### Signal Selection Criteria

Signals included in this week's update must meet the AND of at least two of: ① event verified by at least one independent source (preferring Reuters/Bloomberg/Nature/arXiv primary) ② if single-source, requires official announcement/preprint/structured data ③ has direct causal or temporal relation to existing scenarios, not an isolated industry news item.

**Exclusion rules**: startup funding rounds (except K3 halting new subscriptions as negative signal), non-LLM-specific policy, unverified social media leaks, macro data not directly related to tech deployment.

### This Week's Event Roster

Data coverage: OpenRouter token share (Bloomberg), Artificial Analysis benchmarks (weekly) + Pew trust survey (7/25), Layoffs.fyi AI-attributed subset (Uber/Monday/Patreon), GitHub repository data (MCP/K3/HF forensics). Time window: 2026-07-20 to 2026-07-26.

| Date | Event | Scenario Impact | Signal Tier |
|------|------|:--:|:--:|
| 7/20 | DeepSeek V4 MIT open-weight official release | ② Democratization | Convergent L4 |
| 7/21 | Nature covers K3 as "Sputnik moment" for science | ② Democratization | Convergent L4 |
| 7/21 | Bloomberg: OpenRouter 58% → Chinese models | ⑥ Decoupling + ② Democr. | Convergent L4 |
| 7/22 | Opus 5 debuts half-price atop Artificial Analysis | ⑦ Price War | Convergent L4 |
| 7/22 | GLM-5.2 selected by Hugging Face for real intrusion forensics | ② Democratization | Single L3 |
| 7/22 | Uber CS 10% layoff—first publicly AI-attributed | ③B Degradation | Convergent L4 |
| 7/22 | Monday.com 20% layoff (AI-attributed) | ③B Degradation | Convergent L4 |
| 7/23 | Patreon 20% layoff (AI-attributed) | ③B Degradation | Convergent L4 |
| 7/24 | ExploitGym: GPT-5.6 Sol escape incident | ⑥ Decoupling | Single L3 |
| 7/25 | Pew: 49% usage / 29% trust—outsourcing-trust gap widening | ③B Degradation | Convergent L4 |
| 7/25 | Qwen3.8-Max API preview (2.4T params) | ② Democratization | Single L3 |
| 7/26 | K3 halts new subscriptions (negative signal) | ⑤ Oligopoly | Single L3 |
| 7/27 | Kimi K3 full weights launch on Hugging Face (~594GB) | ② Democratization | Convergent L4 |
| 7/27 | Liang Wenfeng internal: DeepSeek "all-in AGI" | ⑦ Price War | Single L3 |
| 7/28 | MCP 2026-07-28 spec finalization (scheduled tomorrow) | ③ Symbiosis | Convergent L4 |

---

## 🔄 Belief Update Record

v5 prior (2026-06-09): Across the four-layer value chain, model-layer perceptual convergence exceeding expectations, entry-layer oligopoly accelerating, price war with DeepSeek as unilateral pressure
 ↓
2026-06-26 new evidence: Fable 5 nationality lock (decoupling institutionalized at API layer) + DeepSeek $70B+ sovereign funding + GLM-5.2 MIT surpasses GPT-5.5 + SpaceX $60B Cursor acquisition
 ↓
v5 posterior 6/26: ⑥ Decoupling from engineering→institutional layer (+8pp), ⑤ Oligopoly accelerating across capital/talent/infrastructure/national alignment (+6pp)
 ↓
2026-07-27 new evidence: K3 weights launch + DeepSeek V4 MIT official release + GLM-5.2 selected for Hugging Face real intrusion forensics (triple-line validation of open-weight strategic value in a single week) + Opus 5 half-price debut (frontier closed-source vendors proactively anchoring price in open-weight substitutability zone) + ExploitGym GPT-5.6 Sol escape incident catalyzing "defender asymmetry" entering policy core debate
 ↓
v5 posterior 7/27: ② Democratization +5pp (open-weight narrative intensity peak), ⑦ Price War +5pp (from China strategy → global industry equilibrium), ⑤ Oligopoly -3pp (open-weight providing credible external alternatives), ⑥ Decoupling +2pp (narrative escalation but actual usage integration accelerating)