# LLMs and Human Intuition: Evolutionary Pathways and Complementary Spaces

> **v2.0** | June 2026 | [arXiv Preprint](#) | [PDF Download](https://github.com/co-cognition-lab/llm-intuition/blob/main/arxiv/main_v2_en.pdf) | [GitHub](https://github.com/co-cognition-lab/llm-intuition)

---

## What Question Are We Trying to Answer

Large language models are permeating every facet of human cognition. But where do they stand on **intuition** — those near-instinctive cognitive capacities that require neither reasoning nor analysis?

Intuition is not a mysterious sixth sense. It is compressed experience: a chess player who "just sees" the right move after thousands of games, a radiologist who spots an anomaly at a glance, the uneasy feeling about someone you "can't quite explain." These judgments share three features: fast, effortless, no explicit reasoning required.

**The core question is not "do LLMs have intuition" — but "what do they lack, to what degree, and are there alternative paths?"**

---

## Three Core Propositions

**Proposition 1: LLMs lack endogenous cost signals.**
Human intuition is forged by "make a mistake → get punished → brain tags which patterns to prioritize." An LLM's "punishment signal" is the human preference rating in RLHF — but "this answer looks correct" ≠ "this advice produced good real-world outcomes." LLMs do not experience the consequences of their outputs.

**Proposition 2: LLM attention tries not to miss anything, rather than selectively ignore.**
Expert intuition is not about "seeing what matters" — it is about "instantly ignoring what doesn't." Humans evolved cost-driven selective ignoring under survival pressure; LLM sparse attention variants are motivated by "we can't afford to compute this," not "this isn't worth looking at."

**Proposition 3: The body's core contribution is the *inescapability* of cost signals.**
When your body tells you something is wrong (racing heart, stomach tightening), you cannot dismiss it by turning down a parameter. Every LLM "importance" parameter — learning rate, temperature, reward scale — is exogenous, adjustable by engineers. The body's value is not the signal content, but the guarantee that the signal *must* be received.

> Propositions 1 and 2 converge on the same underlying deficit from two different disciplinary traditions — cognitive science and machine learning. They are mutually reinforcing, not independent.

---

## Four Intuition Subtypes

| Type | Examples | LLM Substitutability |
|------|---------|:--:|
| **Perceptual** | Chess pattern recognition, radiology anomaly detection | ⚠️ Partial |
| **Conceptual** | Mathematician's "sense of direction," scientific taste | ⚠️ Closed domain yes, open domain limited |
| **Social** | Reading people, judging trustworthiness, sensing atmosphere | ⚠️ Textually accessible, embodied inaccessible |
| **Moral** | Instant "this is wrong" first-pass judgment | ❌ Structurally inaccessible |

**Key insight**: As costs move from internal (efficiency) to epistemic (wasted exploration) to interpersonal (rejection, shame) to identity (moral selfhood), they become increasingly embodied and irreplaceable by pure information processing.

---

## Three Hypotheses, Nine Core Judgments

### Hypothesis A (Intuition Prosthetic): LLMs fill human intuition gaps via different computational paths
### Hypothesis B (Degradation Risk): Long-term LLM dependence weakens human intuition
### Hypothesis C (Autonomous Intuition): LLMs may develop functionally equivalent intuition

Below are the three judgments most relevant to product design:

**Judgment 1: Degradation exists but is not inevitable — it depends on usage mode.**
Three mediating variables determine degradation: (a) whether AI replaces intuition *execution* or *verification* (humans judging first then checking AI shows significantly less degradation than AI answering first); (b) usage frequency and temporal structure (asking AI for everything vs. only when uncertain); (c) the inescapability of the intuition subtype (you cannot pause to check AI during real-time social interaction).

**Judgment 2: The Human-First Protocol is the single most effective intervention.**
Radiology on-demand AI shows *upskilling* rather than deskilling. A meta-analysis of 35 studies confirms AI-first protocols significantly increase automation bias compared to human-first protocols. The critical point: nearly all current LLM products default to AI answering first — this is a systematic amplifier of degradation risk. Changing the default requires product design decisions, not technological breakthroughs.

**Judgment 3: Social intuition's "hollow period" is the most dangerous imbalance zone.**
The hollow period occurs when human capability has already degraded but AI is not yet mature enough to fully replace it across all scenarios — and the degradation is masked by AI's good performance in routine cases. Social intuition simultaneously satisfies the most dangerous conditions: LLMs have prosthetic-level usability (making people willing to use them), systematic blind spots (sycophancy, no real-time social calibration), and human degradation is accelerating under the dual pressure of social media and LLM adoption.

---

## Three Iron Laws

1. **Let humans judge first.** The Human-First Protocol is the default for all scenarios — not out of distrust for AI, but to ensure humans don't forget they can still judge independently.
2. **Make costs inescapable.** Key domains must preserve the inescapability of judgment consequences, analogous to FAA requirements for pilots to fly manually.
3. **Make boundaries clear.** No deployment of autonomous moral judgment systems or real-time social judgment substitution systems — degradation in these domains is identity abdication, not skill loss, and is extremely difficult to reverse.

---

## An Honest Footnote

Of 41 evidence-level annotations across the full paper, L5 (confirmed by ≥2 independent laboratory replications) accounts for **0%**. These claims are based on theoretical deduction and analogical extrapolation — not "unreliable," but at the normal early stage of theory building. We will not pretend to know more than we do.

---

## Cross-Validation

Rafiee & Sutton (2026, arXiv:2605.24238) independently identified four structural deficiencies in LLMs from the phenomenological tradition (experience, action-perception inseparability, autonomy, embodiment), converging on the same judgment as this paper's predictive processing approach. The division of labor: Rafiee & Sutton provide the diagnosis; this paper provides the systematic mapping and intervention framework.

---

## Resources

- 📄 Full Paper PDF: [Chinese](https://github.com/co-cognition-lab/llm-intuition/blob/main/arxiv/main_v2.pdf) | [English](https://github.com/co-cognition-lab/llm-intuition/blob/main/arxiv/main_v2_en.pdf)
- 💻 GitHub: [co-cognition-lab/llm-intuition](https://github.com/co-cognition-lab/llm-intuition)
- 📊 OSF: [10.17605/OSF.IO/XSY39](https://doi.org/10.17605/OSF.IO/XSY39)

---

📋 Historical version: [v1.3](/en/archive/llm-intuition-v1.3) (May 2026, arXiv preprint anchor version)
