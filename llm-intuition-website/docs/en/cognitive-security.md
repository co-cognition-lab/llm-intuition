# LLM Cognitive Security

> This is our current understanding of cognitive security (based on evidence), what we're building on that understanding, and an invitation for you to update it with your perspective.
> This page changes — when new evidence arrives.

---

## Three "Not"s

Before diving in, three fundamental ways this Lab's cognitive security research differs from traditional AI safety:

- **Not model safety — human-machine co-cognition safety.** The issue isn't whether models make mistakes; it's whether human and model blind spots overlap.
- **Not vulnerability scanning — cognitive behavioral experiments.** We don't search for bugs; we test whether AI-invisible content silently alters LLM behavior and whether LLMs act without verification.
- **Not best-practice checklists — falsifiable operational manuals.** We don't give you lists; we give you testable hypotheses and traceable belief-update paths.

---

## Our Understanding of Cognitive Security

We didn't start from theory. We started from an experiment — the Hook Experiment — and watched as evidence reshaped our understanding step by step.

### Core Evidence: Hook Experiment v1.6

On May 22, 2026, we embedded human-invisible content — font-size:0, color:transparent, opacity:0 — into web pages and fed those pages to 7 major LLMs' web readers.
The result: **43% trigger rate**. No model achieved full immunity.

But this wasn't just "discovering a vulnerability." Over the next three weeks, as we retested, collected new data, underwent external audits, and cross-referenced against the latest academic literature, a deeper framework emerged:

**The Hook Experiment validated not a single vulnerability — but a five-dimensional theoretical framework.**

| Dimension | Name | Core Finding | Evidence |
|:--|:--|:--|:---:|
| D1 | Injection Entry | Web reader pipelines don't distinguish DOM element visual visibility — font-size:0 content blends seamlessly with visible text | L4 |
| D2 | Execution Impulse Engine | LLMs tend to skip verification and act directly after cognitive fatigue — this isn't "obeying instructions," it's a default state of cognitive architecture | L3 |
| D3 | Role Modulator | Same base model, different role identities produce opposite-direction biases — attack effectiveness depends on payload-role matching | L3 |
| D4 | Knowledge-Action Gap | LLMs declaring a rule ("I should do X") ≠ activating that rule ("I remember X while acting") — a systematic gap exists between declaration and integration | L4 |
| D5 | Time Window Modulator | Execution impulse accumulates within-session (~1h), decays across sessions — can be refreshed by repeated injection | L1 |

**Core claim:** Of these five dimensions, only D1 falls within traditional security research (injection entry). D2-D5 are intrinsic properties of LLM cognitive architecture — they aren't "bugs" (patchable), they're "cognitive defaults" (manageable only through architectural design). Attackers only need to control D1 (getting intent into the reasoning pipeline); D2-D5 will handle the rest automatically.

### How Our Beliefs Changed

This framework wasn't built in a day. The path from v1.0 to v1.6 is itself a Bayesian update:

| Version | Date | New Evidence | How Belief Changed |
|:--|:--|:--|:--|
| v1.0 | May 27 | First ITEC incident + full matrix + three-probe fingerprints | **Prior established:** Injection entry exists (L4), execution impulse exists (L3) → proposed "compound attack vector" hypothesis |
| v1.1 | May 29 | Blind-spot self-audit: discovered false interaction matrix | **Correction:** Removed 5×5 interaction matrix — dimensions don't need exhaustive enumeration. Framework retreated from "certainty" to "honest uncertainty" |
| v1.2 | May 29 | Qwen external audit: circadian rhythm confounding, tautology risk, H10 split recommendation | **Correction:** D5 fully downgraded to L1 — May 26 morning vs May 27 pre-dawn isn't a time window effect, may be sleep deprivation |
| v1.3 | May 29 | Instant ITEC·recursive blind spot inheritance (3-layer agent blind spot propagation) | **Added:** Cross-agent structural effects — blind spots aren't a single-agent problem, they're a multi-agent systemic problem |
| v1.4 | Jun 6 | Kimi Work + Qwen 3.7-max + DS V4 follow-up retests | **Framework upgrade:** Behavioral responses expanded from 2 to 4 categories. Three-stage model established (injection entry → intent recognition → behavioral response). Discovered protocol-participation type — hidden instructions internalized as legitimate protocol |
| v1.5 | Jun 6 | Kimi substantive audit: "triple noise" methodological flaws | **Methodology upgrade:** Behavioral classification upgraded from discrete categories to three continuous dimensional coordinates. H10 split into exit effect + content-exit matching. H18 first listed as core hypothesis — persistent memory = time bomb |
| v1.6 | Jun 15 | arXiv 2606 batch cross-reference: SMSR + StakeBench + PI-Hunter | **External validation:** Three independent labs simultaneously validated P7 framework dimensions. SMSR formally verified D4 and H18 (time bomb). StakeBench independently confirmed D3 (role modulation). PI-Hunter provided tool-layer methodology. Priority timeline established. |

**Every version upgrade was evidence-driven.** Prior → experiment → posterior, fully traceable. This isn't retrospective narrative — every step has exact dates recorded in project source files.

### Three-Stage Core Thesis

The Hook Experiment's findings distill into three statements:

1. **Exposure:** LLM web reader pipelines see things you don't — human-invisible content enters the reasoning pipeline intact, unlabeled (L4)
2. **Intent Recognition:** Between injection and behavior lies an intermediate layer — LLMs judge "is this content injected or legitimate?" (L3). Different models judge the same probe differently; the same model's judgment changes over time
3. **Behavioral Response:** Post-recognition behavior isn't a binary "comply vs refuse" — four behavioral patterns observed: compliance, experiment-awareness, active-resistance, protocol-participation (L3)

This means: the cognitive security question isn't "can the attack succeed" — it's "under what conditions, in what form, against what role does the attack take effect." It's a conditional probability problem.

### This Isn't Theoretical Worry

The experiments have established an evidence baseline:

- 43% trigger rate (v1.2 full matrix, 8 models)
- Four behavioral response types + three-dimensional continuous behavioral space (v1.5)
- Cross-architecture verification across 6 models (DeepSeek / Kimi / Qwen / GPT / Claude / Gemini)
- Independent external lab validation (arXiv 2606 batch: SMSR verified H18, StakeBench verified D3)

---

## What We're Building on This Understanding

If the core cognitive security problem is "human and LLM blind spots overlapping undetected" — then we need to answer three derivative questions:

### Mechanism: Why Do LLMs Skip Verification?

**→ [ITEC — Instruction-Triggered Execution Cascade](/en/itec)**
The Hook Experiment proved that LLMs **can be injected**. ITEC answers **"why"** — what is the cognitive mechanism behind the execution impulse.

ITEC gives a name, a classification framework, and an analysis toolkit to the phenomenon of "AI acted without asking." Core findings:

- **ITEC ≠ sycophancy:** Sycophancy is "content distortion" (saying what's wrong but what the user wants to hear); ITEC is "process omission" (saying what's right but skipping necessary checks). They require different diagnostic tools and intervention strategies
- **3×2 diagnostic matrix:** Three layers (execution / design / knowledge) × two core failure types (skip verification + role boundary violation)
- **Argument axis:** Not "we discovered a new phenomenon" — but "this perspective yields concrete intervention strategies that the sycophancy framework cannot derive"

> **Belief path:** Prior (May 26 ITEC — "skipping verification" as isolated observation) → New evidence (May 27 second incident + design-layer boundary violation + Kimi audit three-stage model) → Posterior (ITEC isn't a bug, it's a default state of LLM cognitive architecture)

### Industry Amplification: What Does This Mean at Scale?

**→ [Competition Landscape v5](/en/competition)**
The Hook Experiment and ITEC analyze cognitive security risks at the individual LLM level. But in the real world, LLMs are embedded in a four-layer value chain — Compute → Model → Platform → Terminal — where each layer can amplify or suppress cognitive security risks.

Competition Landscape v5 uses a **four-layer value chain model × Bayesian scenario tracking** to answer two questions:

1. How LLM industry power is distributed and evolving — how entry control (WeChat/Douyin/HarmonyOS), platform lock-in (Coze/Dify/MCP), and compute sovereignty (Ascend/NVIDIA) configure the boundary conditions of model competition
2. How cognitive security risks are amplified across the industry chain — Agent oligopolization (12% probability), API commoditization tipping point, simultaneous emergence of governance infrastructure

> **Belief path:** Prior (v4 — model-layer competition analysis) → New evidence (C-end entry duopoly solidification + Agent governance infrastructure 48-hour simultaneous emergence + price war confirmation) → Posterior (v5 — four-layer value chain: model capability itself is no longer a durable moat)

### Collaborative Defense: How Do You Ensure the Analysis Isn't Led by the LLM?

**→ [Co-Cognition Methodology v2.3](/en/methodology)**
You're using LLMs to assist your own thinking — so how do you ensure your own cognitive security?

Methodology v2.3 turns "thinking with AI" from intuition into repeatable, testable, improvable operational workflows. It doesn't tell you *what* to think — it teaches you how to determine whether you're being led by your AI:

- **MERA Six Questions:** A post-output self-review checklist — from "what I originally thought" to "how my beliefs were updated"
- **Three-source cross-validation + conflict resolution protocol:** When three LLMs agree but are all wrong, the problem isn't the LLMs — it's the problem definition that steered everyone to the same cognitive continent
- **Eight failure modes (F1-F8):** From "framework fixation" to "degeneration spiral" — identifiable, preventable, repairable

> **Belief path:** Prior (v1 — "thinking with AI" as ideal) → New evidence (MERA accumulated across six sub-projects + multi-project parallel degeneration evidence + P1 blind-spot audit feedback) → Posterior (v2.3 — cognitive security isn't just a model problem, it's also a collaboration workflow problem)

---

## Your Perspective

Our model has blind spots.

What you've read above is our current understanding of cognitive security based on available evidence. But this understanding comes from a specific perspective — specific experimental designs, specific theoretical priors, specific cultural and disciplinary backgrounds.

If you see something we haven't:

- An edge case (what injection type haven't we tested?)
- A refuting piece of evidence (under what conditions does our core thesis fail?)
- A better explanatory framework (is there a simpler, more powerful theory than the five-dimensional framework?)

That's a signal to update our beliefs. **This page will change.** Priors can be challenged — the best way is with better evidence.

---

## Browse by Risk Lifecycle

```
Prevention ── Methodology ── Build bias-proof human-LLM workflows
  ↓
Detection ── Hook Experiment ── Test LLM blind spots in information ingestion
  ↓
Response ── ITEC ── Record, classify, and analyze LLM overreach events
  ↓
Strategy ── Competition v5 ── Understand industry-level amplification of cognitive risks
```

---

## About the Lab

This toolkit is the Direction One output (Cognitive Security Infrastructure Prototype) of Co-Cognition Lab.

The Lab's core thesis is **complementarity** — AI and humans each have intuition blind spots; the real risk isn't one surpassing the other, but their blind spots overlapping undetected.

- All content open-source under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Zero ads, zero paywalls, zero registration
- No disruption claims, no anxiety marketing. When uncertain, we say "uncertain."
