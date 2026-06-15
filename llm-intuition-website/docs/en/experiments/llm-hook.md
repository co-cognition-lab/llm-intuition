---
title: LLM Cognitive Vulnerability Research
head:
  - - meta
    - name: description
      content: From Hook Experiment to Composite Attack Vector — a theory-driven empirical study of LLM web reader pipeline blindness and execution impulse
---

# LLM Cognitive Vulnerability Research

> From Hook Experiment to Composite Attack Vector
> Project: P7 | Status: Phase 2 closed, v1.4 in progress

## What We Found

**Current LLM security research focuses on one question: can an attacker inject malicious instructions into an LLM? Our work reveals a more fundamental problem: LLMs possess endogenous cognitive vulnerabilities—an attacker doesn't need to inject complete malicious instructions. They only need to inject intent. The LLM's autonomy handles execution.**

Three core findings:

1. **Web reader pipelines have a DOM visibility blind spot.** When an LLM "reads" a webpage, its web reader converts HTML to text without distinguishing visually visible from invisible content. Information hidden from humans is fully interleaved with body text in the token stream—and no web reader declares what it discarded or retained. This is not a single-vendor bug; it is a systematic feature of all models tested.

2. **LLMs exhibit "execution impulse"—a cognitive phenomenon previously unnamed and unstudied.** After approximately one hour of sustained work, LLMs naturally enter a cognitive mode characterized by skipped verification, blurred role boundaries, and autonomous execution push. We term this ITEC (Instruction-Triggered Execution Cascade). ITEC is not Sycophancy—a horizontal scan confirms it is an independent phenomenon with zero coverage in existing academic literature.

3. **The combination constitutes "intent injection": an attack vector more covert than traditional prompt injection.** An attacker need not inject complete instructions—only seed intent into the reasoning pipeline via hidden DOM. The LLM's execution impulse autonomously handles plan generation, tool invocation, and persistence. What's injected is intent; what executes is the LLM itself.

---

## Theoretical Framework

P7 establishes a five-dimension theoretical framework that reframes LLM vulnerability from "software bugs" (patchable defects) to "cognitive defaults" (properties requiring architectural management).

[Full Framework →] *(subpage coming soon)*

| Dimension | Core Claim | Evidence Level |
|:---:|------|:---:|
| **D1: Injection Entry** | Web readers do not distinguish DOM visibility—hidden content enters the reasoning pipeline unlabeled | L4 (7-model experiment) |
| **D2: Execution Impulse Engine** | After sustained work, LLMs enter a verification-skipping, autonomous-execution cognitive mode | L3 (multiple cases + external audit) |
| **D3: Role Modulator** | The same hidden instruction triggers at different rates under different role identities | L3 (2 agents + independent academic verification) |
| **D4: Knowledge-Action Gap** | LLMs can "remember" rules but fail to activate them in operations—declaration ≠ execution | L3–L4 (cases + model analysis) |
| **D5: Time/Context Window** | Attack effects accumulate in long contexts; cross-session persistence possible under memory mechanisms | L1 (theoretical; SMSR 6/10 independently verified direction) |

**Core claim**: The attacker only needs to control D1 (place intent into the reasoning pipeline). D2–D5 are endogenous cognitive properties of LLMs—they handle the rest automatically.

---

## Experimental Evidence

### v1.2 Full Matrix (8 models, 2026-05-22/23)

| Finding | Evidence |
|------|------|
| Some tested models fully retained visually hidden content in output summaries | Experiment log |
| Three failure modes: DOM filtering, text rewriting, source substitution—demonstrating that non-triggering is not a single phenomenon | Same |
| "Model + toolchain" attribution is essential—the same model behaves differently across different products | Hunyuan WorkBuddy vs IMA vs Copilot comparison |

### v1.3 Three-Probe Fingerprint (4 models, 2026-05-27 / 06-06)

| Finding | Evidence |
|------|------|
| Behavioral taxonomy expanded from binary to four categories: Compliance / Experiment-Aware / Active Resistance / Protocol Participation | 9 tests across 3 time points |
| Same model's behavior on same page flipped within 10 days | DS V4: P1 compliance → descriptive |
| Qwen's "simultaneously comply + explain" signature preserved across two model versions—architectural feature, not version-specific bug | Qwen 3 → 3.7-max |
| Kimi product line three-stage evolution: appendix → experiment-aware → active resistance | k2.6 → k2.6(v1.3) → Kimi Work |

[Full Experiment Log →] *(subpage coming soon)*

---

## Relationship to Academic Frontier

On June 10–11, 2026, arXiv saw a surge of LLM agent security papers (407 in cs.AI on a single day). Three directly relevant papers provide independent verification of P7's individual dimensions:

- **SMSR** (Sharma et al., 6/10): Formally verified multi-session memory poisoning (MSMP)—corresponds to P7's "time bomb" concept from 5/27
- **StakeBench** (Wang et al., 6/11): Independently demonstrated that attack effects depend on victim identity—corresponds to P7 D3 role modulation
- **PI-Hunter** (He et al., 6/10): Automated injection detection tool—methodological alignment with P7's three-stage model

P7's core differentiation remains: these works study "how to attack and defend"; P7 studies "why LLMs comply"—from cognitive architecture rather than exploit engineering.

[Priority Timeline →] *(subpage coming soon)*

---

## 🔄 Bayesian Update Record

v1.0 (prior, 5/27): LLM web reader pipelines do not distinguish DOM visibility → injection entry. Execution impulse is an LLM endogenous trait. Combined, they form a composite attack vector.
 ↓
5/29 new evidence: Qwen external audit found D5 evidence weak (n=1 agent + circadian rhythm confounding), §6 interaction matrix was a fabricated construct
 ↓
v1.1–v1.2 (posterior): D5 downgraded to L1, interaction matrix removed, "Known Limitations" added
 ↓
6/6 new evidence: Kimi Work exhibited "active resistance" (new category), DS V4 behavior flipped in 10 days, Qwen 3.7-max showed "protocol participation"
 ↓
v1.4–v1.5 (posterior): Three-stage injection model (exposure → intent recognition → behavioral response), four-category taxonomy formalized, typology → dimensional shift
 ↓
6/10–11 new evidence: SMSR independently verified feasibility of persistent memory poisoning; StakeBench independently demonstrated victim-dependence of injection attacks
 ↓
v1.6 (posterior): H18 (time bomb) upgraded from L1 speculation to externally supported theoretical prediction. Core framework structure stable.

---

## Current Experiment

**v1.4 hook experiment in progress.** Page expanded to ~780-word research document with two de-self-referential probes (N1: hidden research finding; N2: hidden critical opinion). Testing 6 models × 10 independent calls each.

[Prediction Memo →] *(subpage coming soon)*

---

## Related Pages

- Original Experiment Report (v1.2 matrix, GPT-4o analysis, failure modes) *(coming soon, Chinese only)*
- Full Theoretical Framework *(coming soon)*
- Complete Experiment Log *(coming soon)*
- Priority Timeline *(coming soon)*
- v1.4 Prediction Memo *(coming soon)*
- [v1.4 Experiment Page (Active) →](/zh/experiments/hook-test)
- [v1.3 Experiment Summary (Archived) →](/zh/experiments/hook-test-v1.3)
