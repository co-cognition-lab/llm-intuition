# Rule Pool Governance: From Static Documents to Traceable Rule Evolution

> Version: v2.2 (Public Edition)
> Date: 2026-06-30
> Designer: Co-Cognition Lab
> Based on: JERP paper (arXiv:2606.27136) + OpenClaw/Lobster architecture verification + Six-proposition industry validation study
> Positioning: A real-time governance layer above parameter fine-tuning (RLHF/SFT)—correcting Agent behavior via rule pools and tracking mechanisms within the window where model parameters cannot be updated in time. Not a replacement for model training.
> Evidence level: Design principles are partly L1 (theoretical), partly L4 (experimental). Key claims annotated with evidence levels. The overall scheme has not been independently empirically validated—it is a research program to be tested, not a validated best practice.

---

## 1. The Problem We're Solving

Co-Cognition Lab has 11 categories of documented rules in its paper/report production workflow—academic quality, evidence grading, review standards, compliance red lines, terminology consistency, etc. Yet a pattern recurs:

> Rules were violated shortly after being written. In one task: 9 minutes [L3: Lab internal observation, single event]; in another self-audit: 11 violations within 3 days [L3: Lab internal observation].

This is not a "not enough rules" problem. Decomposing "rule from written to effective" into five links—Reachability, Understanding, Activation, Self-Check, Feedback—the breakage occurs in the latter three:

| Link | Meaning | Status |
|------|---------|--------|
| ① Reachability | Agent can find rule files | Files in shared workspace |
| ② Understanding | Agent reads rules correctly | Rules are abstract, lack examples/counterexamples |
| ③ Activation | Actively invokes rules mid-task | No enforcement; relies on Agent initiative |
| ④ Self-Check | Verifies compliance post-output | Self-check depends on same Agent; no independent verification |
| ⑤ Feedback | Violation data feeds back into rule maintenance | No usage records after rules written |

The superposition of breaks at ③④⑤ leaves rules in the "declaration" stage, never reaching "integration" or "automation" [L1: Theoretical—ITEC three-stage model of rule activation].

We call this the **Declarative-Procedural Gap**: Agents can correctly *state* rules, but fail to *activate* them in specific tasks.

### Two Core Pain Points

**Pain A: Rule written ≠ behavior changed.** Root cause: ③ lacks enforcement, ④ self-check is unreliable, ⑤ has no data. The leverage point is ③—once a rule is force-activated in a task, ④ and ⑤ have something to grip.

**Pain B: Cross-Agent rule inconsistency.** The same rule file is understood and judged differently by different Agents—no shared judgment baseline.

---

## 2. Design Principles

### Seven Principles

1. **Rules are referenced, not copied.**
2. **Activation over memory.** Rules are force-invoked at critical nodes, not remembered.
3. **Data and judgment separated.** Append-only event logs are authoritative; scores are derived views.
4. **UPVOTE/DOWNVOTE emerge from usage data** [L2: ExpeL analogy, AAAI 2024].
5. **agent_id decoupled from role.** Model identity fixed, role dynamic per task_type.
6. **Cross-model divergence as primary signal** [L4: Du et al. 2023; boundary conditions in §6].
7. **Tiered blocking to prevent fatigue** [L4: Waxell 2026—approval rate >90% degrades to rubber stamp].

### Positioning Statement

This scheme is a **real-time governance layer above parameter fine-tuning**, not a replacement for model training.

- Sutton's Bitter Lesson targets static handcrafted knowledge [L1]; our rules are dynamic interaction products (emergent from usage data).
- Memory-R1 proves RL fine-tuning outperforms scripted memory on batch fixed-distribution tasks [L4: arXiv:2508.19828]; but in real-time Agent scenarios with distribution drift, parameter update cycles are too slow.
- This scheme fills the "window where model parameters can't be updated in time."

---

## 3. Core Mechanism: Three-Layer Closed Loop

**Gate Layer + Cross Layer + Evolution Layer**

### 3.1 Gate Layer: Tiered Workflow Blocking

Based on industry validation [L4: Safety Report 2026—~$100K loss; L2: Spera 2026 formal proof—prompt-based governance cannot solve compositional safety], blocking is tiered by risk:

| Tier | Scenario | Mechanism | Example |
|------|----------|-----------|---------|
| **L1 Soft Monitor** | Low risk, reversible | Log only, no blocking | Terminology inconsistency |
| **L2 Conditional Hard Block** | Medium risk, repeated violations | Pause on condition met | Evidence grading missing |
| **L3 Unconditional Hard Block** | High risk, irreversible | Must approve | Compliance violation, publish |

Why not hard-block everything? Approval fatigue: when approval rate >90%, approval gates degrade to rubber stamps [L4: Waxell 2026]. Tiered blocking preserves the scarcity and seriousness of L3 approvals.

### 3.2 Cross Layer: Cross-Model Verification

Writer and reviewer are different models. Their independent judgments on the same evidence become signals for rule revision.

**Effective boundaries** [L4 + L3 counter-evidence]: Self-check blind-spot rate 64.5% [L4: Tsui 2025]; Multi-Agent Debate superior to single model [L4: Du et al. 2023]. BUT: 9 judges ≈ 2 effective independent votes [L4: Kohli/Apple 2026]; MAD converges to wrong consensus [L3: arXiv:2505.19477]; 36-49x token cost [L3: arXiv:2605.00914]; weak reviewing strong always worse [L4: arXiv:2604.02460].

**Conclusion**: Cross-model verification is strictly constrained to—(a) no-ground-truth review/evaluation scenarios, (b) genuinely heterogeneous model combinations, (c) reviewer ≥ writer capability, (d) non-simple-voting aggregation [L1].

### 3.3 Evolution Layer: Dynamic Rule Maintenance

Each rule carries usage records, deriving three scores: retrieval_score (top-k injection ranking), health_score (maintenance flag), divergence_score (clarity diagnosis). Weights and 30-day half-life are L1 heuristic [L1].

**Rule decay detection**: Five decay types—zombie (no events), failed (health low), stale (source updated), conflicting (two rules fire together), ambiguous (divergence high). This is a signal invisible to single-model self-check.

---

## 4-11. Dynamic Roles, Workflow, Divergence Attribution, Fatigue Monitoring, Validation, Roadmap, Risks, JERP Mapping

See [full appendix](/en/methodology/rule-pool-governance/appendix) for data structures, workflow code, detailed evidence matrices, and reference sources.

---

## 🔄 Belief Update Log

v0.1 (prior): Rule pool requires external service for publish blocking
 ↓
v2.1 (posterior): Blocking layer migrated to Lobster native mechanism
 ↓
v2.2 (posterior): Tiered blocking (L1/L2/L3); reviewer entry threshold; approval fatigue monitoring

---

*Published under CC BY 4.0. Full data structure specifications, Lobster workflow code, six-proposition validation evidence, and reference indices in [Appendix](/en/methodology/rule-pool-governance/appendix).*
