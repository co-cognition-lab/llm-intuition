# Appendix: Data Structures, Workflow Code, Validation Evidence, and References

> Version: v2.2 (Public Edition Appendix)
> Companion page: [Rule Pool Governance](/en/methodology/rule-pool-governance/)
> Date: 2026-06-30

---

## Appendix A: Data Structure Specifications

### Directory Layout

```
.lab-rules/
├── manifest.jsonl              # Rule registry (append-only)
├── activation_log.jsonl        # Activation event log (append-only)
├── gates/                      # Stage gate definitions
├── contracts/                  # Rule Activation Contracts (RAC)
├── proposals/                  # Rule change proposals
├── calibration/                # Cross-Agent consistency calibration
├── meta/                       # Meta-rules
├── gatekeeper/                 # Blocking layer state
├── fatigue_monitor/            # Approval fatigue monitoring
├── scripts/                    # Verification scripts
└── views/                      # Derived views (recomputable)
```

### Rule Registry manifest.jsonl

```json
{
  "rule_id": "AC-QUAL-01",
  "name": "Distinguish theoretical deduction from empirical verification",
  "dimension": "academic_quality",
  "source": {
    "file": "METHODOLOGY_v2.3.md",
    "section": "§6",
    "anchor": "F3",
    "verbatim": "Key claims must clearly distinguish theoretical deduction from empirical verification..."
  },
  "task_types": ["paper", "report"],
  "stages": ["write", "review"],
  "priority": 1,
  "risk_level": "L2",
  "activation_form": "inline_tag",
  "verification": {
    "method": "pattern",
    "pattern": "【理论推演】|【经验验证】|【混合】",
    "scope": "all_key_claims"
  },
  "status": "active"
}
```

### Activation Event Log activation_log.jsonl

```json
{
  "event_id": "evt-20260629-0001",
  "ts": "2026-06-29T14:30:00+08:00",
  "task_id": "task-001",
  "task_type": "paper",
  "stage": "write",
  "agent_id": "Model-B",
  "role": "writer",
  "rule_id": "AC-QUAL-01",
  "outcome": "applied",
  "source": "self_check"
}
```

### Derived Three Scores

```
retrieval_score = 0.4 * task_match + 0.3 * recency + 0.2 * activation_rate + 0.1 * violation_rate
health_score = activation_rate * recency - 0.5 * violation_rate
divergence_score = divergence_count / max(self_review_pairs, 1)
```

> Weights and half-life are L1 heuristic settings.

---

## Appendix B: Lobster Workflow Code

### Publish Gate (L3 Unconditional Hard Block)

```yaml
# gates/05-publish.lobster
name: publish-gate
steps:
  - id: verify_patterns
    command: python scripts/verify_pattern_rules.py --task_id $task_id
  - id: check_rac
    command: python scripts/check_rac_completeness.py --task_id $task_id
  - id: publish_approval
    command: cat $check_rac.stdout
    approval: required
  - id: deploy
    command: python scripts/p0_deploy.py --task_id $task_id
    condition: $publish_approval.approved
```

### Full Five-Stage Pipeline

```yaml
# gates/full-pipeline.lobster
name: paper-pipeline
steps:
  - id: write  # ① L1 soft monitor
  - id: review  # ② L1 + cross-model
  - id: absorb  # ③ L1
  - id: iterate  # ④ L1
  - id: publish_approval  # ⑤ L3 hard block
    approval: required
```

---

## Appendix C: Six-Proposition Industry Validation

### P1 Rule-Trajectory Coupling
**Support**: SEDM, Meta-Reflexion, AutoManual, ExpeL, JERP [L4]
**Refute**: Bitter Lesson [L1], Reflexion degradation [L3], Memory-R1 [L4]
**Conclusion**: Non-zero-sum—holds for real-time interactive Agent governance [L1]

### P2 Cross-Model Verification
**Support**: Tsui 2025 (64.5%), Du et al. 2023, ChatEval, PoLL [L4]
**Refute**: Kohli/Apple, MAD, cost explosion, weak-reviewing-strong [L4+L3]
**Conclusion**: Valid under strict boundary conditions [L1]

### P3 Workflow Blocking
**Support**: Safety Report, CAAF, Spera [L4+L2]
**Refute**: Waxell 2026 (fatigue), latency/premium [L4+L3]
**Conclusion**: Hard blocking irreplaceable in safety-critical scenarios; tiering required [L1]

### P4 Three-Way Divergence Attribution
**Support**: MAST, TraceElephant, ARR [L4]
**Conclusion**: Academic consensus [L4]

### P5 Shared Judgment Baselines
**Support**: Vishnubhotla (α≈0), AdversaBench (33%), ICE [L4]
**Conclusion**: LLM-as-a-judge consensus [L4]

### P6 Rule Dynamic Evolution
**Support**: IterAlign, ExpeL, OPA, Mem0, OpenAI Model Spec [L4]
**Conclusion**: DevOps + Agent memory research consensus [L4]

---

## Appendix D: Key References

See full reference list in companion appendix (Chinese edition). Key sources include SEDM, Meta-Reflexion, AutoManual (NeurIPS 2024), ExpeL (AAAI 2024), JERP (arXiv:2606.27136), Du et al. 2023, ChatEval (ICLR 2024), Tsui 2025, Kohli/Apple 2026, Safety Report 2026, CAAF, Spera 2026, Waxell 2026, MAST, TraceElephant, ARR.

---

## Appendix E: Scheme Evolution

| Version | Date | Key Changes |
|---------|------|------------|
| v1.0 | Jun 29 | Single-model, 4 idle mechanisms |
| v2.0 | Jun 29 | Multi-model, dynamic roles |
| v2.1 | Jun 30 | Lobster integration, native blocking |
| v2.2 | Jun 30 | Tiered triggers, reviewer threshold, fatigue monitoring |

---

*Appendix published under CC BY 4.0. Return to [Main Page](/en/methodology/rule-pool-governance/).*
