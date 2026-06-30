# 附录：数据结构、工作流代码、验证证据与参考来源

> 版本：v2.2（公开版附录）
> 配套主页面：[规则池治理](/zh/methodology/rule-pool-governance/)
> 日期：2026-06-30

---

## 附录 A：数据结构规范

### 目录布局

```
.lab-rules/
├── manifest.jsonl              # 规则注册表
├── activation_log.jsonl        # 激活事件日志
├── gates/                      # 阶段闸门定义
├── contracts/                  # RAC
├── proposals/                  # 变更提案
├── calibration/                # 跨 Agent 一致性校准
├── meta/                       # 元规则
├── gatekeeper/                 # 阻塞层状态
├── fatigue_monitor/            # 审批疲劳监测
├── scripts/                    # 核验脚本
└── views/                      # 派生视图
```

### 规则注册表 manifest.jsonl

```json
{
  "rule_id": "AC-QUAL-01",
  "name": "关键论断区分理论推演与经验验证",
  "dimension": "academic_quality",
  "source": {
    "file": "METHODOLOGY_v2.3.md",
    "section": "§6",
    "anchor": "F3",
    "verbatim": "关键论断须明确区分理论推演与经验验证……"
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

### 激活事件日志 activation_log.jsonl

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

### 派生三分数

```
retrieval_score = 0.4 * task_match + 0.3 * recency + 0.2 * activation_rate + 0.1 * violation_rate
health_score = activation_rate * recency - 0.5 * violation_rate
divergence_score = divergence_count / max(self_review_pairs, 1)
```

> 权重和半衰期为 L1 启发式设定。

---

## 附录 B：Lobster Workflow 代码

### 发布闸门（L3 无条件硬阻塞）

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

### 完整五阶段流水线

```yaml
# gates/full-pipeline.lobster
name: paper-pipeline
steps:
  - id: write  # ① L1 软监控
  - id: review  # ② L1 + 异模型交叉
  - id: absorb  # ③ L1
  - id: iterate  # ④ L1
  - id: publish_approval  # ⑤ L3 硬阻塞
    approval: required
```

---

## 附录 C：六命题业界验证详细证据

### P1 规则-轨迹耦合
**支持**：SEDM, Meta-Reflexion, AutoManual, Agent-Pro, ExpeL, JERP [L4]
**反驳**：Bitter Lesson [L1], Reflexion 退化 [L3], Memory-R1 [L4]
**结论**：非零和——实时交互 Agent 治理场景成立 [L1]

### P2 异模型交叉验证
**支持**：Tsui 2025 (64.5%), Du et al. 2023, ChatEval, PoLL [L4]
**反驳**：Kohli/Apple 2026, MAD, 成本, 弱评强 [L4+L3]
**结论**：严格约束条件下有效 [L1]

### P3 工作流阻塞
**支持**：Safety Report, CAAF, Spera [L4+L2]
**反驳**：Waxell 2026 (审批疲劳), 延迟/溢价 [L4+L3]
**结论**：硬阻塞在安全关键场景不可替代，需分级 [L1]

### P4 三路归因
**支持**：MAST, TraceElephant, ARR [L4]
**结论**：学术界共识 [L4]

### P5 判定基准共享
**支持**：Vishnubhotla (α≈0), AdversaBench (33%), ICE [L4]
**结论**：LLM-as-a-judge 共识 [L4]

### P6 规则动态演化
**支持**：IterAlign, ExpeL, OPA, Mem0, OpenAI Model Spec [L4]
**结论**：DevOps + Agent 记忆研究共识 [L4]

### 整体评级：部分验证（偏向充分）
六个命题均有学术根基，无一被证伪。需四项修正（分级触发、reviewer 准入、定位声明、疲劳监测）均已纳入方案 [L1]。

---

## 附录 D：关键参考来源

**规则-轨迹耦合**：SEDM, Meta-Reflexion, AutoManual (NeurIPS 2024), ExpeL (AAAI 2024), JERP (arXiv:2606.27136)

**异模型交叉**：Du et al. 2023, ChatEval (ICLR 2024), Tsui 2025, Kohli/Apple 2026

**工作流阻塞**：Safety Report 2026, CAAF, Spera 2026, Waxell 2026

**三路归因**：MAST (UC Berkeley 2025), TraceElephant, ARR

**判定基准**：Vishnubhotla, AdversaBench, ICE, MT-Bench

**规则演化**：IterAlign, ExpeL, OPA, Mem0, OpenAI Model Spec

**失败案例**：AWS ~$100K loss, Cursor 9-sec deletion, Amazon Kiro, Moltbook 88:1

---

## 附录 E：方案演进记录

| 版本 | 日期 | 核心变更 |
|------|------|---------|
| v1.0 | 6/29 | 单模型版，4 机制空转 |
| v2.0 | 6/29 | 多模型完整版，动态角色 |
| v2.1 | 6/30 | Lobster 集成，原生阻塞 |
| v2.2 | 6/30 | 三级触发，reviewer 门槛，疲劳监测 |

---

*附录以 CC BY 4.0 发布。返回 [主页面](/zh/methodology/rule-pool-governance/)。*
