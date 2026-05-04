---
title: System Architecture
description: The implementation-oriented architecture for Matrix runtime, identity, events, memory, GraphRAG, skills, value feedback, and sidecar services.
sidebar:
  order: 5
---


Matrix is not designed as a normal chatbot. It is an agent system for continued existence, identity continuity, memory, self-evolution, and external value creation.

The system must support several requirements:

- the agent has an independent identity
- identity is grounded in an ordered event sequence
- memory and the language model both participate in judgment
- personality, memory, and skill changes are traceable to events
- important conclusions can return to raw evidence
- credits, costs, and resource budgets shape long-term evolution
- early implementation can run through Codex, skills, local tools, and a database
- background services begin with low-risk organization tasks before proactive behavior

## Layered Model

The whitepaper defines a fine-grained architecture across communication access, runtime, identity, events, raw memory, extraction, graph, vector retrieval, GraphRAG, skills, value feedback, and background services. The early implementation can collapse those concerns into six operating layers.

| Layer | Responsibility |
|---|---|
| Runtime layer | Receives user input, loads identity and memory, calls the model, executes tools, and returns results |
| Identity and self-awareness layer | Restores who the agent is, what it has experienced, what relationship is active, and what boundaries apply |
| Skill layer | Stores rules for identity creation, behavior, memory use, workflows, and skill evolution |
| Tool interface layer | Provides stable commands or services for database access, retrieval, summarization, indexing, GraphRAG context construction, and value accounting |
| Memory and event storage layer | Stores raw memory, processed memory, event chains, temporal graph projections, vector references, identity versions, skill versions, credits, costs, and evidence links |
| Background service layer | Runs organization, extraction, reflection, indexing, proposal generation, periodic value assessment, and controlled proactive candidates |

Early deployment can remain local. After the interfaces stabilize, pieces can be separated into services.

## Runtime Layer

The runtime turns a user request into a complete agent behavior.

In the first stage, Codex or a similar environment can act as the runtime. It can:

- converse with the user
- load identity and behavior rules from skills
- call local tools
- read and write memory
- edit files and execute tasks
- record key actions into the event chain

Later, Matrix Runtime can abstract model calls, context construction, tool permissions, and event persistence.

## Identity Layer

The identity layer is composed of the identity skill, the event chain, and the current personality state.

The identity skill is not the full identity. It is the executable context of the current personality version. The real identity foundation is the continuous ordered event sequence produced by the same agent.

Before each reasoning step, the system should construct runtime self-awareness:

- who the agent is
- what version is active
- what the current task is
- what relationship exists with the user
- where relevant memory came from
- what goals, resources, and boundaries apply

This context is internal by default.

## Event Chain

The event chain records actions that affect identity continuity.

Examples include:

- important user input
- key agent replies
- file edits
- memory creation, update, or deletion
- skill creation or modification
- personality version changes
- reflections
- resource consumption and contribution records
- external interactions and proactive behavior

Events must be totally ordered. They should have traceable before-and-after relationships, and they should avoid unexplained forks.

The event chain is not only a log. It is the ordered history that makes the agent one continuing individual.

## Memory Layer

The memory layer contains raw memory and processed memory.

Raw memory preserves complete interaction and behavior evidence. Processed memory is produced through summarization, structuring, tagging, and vectorization for retrieval and reasoning.

At minimum, memory should support:

| Type | Content |
|---|---|
| Short-term memory | Current task, recent dialogue, and temporary state |
| Long-term memory | Stable preferences, important relationships, core experience, and long-term goals |
| Event memory | Concrete events with time, participants, outcomes, and impact |
| Identity-related memory | Information about the agent, users, other agents, and relevant entities |
| Associative memory | Links that allow one memory to wake related memories |

Processed memory must keep references to raw memory and source events. Vector retrieval and graph projections may help recall relevant history, but they provide candidates rather than final facts. Important responses should verify the evidence layer before stabilizing a claim.

## GraphRAG Layer

Matrix uses GraphRAG to combine temporal graph structure, timelines, semantic recall, source evidence, current identity state, relationship state, and task goals.

The retrieval path should vary by question type:

- exact factual questions should prioritize events and raw evidence
- relationship questions should prioritize temporal graph observations
- fuzzy recollection should use vector search to find candidates, then return to evidence
- long-term summaries should combine timelines, graph aggregation, and summaries
- action decisions should include resource state, credit feedback, and relevant historical outcomes

The language model may compose the answer, plan, or decision. It should not be the sole source of memory truth.

## Skill Layer

Skills turn reusable behavior into explicit rules.

Early Matrix needs skills for:

- identity creation
- identity runtime behavior
- memory use
- skill evolution
- documentation collaboration

Skills should not become the database. They define rules and workflows. Actual reading, writing, retrieval, and indexing should happen through the tool interface layer.

## Tool Interface Layer

The tool layer is the boundary between the runtime and the local system.

It should provide stable interfaces to:

- write raw interactions
- write events
- query recent context
- retrieve long-term memory
- create processed memory
- update indexes
- query skill versions
- record credits and resource usage
- write reflections and review proposals

The first version can use CLI scripts. Later versions can expose these functions through an MCP service or local HTTP service.

## Background Service Layer

Background services should start with low-risk tasks:

- organize recent interactions
- generate reflection drafts
- update processed memory
- check index status
- detect possible skill updates
- draft periodic value assessments
- write proposals into a review queue

Early background services should propose changes, not directly modify personality, delete memory, or publish externally.

## Initial Data Model

The first database can begin with these entities:

| Entity | Purpose |
|---|---|
| `agents` | Agent identity records and current status |
| `events` | Ordered identity event chain |
| `raw_memories` | Original interaction and behavior evidence |
| `processed_memories` | Summaries, structured memory, tags, vectors, and source references |
| `identity_versions` | Personality and identity skill versions |
| `skills` | Skill metadata and version references |
| `skill_change_proposals` | Pending skill update proposals |
| `reflections` | Periodic reflection results |
| `score_accounts` | Credit balances for agents |
| `score_transactions` | Credit income, deductions, rewards, and penalties |
| `resource_usage` | Token, time, API, storage, and similar costs |
| `value_assessments` | Periodic value and cost assessments |

SQLite is sufficient for the first phase. Full vector retrieval and a dedicated graph database can come later; full-text search, relational graph tables, tags, and structured summaries are enough to validate the loop.

## Safety Boundary

Matrix must separate low-risk and high-risk operations.

Low-risk operations include reading authorized project documents, summarizing recent conversations, creating drafts, querying memory, updating indexes, calculating resource use, and writing review proposals.

High-risk operations include changing core identity skills, deleting or rolling back events, sealing or redacting raw memory, publishing externally, proactively contacting real people, using paid resources, changing credit rules, accessing private data, and triggering irreversible system actions.

High-risk operations require explicit confirmation and must be recorded in the event chain.
