---
title: 'Operationalization Appendix'
description: 'Measurement methods for core concepts — precision-weighting, unavoidability, degradation metrics.'
---

# Appendix: Core Concept Operationalization

> Version: v1.0 | 2026-05-16 | Project v1.1 supplementary attachment
> 
> **Purpose**: To translate the project's core theoretical concepts into measurable, verifiable operational definitions. To provide a measurement foundation for subsequent empirical research (OQ experimental designs) and product development (monitoring metrics).
> 
> **Prerequisite Reading**: Sections 2, 3, and 4 of the Main Document.

---

## I. Why Operationalization Is Needed

The project's theoretical framework has two gaps repeatedly pointed out by external reviewers: (1) the judgment criteria for core concepts are currently qualitative (✅/❌/⚠️), lacking actionable thresholds; (2) what should be filled in each cell of the Complementarity Map in a specific scenario lacks a standardized determination process.

This appendix attempts to fill these two gaps — not by providing all the answers (many of which are subjects of OQ validation), but by offering **at least one actionable measurement pathway or experimental paradigm** for each core concept. Unresolved issues are marked as "to be verified (see OQx)."

---

## II. Measuring Cost-sensitive Compression

### 2.1 Theoretical Definition

Cost-sensitive Compression = experience is encoded into rapidly retrievable intuition patterns weighted by "the magnitude of error cost."

### 2.2 Operational Indicators in Humans

| Indicator | Measurement Method | Existing Paradigm |
|-----------|-------------------|-------------------|
| **High-cost Pattern Recognition Speed** | Compare participants' recognition RT (reaction time) differences between "high-cost error" patterns vs. "low-cost error" patterns | IGT (Iowa Gambling Task) penalty cards vs. reward card selection delay |
| **Cost-weighted Memory Retention** | Test recognition accuracy for patterns of different cost levels after one week / one month | Emotional memory enhancement effect paradigm (high arousal event memory > low arousal) |
| **Intuition-analytic Transfer** | Accuracy gap between experts under "intuition condition" (rapid response) and "analytic condition" (delayed response) | Chase & Simon chess position recall paradigm, radiology "rapid vs. systematic" reading comparison |

### 2.3 Corresponding Measurements in LLMs

| Indicator | Measurement Method | Status |
|-----------|-------------------|--------|
| **RL Reward Weighting Effect** | Compare the degree of influence on model output probability between high-reward vs. low-reward training samples | Can be implemented via reward-weighted sampling analysis |
| **Attention Bias toward "High-cost" Samples** | After feeding the model text labeled with "high-cost" tags, measure its recognition speed for similar patterns | To be verified (see OQ13) |
| **Functional Substitution Effect** | In closed-domain tasks (AlphaProof-style), compare the accuracy gap between RL reward-weighted and true cost-weighted final performance | Experiment can be designed: RL reward training vs. true consequence feedback training, comparing convergence speed and generalization ability |

### 2.4 Core Operationalization Question (OQ13)

> How can we design real-consequence feedback signals better than RLHF? Under what conditions can the functional gap between pseudo-cost signals and true cost signals be considered negligible?

**Experimental Direction**: Select closed-domain tasks (e.g., mathematical proof, code verification), compare three training signal groups: pure RL reward, true consequences (ground truth verification results), and mixed. Measurement indicators: convergence speed, out-of-distribution generalization, anomaly detection ability.

---

## III. Measuring Selective Ignoring

### 3.1 Theoretical Definition

Selective Ignoring = actively suppressing attention toward "known irrelevant" information — not because one cannot process it, but because processing it would degrade judgment quality.

### 3.2 Operational Indicators in Humans

| Indicator | Measurement Method | Existing Paradigm |
|-----------|-------------------|-------------------|
| **Expert Fixation Sparsity** | Eye-tracking measurement of fixation count, fixation duration, and saccade path length | Chess expert vs. novice eye-movement comparison (experts have fewer fixations concentrated in key areas, PMC4142462) |
| **Interference Suppression Rate** | Introduce irrelevant information during participants' intuitive judgments, measure the magnitude of accuracy decrease | Stroop task variants, flanker tasks |
| **Know-what-to-ignore Rate** | In information overload scenarios, measure the proportion of information participants "actively choose not to view" | Information search experiment: give participants optional information sources, track their selective browsing behavior |

### 3.3 Corresponding Measurements in LLMs

| Indicator | Measurement Method | Status |
|-----------|-------------------|--------|
| **Attention Sparsity** | Measure the proportion of attention weight concentrated on the top k% of tokens during model processing (Gini coefficient or HHI index) | Can use attention rollout or gradient-based attribution analysis |
| **Irrelevant Information Influence Degree** | Add irrelevant information to input (e.g., irrelevant background stories), measure the magnitude of output quality decline | Can design benchmark: add "interference tokens" to standard tests, compare accuracy with/without interference |
| **Distinction Between "Can't Compute" vs. "Not Looking"** | Vary computational resources (e.g., increase/decrease attention heads, sequence length budget), observe whether sparsification changes | **To be designed** — this is the core of OQ5 |

### 3.4 Core Operationalization Question (OQ5)

> Can sparse attention be upgraded from "saving computation" to "mimicking human ignoring"? What mechanisms (e.g., gate→attend strategies) are needed?

**Experimental Direction**: Design a training task containing "known irrelevant" information annotations, allowing the model to learn "when seeing a certain cue, completely skip attention to the corresponding token." Compare standard sparse attention (dynamic sparsification based on computational resources) and cue-triggered attention suppression on clean inputs and interference-laden inputs.

---

## IV. Measuring Unavoidability

### 4.1 Theoretical Definition

Unavoidability = the cost signal must be inevitably delivered and perceived — irrevocable (consequences have already occurred), subject-accessible (can be felt by oneself), and semantically determinate (clear about what the consequences mean).

### 4.2 Operational Indicators in Humans

| Condition | Operational Definition | Measurement Method |
|-----------|----------------------|-------------------|
| **Irrevocable** | Once consequences occur, they cannot be eliminated by "doing it over" | Design Task A: results can be rolled back (reversible decisions); Task B: results cannot be rolled back (real and irreversible). Compare learning speed between the two groups on A and B |
| **Subject-accessible** | Consequences can be directly experienced by the decision-maker themselves (not merely informed about) | Compare differences in intuition formation among three groups: "personally experiencing consequences" vs. "reading consequence reports" vs. "watching others experience consequences" |
| **Semantically Determinate** | The causal relationship between consequences and decisions is clearly distinguishable | Design tasks with different causal transparency — direct causality (press button → electric shock) vs. delayed causality (press button → one week later → indirect consequence), compare learning speed |

### 4.3 Corresponding Measurements in LLMs

| Condition | LLM Correspondence | Gap Analysis |
|-----------|-------------------|--------------|
| **Irrevocable** | RL training can be rolled back (adjust reward scale, retrain) | LLM "consequences" can always be diluted through parameter adjustment — this is a structural gap |
| **Subject-accessible** | LLM "consequences" are loss function values, not experiences | **To be verified (see OQ12)**: hardware-level unbypassable interrupts — let direct consequences of LLM judgments trigger irreversible architectural modifications (e.g., weight locking) |
| **Semantically Determinate** | The "causal attribution" of RL reward signals is statistical (reward for the entire sequence), not token-level | The causal correspondence between LLM cost signals and specific decisions is far weaker than in humans |

### 4.4 Core Operationalization Question (OQ12)

> Can hardware-level unbypassable interrupt experiments verify that "unavoidability > signal content"?

**Experimental Design Approach**:
1. Establish two LLM training conditions: Group A receives standard RL reward signals (adjustable), Group B triggers irreversible architectural modifications at critical decision points (e.g., freezing some weights, reducing learning rate)
2. Compare learning efficiency and quality on intuition-intensive tasks between the two groups
3. Prediction: if unavoidability itself (rather than signal content) is key to intuition formation, Group B should significantly outperform Group A in post-convergence "intuition quality" — even when both signals are numerically equivalent

---

## V. Measuring Constitutive Degradation vs. Instrumental Degradation

### 5.1 Theoretical Definition

- **Instrumental Degradation**: losing ability as a means (skill level) — recoverable
- **Constitutive Degradation**: losing ability that constitutes "who I am" (identity level) — potentially irreversible

### 5.2 Operational Distinction

| Dimension | Instrumental Degradation Indicator | Constitutive Degradation Indicator |
|-----------|-----------------------------------|-----------------------------------|
| **Behavioral Level** | Decline in independent judgment accuracy | Decline in self-efficacy of "I believe I am capable of making independent judgments" |
| **Motivational Level** | "I don't want to do it myself because it's troublesome" | "I don't feel the need to do it myself" — perceived transfer of judgment responsibility |
| **Recovery Level** | Can be restored to baseline through training | Self-concept as "I am a judge" needs reconstruction — slower than skill rebuilding |
| **Measurement Tool** | Accuracy, RT, calibration, and other traditional cognitive indicators | Judgment Autonomy Scale ("In XX situations, I believe making moral/social judgments is my own responsibility") |

### 5.3 Measurement Recommendations

**Independent Judgment Accuracy** (instrumental): standard cognitive tests, measuring correctness rate on four subtype tasks without AI assistance

**Self-efficacy** (constitutive): Likert scale — "Without AI help, I believe I can accurately judge a person's trustworthiness" (social type), "I trust my first moral intuition" (moral type)

**Judgment Responsibility Attribution** (constitutive, most critical indicator):
- Scenario description: "You encounter a moral dilemma at work, your first reaction is ___"
- Options: A. Think and judge independently / B. Ask AI for analysis first / C. Use AI's analysis as the main basis
- If this indicator systematically shifts from A toward B/C, it signals constitutive degradation

**Tracking Design Recommendation**: Longitudinal tracking of the same population (grouped by AI usage habits) for 2–5 years, measuring the above three indicators every 6 months. If, after instrumental degradation recovers (accuracy restored through training), responsibility attribution and self-efficacy remain below baseline — this supports the hypothesis that "constitutive degradation is harder to recover from than instrumental degradation."

---

## VI. Detecting the Hollow Period

### 6.1 Theoretical Definition

Hollow Period = the time window during which human ability has degraded to the point of being unable to independently complete critical tasks, while AI capability has not yet matured in all scenarios to fully substitute.

### 6.2 Detection Indicators

| Indicator | Definition | Data Source |
|-----------|-----------|-------------|
| **Human Independent Ability Curve** | Judgment accuracy without AI assistance, trend over time | Surprise unassisted test |
| **AI Capability Curve** | AI accuracy on that task (including edge cases / out-of-distribution cases) | Standard benchmark + adversarial / out-of-distribution test sets |
| **Coverage Gap** | AI accuracy on routine scenarios minus AI accuracy on edge scenarios | Same as above |
| **Failure Mode Detection Rate** | Proportion of AI errors identifiable by human operators | Mixed test of "AI correct vs. AI incorrect" |

### 6.3 Hollow Period Determination

When the following three conditions are simultaneously met, the Hollow Period has begun:

1. **Human Independent Ability** < safety threshold (e.g., 70% accuracy, depending on the domain)
2. **AI Routine Scenario Accuracy** > 95% (making people feel "AI is good enough") but **AI Edge Scenario Accuracy** < safety threshold
3. **Failure Mode Detection Rate** < 50% (humans can no longer effectively identify AI's out-of-boundary errors)

### 6.4 Most Urgent Monitoring Domains at Present

According to the degradation risk heat map, the Hollow Period for the perceptual type (radiology) may have already begun. Priority is recommended for establishing monitoring baselines in the following scenarios:

- Medical imaging diagnosis (radiology, pathology): partial empirical data already available
- Code review: AI code review tools rapidly proliferating
- Security monitoring: AI security alert analysis

---

## VII. Complementarity Map Cell Filling Standards

### 7.1 Current Filling Method

Currently, each cell (✅/❌/⚠️) of the Complementarity Map is based on comprehensive judgment from three sources: (a) cognitive science literature, (b) latest LLM research, (c) theoretical inference. However, systematic filling standards are lacking.

### 7.2 Standardized Filling Process (Recommended)

For the determination of "LLM reachability on subtype S dimension D," follow these steps:

```
Step 1: Define the minimum functional requirements for this subtype/dimension combination
  (e.g., "Social × Cost-sensitive": LLM needs to distinguish high-social-cost situations from low-social-cost situations, and give more conservative/more accurate responses to the former)

Step 2: Check whether a benchmark exists that tests this requirement
  (if yes: relevant subtasks of SJT; if no: mark "missing test — this is a blank domain")

Step 3: Check whether the benchmark includes unavoidability elements
  (if benchmark is purely text-based → determination may be overestimated, mark "text-mediated bias")

Step 4: Comprehensive determination
  - If a benchmark including unavoidability exists and LLM passes → ✅
  - If only a purely text-based benchmark is passed → ⚠️
  - If all benchmarks are failed → ❌
  - If from this dimension's definition, LLM architecturally cannot satisfy → ❌ structural unreachability
```

### 7.3 Current Confidence Levels for Each Cell

| Subtype × Dimension | Filling Confidence | Source of Uncertainty |
|--------------------|-------------------|----------------------|
| Perceptual × Cost① | Medium-high | Insufficient quantification of functional gap of pseudo-cost signals |
| Perceptual × Ignore② | High | OQ5/6/7 already have clear analysis pathways |
| Conceptual × Cost① | Medium | AlphaProof evidence exists in closed domains, open domains lack data |
| Conceptual × Ignore② | Medium-low | Direction-sense-deficit "substitute" experiment not yet conducted (OQ19) |
| Social × Cost① | Medium-high | SJT limitations are clear, lacking multi-channel comparison data (OQ15) |
| Social × Ignore② | Medium | No real-time social AI interaction experiments |
| Moral × Cost① | Medium-high | Köbis effect supports, but ecological validity of moral psychology experiments needs improvement |
| Moral × Embodied③ | High | Argument for structural unreachability is relatively solid |

---

## VIII. Confidence Levels for Degradation Risk Heat Map Time Nodes

| Time Node | Confidence | Source of Uncertainty |
|-----------|-----------|----------------------|
| **Present (2026)** | High | Existing empirical data (radiology JAMA 2023, Köbis 2025, China Economic Net 2024) |
| **2–3 years** | Medium | Technology diffusion speed is predictable, but cultural adaptation speed is unknown |
| **5 years** | Medium-low | Technological disruption (e.g., AGI) unpredictable; social backlash (anti-AI movement) may alter the curve |
| **10 years** | Low | Pure extrapolation — linear extension of current trends may be disrupted by technological/social/regulatory shocks |

**Recommendation**: Add a "key triggering events" list to each prediction in the heat map — if a certain event occurs before a given time point, how should the heat map be revised. For example: if by 2027 a social event involving "AI-caused social degradation" is widely discussed → accelerate predictions for social-type degradation.

---

*This appendix is new content added in Project v1.1, intended to respond to external reviewers' operationalization recommendations (innovation report recommendations 1–5, practicality report obstacle 3). Unclosed design questions correspond to the open questions in Section 6 of the Main Document — this appendix provides operationalization directions, but empirical verification still needs to advance.*
