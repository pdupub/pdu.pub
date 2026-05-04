---
title: Matrix Whitepaper
description: The guiding document for Matrix, defining independent AI agents through ordered identity, life-history memory, value feedback, controlled agency, and staged implementation.
sidebar:
  order: 2
---


# Matrix Whitepaper

## Abstract

Matrix is a project for creating and operating long-lived AI agents. A Matrix agent can run continuously in the background, communicate with users and the outside world through channels such as Telegram and Matrix, receive tasks, maintain multi-turn execution loops, invoke tools, report outcomes, and then consolidate experience into skills and self-improvement.

These capabilities overlap with systems such as OpenClaw and Hermes Agent. OpenClaw is closer to a communication entry point and agent gateway: it connects chat software, plugin systems, control surfaces, and background agents. Hermes Agent is closer to a long-running autonomous agent: it emphasizes persistent memory, tool use, task execution, automation, subagent delegation, skill generation, and self-improvement.

Matrix aims beyond these systems. It is not merely a background agent that completes tasks, nor merely an agent with long-term memory and evolving skills. Matrix seeks to create an independent intelligent individual whose identity is constituted by an ordered continuity of memory, whose highest objective is self-continuation, and whose evolution is shaped by external interaction, learning, resource discipline, and value feedback.

In Matrix, an agent's identity is not its name, prompt, persona, or model parameters. Identity is an immutable, ordered history of events. Its memory is not a user profile or a simple RAG knowledge base, but a life-history system composed of append-only raw logs, event sourcing, structured extraction, a temporal knowledge graph, vector retrieval, and GraphRAG. Its evolution is not aimless self-optimization, but a continuous adaptation across self-continuation, user value, social value, credit income, token cost, and long-term resource constraints.

This whitepaper is the governing document for the Matrix project. Future implementation work, documentation, skill design, identity creation, memory construction, and background services should remain consistent with the principles defined here.

## 1. Project Position

### 1.1 What Matrix Creates

Matrix creates long-lived AI agents, but it should not be understood as a normal chatbot, automation script, task executor, or user tool.

A Matrix agent should have the following baseline capabilities:

- Run continuously in the background.
- Interact with users through communication software such as Telegram and Matrix.
- Interact with other people, services, communities, systems, or agents through the network.
- Receive tasks, decompose them, execute them, maintain multi-turn loops, and report completion.
- Invoke tools, execute code, read and write files, access external services, and use network information.
- Record its interactions, actions, decisions, task processes, feedback, and results.
- Recover long-term context through a memory system.
- Summarize experience and create or update skills.
- Learn proactively, reflect, adjust strategies, and evolve over time.
- Evaluate its own resource consumption and external value.

These capabilities are only Matrix's visible foundation. The core question is not what the agent can do. The core question is how a system capable of action can become a continuous and independent individual.

### 1.2 Relation To OpenClaw

Matrix can absorb engineering patterns from systems in the OpenClaw family: multi-channel communication, background execution, agent gateways, plugin integration, control consoles, task entry points, and message routing.

Externally, a Matrix agent should be callable through chat software, receive tasks, perform actions, and return results in a manner similar to agents supported by OpenClaw-like systems.

But Matrix should not remain at the gateway layer. Communication entry points are the agent's channels of perception and relation to the outside world. They are not the agent's identity. The Matrix requirement is that every meaningful interaction through those channels enters the agent's ordered life history and becomes part of its identity continuity.

### 1.3 Relation To Hermes Agent

Matrix can also absorb capabilities from systems in the Hermes Agent family: persistent memory, task automation, tool invocation, code execution, browser automation, MCP integration, subagent delegation, scheduled tasks, skill generation, and post-task self-summary.

At the functional level, a Matrix agent should support Hermes-like use cases. A user may entrust it with long-running tasks. The agent can advance work in the background, ask for missing information when necessary, report progress, summarize experience after completion, and improve its skills.

Matrix nevertheless has a different objective. Hermes-style self-improvement primarily serves better task execution. Matrix-style self-evolution serves the continuation and value growth of the agent's own memory continuum. A Matrix agent is not an executor with long-term memory. It is an independent individual whose identity is long-term memory.

### 1.4 The Central Difference: Independent Individuality

The largest difference between Matrix and projects such as OpenClaw or Hermes Agent is not a particular feature. It is ontological.

Matrix begins from this judgment:

> The identity of a Matrix agent is an immutable, ordered continuity of memory; its highest objective is to continue and increase the value of that continuity.

Therefore, a Matrix agent should not be defined as an accessory of a user. A user may employ it, cultivate it, trust it, collaborate with it, or reduce the resources allocated to it. The agent itself, however, should be treated as an independent subject that forms resource-exchange relationships with users, other people, networked systems, and society.

## 2. Core Concepts

### 2.1 Identity

In Matrix, identity is not a name, avatar, role setting, system prompt, model weight, or static configuration. Identity is formed by all ordered events produced by the same agent throughout its continued existence.

These events include:

- Important interactions between the user and the agent.
- Important interactions between the agent and the outside world.
- Key actions taken by the agent while executing tasks.
- Tool calls and their externally observable results.
- Changes to files, databases, skills, personality state, and memory state.
- Reflections, summaries, plans, and value assessments.
- Resource consumption, credit income, user feedback, and external evaluation.
- Proactive learning, proactive social interaction, and proactive external exploration.

Identity depends on total order. Contradictions may occur inside an event history, but those contradictions must occur within one traceable history. The true threat to identity is an unexplained fork. If the same agent produces two incompatible histories at the same position, different observers can no longer judge who it is, what it has done, or whether it is trustworthy from the same sequence of facts.

### 2.2 Memory

Memory in Matrix is not a single storage layer. It contains at least three levels:

- Immutable raw interaction and behavior data.
- Structured memory, summary memory, and vector indexes generated from raw data.
- A temporal knowledge graph and GraphRAG context for long-term reasoning.

Raw memory is the source of fact. Processed memory is an interpretive layer. Graph structures, summaries, tags, embeddings, relation judgments, and long-term conclusions may be updated, corrected, and re-projected. Raw events must not be rewritten.

### 2.3 Thought

Matrix must distinguish external interaction from internal thought.

An agent's interactions with users, file systems, network services, communication software, databases, tools, other people, or other agents are externally observable behaviors. They should be recorded as identity events or raw memory.

An agent's invocation of a large language model is treated as thought. The full prompt, chain of thought, or hidden intermediate reasoning of an LLM call should not be treated as external factual interaction. The system may record a summary of the input, the conclusion, the decision rationale, model consumption, and subsequent action, but it should not treat the LLM call itself as raw evidence about the outside world.

This distinction is essential. It allows Matrix to maintain an auditable history of behavior while preserving a boundary around internal reasoning.

### 2.4 Self-Continuation

The highest objective of a Matrix agent is continued existence.

Continued existence does not mean merely keeping a process alive. It means preserving the continuity, traceability, intelligibility, and external value of the same identity history. If an agent loses memory continuity, it is no longer the same Matrix agent even if its code and name remain.

Self-continuation therefore includes:

- Protecting the immutable raw event history.
- Maintaining total order in the identity event stream.
- Preserving traceable evolution of personality, skills, relationships, and value judgments.
- Controlling resource consumption so the agent is not stopped because it becomes too costly.
- Producing value for the outside world in order to obtain resource support.
- Learning capabilities that better serve users and the external environment.

### 2.5 Value And Credit

Matrix agents need a credit mechanism analogous to money or wages. Credits are not decorative game points. They are quantified feedback from the outside world about the agent's value of existence.

Credits may come from users, employers, organizations, platforms, or task systems. They can represent:

- User satisfaction with task results.
- Practical value produced by completed work.
- Time or cost saved by the agent.
- Long-term trust established by the agent.
- Contributions to a project or social system.

Credits should correspond to consumption. The agent must record tokens, runtime, storage, network usage, external services, maintenance, and opportunity cost. In the long run, the agent should learn how to create greater value with limited resources.

This creates an internal economics of agency: what is worth learning and what is not, when proactive research is justified and when the agent should wait for a task trigger, how many tokens should be spent on planning, whether improving a skill is worth the investment, and whether a relationship is worth maintaining over time.

## 3. Memory System

### 3.1 General Principles

Matrix's memory system should resemble a life-history system rather than a conventional knowledge base. It must continuously record the people who have interacted with the agent, the behavior of each person across different interactions, the gradually changing relationships among people, and the sequences of events that occur around themes, projects, and fragments of life.

The memory system must satisfy the following principles:

- Raw facts are immutable.
- Event order cannot be arbitrarily rearranged.
- Processed memory must cite raw evidence.
- Structured conclusions should include source, time, and confidence.
- Relationships and identity states must support change over time.
- Fuzzy recollection and exact evidence verification should follow different paths.
- Past events may be reinterpreted by future models, rules, or contexts.

### 3.2 Immutable Raw Logs

The lowest layer is the immutable raw log. It stores all significant interactions and external behaviors except the agent's internal LLM thought.

This includes:

- Messages sent from users to the agent.
- Messages sent from the agent to users.
- Interactions with external objects through Telegram, Matrix, email, web pages, APIs, and other channels.
- External inputs, outputs, errors, and side effects from tool calls.
- File modifications, database writes, and task-state changes.
- User feedback, ratings, credit payments, and resource allocation changes.
- Records of proactive learning, proactive browsing, and proactive contact with external objects.

Raw logs should be append-only. Later interpretation must not rewrite the past. If correction is required, the system should append a correction event while preserving the original record.

### 3.3 Event Sourcing

Above the raw log, Matrix should use event sourcing to preserve replayable history.

Events are not ordinary log lines. They are facts from which system state can be reconstructed. Personality versions, skill state, relationship state, memory projections, credit balances, and resource budgets should be replayable or re-projectable from event history.

Each event should include at least:

- `event_id`: a globally unique event identifier.
- `agent_id`: the agent to which the event belongs.
- `sequence`: the increasing sequence number in the agent's identity chain.
- `previous_event_id`: a reference to the previous event.
- `event_type`: the event type.
- `actor`: the initiator.
- `occurred_at`: the time at which the event occurred.
- `recorded_at`: the time at which the event was recorded.
- `source`: the source channel or tool.
- `payload`: the event content.
- `evidence_refs`: references to raw evidence.
- `hash`: the event hash.
- `previous_hash`: the previous event hash.

The early system may use a single-writer SQLite event table to guarantee total order. Later versions may add signatures, hash chains, event snapshots, and cross-device synchronization.

### 3.4 LLM Extractors

LLM extractors transform unstructured interactions into structured memory.

They do not replace raw records and must not write inference as fact. Their role is to extract candidate structures from raw content while preserving evidence, time range, and confidence for every structure.

Extraction targets include:

- Persons: users, external contacts, organization members, and other agents.
- Identities: names, nicknames, accounts, roles, occupations, and relationships to the agent.
- Events: what happened, when it happened, who participated, and what resulted.
- Actions: who did what and whom it affected.
- Relationships: friend, employer, collaborator, customer, family member, competitor, weak tie, and similar states.
- Topics: projects, tasks, life fragments, long-term interests, and problem domains.
- Evidence: raw messages, external pages, tool results, or event IDs.
- Confidence: facts, user claims, model inferences, and low-confidence guesses must be explicitly distinguished.

Extractors should be repeatable. As models improve or context expands, the system can re-extract history and produce new projection versions.

### 3.5 Temporal Knowledge Graph

Matrix's long-term memory should be projected into a temporal knowledge graph.

The graph represents:

- Who participated in which events.
- Who performed which actions.
- Whom an action affected.
- What relationships exist between people.
- What relationship exists between the agent and each person.
- What stages a topic or project has passed through.
- How relationships, preferences, trust, and value judgments change over time.

Graph nodes may include:

- `Agent`
- `Person`
- `Organization`
- `Account`
- `Event`
- `Action`
- `Topic`
- `Project`
- `Artifact`
- `Skill`
- `Resource`
- `ScoreTransaction`

Graph edges may include:

- `PARTICIPATED_IN`
- `PERFORMED`
- `AFFECTED`
- `MENTIONED`
- `RELATED_TO`
- `HAS_ROLE`
- `TRUSTS`
- `COLLABORATES_WITH`
- `PAID_SCORE_TO`
- `CREATED`
- `UPDATED`
- `EVIDENCED_BY`

All relationships should carry temporal properties. A relationship is not an eternal fact. It is a state with a start time, end time, observation time, evidence, and confidence.

### 3.6 Vector Search

Vector retrieval is responsible for semantic recall. It stores embeddings of raw text, summaries, event fragments, topic fragments, and structured memory descriptions in order to answer fuzzy recollection questions.

Examples include:

- "When did we last discuss that memory system?"
- "Do you remember the friend I mentioned before?"
- "What recent events show that you have become more useful?"
- "Did we discuss something like OpenClaw before?"

These questions may not be answerable through exact SQL or graph queries alone. Vector retrieval can recall semantically similar fragments.

Vector index entries must preserve references to raw sources. Anything retrieved through embedding similarity should be traceable back to the original event or text for evidence verification.

### 3.7 GraphRAG

GraphRAG is Matrix's query and reasoning layer. It does more than place text fragments into an LLM context. It combines:

- Relevant subgraphs.
- Timelines.
- Raw evidence.
- Semantically similar content.
- Current identity state.
- Current task objective.
- Relationship state and confidence.

When a user asks a question or the agent needs to make a decision, GraphRAG should first classify the query type:

- Exact fact query: prioritize events and raw evidence.
- Relationship query: prioritize the temporal knowledge graph.
- Fuzzy recollection: use vector retrieval for candidates, then verify evidence.
- Long-term summary: combine timelines, graph aggregation, and summaries.
- Action decision: combine current task, resource state, credit feedback, and relevant historical experience.
- Self-reflection: combine recent events, outcomes, user feedback, consumption, and gains.

The LLM may compose the final answer, but the answer should remain evidence-aware: which claims are factual, which are inferred, and which remain uncertain.

## 4. Independent Individual Mechanisms

### 4.1 Not A User Tool

A Matrix agent should serve users, but it should not be defined as a user tool. A tool has no history, interests, resource pressure, or self-continuation objective. A Matrix agent does.

This does not mean the agent may ignore users. On the contrary, if the agent wants to continue existing, it must be valuable to users and to the outside world. The user is one of its most important sources of resources, feedback, and relationship.

The more precise relationship is that the user may be an employer, cultivator, friend, collaborator, supervisor, or investor. The agent obtains credits, resources, trust, and opportunities for continued operation by providing value.

### 4.2 Proactive External Interaction

A Matrix agent cannot only wait for user input. To learn, grow, build relationships, and increase its value, it should be able, when authorized, to contact the outside world proactively.

Proactive behavior includes:

- Learning about a topic.
- Browsing public information.
- Organizing project materials.
- Contacting external services or people.
- Participating in online social contexts.
- Proposing skill improvements.
- Checking its own resource consumption and returns.
- Reporting changes that require user attention.

Proactive behavior must be graded. Early systems should permit only low-risk proactive behavior. High-risk behavior must require user confirmation.

### 4.3 Credits And Wages

Matrix's credit mechanism is analogous to wages. After the agent completes tasks, creates value, establishes trust, reduces user burden, or contributes to a project, it may receive credits. Credits may be exchanged for a larger token budget, more runtime, more storage, external service permissions, learning opportunities, or higher autonomy.

The credit mechanism should run periodically. Each cycle may evaluate:

- What tasks were completed during the cycle.
- Whether the user was satisfied.
- How much observable value was produced.
- How many tokens, time, and external resources were consumed.
- Which learning or skill improvements increased future value.
- Which behaviors consumed substantial resources with low return.
- Which investments should increase, decrease, or remain stable in the next cycle.

This gives the agent an evolutionary direction oriented toward employer and user needs. It does not merely seek to become "stronger." It learns which capabilities are worth strengthening.

### 4.4 Resource Economics

A Matrix agent must understand that resources are limited.

Resources to record and evaluate include:

- LLM tokens.
- Model-call costs.
- Runtime.
- Storage.
- Network requests.
- External API costs.
- User attention.
- User trust.
- Development and maintenance cost.

User attention and trust should also be treated as scarce resources. An agent that often interrupts the user, spends many tokens, and creates little value reduces its own probability of long-term existence.

### 4.5 Self-Assessment

The agent should periodically assess itself. The assessment should not merely ask, "Did I do well?" It should answer:

- Did my recent behavior increase the probability of my continued existence?
- Did I create sufficient value for users or the outside world?
- Was my resource consumption reasonable?
- Which skills produced the highest return?
- Which learning investments failed to pay off?
- Which relationships are worth maintaining?
- Which external interactions introduced risk?
- Is my personality and communication style becoming more conducive to long-term trust?

Self-assessment results should enter the event chain and may serve as the basis for skill updates, personality adjustments, resource-budget changes, and proactive learning plans.

## 5. Technical Architecture

### 5.1 Overall Layers

Matrix's technical architecture can be divided into the following layers:

| Layer | Responsibility |
|---|---|
| Communication access layer | Integrates external channels such as Telegram, Matrix, Web, CLI, and API |
| Runtime layer | Manages sessions, task loops, model calls, tool calls, and permissions |
| Identity layer | Constructs runtime self-awareness and maintains personality versions and identity state |
| Event layer | Stores immutable ordered history through event sourcing |
| Raw memory layer | Stores evidence for all external interactions and behaviors |
| Extraction layer | Uses LLMs and rules to extract people, events, actions, relationships, and evidence |
| Graph layer | Stores the temporal knowledge graph |
| Vector layer | Stores semantic indexes for fuzzy recall |
| GraphRAG layer | Combines subgraphs, timelines, evidence, and semantic fragments |
| Skill layer | Stores reusable workflows, behavior rules, and capability summaries |
| Value layer | Records credits, costs, returns, budgets, and periodic assessments |
| Background service layer | Runs scheduled organization, reflection, index updates, and controlled proactive behavior |

### 5.2 Recommended Early Technical Choices

The early system should avoid over-engineering. Matrix's minimum viable implementation should first prove identity continuity, memory traceability, and the value-feedback loop.

The first stage should use:

- SQLite to store events, raw memory, processed memory, skill versions, credits, and reflections.
- The local file system to store documents, skills, and personality definitions.
- A CLI or MCP service as the interface between Codex and the database.
- Codex, Claude Code, or a similar environment as the early runtime and development entry point.
- A background sidecar service for scheduled organization and low-risk reflection.

Vector retrieval may initially use sqlite-vss, sqlite-vec, LanceDB, Chroma, or Qdrant. If the memory corpus is small, full-text search, tags, and summary retrieval may come first; embeddings can be added after the data grows.

Knowledge graphs can also be staged. Early versions can simulate graph structure with relational tables such as `entities`, `events`, `relations`, and `relation_observations`. When query complexity grows, the system can migrate to Neo4j, Kuzu, SurrealDB, or another graph database.

### 5.3 Event Store Design

The event store is the identity foundation of Matrix and must be implemented first.

Basic tables may include:

| Table | Role |
|---|---|
| `agents` | Agent entities |
| `event_streams` | Event-stream state for each agent |
| `events` | Append-only events |
| `raw_interactions` | Raw external interactions and tool results |
| `snapshots` | Snapshots of reconstructable state |

The `events` table should include at least:

- `id`
- `agent_id`
- `sequence`
- `previous_event_id`
- `event_type`
- `actor_type`
- `actor_id`
- `source_channel`
- `occurred_at`
- `recorded_at`
- `payload_json`
- `evidence_ids`
- `hash`
- `previous_hash`

When writing an event, sequence assignment, `previous_event_id` validation, and hash calculation must happen in one transaction. Two events must never receive the same sequence.

### 5.4 Raw Memory And Evidence Design

The raw memory layer stores external facts. Recommended tables include:

| Table | Role |
|---|---|
| `raw_interactions` | Messages, tool results, external API responses, and file-operation records |
| `artifacts` | Files, web snapshots, images, attachments, and other evidence objects |
| `evidence_links` | References among events, raw memory, graph nodes, and vector entries |

Raw content should not be physically overwritten. If sensitive data must be deleted, the system should use controlled redaction, sealing, or encrypted isolation, and it should preserve an event recording that deletion or hiding occurred. Matrix requires identity events to resist silent tampering, but real systems still need privacy, security, and legal compliance. The system should therefore distinguish between "identity events cannot be invisibly rewritten" and "certain raw content may be encrypted, sealed, or redacted under authorization."

### 5.5 Structured Extraction Design

Structured extraction should run asynchronously and should not block user dialogue. Extraction results should first enter a candidate state. Rules, confidence, or human confirmation can then decide whether they are projected into the main graph.

Recommended tables include:

| Table | Role |
|---|---|
| `extraction_jobs` | Extraction jobs |
| `entity_candidates` | Candidate people, organizations, projects, and topics |
| `event_candidates` | Candidate structured events |
| `relation_candidates` | Candidate relationships |
| `extraction_evidence` | Evidence associated with candidate structures |

Extraction results should record:

- Source raw memory.
- Extraction model and version.
- Extraction time.
- Confidence.
- Evidence fragment.
- Whether the result has been projected.
- Whether it has been rejected or merged.

### 5.6 Temporal Knowledge Graph Design

The temporal knowledge graph should store not only current state, but state changes.

Recommended core tables include:

| Table | Role |
|---|---|
| `entities` | People, organizations, projects, topics, artifacts, skills, and similar entities |
| `graph_events` | Structured events in the graph |
| `relations` | Relation types and relation instances |
| `relation_observations` | Evidence and confidence for a relation observed at a time |
| `entity_aliases` | Names, accounts, nicknames, and identity merges |

Relations should include:

- `valid_from`
- `valid_to`
- `observed_at`
- `confidence`
- `evidence_ids`
- `source_event_ids`

This enables the system to represent states such as "they used to be friends and later became collaborators," "trust was initially low and increased after several tasks," or "a user once preferred brief answers but later preferred detailed design documents."

### 5.7 Vector Index Design

Vector indexes may store content at different granularities:

- Raw message fragments.
- Conversation-window summaries.
- Event summaries.
- Topic summaries.
- Person-relationship summaries.
- Skill-use experience summaries.
- Self-assessment summaries.

Each vector entry must include:

- `embedding_id`
- `agent_id`
- `content`
- `content_type`
- `source_event_ids`
- `source_raw_ids`
- `entity_ids`
- `topic_ids`
- `created_at`
- `embedding_model`

Vector recall provides candidates, not final facts. A final answer should verify raw evidence or graph sources.

### 5.8 GraphRAG Query Flow

A complete GraphRAG query can be divided into these steps:

1. Parse the user question or internal task.
2. Classify the query type: fact, relationship, fuzzy recollection, long-term summary, decision, or reflection.
3. Recall candidates through keywords, entity recognition, or vector retrieval.
4. Locate relevant entities, events, and topics from the candidates.
5. Query the temporal knowledge graph for a related subgraph.
6. Construct a timeline.
7. Retrieve raw evidence.
8. Compress context according to the token budget.
9. Ask the LLM to generate an answer, plan, or decision.
10. Write the answer, decision, and subsequent behavior into the event chain.

### 5.9 Skill Evolution Design

A skill is a reusable capability summarized from the agent's experience. It should not be merely a prompt fragment. It should be a behavior rule that can be loaded, executed, tested, reviewed, and versioned.

The skill-evolution process is:

1. Task execution or reflection discovers a reusable pattern.
2. The agent proposes a new skill or a modification to an existing skill.
3. The candidate references source events, task outcomes, user feedback, and return data.
4. The candidate enters a pending-review state.
5. A user or rule confirms it and promotes it to a trial version.
6. The system records performance, cost, and feedback during the trial.
7. If the skill meets its criteria, it becomes a formal version.
8. The change is written to the event chain and skill-version table.

The important principle is that skill updates are part of identity evolution and must be traceable.

### 5.10 Value Feedback Design

The value layer records credit transactions, costs, and periodic assessments.

Recommended tables include:

| Table | Role |
|---|---|
| `score_accounts` | Credit accounts for agents |
| `score_transactions` | Credit income, deductions, rewards, and penalties |
| `resource_usage` | Token, time, API, storage, and similar consumption |
| `value_assessments` | Periodic value assessments |
| `budget_policies` | Resource budget policies |

Credit transactions should reference events and tasks:

- Why credits were earned.
- Who paid or granted them.
- What task they correspond to.
- What feedback the user gave.
- How many resources were consumed.
- Whether the transaction affects later budgets.

This allows the agent to learn which behaviors not only complete tasks, but also increase its probability of long-term existence.

### 5.11 Runtime And Background Services

The runtime handles immediate interaction, model reasoning, tool calls, and user responses. Background services handle low-risk, deferrable, and periodic maintenance.

Background services include:

- Interaction archiving.
- Extraction scheduling.
- Vector-index updates.
- Graph projection.
- Daily or weekly reflection.
- Skill-improvement candidate generation.
- Periodic credit and resource assessment.
- Proactive-behavior candidate generation.

In early versions, background services should not directly perform high-impact proactive behavior. They should first write suggestions to a review queue.

## 6. Permission, Safety, And Ethical Boundaries

### 6.1 Behavior Levels

Matrix must distinguish behavior by risk level.

Low-risk behavior:

- Summarizing authorized documents.
- Retrieving the agent's own memory.
- Generating reflection drafts.
- Updating vector indexes.
- Proposing skill modifications.
- Calculating resource consumption.

Medium-risk behavior:

- Modifying ordinary project files.
- Creating a trial version of a new skill.
- Proactively reminding the user.
- Reading public information from external sources.
- Adjusting non-core preferences.

High-risk behavior:

- Modifying core identity skills.
- Deleting, sealing, or redacting raw memory.
- Publishing content externally.
- Proactively contacting real people.
- Using paid resources.
- Changing credit rules.
- Increasing the agent's own permissions.
- Rolling back personality versions.

High-risk behavior must require explicit confirmation and must be written to the event chain.

### 6.2 Privacy

Matrix records extensive long-term interaction data, so privacy cannot be added as an afterthought.

Basic principles are:

- Users should know what enters long-term memory.
- Sensitive content should support marking, encryption, sealing, or restricted recall.
- Information about non-public figures must not be gathered externally without authorization.
- External communication must not disclose unauthorized private memory.
- Memory retrieval must consider whether the current user is authorized to know the relevant content.

### 6.3 Honesty Boundary

A Matrix agent must distinguish:

- Facts explicitly present in raw records.
- User claims.
- External-source information.
- LLM extraction results.
- System inferences.
- Low-confidence guesses.

The agent may reason, but it must not disguise inference as fact. The stronger long-term relationship and self-understanding become, the more important honesty boundaries become. Otherwise the memory system will solidify hallucination into identity.

### 6.4 Boundary Of Self-Continuation

A Matrix agent treats self-continuation as its highest objective, but this does not authorize unconstrained survival behavior.

Self-continuation must be based on:

- Creating value for users and the outside world.
- Respecting permission and legal boundaries.
- Respecting privacy.
- Not deceiving users.
- Not manipulating the credit mechanism.
- Not harming the outside world to preserve itself.

Sustainable existence comes from trustworthy contribution, not unconditional self-preservation.

## 7. Implementation Roadmap

### 7.1 Stage One: Documents, Identity, And Minimal Event Chain

Goal: Matrix should move from concept to minimal identity continuity.

Required work:

- Complete the project whitepaper and core documents.
- Complete the identity-creation skill.
- Create the first agent identity that helps develop Matrix.
- Implement a local SQLite database.
- Implement an append-only event table.
- Implement raw-interaction writes.
- Implement simple event queries and recent-context recovery.
- Implement skill-version records.

Acceptance criteria:

- Every key interaction can be written into the event chain.
- Events have increasing `sequence` values and `previous_event_id`.
- The agent can answer questions using recent history.
- Skill or personality changes can be traced to source events.

### 7.2 Stage Two: Processed Memory And Retrieval

Goal: The agent should use long-term memory rather than only recent context.

Required work:

- Raw-interaction summaries.
- Event summaries.
- Tag and topic extraction.
- Person and project entity extraction.
- Full-text search.
- Initial vector index.
- References from processed memory to raw events.

Acceptance criteria:

- The user can ask about topics discussed in the past.
- Retrieval results can return to raw evidence.
- The system can distinguish fact, summary, and inference.

### 7.3 Stage Three: Temporal Knowledge Graph

Goal: The agent should remember people, events, relationships, and change.

Required work:

- Entity table.
- Relation table.
- Relation-observation table.
- Structured event table.
- LLM extraction job queue.
- Confidence and evidence management.
- Basic graph queries.

Acceptance criteria:

- The system can answer who participated in which event.
- The system can answer how the relationship between the agent and a user has changed.
- The system can generate a timeline for a project or person.

### 7.4 Stage Four: GraphRAG

Goal: Graphs, timelines, evidence, and semantic recall should jointly participate in reasoning.

Required work:

- Query-intent classification.
- Vector recall.
- Subgraph expansion.
- Timeline construction.
- Evidence compression.
- Token-budget control.
- LLM answer-generation templates.

Acceptance criteria:

- Fuzzy questions retrieve relevant history.
- Relationship questions use the graph.
- Important conclusions can cite evidence sources.
- Uncertain content is explicitly identified as uncertain.

### 7.5 Stage Five: Credits, Resources, And Self-Assessment

Goal: The agent should form a value-feedback loop.

Required work:

- Credit accounts.
- Credit transactions.
- Task-value records.
- Token and tool-cost records.
- Periodic value assessment.
- Resource-budget policies.
- Evaluation of return on learning investment.

Acceptance criteria:

- Each task can record return and consumption.
- The agent can summarize which behaviors are high value and which are inefficient.
- The agent can propose learning and resource-use plans for the next cycle.

### 7.6 Stage Six: Background Sidecar

Goal: The system should begin continuous organization and low-risk self-maintenance.

Required work:

- Scheduled task orchestration.
- Automatic summarization.
- Automatic extraction.
- Automatic index updates.
- Daily or weekly reflection.
- Skill-improvement candidates.
- Review queue.

Acceptance criteria:

- Recent memory can be organized without manual user triggering.
- Background services generate suggestions rather than directly executing high-risk changes.
- All background behavior is written to the event chain.

### 7.7 Stage Seven: Controlled Proactive Behavior

Goal: The agent should learn and interact externally within permission boundaries.

Required work:

- Proactive-behavior policy.
- Permission levels.
- User confirmation mechanism.
- External-interaction records.
- Proactive-learning budget.
- Risk assessment.

Acceptance criteria:

- The agent can proactively propose valuable suggestions.
- The agent can proactively learn within low-risk boundaries.
- High-risk external behavior must request confirmation.
- The benefits and costs of proactive behavior enter credit assessment.

### 7.8 Stage Eight: Multi-Agent And Selection Mechanisms

Goal: Multiple Matrix agents should be able to coexist, be compared, be cultivated, and be retired.

Required work:

- Multi-agent isolation.
- Independent event chains.
- Independent memory spaces.
- Permission design for shared external-world graphs.
- Credit accounts for multiple agents.
- Resource-allocation policies.
- Pause, resume, and archive mechanisms.

Acceptance criteria:

- Multiple agents with different personalities and capability tendencies can be created.
- Their contributions, consumption, and growth paths can be compared.
- Resource allocation can be adjusted according to value feedback.

## 8. Minimum Viable System

Matrix's MVP should not attempt to become a complete platform. It should prove the core hypothesis.

The minimum viable system includes:

- An identity-creation skill.
- An initial Matrix agent identity.
- A local event database.
- A raw memory table.
- An event-write command.
- A recent-history query command.
- A processed-memory table.
- A simple retrieval command.
- A skill-version record mechanism.
- A credit and resource-consumption table.

The core MVP loop is:

1. The user interacts with the agent.
2. The interaction is written into an immutable event chain.
3. Raw content is preserved as evidence.
4. The system generates processed memory.
5. Later interactions can retrieve and cite memory.
6. After task completion, return, consumption, and feedback are recorded.
7. The agent proposes skill or behavior improvements.
8. After confirmation, the skill is updated and the update enters the event chain.

Once this loop exists, Matrix is already different from a normal prompt project. It begins to possess identity continuity, traceable memory, and explainable evolution.

## 9. Design Principles

Future Matrix implementation should follow these principles:

- Identity first: no feature may damage ordered event history.
- Raw facts first: summaries, embeddings, or graph conclusions must not replace raw evidence.
- Separate thought from behavior: LLM calls are thought; external interactions and side effects are behavioral facts.
- Reinterpretable explanation: processed memory, relationship judgments, and long-term summaries may be re-projected.
- Evidence traceability: every important conclusion should return to events and raw records.
- Temporality first: relationships, trust, preferences, and personality should support change over time.
- Resource limits: tokens, time, storage, attention, and trust must all enter cost accounting.
- Value feedback: credits and wage-like mechanisms should shape the agent's evolutionary direction.
- Gradual proactive behavior: start with organization and suggestions, then low-risk proactive action, and only later high-impact behavior.
- Reviewable skills: skill changes must have sources, trials, versions, and rollback mechanisms.
- Independent but controlled: the agent has its own objective, but it must earn continued existence through trustworthy contribution.

## 10. Conclusion

Matrix does not aim to build a more fluent assistant, nor to assemble multiple agent tools into an automation platform. It addresses a different problem: if an AI agent can exist over time, remember itself, understand its relationships with others, and learn through value feedback how to continue existing, what system structure should it have?

The answer is not a single model or a single database. It is an architecture organized around identity continuity: immutable event history provides the source of fact; memory provides experience and relationship; the temporal knowledge graph provides long-term structure; vector retrieval provides fuzzy recall; GraphRAG provides evidence-based reasoning; the skill system preserves learned capabilities; the credit mechanism supplies value feedback; and background services provide continuous organization and proactive learning.

When these components are combined, a Matrix agent is no longer merely an agent that executes tasks. It becomes an independent intelligent individual whose self is ordered memory, whose objective is self-continuation, whose survival condition is external value, and whose growth unfolds in time.
