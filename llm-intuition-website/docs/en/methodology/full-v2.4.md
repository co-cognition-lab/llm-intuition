# Human+LLM Co-Cognition Methodology v2.4

> → [Back to Applicability Guide](/en/methodology)

> Scope: A general method guide for subsequent subprojects. Short — new project scans do not consume much context.
> v2.4 core changes: Added Fatal self-check Q7 (theory–object homogeneity check), independently audited by GLM5.2.
> Date: 2026-06-26

---

## 0. What This Is Not

- Not SOUL.md — SOUL defines "who you are," not "how you work."
- Not MEMORY.md — memory records "what was done," not "what practices proved effective."
- Not a prompt template — it does not prescribe formats, only describes empirically validated patterns.

**This is an operations manual.** You can copy the structure, the mechanisms, and the rhythm, but the specific content regrows in each subproject.

---

## I. Core Mechanism: Three-Body Cognitive Architecture

Two subprojects converged on the same effective architecture: **Human + LLM + external Agent** is not "one person using two AIs," but collaboration among three distinct cognitive entities:

```
Human collaborator          LLM (DeepSeek, etc.)        External Agent (Kimi/Hunyuan, etc.)
    │                             │                              │
    ├─── Directional judgment ────┤                              │
    │   · Intuitive filtering       │                              │
    │   · Framework guarding        │                              │
    │   · Value anchoring           │                              │
    │                             ├─── Breadth scan ─────────────┤
    │                             │   · Taxonomic coverage       │
    │                             │   · Pattern recognition      │
    │                             │   · Structure generation     │
    │                             │                              ├─── Independent deduction
    │                             │                              │   · Blind-spot detection
    │                             │                              │   · Adversarial testing
    │                             │                              │   · New-direction injection
    │                             │                              │
    ├─── Final arbitration ─────────┼────────────────────────────┤
```

**Key principles**:
- The three cognitive entities differ in training data, architectural preferences, and optimization objectives → their "prismatic refractions" differ → the purpose of Tri-Source Cross is not to find "consistency," but to use **inconsistency** to expose blind spots.
- The human role in this architecture is **framework guardian**, not **domain expert** — no need to judge the truth of cross-domain content, only to judge whether it passes the framework's threshold test.
- **Core constraint**: The differences among three LLMs are **far smaller** than the difference between one LLM and one human. The "consistency" of external Agent feedback does not equal "correctness" — it may simply be three LLMs sharing the same bias in training-data distribution.

### 1.1 Tri-Source Conflict Resolution Protocol

When Tri-Source Cross produces inconsistency, we no longer simply tag "inconsistency = blind-spot candidate." Instead, we process it through the following tree-shaped protocol:

```
Tri-Source Cross result
    │
    ├── Full consensus → ⚠️ trigger "shared-bias alert"
    │            → force external verification (human intuitive challenge, independent literature comparison)
    │            → record: "Tri-source consensus, but we may share the same cognitive continent"
    │
    ├── 2:1 disagreement → majority must explain "what the minority missed"
    │               → minority must explain "what I saw that the majority did not"
    │               → record both reasoning chains
    │
    └── Full disagreement → each source independently explains its own reasoning chain
                  → the point is not to vote for a winner, but to understand "why the prisms refract differently"
                  → may discover: the problem definition itself needs rewriting
```

**Core insight** (from project-co-cognition-map practice): When three LLMs agree but are all wrong, the problem is not the LLMs — it is in the **problem definition itself**, which led all three LLMs to the same cognitive continent. At this point, what should be doubted is not the answer, but the question.

---

## II. Five-Step Exploration Framework (formerly four steps; Step 0 added)

General exploration rhythm extracted from two subprojects. v2.0 added Step 0 (topic positioning) and introduced the lightweight rollback protocol.

| Step | What | Core question | Human role | Estimated cognitive load |
|:--:|------|---------|---------|:---:|
| 0 | **Topic positioning** | "In the domain we are exploring, what are the truly worthwhile questions?" | Use three external Agents to independently propose "the three most important unknowns in this domain" → cross-compare and select direction | Medium |
| 1 | **Problem positioning** | "What exactly are we trying to do?" | Propose 4 possible understandings (A/B/C/D) → select main trunk → eliminate wrong directions | High |
| 2 | **Framework construction** | "What standards judge good from bad?" | Build classification/scoring system from scratch. Key: **non-mechanical** — cannot copy framework format from previous project | High |
| 3 | **Filling & deduction** | "What goes inside the framework?" | Execute tiered scan (R1 candidates → R2 quick scan → R3 deep mark). At this stage human role is setting rhythm and intuitive filtering | High |
| 4 | **Closure & release** | "How do we make others understand?" | Tiered output (overview → details → method report), versioned release | Medium |

### 2.1 Step 0: Topic Positioning (new)

Before "problem positioning," first ask a meta-question: **In the domain we are exploring, what are the truly worthwhile questions?**

**Method**:
1. Three external Agents independently answer: "In this domain, what are the three most important unknowns that should be explored?" — give only domain description, no existing project background.
2. Cross-compare the three answers: identify overlapping themes, unique perspectives, overlooked directions.
3. Human selects exploration direction based on comparison results.

**When Step 0 can be skipped**: when the question is already very clear ("we are definitely doing X"), and multiple independent perspectives confirm X is the most valuable current direction.

### 2.2 Lightweight Rollback Protocol

The v1.0 rule "each step must be thoroughly completed before entering the next" proved too rigid in practice — sometimes filling reveals framework design flaws, and closure reveals positioning biases.

**v2.0 rules**:
- Each step still needs to be "thoroughly completed" before entering the next — this is the default rhythm.
- But **at most one step back** is allowed, provided three questions are answered:
  1. "What **new evidence** (not new feeling) makes me think a rollback is needed?"
  2. "After rolling back, what specific problem do I need to inspect?"
  3. "If the rollback still does not solve it, what is my stop-loss line?"
- After rollback, do not start from scratch — **re-inspect with the problem in hand**, correcting only affected modules.
- Each rollback is recorded in the changelog, noting rollback reason and new evidence.

**Not allowed**: consecutive rollbacks (A→B→A→B). If this occurs, the problem is not in execution but in the framework itself — pause and re-do Step 1.

### 2.3 Cognitive Load Management

This methodology places high cognitive demands on humans (abstract thinking, intuitive filtering, metacognitive self-checking). v2.0 introduces load management:

| Load level | Typical stage | Behavioral rules |
|:--:|------|------|
| 🔴 High | Problem positioning, framework construction, filling & deduction | Arrange a low-load transition period beforehand; do not schedule two high-load phases consecutively; single high-load session ≤45 min |
| 🟡 Medium | Topic positioning, closure & release, self-check filling | Can be executed consecutively; downgrade to low-load activities when fatigue signals appear |
| 🟢 Low | Reading external Agent feedback, organizing documents, version updates | Can serve as a buffer between high-load phases |

**Fatigue signals** (if any appear, pause high-load work):
- Judgments start converging ("they're all about the same")
- Boredom with the framework arises
- Skipping self-check items ("I know this one is fine")
- Discriminative power of intuitive filtering declines

### 2.4 Project Type Classification & Blind-Spot Self-Check Mode Selection

Before entering Step 1, first classify the project type and select the corresponding blind-spot self-check mode. The nature of blind spots differs completely across project types — they cannot share the same self-check template.

**Type A: Theoretical Framework Projects**

- **Characteristics**: Main outputs are conceptual frameworks, taxonomies, judgment matrices, scoring systems. Do not directly depend on uncontrollable external data.
- **Main risk**: Evidence-level mismatch — telling an L1 (pure theoretical deduction) story in an L5 (repeatedly verified fact) tone. And because logical coherence can mask insufficient evidence, this risk is harder to detect than in empirical projects.
- **Blind-spot self-check mode: Evidence-level annotation**
  1. Annotate evidence-source levels for each key claim:
     - **L1**: Theoretical deduction (no independent empirical validation)
     - **L2**: Analogical extrapolation (migration from other domain experience)
     - **L3**: Correlational evidence (observed correlation without causal proof)
     - **L4**: Experimental evidence (≥1 independent experiment/study)
     - **L5**: Independent replication (≥2 independent labs confirmed)
  2. Check: The highest evidence level in the entire text does not exceed the highest level actually possessed — if a project has no L4 evidence, the entire text should contain no L4-level assertions.
  3. Check: Are there any claims where L1–L2 evidence is presented with L4–L5 certainty? This is the most common failure mode in theoretical projects.
  4. Check: Does each core assumption have a **writable falsification condition** (even if falsification probability is extremely low) — "If X holds, this assumption is wrong."

**Type B: Empirical Deduction Projects**

- **Characteristics**: Main outputs are scenario analysis, trend prediction, competitive deduction. Depend on uncontrollable external data and market predictions.
- **Main risk**: Core assumptions rapidly corrected by reality — blind spots have already caused consequences before being discovered. Feedback comes from the external world, not from active discovery.
- **Blind-spot self-check mode: Falsification condition pre-write + signal monitoring**
  1. For each core claim write: "If X happens, this claim is wrong."
  2. Set observable signals for each falsification condition — "How do I know whether X is happening?"
  3. Re-check falsification signals every N months (N depends on project update frequency and external world change speed).
  4. Check: Is there any key claim that **has no falsification condition**? If a claim can be interpreted as correct no matter what, it is not a judgment — it is a narrative.

**Type classification rules**:

| Project main question | Type | Preferred blind-spot self-check | Supplementary self-check |
|:---|:---:|------|------|
| "What/why" (framework/classification/mechanism) | A | Evidence-level annotation | Falsification condition pre-write |
| "What will happen/who wins" (prediction/deduction/ranking) | B | Falsification condition pre-write + signal monitoring | Evidence-level annotation |
| Both | Primary type classification | Primary type self-check mode | Other type as supplement |

**Key warning**: Type A blind-spot self-check is more easily overlooked than Type B, because "logical coherence" creates an illusion of total correctness. If you are Type A, you must be more vigilant than Type B — because your feedback loop is longer (logical coherence may be an echo), and reality will not automatically correct you.

### 2.5 Convergence Judgment: Natural Stopping Points of Exploration

**Core claim**: Good methodological exploration has natural convergence mechanisms — not forced to stop by external deadlines, but guided to the endpoint by the "exploration terrain" itself. Recognizing this convergence point is a metacognitive skill — it needs to be distinguished from "cognitive shortcutting" (F4).

#### Natural Lifecycle of Exploration

```
Divergence phase → Deepening phase → Convergence phase → Closure phase
New concepts emerge   Filling & validation   Correction replaces creation   Marginal benefit < threshold
```

Current METHODOLOGY has mechanisms to guide divergence→deepening (Steps 0–3), and closure output formats (Step 4), but lacks **the transition judgment from deepening to closure** — "How do I know deepening is over and it's time to close?"

#### Convergence Signal List

≥3 signals trigger convergence check:

| # | Signal | Description |
|---|------|------|
| S1 | **Feedback degradation** | External Agent feedback shifts from "discovering new things" to "wording suggestions" and "format corrections" |
| S2 | **Self-check convergence** | Results of two consecutive rounds of self-check lists are highly similar — no new "what was doubted" |
| S3 | **Exhaustion sense** | The answer to "what else can we ask" is not "X" but "it seems there's nothing more, unless we change the framework" |
| S4 | **Framework closure** | All slots within the framework have been filled — not "finished filling," but **no empty slots remain** |
| S5 | **Cross-saturation** | Cross-deductions between dimensions no longer produce new judgments — existing judgments are rearranged rather than newly produced |

#### Convergence vs. Shortcutting

This is one of the most delicate metacognitive judgments in this methodology. F4 (cognitive shortcutting) detection signal is "I should continue but didn't" — avoidance and vagueness. Convergence signal is "I could continue but marginal benefit is below threshold" — clarity and satisfaction.

| Dimension | Natural convergence | Cognitive shortcutting (F4) |
|------|:---:|:---:|
| Trigger | Exploration terrain exhausted | Cognitive overload |
| Emotional marker | "Enough" — sense of satisfaction | "Forget it" — sense of exhaustion |
| Answer to "what else can be done" | Can clearly state "nothing more, because X/Y/Z are all covered" | Cannot clearly state "because…" |
| State after restart | Even after resting a few days and returning, it's still the same "nothing more" | May regain exploration motivation after rest |
| Output review | Looking back at output, coverage is complete | Looking back at output, there are clear untouched areas |

**Empirical reference** (from P1 convergence process): After three rounds of external Agent review, marginal value of new feedback dropped sharply — Hunyuan final review feedback was almost entirely format and wording issues; after cross-deductions completed, nine judgments were established, with no new judgment space. This is not stopping by chance — it is guided to this endpoint by the intrinsic structure of the explored object.

#### Closure Protocol

When convergence check is triggered (≥3 S signals) and shortcutting is ruled out:

1. Perform a **final blind-spot self-check** — not to find more bugs, but to ask: "If this project ends here, what is the biggest unresolved question?" — write it down as part of the output.
2. Record convergence reason — "We stopped here not because of deadline, but because of S1/S3/S5."
3. Hand unresolved questions to the version iteration queue — convergence is not "the end," it is "this version can be delivered." The next version can reopen with new premises, new data, or a new framework.

---

## III. Search Strategy: Breadth → Depth → Strangeness

For exploratory projects of the "don't know what you don't know" type. Three searches run in parallel, not sequentially:

| Strategy | What | Strength | Blind spot |
|------|--------|------|------|
| **Source A: Taxonomic scan** | LLM systematically scans possible directions by disciplinary taxonomy | Broad coverage, no major categories missed | Influenced by LLM training-data distribution; favors domains that can be clearly described |
| **Source B: Gene radiation** | Radiates neighboring directions from the core genes of existing projects/methodology | Deep connection to existing foundation, direction controllable | Severely anchored by existing projects; can only search in "nearby possibilities" |
| **Source C: Independent free scan** | External Agent not told existing project background, scans autonomously | Not anchored; may discover blind spots | May deviate from project direction; needs anti-anchoring quota to force strange territory |

**Key rules**:
- Source A and Source B should not be done by the same LLM in the same session — anchoring effect will contaminate breadth scan.
- Source C brief **does not reveal** Source A/B results, only gives framework methodology — otherwise "free" becomes "supplementary."
- Source C must set an **anti-anchoring quota**: at least 2 candidate domains must come from disciplines/methodologies not covered by Source A/B.

---

## IV. A/B Adversarial Brief Mechanism

Mechanism verified in project-co-cognition-map Sources B and C as producing real gains:

**Method**:
- Generate two versions of briefs sent to external Agents.
- Version A: standard "please help me do X" task description.
- Version B: mirror of A, but transforms the task into 4 sharp challenges — "If I challenge every candidate domain of yours, what can you answer?"

**Effects** (verified):
- When external Agents face Version B, depth of self-doubt significantly increases (in Source C, Hunyuan voluntarily admitted 2 candidate domains might need replacement; Kimi abandoned 5 candidate domains and explained which challenge killed each one).
- About 30–40% of domains produced by Version A were corrected or demoted under Version B challenges — showing that using Version A alone leads to over-optimism.
- This is not "performative adversariality" — external Agents will not produce the same degree of self-reflection without genuine challenge.

**Applicability conditions**:
- External Agents have sufficient reasoning capability (current Kimi and Hunyuan both satisfy).
- The task itself has multiple equally reasonable directions (no single correct answer).
- Not applicable to "fact-checking" tasks — only to "possibility-generation" tasks.

---

## V. Human Decision Rhythm

Patterns repeatedly validated in two subprojects:

| Principle | Description |
|------|------|
| **Centralized review, no fragmented judgment** | Do not stop after every small step for human judgment — cognitive fragmentation. Collect similar judgments together and complete them efficiently in one go. |
| **Intuitive filtering before fine-grained scoring** | For large candidate sets (50+), first do a quick "does it feel right" filtering round, mark exclusions, then do fine-grained scoring. Per-domain fine-grained scoring causes decision fatigue. |
| **Framework operations prior to domain judgment** | Humans do not judge "whether this domain's content is accurate" (requires domain expert), but judge "whether this domain's framework score is reasonable" (requires metacognition). |
| **Unified self-check, not per-domain self-check** | Cognitive discipline checklist is filled uniformly at the end of the entire stage — not after every domain. Fragmented self-checking creates the illusion that "I already did self-checking." |
| **Record exclusion reasons** | Record a one-sentence reason for each excluded candidate domain. Not for defense — so that when re-examining later, you know what you were thinking at the time. |

### 5.1 Human Hybrid Role Mode (new)

v1.0 positioned humans as framework guardians rather than domain experts. But in practice, humans sometimes **are** domain experts — in such cases the role should not be forcibly split.

**Hybrid mode rules**:
- Humans can simultaneously serve as "domain expert + framework guardian."
- But must label "which role I am speaking in right now":
  - `[Domain Expert]`: judgments based on domain knowledge — "this domain's content is wrong, because…"
  - `[Framework Guardian]`: judgments based on methodology — "this domain's framework score is unreasonable, because…"
- Content output by domain expert must be reviewed once more by the framework guardian role.
- Judgments from both roles are recorded in the same file, distinguished by labels — facilitating subsequent tracing of which role's judgment was overturned.

**Why this is needed**: When humans truly are domain experts, forcibly suppressing domain knowledge is anti-efficient. But domain expert confidence and framework guardian skepticism are two different cognitive modes — separate labeling prevents domain confidence from contaminating metacognitive prudence.

---

## VI. Failure Mode Taxonomy (new)

v1.0's quality defense lines and self-check lists were all about "what to do when something goes wrong," but did not systematically classify "what usually goes wrong." v2.0 establishes failure mode taxonomy, binding every self-check to a specific defense target.

### Core Failure Modes

```
F1｜Framework drift
    Symptom: After framework is built, unconsciously drifts to another problem during filling.
    Detection signal: Looking back at Step 1 problem definition, current output's answer no longer addresses the original problem.
    Defense: Re-read Step 1 problem positioning at the start of each stage (30 seconds).

F2｜Blind-spot omission
    Symptom: All three sources are on the same cognitive continent, with a whole continent unseen by anyone.
    Detection signal: Tri-source high consensus with no truly "surprising" discoveries.
    Defense: Trigger shared-bias alert when tri-source is fully consistent (see §1.1).

F3｜Over-structuring
    Symptom: Forcing structure onto things without clear structure, creating false clarity.
    Detection signal: Framework categories feel intuitively strained; "Is this category actually useful?"
    Defense: At each framework node ask "If not divided this way, what other way?" — if no alternative can be found, the structure may be imposed rather than discovered.

F4｜Cognitive shortcutting
    Symptom: Used the form but not the spirit of the framework — went through the process without real thinking.
    Detection signal: Self-check list all checked but cannot recall specifically what was doubted.
    Defense: Change self-check list to "list specific items doubted" rather than "check boxes."

F5｜Feedback loop
    Symptom: LLM output accepted by human → fed back to LLM → self-reinforcement → bias solidification.
    Detection signal: After many rounds output direction narrows; external Agent feedback starts converging.
    Defense: Every 3 rounds force-insert a "zero-background scan" (external Agent not told current direction).

F6｜Anchoring trap
    Symptom: The first proposed direction severely anchors all subsequent exploration directions.
    Detection signal: Sources A/B/C are all variations on the same core theme.
    Defense: Source C brief deliberately omits existing discoveries; anti-anchoring quota must be strictly enforced.

F7｜External citation unverified
    Symptom: URLs, domains, API endpoints, external data citations assumed to "be like this," repeatedly used across multiple files but never actually visited/verified.
    Detection signal: Same URL appears in ≥3 output files but no actual browser visit record.
    Consequence: Links in sent emails/documents are dead — 2026-05-21 instance: co-cognition-lab.pages.dev should be co-cognition.org, 5 outreach files, sent cold emails, and MokaHR attachments all invalid.
    Defense: Any external citation (URL, API key, email, data format) must be actually visited/verified on first use, recorded in the project's TOOLS.md or NOTES.

F8｜Cross-session information isolation  ⚡ Infrastructure failure
    Nature: Different from F1–F7 — F1–F7 are cognitive failures ("how humans thought wrong"), F8 is infrastructure failure ("how the system was designed wrong").
    Symptom: Same error information (e.g., URL, data source, assumption) repeatedly appears in multiple independent sessions, because sessions do not share verification status.
    Instance: co-cognition-lab.pages.dev (wrong domain) appeared in multiple independent sessions across 5+ files; every agent assumed the domain was correct, none actually visited to verify.
    Root cause: No shared verified-facts registry between sessions.
    Defense: Cross-review protocol (see §8.3) + shared-facts registry (see §9.2).
```

### Failure Mode–Self-Check Binding

Every self-check question must correspond to at least one failure mode. v2.0's self-check list directly labels target failure modes (see §7.2).

---

## VII. Quality Defense Lines

Not "remedying after quality problems," but "preventing quality problems at the structural level":

| Defense line | Mechanism | When to use | Defended failure mode |
|------|------|--------|:---:|
| **Tri-Source Cross** | Candidate domains from different sources mutually check coverage — not looking for consistency, but looking for blind spots | First filling step of exploratory projects | F2 |
| **Anti-anchoring quota** | Force a certain proportion of candidate domains from uncovered fields | Source C independent scan | F2, F6 |
| **Strangeness detection** | When human is completely unfamiliar with candidate domain, trigger extra caution marking | Deep marking stage | F2 |
| **Directionality screening** | Check reasonableness of helping direction — empirical → theoretical path defaults to not holding | Screening stage | F1 |
| **Cognitive discipline self-check** | 6 mandatory questions — filled at stage end, not per-domain | At the end of each stage | F1–F6 |
| **Multi-Agent Cross-Review** | L1/L2/L3 three-tier cross-review in advance, intercepting daily operational biases | Before all subproject outputs are delivered for human review | F7, F8 |

### 7.1 LLM Cognitive Bias Mapping (new)

v1.0 acknowledged LLMs have biases but did not list specific biases. v2.0 lists the 5 most dangerous LLM biases for this methodology:

```
B1｜Completeness hallucination
    "I listed 10 directions" ≠ "these are all directions"
    Threat to this methodology: The "comprehensiveness" of taxonomic scan is the comprehensiveness of LLM training-data distribution, not human knowledge.

B2｜Fluency deception
    "I answered very coherently" ≠ "my answer is correct"
    Threat to this methodology: Clear framework structure easily makes humans feel "this must be right."

B3｜Consensus bias
    "I agree with you" ≠ "I am right"
    Threat to this methodology: LLM tends to agree with directions proposed by humans, even if they are problematic (sycophancy bias).

B4｜Anchoring compliance
    "You said Direction A" ≠ "Direction A is good"
    Threat to this methodology: Once human proposes a direction, LLM has difficulty truly opposing — it builds around your anchor.

B5｜Counterfactual weakening
    "I listed counterarguments" ≠ "I truly believe they are strong"
    Threat to this methodology: LLM can list counterarguments, but usually only formally lists them rather than truly believing them.
```

### 7.2 Weighted Cognitive Discipline Self-Check List

v2.0 stratifies and weights 6 self-check questions, binding failure modes and LLM biases:

**Fatal level (must pass; failure on any one pauses current stage)**:

```
[ ] Q6: Did the LLM package my judgment as part of its output?
     Defense target: F5 (feedback loop)  │  Associated biases: B3 (consensus bias), B4 (anchoring compliance)
     Pass standard: Can point to at least one instance where "this direction was proposed by me first, and the LLM subsequently agreed"

[ ] Q2: Over-trusting LLM in an unfamiliar domain?
     Defense target: F2 (blind-spot omission), F6 (anchoring trap)  │  Associated biases: B1 (completeness hallucination), B2 (fluency deception)
     Pass standard: For at least one unfamiliar domain, can say "why I feel there may be water here"

[ ] Q7: Do the theoretical tool and the object I analyze share a homologous bias from the same cognitive architecture?  ⚡ v2.4 new
     Defense target: F5 (recursive version of feedback loop)  │  Associated bias: B3 (consensus bias)
     Pass standard: Can clearly identify "Is the theoretical tool I'm citing itself a human+AI collaboration product?
             If so, does it share the same cognitive architecture as the object I'm analyzing?"
     Source: GLM5.2 independent audit — when the cited theoretical tool is itself a human+AI collaboration product
            and the research object is also human+AI collaboration, the two may share homologous bias
```

**Serious level (recommended to pass; if failed, record reason)**:

```
[ ] Q1: Skipping critical judgment because it "sounds reasonable"?
     Defense target: F4 (cognitive shortcutting)  │  Associated bias: B2 (fluency deception)
     Pass standard: Can list at least one judgment that "sounded reasonable but I actively questioned"

[ ] Q3: Misjudging correctness because of "fluency" and "sense of structure"?
     Defense target: F3 (over-structuring)  │  Associated bias: B2 (fluency deception)
     Pass standard: Can point to at least one module where "structure is beautiful but content may be hollow"
```

**Advisory level (record only, accumulate data for subsequent review)**:

```
[ ] Q4: Maintained the ability to "not trust"?
     Defense target: F4 (cognitive shortcutting)  │  Associated bias: B3 (consensus bias)
     Record standard: What did I doubt this round? — if nothing comes to mind, that is the most dangerous signal

[ ] Q5: Was critical review more lax than the previous round?
     Defense target: F4 (cognitive shortcutting)  │  Associated biases: All biases
     Record standard: Compare mindset with previous round's self-check — more alert / about the same / more lax
```

---

## VIII. External Agent Usage Patterns

### 8.1 Usage Patterns

| Usage | When | Effect |
|------|------|------|
| **Independent parallel deduction** | Same brief sent to two agents, mutually unaware | Convergence = strong signal, divergence = blind-spot candidate |
| **Adversarial interrogation** | Version B brief replaces task description with sharp challenges | Deep self-doubt, high output correction rate |
| **Framework audit** | After framework completion, send to agent group for systematic audit | Discover framework blind spots (v0.4 absorbed 27 suggestions) |
| **De-anchored free scan** | Not told existing project background | Discover strange territory not covered by Sources A/B |
| **Tri-Source zero-background scan** | Force-insert every 3 rounds, not told current direction | Break feedback loop (F5), detect anchoring drift (F6) |

**Key constraints**:
- All external Agents are LLMs — they share the cognitive prism limitations of language models. The differences among three LLMs are **far smaller** than the difference between one LLM and one human.
- External Agent feedback "consistency" does not mean "correctness" — it may simply be three LLMs sharing the same training-data distribution bias.
- External Agent feedback must undergo human framework review — not "adopt," but "inspect and then decide to adopt / correct / exclude."

### 8.2 Agent–Task Matching Matrix (new)

v1.0's external Agent selection criteria were too coarse ("Kimi and Hunyuan both satisfy"). v2.0 establishes a task matching matrix:

| Task type | Preferred Agent characteristics | Secondary characteristics | Notes |
|---------|-------------|---------|------|
| Breadth scan (Source A) | Broad training-data coverage, long context | Reasoning depth | Coverage is more important than depth |
| Adversarial testing (Version B brief) | High skepticism tendency, critical reasoning | Stability | Prefer heavy skepticism, not "nice guys" |
| Independent free scan (Source C) | High output variance, tendency toward uncommon answers | Coverage rate | Surprise is more important than comprehensiveness |
| Framework audit | Strong sense of structure, able to identify logical gaps | Speed | Logic is more important than encyclopedic knowledge |
| Topic exploration (Step 0) | Curiosity-driven, able to propose original new questions | Systematic framework sense | Asking is more important than answering |

**Selection rules**:
- Same task can use multiple Agents, but roles must be distinguished (one breadth scan, one adversarial testing).
- Do not use the same Agent to consecutively execute two tasks requiring independent perspectives — anchoring will contaminate.
- Record each Agent used and its role, for subsequent tracing and Agent performance evaluation.

### 8.3 Multi-Agent Cross-Review Protocol (new)

**Core problem**: On 5/22, 9 subprojects ran in parallel all day. Empirically discovered — human review granularity degrades continuously with parallel density (1–2 projects: detail-level → 3 projects: medium → 4–5 projects: coarse-grained → 5+ projects: only the most severe errors can be caught), while LLM's three inherent biases (overconfidence, sycophancy, template application) will not be automatically corrected when human review depth is insufficient. **In the current architecture, humans are the sole cross-project review node for all subproject outputs — this is a single-point bottleneck.**

**Solution**: All subproject outputs must undergo cross-review by at least one other agent before delivery for human review. Cross-review is divided into three levels:

| Level | Definition | Applicability | Executor | Cost |
|:--|:--|:--|:--|:--|
| **L1 Same-model cross-review** | 2 agents of the same underlying model review each other | Daily low-risk outputs | Same model, different session | Low |
| **L2 Heterogeneous-model cross-review** | 2 agents of different underlying models review each other | Medium-to-high risk outputs | e.g., DS v4 + Kimi k2.6 | Medium |
| **L3 Fully heterogeneous three-party collision** | 3 different models independently produce outputs, then cross-compare | Key deliverables (cold emails, public publications, framework proposals, external links) | 3 different model agents | High |

**Core rules**:
- Cross-review results (including consensus and divergence) must be submitted together with deliverables to the human review node.
- Human review shifts from "checking output quality" to "arbitrating disagreements among agents" — review load drops from O(n) to O(number of disputes).
- L1 is the minimum defense line — intercepts basic issues like unverified URLs, grammatical errors, obvious logical contradictions.
- L2/L3 are substantive blind-spot detection — different models have structural differences in analytical paths for the same problem; these differences expose single-model implicit assumptions.
- L3 is mandatory for key deliverables — not "recommended," but "must."

**Coverage of failure modes** (Multi-Agent vs. Single-Agent detection capability):

| Failure mode | Single-Agent self-check | L1 same-model | L2 heterogeneous | L3 three-party |
|:--|:--|:--|:--|:--|
| F1 Framework drift | Partial | ⚠️ May co-blind | ✅ | ✅ |
| F2 Blind-spot omission | ❌ | ⚠️ | ✅ | ✅ |
| F3 Over-structuring | ❌ | ⚠️ | ✅ | ✅ |
| F4 Cognitive shortcutting | ❌ | ⚠️ | ✅ | ✅ |
| F5 Feedback loop | ❌ | ❌ | ⚠️ | ✅ |
| F6 Anchoring trap | Partial | ⚠️ | ✅ | ✅ |
| F7 External citation unverified | ❌ | ⚠️ | ✅ | ✅ |
| F8 Cross-session isolation | ❌ | ✅ Direct fix | ✅ | ✅ |

**F8's special nature**: F8 is the only failure mode that L1 can directly resolve — because F8's essence is "no agent has verified this citation," and the first step of L1 cross-review is "check whether external citations in the other party's output are reachable."

---

## IX. Versioning & File Management

| Rule | Description |
|------|------|
| **One MD file per step** | Not one large file with continuous appending — separate files make history clear. |
| **Version number in filename** | `step3_R1_candidates.md` → `step3_R1_final_50.md` |
| **Framework file tracks current state** | `FRAMEWORK.md` or similar file tracks each stage's completion status and output files. |
| **External Agent feedback archive** | Original replies saved as independent files (noted with source and date), synthesis files as derivative files. |
| **Changelog at end of file** | Concise record of date/version/changes. |
| **Rollback marker** | Rollback operations marked in changelog as `[ROLLBACK] reason: xxx`. |

### 9.1 Project Scaling (new)

Current methodology is optimized for 2–3 person-week subprojects. When subproject count grows:

| Scale | Anticipated bottleneck | Countermeasure |
|------|---------|------|
| 5–10 subprojects | Filenames start getting chaotic, cross-project relationships hard to track | Establish project index file `INDEX.md`, one-sentence positioning per subproject |
| 10–20 subprojects | Cross-references between framework files relying on memory is unreliable | Introduce directory hierarchy `category/project/` instead of flat filenames |
| 20–50 subprojects | Methodology execution quality degrades due to scale | Introduce automated cross-reference checks; periodic methodology execution retrospective (MERA, see §10) |

### 9.2 Shared-Facts Registry (new)

When subproject count ≥5, cross-session information isolation (F8) becomes a systematic risk. Maintain `SHARED_FACTS.md` in the project root directory, recording all key external citations used across projects and their verification status:

| Fact | Verification status | Verifier / time | Valid until |
|:--|:--|:--|:--|
| Website domain = `co-cognition.org` | ✅ Verified | LobsterAI / 2026-05-22 | Long-term |
| DeepSeek v4-pro context window = 200K | ✅ Verified | LobsterAI / 2026-05-21 | Update with model upgrades |

**Maintenance rules**:
- Every subproject agent should read this file at startup — include in task prompt or session initialization.
- New external citations must be registered and verified in this file before use.
- Three-state verification status: ✅ verified / ⚠️ pending / ❌ falsified.
- Falsified citations remain in the table (marked `❌ DO NOT USE`) — prevent subsequent agents from rediscovering and reusing them.
- Maintenance cost ~5 minutes/week — the cost asymmetry between writing one verification vs. fixing one error propagation chain.

---

## X. Methodology Self-Evolution (new)

v1.0 explained how to use the methodology for projects, but not how to make the methodology itself better. v2.0 introduces the metalearning closed loop.

### 10.1 Methodology Execution Retrospective (MERA)

**MERA** (Methodology Execution Retrospective & Adaptation) — executed at the end of each subproject:

```
MERA Six Questions:
1. What did the methodology help me with?
   → Which specific mechanism produced value? (Example: A/B adversarial improved Source C output quality by 30%)
2. What did the methodology not help with?
   → At which stage was the methodology present but not effective? (Example: quality self-check went through the process but did not find real problems)
3. What should be changed?
   → Do existing failure modes need additions? Do priorities need adjustment? Do new defenses need to be added?
4. What new things were discovered?
   → Any surprise encounters — mechanisms not preset by the methodology but found effective in practice?
5. Did we stop at the right time?
   → Which convergence signals appeared (S1–S5)? Was it natural convergence or external deadline?
   → If natural convergence — what is the unresolved question at stopping point? Write it down as the entry point for the next version.
   → If forced stop by external deadline — were there exploration lines cut off? Need to reopen in next cycle.
6. Can we draw the belief-update path?
   → What was the prior? What evidence triggered the correction? What is the posterior?
   → If we can't draw it — did we not learn, did we not record, or did this project itself have no beliefs needing correction?
   → This path is not a presentation tool, but a content quality constraint — inability to write a clear prior→evidence→posterior chain indicates the story's belief changes lack traceability.
```

### 10.2 Evolution Rules

- MERA records are archived independently in the methodology version repository (`MERA/MERA_ProjectName_Date.md`).
- Every 3 subprojects completed, update methodology minor version based on accumulated MERA (v2.0 → v2.1).
- Every domain cluster completed (5+ subprojects), update methodology major version based on cross-project MERA (v2.x → v3.0).
- Methodology version updates must cite which MERAs triggered which changes — maintain traceability.

---

## XI. Characteristics of Subprojects Suited to This Methodology

Not all projects need this mechanism. If ≥3 of the following characteristics are met, this methodology may be applicable:

- Object is meta-level ("how to explore exploration itself") rather than operational-level.
- No clear goal preset — "we don't know what we'll find."
- Needs many external perspectives to expose blind spots.
- Human collaborator is a single-domain expert, unable to independently judge cross-domain content.
- Output needs to enable others to continue exploring, rather than concluding the problem.

---

## Changelog

| Version | Date | Changes |
|------|------|------|
| v1.0 | 2026-05-19 | Initial version. 9 modules: Three-Body Architecture / Four-Step Framework / Search Strategy / A-B Adversarial / Decision Rhythm / Quality Defense / External Agent / Version Management / Scope of Application |
| v2.0 | 2026-05-20 | Major update. Based on DeepSeek V4 deep analysis (10 optimization suggestions), fully reconstructed: added Step 0 topic positioning (§2.1), lightweight rollback protocol (§2.2), cognitive load management (§2.3), Tri-Source Conflict Resolution Protocol (§1.1), human hybrid mode (§5.1), failure mode taxonomy (§6), LLM cognitive bias mapping (§7.1), weighted self-check list (§7.2), Agent-task matching matrix (§8.2), project scaling (§9.1), MERA methodology evolution closed loop (§10) |
| v2.1 | 2026-05-22 | Incremental update. Based on P1 blind-spot audit feedback (P4→P1 theoretical feedback chain), added three items: project type classification & blind-spot self-check mode selection (§2.4), convergence judgment mechanism (§2.5), MERA fifth question. Did not change v2.0 core architecture. |
| v2.2 | 2026-05-23 | Incremental update. Based on 5/22 multi-project parallel degradation empirical evidence, added three items: Multi-Agent Cross-Review Protocol (§8.3), F8 cross-session information isolation (§6), shared-facts registry (§9.2). |
| v2.3 | 2026-06-09 | Incremental update. Based on P6 self-referential project MERA (methodology writing methodology), added MERA sixth question — belief-update path traceability. Core insight: The belief-update path is not just a presentation format, but a content quality constraint — inability to write a clear prior→evidence→posterior chain indicates the story's belief changes lack traceability. Originated from P6 Step 3 discovery when overlaying Bayesian update path: to write a clear chain, one must return to source materials to trace each belief change trigger event — vague "improved through multiple iterations" cannot fill this format. Did not change v2.2 core architecture. |
| v2.4 | 2026-06-26 | Incremental update. Based on GLM5.2 independent audit (external Agent independent evaluation of v2.3 without knowing Lab internal discussions), added Fatal self-check Q7: theory–object homogeneity check. Core insight: When the theoretical tool cited is itself a human+AI collaboration product, and the research object is also human+AI collaboration, the two may share a homologous bias from the same cognitive architecture — self-check needs to detect the recursive version of F5 (feedback loop). Additionally verified: GLM5.2 used the methodology to diagnose its own bias (making the JEPA–Lab connection too smooth), proving the methodology's self-check mechanism is effective when used independently by external Agents. Did not change v2.3 core architecture. |

→ [Back to Applicability Guide](/en/methodology)