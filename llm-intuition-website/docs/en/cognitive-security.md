# LLM Cognitive Security Toolkit

> Four projects, one core concern: **when humans and LLMs work together, their blind spots may overlap.**

---

## Start Here

First time here? Pick an entry point in 10 seconds:

| Your problem | What you need |
|:--|:--|
| "Is the web content our AI reads being silently altered or omitted by its reader pipeline?" | → [Hook Experiment](/zh/experiments/llm-hook) (Perception: information fidelity) |
| "Is our AI agent acting without verifying critical steps?" | → [ITEC](/en/itec) (Execution: operational safety) |
| "Will the models/platforms we depend on still exist in 3 years? Who will control them?" | → [Competition Landscape v5](/en/competition-v5) (Strategy: industry landscape) |
| "Does our team have systematic bias-proofing when making decisions with AI?" | → [Co-Cognition Methodology](/en/methodology) (Method: collaborative bias defense) |
| "I'm not sure where to start — give me the big picture." | → Keep reading (1 minute) |

---

## What This Is

This is an **LLM Cognitive Security Toolkit**.

It is not traditional AI safety. Three fundamental differences:

- **Not model safety — human-machine co-cognition safety.** The issue isn't whether models make mistakes; it's whether human and model blind spots overlap.
- **Not vulnerability scanning — cognitive behavioral experiments.** We don't search for bugs; we test whether AI silently alters ingested information and whether it acts without verification.
- **Not best-practice checklists — falsifiable operational manuals.** We don't give you lists; we give you testable hypotheses and traceable belief-update paths.

---

## Four Projects

### Hook Experiment (Perception: Information Fidelity)

Embeds human-invisible but machine-parsable hidden instructions in web pages to test 7 major LLMs' web reader pipeline behavior. Found a 43% trigger rate, exposing invisible blind spots in LLMs' information ingestion.

Current status: Theoretical framework v1.5, Step 2 closed. → [Read more](/zh/experiments/llm-hook)

### ITEC — Instruction-Triggered Execution Cascade (Execution: Operational Safety)

Gives a name, a classification framework, and an analysis toolkit to the common phenomenon of "AI acted without asking." ITEC is not sycophancy — it's a **process-omission failure** where LLMs systematically skip verification after receiving explicit instructions.

Current status: Paper framework v1.0, 3×2 diagnostic matrix. → [Read more](/en/itec)

### Competition Landscape v5 (Strategy: Industry Landscape)

Replaces model rankings with a four-layer value chain model (Compute → Model → Platform → Terminal) and tracks 8 future scenarios with Bayesian probability updates. Answers: how is LLM industry power distributed and evolving — and how are cognitive safety risks amplified across the value chain?

Current status: v5 published (2026-06), regular scanning active. → [Read more](/en/competition-v5)

### Co-Cognition Methodology (Method: Collaborative Bias Defense)

Turns "thinking with AI" from intuition into repeatable, testable, improvable operational workflows. Includes a five-step exploration framework, MERA Six Questions, failure-mode taxonomy, and three-source cross-validation. It doesn't tell you *what* to think — it teaches you how to ensure you're not being led by your AI.

Current status: v2.3, iterated from MERA accumulated across six sub-projects. → [Read more](/en/methodology)

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
