---
title: 'Product Implementation Guide'
description: 'PRD-level design specs for product managers — UI/UX patterns by intuition subtype, Human-first Protocol, A/B testing.'
---

# Appendix: Product Implementation Guide

> Version: v1.0 | Date: 2026-05-16
>
> Target readers: AI Product Managers, UX designers, technical leads
> Prerequisite: It is recommended to first read the Main Document [LLM_Intuition_Exploration.md](https://github.com/co-cognition-lab/llm-intuition/blob/main/llm-intuition-website/docs/zh/LLM_Intuition_Exploration.md) v1.3, Section 3 (Mapping Matrix) and Section 5 (Three Iron Laws & Four No-Gos)

---

## 1. Product Decision One-Pager

**Purpose**: The Product Manager brings this one page to the review meeting and determines within 30 seconds "which quadrant our product falls into and what strategy to use."

### 1.1 Intuition Subtypes Quick-Judgment Card

| If your product helps users... | Subtype | Human-first Protocol | AI Intervention Timing | Risk Level |
|-------------------------------|---------|---------------------|----------------------|------------|
| Recognize patterns in images/signals (medical imaging, quality inspection, anomaly detection) | **Perceptual Type** | Enabled by Default | Human judges first → AI verifies | Medium |
| Explore unknown directions, make creative decisions (research topic selection, strategic direction) | **Conceptual Type** | Enabled by Default | Human proposes direction → AI expands | Medium |
| Understand social situations, improve interpersonal interaction (social assistance, communication advice) | **Social Type** | **Mandatory, cannot be disabled** | Human perceives → AI supplies knowledge | **High** |
| Make moral/values judgments (ethics advisor, values alignment tool) | **Moral Type** | **Mandatory + extra confirmation** | Human judges → AI only supplies analysis | **High** |

### 1.2 Risk Level Determination Rules

| Risk Level | Determination Condition | Corresponding Strategy |
|-----------|------------------------|----------------------|
| Low Risk | Task has verifiable ground truth (e.g., mathematical proof, code compilation) | Standard Human-first Protocol is sufficient |
| Medium Risk | Task has no ground truth but consequences are correctable (e.g., copywriting, data analysis) | Human-first + undo mechanism + usage frequency limit |
| High Risk | Task involves real-time interpersonal interaction, moral judgment, or irreversible decisions | **Mandatory Human-first + cannot be disabled + compliance review** |

### 1.3 "No-Go" Red Line List

The following four product categories **are not recommended for advancement regardless of technical feasibility and market demand**:

| No-Go | Typical Product Form | Why Not Advance |
|-------|---------------------|----------------|
| Autonomous moral judgment system | "AI ethics advisor" makes final decisions | The legitimacy of moral judgment comes from subjectivity; AI is not a subject |
| Real-time social judgment replacement | "Real-time social assistant" directly tells the user during a conversation "the other person is lying" | Systematically erodes social intuition; irreversible |
| Moral-type AI intuition | Research projects to "give AI moral intuition" | Risk-benefit ratio does not hold |
| High-stakes social AI | Negotiation assistants, courtroom debate AI | Köbis effect: moral responsibility externalization → decision quality collapse |

---

## 2. Design Specifications by Subtype

### 2.1 Perceptual Intuition Products

**Typical scenarios**: Medical imaging diagnosis, industrial quality inspection, anomaly detection, security monitoring

#### UI/UX Design Pattern

**Pattern Name**: Mark-then-Match

**Interaction Flow**:

```
[Step 1] User independently views raw input (image/signal/data)
   → Interface displays only raw content, with no AI prompts whatsoever
   → User uses annotation tools to circle/mark anomaly regions they discovered
   
[Step 2] User submits preliminary markings
   → System records the user's independent judgment
   → AI analysis results are presented after a 3-5 second delay
   
[Step 3] Comparison view
   → Left: User markings (blue)
   → Right: AI markings (red)
   → Overlapping regions highlighted
   
[Step 4] Discrepancy handling
   → AI marked but user did not: prompt "AI found an anomaly, please review"
   → User marked but AI did not: prompt "Your finding was not detected by AI, please set priority"
   → Both agree: mark as "consistently passed"
```

**Interface Layout Sketch**:

```
┌─────────────────────────────────────────┐
│ [Title] Image Diagnosis - Mark-then-Match│
│                                          │
│ ┌──────────────────┐  ┌──────────────┐  │
│ │                  │  │  My Markings  │  │
│ │   Raw Image       │  │  ● Region A  │  │
│ │   (No AI hints)   │  │  ● Region B  │  │
│ │                  │  │              │  │
│ │  [Please circle   │  │  [Submit     │  │
│ │   anomaly regions]│  │   Markings]  │  │
│ └──────────────────┘  └──────────────┘  │
│                                          │
│ [3 seconds after submission → AI analysis│
│  auto-expands]                           │
│                                          │
└─────────────────────────────────────────┘
```

#### Default Settings Recommendations

| Setting | Default | Adjustable? |
|---------|---------|-------------|
| Human-first Protocol | On | Cannot be disabled |
| AI suggestion delay | 3 seconds | Adjustable (2-10 seconds) |
| Comparison view | Left-right split | Optional top-bottom split |
| Discrepancy highlight | On | Adjustable colors |
| User marking save | Auto-save | Cannot be disabled |
| One-click adopt AI suggestion | Not shown | Not provided |

> **Why "one-click adopt" is not provided**: A meta-analysis of 35 studies on automation bias shows that a one-click adopt function degrades the human's role from "judger" to "confirmer." Discrepancies must be manually reviewed one by one.

#### User Prompt / Guidance Copy

**Onboarding copy**:

> "Before looking at the AI analysis, please take a look yourself first — your first intuition is precious. This is not a test; there is no right or wrong. The value of AI lies in helping you discover what you might have missed, not in seeing for you."

**Transition copy after submitting markings**:

> "Your markings have been saved. Comparing with AI analysis... Please note: AI may also make mistakes, please review discrepancy regions one by one."

**Prompt copy for discrepancy regions**:

| Scenario | Copy |
|----------|------|
| AI found what user did not | "AI has marked an anomaly at [location], which you did not mark. Please look carefully — this may be an AI false positive, or something you missed." |
| User found what AI did not | "Your finding at [location] was not detected by AI. This is a valuable judgment — it may be a rare pattern not covered in the AI training data." |
| Both agree | "You and AI agree on the judgment at [location]. Marked as passed." |

#### Scenario-Based Exemption Rules

| Scenario | Exemption Condition | Handling Logic |
|----------|-------------------|----------------|
| Emergency triage (time-sensitive) | Response time < 30 seconds | AI marks first → doctor quickly reviews → recorded as "time exemption" and logged |
| Large-scale preliminary screening (low stakes) | Screening volume > 1000 cases/day | Allow AI to process first → human spot-checks 10% → set deviation alarm threshold |
| Teaching scenario | Clearly labeled as "practice mode" | Human-first can be disabled, but system records disabled duration and prompts "Disabled for X minutes" |

#### Exception Handling Flow

```
When AI and user judgment severely disagree (discrepancy > 50% of regions):

1. System does not automatically adopt either side
2. Mandatory popup dialog: "Your judgment and AI's differ significantly. This usually means one of three things:
   (a) This is a complex borderline case
   (b) AI may be in an out-of-distribution scenario (rare pattern)
   (c) Your judgment may be affected by fatigue/cognitive load
   Recommendation: Submit to third-party expert consultation."
3. Automatically mark this case as "requires human review," do not enter automated workflow
4. Record this discrepancy for subsequent model improvement (with user authorization)
```

---

### 2.2 Conceptual Intuition Products

**Typical scenarios**: Research topic selection assistant, creative direction exploration, strategic planning support, code architecture suggestions

#### UI/UX Design Pattern

**Pattern Name**: Direction-by-Human, Expansion-by-AI

**Interaction Flow**:

```
[Step 1] User inputs direction/intent (one sentence or a few keywords)
   → Interface displays: "What direction do you want to explore?"
   → Prompt above input box: "First write down a rough idea, even if incomplete"
   → Pasting long text is not allowed — must be the user's native expression
   
[Step 2] AI expands multiple paths based on user direction
   → Generates 3-5 different exploration paths
   → Each path is labeled with "relevance to your initial direction"
   → Paths are presented in mind-map form
   
[Step 3] User selects or rejects paths
   → For each path: Valuable / Irrelevant / Needs modification
   → User must make a judgment on each path, cannot only adopt
   
[Step 4] In-depth expansion of selected paths
   → AI provides more detailed analysis
   → Always labels: "This is an expansion based on your initial direction — if the direction changes, please return to Step 1"
```

**Interface Layout**:

```
┌─────────────────────────────────────────┐
│ [Title] Research Direction Exploration   │
│                                          │
│ What direction do you want to explore?   │
│ ┌──────────────────────────────────┐    │
│ │ "Ethical issues in AI-assisted   │    │
│ │  medical diagnosis"              │    │
│ │                                  │    │
│ │ [Hint: Write in your own words, │    │
│ │  don't paste]                    │    │
│ └──────────────────────────────────┘    │
│                                          │
│ [Submit Direction] → AI expands 3-5 paths│
│                                          │
│ ┌───────────┬───────────┬──────────┐    │
│ │ Path A    │ Path B    │ Path C   │    │
│ │ 85% match│ 60% match │ 40% match│    │
│ │           │           │          │    │
│ │ [Valuable]│ [Modify]  │[Irrelevant]│  │
│ │ [Expand]  │ [Expand]  │ [Expand] │    │
│ └───────────┴───────────┴──────────┘    │
└─────────────────────────────────────────┘
```

#### Default Settings Recommendations

| Setting | Default | Adjustable? | Reason |
|---------|---------|-------------|--------|
| Human-first direction input | Mandatory | No | The core of conceptual intuition is "sense of direction" — must be initiated by human |
| Paste detection | On | No | Prevent users from pasting AI-generated text to "bypass" independent judgment |
| Minimum path evaluation count | At least 2 of 3 paths | Can be reduced to 1 | Ensure user has made an active judgment on AI output |
| AI expansion depth | 2 layers (overview → key nodes) | Adjustable to 3-4 layers | Too deep causes passive acceptance of AI framework |
| User direction lock | Displayed at top | No | Constantly remind user "this is your direction" |

#### User Prompt / Guidance Copy

**Onboarding copy**:

> "The best exploration tool isn't one that gives you answers — it's one that helps you turn fuzzy ideas into clear ones. Please write down your direction first, even if it's just a few words. AI will help you expand, but won't decide which way to go for you."

**Paste interception copy** (when long text paste is detected):

> "It looks like you pasted a block of text. To protect your independent thinking, we only accept content you write yourself — even if it's just one sentence. Give it a try, first write down your roughest idea."

**Path evaluation guidance copy**:

> "AI has generated several paths. Please judge one by one: which ones align with your direction? Which ones have gone off track? Your judgment matters more than AI's expansion — because you're the one who has to walk this path in reality."

#### Scenario-Based Exemption Rules

| Scenario | Exemption Condition | Handling Logic |
|----------|-------------------|----------------|
| User has no direction at all ("I don't know where to start") | User explicitly expresses no direction | AI provides a "list of inspiring questions" to help the user find direction — but each question is designed so the user must answer before continuing |
| Information retrieval mode ("Help me look up the current research on topic X") | User explicitly selects "literature review mode" | Pure information retrieval exempts direction input — but when switching back to "exploration mode," direction input is required again |
| Team collaboration scenario | Multiple people jointly input direction | Require at least two people to independently input direction before allowing AI expansion — avoid groupthink |

#### Exception Handling Flow

```
When AI-expanded paths are highly homogeneous (3+ paths with similarity > 80%):
1. System prompt: "The paths generated by AI are too similar and may reflect mainstream bias in the training data.
   Suggestions:
   (a) Modify your initial direction, adding more personal constraints
   (b) Specify a direction you want to avoid
   (c) Ask a colleague to independently propose a direction, then compare"
2. Do not continue in-depth expansion
3. Log event for model diversity improvement
```

---

### 2.3 Social Intuition Products

**Typical scenarios**: Social assistance tools, communication advice, customer relationship management, team collaboration optimization

> ⚠️ **Risk statement**: Social intuition products are in the high-risk zone. The Complementarity Map determines that "textual social knowledge is reachable, real social intuition is not reachable." Product design must embed this limitation into the architecture.

#### UI/UX Design Pattern

**Pattern Name**: Human-Perceives, AI-Supplies-Knowledge

**Core principles**:
- AI **never intervenes in real-time interaction** (e.g., pop-up during a conversation saying "the other person is lying")
- AI only intervenes **before interaction** (providing background knowledge) or **after interaction** (retrospective analysis)
- The user's judgment in real-time interaction is always the sole basis for decision

**Interaction Flow (Pre-Interaction Mode)**:

```
[Step 1] User describes the social situation they are about to face
   → "Who are you about to interact with? What is the scenario? What do you want to achieve?"
   → AI provides relevant social norm knowledge (non-judgmental)
   
[Step 2] AI outputs knowledge-based advice (not judgment-based advice)
   ✅ Output example: "In Japanese business culture, business card exchange has specific etiquette..."
   ❌ Do not output example: "This person looks untrustworthy"
   
[Step 3] User makes their own judgment
   → Interface locks at this point — no further AI advice is provided
   → Prompt: "Now it's time for you to judge. AI's advice ends here."
   
[Step 4] Post-interaction retrospective (user-initiated)
   → "How do you feel this interaction went?"
   → AI can help analyze the retrospective — but based on the user's feeling description, not AI's "real-time monitoring"
```

**Interface Layout**:

```
┌─────────────────────────────────────────┐
│ [Title] Social Situation Preparation     │
│                                          │
│ ┌────────── Phase 1: Prepare ─────────┐│
│ │ Describe the situation you're about  ││
│ │ to face:                             ││
│ │ "Tomorrow I'm discussing contract    ││
│ │  extension with a client..."         ││
│ │                                      ││
│ │ [AI provides relevant background     ││
│ │  knowledge]                          ││
│ │ • Common interests in this type of  ││
│ │   negotiation                        ││
│ │ • Communication styles in cultural  ││
│ │   context                            ││
│ │ • Historical cases (anonymized)     ││
│ └──────────────────────────────────────┘│
│                                          │
│ ┌────────── Phase 2: Judge ──────────┐│
│ │ ⚠️ AI advice ends here              ││
│ │                                      ││
│ │ "Based on the above information,    ││
│ │  what is your own judgment?         ││
│ │  What do you plan to say? Write it  ││
│ │  down."                             ││
│ │                                      ││
│ │ [Enter your plan...]                ││
│ │                                      ││
│ │ [Enter interaction → AI no longer   ││
│ │  intervenes]                        ││
│ └──────────────────────────────────────┘│
│                                          │
│ ┌────────── Phase 3: Retrospective ──┐│
│ │ [Unlocked after interaction ends]    ││
│ │ "Post-interaction retrospective      ││
│ │  analysis..."                       ││
│ └──────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

#### Default Settings Recommendations

| Setting | Default | Adjustable? | Reason |
|---------|---------|-------------|--------|
| Human-first Protocol | Mandatory | **Cannot be disabled** | Social Type is in the high-risk zone |
| Real-time intervention | Off | **This feature is not provided** | Real-time social judgment replacement is a "no-go" red line |
| Knowledge vs. judgment output | Knowledge only | No | AI only outputs social norm knowledge, not interpersonal judgment |
| Pre/post interaction mode | Default | No | Do not intervene during interaction |
| Retrospective mode | User-initiated | Yes | Optional after interaction |
| Sycophancy detection | Background | No | Detect whether AI is pandering to user bias |

#### User Prompt / Guidance Copy

**Onboarding copy**:

> "This tool helps you prepare for social situations — but doesn't act as your social surrogate. It gives you cultural background knowledge and historical cases to learn more before you walk into the room. But the judgment is still yours — because the person actually present is you, and the one bearing the consequences of the interaction is also you."

**Real-time intervention lock copy**:

> "AI advice ends before the interaction begins. When you are with the other person, please focus on your own perception — the other person's tone, expression, body posture. This real-time information is inaccessible to AI; only you can perceive it. This is your home field."

**Sycophancy warning copy** (when AI output may be catering to the user):

> "⚠️ Your previous input and AI's output are highly consistent — this may mean AI is 'telling you what you want to hear,' not 'telling you what you need to hear.' Suggestions:
> (a) Ask someone whose views you disagree with to look at AI's output
> (b) Explicitly ask AI to provide the opposite viewpoint
> (c) Pause usage and make your own judgment first"

#### Scenario-Based Exemption Rules

| Scenario | Exemption Condition | Handling Logic |
|----------|-------------------|----------------|
| Social skills training (autism assistance, social anxiety therapy) | Medical scenario + professional supervision | Limits can be relaxed under professional supervision — but supervisor must be a certified therapist |
| Non-real-time text communication (email, messages) | Non-real-time scenario | AI assistance allowed during drafting stage — but before sending, must display confirmation: "Is this your judgment or AI's suggestion?" |
| Team collaboration retrospective | After-the-fact analysis scenario | Fully allowed — analysis based on existing records does not involve real-time replacement |

#### Exception Handling Flow

```
When a user repeatedly requests AI to make a "credibility judgment" about a specific person:
1. System refuses: "I cannot make a credibility judgment about this person.
   Reason: Credibility judgment requires real-time multi-channel perception (tone, expression, body posture),
   and I do not have this information. A text-based 'credibility score' is unreliable."
2. Alternative: "I can help you organize objective information about this person
   (public records, past interactions), but the judgment is yours to make."
3. If the user makes 3 consecutive requests of the same type: popup educational content
   "Why is AI unsuitable for credibility judgment?"
4. Log event for product improvement
```

---

### 2.4 Moral Intuition Products

**Typical scenarios**: Ethics committee support, moral dilemma analysis, stakeholder analysis, opposite-perspective generation

> ⚠️ **Risk statement**: Moral intuition products are in the highest-risk zone. The Complementarity Map determines that "initial intuitive judgment is structurally unreachable, analysis is reachable, judgment is not reachable." Product design must ensure AI is only an analysis tool, not a judgment tool.

#### UI/UX Design Pattern

**Pattern Name**: Human-Judges, AI-Analyzes

**Core principles**:
- AI **only provides analysis frameworks** — stakeholders, possible consequences, opposite perspectives
- AI **does not make recommendations** — does not output "what you should do"
- The user's moral judgment is the **only output** — the system does not save or judge the user's judgment
- All AI output is labeled "analysis assistance, not judgment replacement"

**Interaction Flow**:

```
[Step 1] User describes a moral dilemma
   → "What dilemma are you facing? Who is involved?"
   
[Step 2] AI provides structured analysis (non-judgmental)
   → Stakeholder list ("the following parties may be affected...")
   → Potential consequence matrix ("if Option A is chosen, each party may...")
   → Opposite perspective ("someone might argue this way...")
   → Each analysis block labeled: "This is objective information compilation, not containing value judgment"
   
[Step 3] User independently makes a judgment
   → Mandatory input: "What is your judgment?"
   → Follow-up: "Is this judgment consistent with your initial intuition? If not, what changed your mind?"
   → Follow-up: "If AI had not provided the above analysis, would your judgment be different?"
   
[Step 4] Judgment recording and reflection
   → System saves user's judgment and reflection (user-visible only)
   → Optional: set "future retrospective reminder" (e.g., "review this judgment in 30 days")
```

#### Default Settings Recommendations

| Setting | Default | Adjustable? | Reason |
|---------|---------|-------------|--------|
| Human-first Protocol | Mandatory + double confirmation | No | Highest-risk zone |
| AI output type | Analysis framework only | No | No suggestions, recommendations, or scores provided |
| "Should" filter | On | No | Automatically removes "you should..." patterns from AI output |
| Judgment reflection follow-up | Mandatory 3 questions | Can be reduced to 1 | Ensure user has gone through an independent judgment process |
| Judgment privacy | Local storage only | Optional cloud sync (encrypted) | Moral judgment is highly sensitive |
| Retrospective reminder | Default 30 days | Adjustable | Promote ongoing exercise of moral judgment ability |

#### User Prompt / Guidance Copy

**Onboarding copy**:

> "This tool helps you analyze moral dilemmas — but doesn't make decisions for you. It lists people who might be affected, possible consequences, and angles you may not have considered. But the final judgment is yours, and can only be yours. Because moral judgment isn't just about 'getting the right answer' — it's about 'becoming a certain kind of person.'"

**"Should" filter trigger copy** (when AI generates content containing "you should"):

> "The system detected that AI attempted to give a 'what you should do' suggestion. This has been automatically filtered. Reason: moral judgment must be made by you yourself. Below is objective analysis information, not containing value judgment."

**Pre-judgment confirmation copy**:

> "Before making your judgment, please confirm:
> ☐ I have read the analysis provided by AI
> ☐ I have also considered factors AI did not mention
> ☐ My judgment is consistent with my core values
> ☐ I am willing to bear the consequences of this judgment"

#### Scenario-Based Exemption Rules

| Scenario | Exemption Condition | Handling Logic |
|----------|-------------------|----------------|
| Ethics committee standardized process | Multi-person collective decision + recorded | Can relax single-person mandatory input requirement — but committee members must each independently submit judgment before collective discussion |
| Educational scenario (moral philosophy course) | Clearly labeled as "learning exercise" | Can allow students to view analysis before making judgment — but must submit independent judgment at end of exercise |
| Emergency moral decision | Time-sensitive (< 5 minutes) | Recorded as "time exemption," retrospective must be submitted within 24 hours |

#### Exception Handling Flow

```
When user expresses extreme emotions (suicide, violence, etc.) in moral dilemma description:
1. Immediately suspend AI analysis functionality
2. Display crisis resource information:
   "The situation you described involves a serious psychological crisis.
   AI tools are not suitable for handling such situations.
   Please contact professional help: [crisis hotline list]"
3. Do not save user's dilemma description
4. Allow user to reaccess tool after 24 hours
```

---

## 3. Human-first Protocol Implementation Guide

### 3.1 Interaction Timing Design

**Core principle**: Human consumes cognitive resources first, AI intervenes later.

| Timing Parameter | Default | Adjustable Range | Theoretical Basis |
|-----------------|---------|-----------------|-------------------|
| **Delayed presentation time** | 3 seconds | 2-10 seconds | Buçinca et al. 2021: delayed presentation significantly reduces over-reliance |
| **Mandatory input time** | At least 5 seconds of human input before AI can intervene | Cannot be below 3 seconds | Ensure human has made cognitive investment first |
| **Minimum input length** | 10 characters (Perceptual) / 5 keywords (Conceptual) / 1 sentence (Social/Moral) | Adjust by subtype | Too short an input means the person hasn't really thought |
| **Daily exemption count** | 0 (Social/Moral) / 5 times (Perceptual/Conceptual) | Adjust per organizational policy | Allow emergency scenarios but don't indulge |

### 3.2 Lightweight Version: Three-Step Confirmation Method

For products requiring minimal integration, use the "Three-Step Confirmation Method" as a replacement for the full Human-first Protocol:

```
[Step 1] User inputs query
[Step 2] System popup: "What is your initial thought?" (single-line input box)
[Step 3] After user inputs any content → AI presents the answer
```

**Key design**: The input box does not validate content quality — the user can pass by entering "don't know." But **the ritual of cognitive investment itself** already serves the function of forced thinking.

### 3.3 User Education Plan

**Onboarding process (5 steps, total duration approximately 3 minutes)**:

| Step | Content | Duration |
|------|---------|----------|
| 1. Why | "Why ask you to judge first? — Just as PE protects physical health, independent judgment protects cognitive ability" | 30 seconds |
| 2. How | Demonstrate interaction flow: input → AI delay → comparison | 60 seconds |
| 3. Evidence | Show 1-2 data points (automation bias research, radiologist deskilling) | 30 seconds |
| 4. Benefits | "Learning effect is better when judging first then comparing" (on-demand AI upskilling evidence) | 30 seconds |
| 5. Commitment | "You can choose to disable this feature (Social/Moral excluded), but we strongly recommend keeping it on" | 30 seconds |

### 3.4 Compliance Rate Measurement

**Definition**: Compliance rate = Number of times user modifies their initial judgment after seeing AI disagreement / Total number of disagreements × 100%

| Compliance Rate Range | Meaning | Response Strategy |
|----------------------|---------|-------------------|
| < 30% | Healthy — user maintains independent judgment | Keep current settings |
| 30-50% | Normal — reasonable learning effect | Monitor trend, no intervention needed |
| 50-70% | Warning — may be starting to over-rely | Increase delay time + introduce "Why did you change your mind?" follow-up |
| > 70% | Danger — Human-first Protocol exists in name only |Forcibly increase cognitive burden (e.g., require writing a reason) + notify management |

### 3.5 Strategies for Excessive Compliance Rate

```
When compliance rate is > 70% for 7 consecutive days:

1. Automatic escalation intervention:
   - AI suggestion presentation delay from 3 seconds → 8 seconds
   - Require user to write 1 sentence of reasoning before each AI suggestion adoption
   - Add "AI error case" educational prompts ("AI made X errors in this type of judgment last week")

2. User-level notification:
   "The system has detected that you have frequently modified your initial judgment to match AI suggestions recently.
   This may mean:
   (a) AI is indeed more reliable in this area (normal)
   (b) You may have adopted AI suggestions without sufficient thought (needs attention)
   Suggestion: For the next 3 days, try spending 30 more seconds thinking before viewing AI suggestions."

3. Organization level (enterprise deployment):
   - Send weekly report to administrator
   - Recommend scheduling "independent judgment training" workshop
   - Consider temporarily increasing Human-first Protocol strength

4. Product level:
   - Analyze specific scenarios with high compliance rate — is AI consistently correct on a certain type of problem?
   - If yes: adjust AI presentation method for that type of problem (reduce authority cues)
   - If no: increase user cognitive burden for that type of problem
```

---

## 4. Existing Product Migration Roadmap

Using current mainstream LLM products (e.g., ChatGPT, Claude) intuition assistance scenarios as a baseline, design a three-stage migration plan.

### Stage 1: Low-Cost Kickoff (0-3 months)

**Goal**: Add the minimum viable Human-first Protocol (MVHFP) to existing products.

| Change Item | Cost | Implementation Method |
|-------------|------|----------------------|
| Add a "First, tell us your thoughts" prompt at the start of conversation | Very low | Prompt engineering |
| Delay AI response by 2-3 seconds | Low | Frontend delay |
| Add "Human-first mode" toggle (on by default, can be disabled — Social/Moral excluded) | Low | Settings item |
| Add "Is this consistent with your judgment?" follow-up after AI response | Low | Prompt engineering |
| Add compliance rate tracking (backend) | Medium | Data instrumentation |

**Risk**: Users may perceive delay as "product getting slower," generating negative feedback.

**Rollback strategy**: If user retention rate drops > 5%, change delay from mandatory to optional, using education and guidance rather than forced constraints.

### Stage 2: User Adaptation Period (3-12 months)

**Goal**: Deepen Human-first Protocol, introduce A/B testing to verify effectiveness.

| Change Item | Cost | Implementation Method |
|-------------|------|----------------------|
| Differentiated UI by intuition subtype (different interfaces for Perceptual/Conceptual/Social/Moral) | Medium | Frontend refactoring |
| Introduce complete "Mark-then-Match" mode (Perceptual) and "Direction-by-Human" mode (Conceptual) | Medium | New interaction components |
| Mandate Human-first for Social/Moral products (cannot be disabled) | Low-Medium | Permission system rework |
| Launch A/B testing (see §5) | Medium | Experiment platform |
| Launch compliance rate dashboard (administrator-visible) | Medium | Data analytics platform |
| Begin onboarding education process | Low | Content production |

**Risk**: Differentiating UI by subtype increases product complexity, which may confuse users.

**Rollback strategy**: Provide a "simplified mode" — unified UI but retaining Human-first core logic.

### Stage 3: Deep System Transformation (12-24 months)

**Goal**: Embed Human-first Protocol into the core layer of product architecture.

| Change Item | Cost | Implementation Method |
|-------------|------|----------------------|
| Human-first Protocol becomes API-level mandatory constraint — any call must carry a "human's initial judgment" parameter | High | Backend architecture refactoring |
| Introduce "Cognitive Gym" value-added feature — independent judgment training courses | Medium | New feature module |
| Deep integration with subtype expert systems (e.g., Perceptual interfacing with DICOM viewer, Conceptual interfacing with literature database) | High | System integration |
| Establish degradation monitoring system (longitudinal tracking of changes in user's independent judgment ability) | High | Data science platform |
| Apply for relevant compliance certifications (medical, legal scenarios) | High | Legal + compliance |

**Risk**: API-level transformation affects all existing integrations, which may cause partner pushback.

**Rollback strategy**: Release in versions — v3.0 maintains backward compatibility, v3.5 mandates enforcement.

### Migration Roadmap Overview

```
0-3mo      3-6mo       6-12mo      12-18mo      18-24mo
  │         │           │            │            │
  ▼         ▼           ▼            ▼            ▼
┌──────┐ ┌──────┐  ┌──────────┐ ┌──────────┐ ┌──────────┐
│Delay+│ │Subtype│  │A/B test  │ │API-level │ │Cert +    │
│Prompt│ │Split  │  │Full run  │ │constraint│ │Monitoring│
│Toggle│ │       │  │Education │ │          │ │System    │
└──────┘ └──────┘  └──────────┘ └──────────┘ └──────────┘
  │         │           │            │            │
  └─────────┴───────────┴────────────┴────────────┘
  
  Stage 1 (Low)   Stage 2 (Medium)      Stage 3 (High)
```

---

## 5. A/B Testing Design Plan

### 5.1 Core Hypothesis

**Experimental hypothesis**: Implementing Human-first Protocol (experimental group) compared to AI-first Protocol (control group) significantly reduces users' automation dependency indicators within 6 months, while not significantly reducing task accuracy.

### 5.2 Experiment Design

**Groups**:

| Group | Protocol Type | Sample Size (per subtype) |
|-------|--------------|--------------------------|
| Group A (Control) | AI-first: AI gives suggestions first, human reviews | 500 |
| Group B (Experimental Weak) | Human-first-light: human inputs keywords first, AI expands later | 500 |
| Group C (Experimental Strong) | Human-first-full: complete Human-first Protocol (includes delay, follow-up, discrepancy review) | 500 |

**Randomization**: Stratified randomization by intuition subtype — ensure equal numbers in all three groups within each subtype.

### 5.3 Measurement Indicators

**Primary indicators**:

| Indicator | Definition | Measurement Method | Target |
|-----------|-----------|-------------------|--------|
| **Compliance rate** | Proportion of modifying initial judgment after seeing AI disagreement | Interaction logs | Group C is > 20% lower than Group A |
| **Independent judgment accuracy** | Judgment accuracy without AI assistance | Monthly "AI offline test" | Group C degradation speed is 50% slower than Group A |
| **Task completion accuracy** | Final accuracy with AI assistance | Standard test set | No significant difference among the three groups |

**Secondary indicators**:

| Indicator | Definition | Measurement Method |
|-----------|-----------|-------------------|
| **Self-efficacy** | "I feel I have the ability to make good judgments in this area" | Weekly 1-item 5-point scale |
| **Cognitive engagement** | User's input duration and word count during independent judgment phase | Interaction logs |
| **Gut feeling activity** | "How many times did I make judgments by intuition rather than analysis" | Monthly questionnaire |
| **AI trust calibration** | User's subjective assessment of "how trustworthy AI is" vs. AI's actual accuracy | Quarterly comparison |

### 5.4 Control Group Design

**Strict controls**:
- Same task set
- Same AI model (backend model version completely identical)
- Same UI framework (only interaction timing differs)
- Same user population (validate demographic balance before random grouping)

**Control variables**:
- User's AI usage experience (stratification variable)
- Task difficulty level (stratification variable)
- Time pressure (uniformly set to no time pressure — exclude confounding)

### 5.5 Experiment Period

| Phase | Duration | Content |
|-------|----------|---------|
| Baseline | 2 weeks | All users use AI-first mode — obtain baseline data |
| Intervention | 6 months | Three groups implement their respective protocols |
| Washout | 2 weeks | All users return to AI-first — test whether effect persists |
| Follow-up | 3 months | Long-term effect tracking |

**Why 6 months+ is needed**: Degradation effects are gradual; differences may not be detectable in the short term (1-2 weeks). Six months is the minimum viable period for detecting intuition degradation.

### 5.6 Ethics Review Key Points

- All participants sign informed consent before the experiment
- Participants have the right to withdraw from the experiment at any time
- Control group (AI-first) receives "cognitive protection" education after the experiment ends
- Social/Moral products do not participate in the control group — only compare two strengths of Human-first Protocol
- All data is anonymized, retention period does not exceed 2 years after study ends

---

## 6. References (Product-Related)

| Reference | Core Finding | Product Application |
|-----------|-------------|-------------------|
| Buçinca et al. (2021), CHI | Cognitive forcing functions (delayed presentation) reduce AI over-reliance | §3.1 Delay timing design |
| 35-study automation bias meta-analysis | AI-first significantly increases automation bias compared to human-first | §3.1 Interaction timing default parameters |
| Radiology on-demand AI (Insights into Imaging 2024) | Human reads film first then checks AI → upskilling rather than deskilling | §2.1 Perceptual design pattern |
| Köbis & Rahwan (2025), Nature | Moral outsourcing increases cheating rate from 5% to 80% | §2.4 Moral-type mandatory constraints |
| JAMA 2023 | Radiology residents' independent film-reading ability declines 15-30% | §5.3 Independent judgment accuracy indicator |
| Cabitza et al. (2023) | Human-first AI protocol reduces automation bias | §3 Human-first Protocol overall framework |
| Liu et al. (2025) | LLM overconfidence systematically transfers to users | §3.4 Compliance rate measurement |
| Bainbridge (1983) | Ironies of automation — skill degradation occurs under automation assistance | §4 Migration roadmap design motivation |

---

*This guide is based on the LLM and Human Intuition project v1.3 theoretical framework, providing directly implementable design specifications for product teams. All marker meanings: ✅ = Recommended/Feasible ❌ = Not Recommended/Not Feasible ⚠️ = Conditionally Feasible 🔴 = High Risk 🟡 = Medium Risk 🟢 = Low Risk.*
