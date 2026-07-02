# Human+LLM Co-Cognition Methodology: Applicability Guide

> Version: v2.4 | Date: 2026-06-26

---

## Evolution Path

This methodology evolved from v1.0 (2026-05-19) to v2.4 (2026-06-26) through 6 subproject validations and a GLM5.2 independent external audit. Every version upgrade was evidence-driven — not "we thought we should add this," but "a project hit a wall, so we built a guardrail."

Core mechanisms in the current version: Tri-Source Conflict Resolution Protocol, MERA Six Questions (MERA = Methodology Execution Retrospective & Adaptation), Eight Failure Modes (F1–F8), Convergence Signals (S1–S5), Project Type Classification (A/B), Multi-Agent Cross-Review (L1/L2/L3), Weighted Cognitive Discipline Checklist (Fatal level: Q2/Q6/Q7).

→ [v2.4 Full Manual (with changelog)](/en/methodology/full-v2.4)

---

## What This Is

**An operations manual.** It does not prescribe what you should think — it only describes what practices repeatedly prove effective, and what practices repeatedly hit walls, when a human and multiple AIs explore together into "we don't know what we'll find."

---

## Three Stories

### P3 Crisis Cognition — "I Know the Goal, but Not the Path"

He needed to extract cross-domain actionable "cognitive resilience design principles" from fields that do not talk to one another — military command, disaster response, emergency medicine, HRO. He first performed internal critique — attacking his own assumption that "these 8 fields share a common underlying structure" — then simultaneously sent it to two external Agents for independent audit. Both audits pointed out a systematic bias he had not discovered himself: **he was too prone to finding differences rather than shared structures.** This was not "helping him think of solutions" — it was "telling him he was looking at it wrong."

```
Prior: "8 fields share a common underlying structure"
  ↓ Phase D internal critique: HRO and disaster studies judged as "independent clusters"
Posterior v1: "They are each different, not a unified meta-domain"
  ↓ Hunyuan + Kimi independent audit: "You are too prone to finding differences"
Posterior v2: "They share degenerative recursive structures; Phase D's judgment was a bias, not a discovery"
```

→ When the goal is clear but the path is unknown, and you need to extract patterns from cross-domain cases: A/B adversarial briefs and independent external audits fit you best.

> _v2.0 contribution: The internal–external judgment conflict in P3 directly gave birth to §1.1 Tri-Source Conflict Resolution Protocol — "when reviewers disagree with you, don't vote; instead, understand why the prisms refract differently."_

---

### PN Wealth Inheritance — "I Am a Domain Expert, but Expert Intuition May Itself Be a Blind Spot"

He wanted to design an "AI-era Chinese family wealth self-check framework." In the first round he used a physics metaphor — "IEHL half-life" to measure asset purchasing-power decay. Three rounds of external Agent review, seven rounds of version iteration, two case studies —

**Upside**: 70% of substantive revisions from v0.1→v0.8.3 came from external Agent feedback. The sharpest corrections (MCA from "asset" → "multiplier"; IEHL from precise years → ⚡ lightning symbol) all came from external attacks.

**Downside**: It took seven rounds to discover that **the "atomic decay" metaphor may simply be unsuited to Chinese family wealth concepts** — Chinese families are closer to "rivers" or "containers." Step 2 did not mandate a "underlying metaphor fitness test," and the methodology did not stop this anchoring.

```
Prior: "IEHL half-life is the most appropriate metaphor"
  ↓ External Agent review: MCA should be changed to "multiplier"
Posterior v1: "Direction is right but needs de-pseudoprecision — replace years with ⚡"
  ↓ Round 7 fission: Human framework guardian: "Abandon fission, stay honest"
Posterior v2: "The metaphor itself may be unsuitable — atomic decay vs. rivers/containers"
```

→ When you are a domain expert, human hybrid role labels and Tri-Source Cross are mandatory. After investing many rounds in a metaphor, stop and do a "metaphor fitness test."

> _v2.0 contribution: PN's metaphor-anchoring accident directly gave birth to F6 (anchoring trap) and §5.1 human hybrid role mode — domain expert and framework guardian must speak in the same file with distinct labels._

---

### P2 Co-Cognition Panorama — "I Don't Know What I'll Find"

He wanted to scan for positions in human knowledge where any two disciplines might generate new co-cognition insights — no preset framework. Three search strategies ran in parallel: taxonomic scan + gene radiation + independent free scan (forcing at least 2 candidate domains from uncovered disciplines). Framework v0.4 absorbed 27 external suggestions; the anti-anchoring quota gave birth to the P3 subproject.

```
Pending evidence: P2 has not yet converged; MERA not executed.
```

→ When the goal is fuzzy and "you don't know what you'll find": Step 0 topic positioning + Tri-Source Cross + anti-anchoring quota.

> _v2.0/v2.1 contribution: P2's open exploration drove the Tri-Source Cross search strategy (Sources A/B/C), Step 0 topic positioning, and §2.5 convergence judgment — "how do I know exploration is enough rather than I'm just tired?"_

---

## Decision Table

| If your project… | Most like | Start with these mechanisms | Biggest pitfall |
|------|:---:|------|------|
| Fuzzy goal, needs many external perspectives | P2 | Step 0, Tri-Source Cross, anti-anchoring quota, Convergence Signals S1–S5 | Framework symmetry may be designed rather than discovered |
| Clear goal but unknown path | P3 | A/B adversarial briefs, independent external audit, Tri-Source Conflict Resolution Protocol | Internal critique may have systematic biases |
| You are a domain expert | PN | Tri-Source Cross, human hybrid mode (labels `[Domain Expert]`/`[Framework Guardian]`), MERA | Kidnapped by the first idea (F6 anchoring trap) |
| Theoretical framework type ("what/why") | Type A | Evidence-level annotation (L1–L5), falsification condition pre-write | Logical coherence masking insufficient evidence |
| Empirical deduction type ("what will happen/who wins") | Type B | Falsification condition pre-write + signal monitoring, evidence-level annotation (supplement) | Core assumptions get corrected by reality too late to change |
| Sufficient data, needs execution plan | — | **Not recommended** | Time cost > value |

---

## v2.4 Key Mechanisms at a Glance

> Below are the core mechanisms added during the v1.0 → v2.4 evolution. Full definitions and operational details for each mechanism are in the [v2.4 Full Manual](/en/methodology/full-v2.4).

| Mechanism | One-sentence description | Defends against |
|------|------|:--:|
| **Tri-Source Conflict Resolution Protocol** | Full consensus → trigger shared-bias alert; 2:1 → both sides explain their reasoning chains; full disagreement → suspect the problem definition itself | F2 blind-spot omission |
| **MERA Six Questions** | Metacognitive retrospective at the end of each subproject: what helped / what didn't / what should change / what was discovered / did we stop at the right time / is the belief-update path traceable | Methodology self-evolution |
| **Eight Failure Modes F1–F8** | Framework drift / blind-spot omission / over-structuring / cognitive shortcutting / feedback loop / anchoring trap / external citation unverified / cross-session information isolation | F1–F8 |
| **Convergence Signals S1–S5** | Feedback degradation / self-check convergence / exhaustion sense / framework closure / cross-saturation — ≥3 triggers convergence check. Distinguish "natural convergence" from "cognitive shortcutting F4" | F4 cognitive shortcutting |
| **Project Type Classification A/B** | Type A (theoretical framework) → evidence-level annotation L1–L5; Type B (empirical deduction) → falsification condition pre-write + signal monitoring | F2 blind-spot omission |
| **Multi-Agent Cross-Review L1/L2/L3** | L1 same-model cross-review → L2 heterogeneous-model cross-review → L3 three-party collision. L3 mandatory for key deliverables | F7/F8 |
| **Weighted Cognitive Discipline Checklist** | Fatal Q2/Q6/Q7 (pause if failed) + Serious Q1/Q3 + Advisory Q4/Q5. v2.4 added Q7: theory–object homogeneity check | F1–F6 |
| **LLM Cognitive Bias Mapping B1–B5** | Completeness hallucination / fluency deception / consensus bias / anchoring compliance / counterfactual weakening — each bias bound to specific defenses | F2/F4/F6 |
| **Shared-Facts Registry** | Cross-project `SHARED_FACTS.md`; all external citation verification status in three states: ✅ verified / ⚠️ pending / ❌ falsified | F7/F8 |
| **Cognitive Load Management** | High/medium/low three-level load tagging + fatigue signal detection — single high-load session ≤45 min, no consecutive high-load phases | F4 cognitive shortcutting |

---

## When Not to Use

**Purely quantitative / data-driven projects** (e.g., factor models, network topology) → standard experimental design + robustness tests. **Single-person, single-domain, short-deadline execution projects** → efficient information gathering is more appropriate than Step 0 topic positioning.

---

## Self-Reference

The guide you are reading was itself written with this methodology — and validated by a GLM5.2 independent external audit (v2.4). If the methodology works on itself, that is the minimum bar of honest self-check.

---

## Minimal Starter Pack

1. **Tri-Source Cross**: Ask the same question to two different LLMs — look for "what they both failed to see." Trigger shared-bias alert when fully consistent.
2. **A/B Adversarial Brief**: Rewrite the task description into challenge format and send it again.
3. **Fatal Self-Check**: Q2 (Did I over-trust in an unfamiliar domain?) + Q6 (Did the LLM package my judgment as its output?) + **Q7 (Do the theoretical tool and the object I analyze share a homologous bias from the same cognitive architecture?)** — about 3 minutes.
4. **Convergence Signal**: When two consecutive rounds of external feedback downgrade to wording suggestions → that is enough. If you cannot clearly state "why we stopped," suspect F4 cognitive shortcutting first.

**Stopping Rule**: Two consecutive rounds without generating new insights = enough.

---

## Further Reading

→ [Rule-Pool Governance](/en/methodology/rule-pool-governance/): How the Lab's 11 categories of documented rules evolve from static documents into a traceable rule-evolution system (v2.2, based on JERP thinking)

→ [v2.4 Full Manual](/en/methodology/full-v2.4): All eleven sections, changelog, MERA archive, and evolution rules