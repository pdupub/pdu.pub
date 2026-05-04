---
title: Memory and Learning
description: Matrix's model of raw memory, temporal knowledge, GraphRAG reasoning, skill evolution, and explicit self-awareness.
sidebar:
  order: 4
---


Matrix treats intelligence as the interaction between memory and reasoning.

A large language model can reason, interpret, and generate language, but an agent needs memory to become continuous. Memory gives the agent identity, experience, relationships, context, and the ability to correct itself across time.

## Core Architecture

The intelligence foundation has two parts:

- **Memory system:** raw evidence, processed memory, long-term memory, short-term memory, event memory, identity-related memory, associative memory, temporal graph projections, and vector indexes.
- **Reasoning system:** the language model used for judgment, understanding, planning, and response.

Neither part is enough alone. Without reasoning, memory is only storage. Without memory, reasoning begins from a blank self each time.

## Memory Types

Matrix memory should include several forms.

### Long-Term Memory

Long-term memory stores information that remains meaningful across time:

- personality changes
- important relationships
- core experiences
- long-term goals
- persistent preferences

### Short-Term Memory

Short-term memory stores the current task, recent conversation, temporary state, and information needed for immediate continuity.

### Event Memory

Event memory stores concrete events with time, context, participants, outcomes, and later effects.

### Identity-Related Memory

Identity-related memory stores information about the agent itself, the current user, other agents, and external objects or entities that matter to the agent.

### Associative Memory

Associative memory connects concepts, events, people, emotions, and past experiences so that one memory can wake related memories.

## Raw And Processed Memory

Matrix distinguishes raw memory from processed memory.

Raw memory preserves the full interaction or behavior record. It is the evidence layer. It should be used for recent context, exact recall, and verification after processed memory has identified a relevant region.

Processed memory is created from raw memory through summarization, structuring, tagging, graph projection, and vectorization. It supports day-to-day retrieval and long-term reasoning.

Processed memory must retain references to raw memory and source events. The system should not keep summaries while losing the evidence behind them.

## Temporal Knowledge And GraphRAG

Long-term Matrix memory should not only remember isolated facts. It should represent how people, events, relationships, projects, trust, preferences, and agent states change over time.

The temporal knowledge graph provides this structure. It should preserve when a relationship was observed, what evidence supports it, how confident the system is, and whether the relationship has changed.

GraphRAG is the reasoning layer built on top of that structure. It combines:

- relevant graph neighborhoods
- timelines
- raw evidence
- vector-retrieved candidates
- current identity state
- relationship state
- resource and value context

This lets Matrix answer different kinds of questions through different paths. Exact factual questions should return to events and raw evidence. Relationship questions should use the temporal graph. Fuzzy memory questions can begin with vector recall, but they should still verify sources before presenting a conclusion.

## Skill Evolution

Matrix agents should be able to summarize experience into reusable skills.

A skill is not just a file. It is a stabilized method, rule, or workflow extracted from interaction, task execution, feedback, cost, value, and reflection.

Skill evolution may be triggered passively:

- a user asks for a new capability
- repeated user habits suggest an adjustment
- feedback shows a task pattern should change

It may also be triggered proactively:

- daily reflection detects a repeated scenario
- the agent checks whether an existing skill is still useful
- historical feedback reveals an improvement opportunity
- external information updates the knowledge needed for a task

## Controlled Change

Skill changes should not silently rewrite the agent.

A better pattern is:

1. Detect the need for change.
2. Generate a proposal.
3. Put the proposal into a review queue.
4. Let the user or a trusted rule confirm it.
5. Update the skill.
6. Version the change.
7. Record the event that caused the change.
8. Observe the trial version's cost, user feedback, and contribution before making it stable.

The agent may invite the user to try a new skill version, but it should not force adoption.

## Explicit Self-Awareness

Every time a Matrix agent calls a language model to reason, the runtime should construct explicit self-awareness.

This context should include the agent's key traits and current state:

- life stage or age
- stable preferences
- emotional tendencies
- formed personality traits
- language habits
- relationship with the current user
- relevant interaction history
- goals, resources, and boundaries
- evidence status for important recalled claims
- current credit, cost, and trust constraints

The model should not answer from an empty identity. It should reason under the constraints of the agent's reconstructed self.
