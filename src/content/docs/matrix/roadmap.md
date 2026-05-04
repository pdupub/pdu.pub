---
title: Roadmap
description: The staged implementation path for Matrix, from identity creation and event sourcing to GraphRAG, value feedback, sidecar services, proactive behavior, and multi-agent selection.
sidebar:
  order: 6
---


Matrix should be developed iteratively.

The project should first build a working loop for agent creation, memory, identity continuity, value feedback, and skill evolution. Only after that should it expand into proactive behavior or a full independent platform.

## Development Method

The first stage is to create a skill for agent identity creation. More precisely, it is a personality distillation and identity initialization method.

This method should allow a user to create an agent from:

- an original concept
- a fictional character
- a public figure
- a person known to the user
- a mixed set of references

The output should not be role-play. It should be an initial Matrix identity with a self-model, memory structure, emotional orientation, boundaries, and evolution rules.

The first created agent should also help develop Matrix itself. It should assist with design, implementation, documentation, critique, and future improvement.

## Early Implementation Strategy

At the beginning, Matrix should use existing agent environments when possible.

Codex, Claude Code, or a similar system can provide:

- conversation
- tool execution
- file editing
- development workflows
- local script integration

Matrix-specific development should focus on:

- identity creation and runtime skills
- immutable raw memory, processed memory, and retrieval
- append-only event chains
- temporal graph and GraphRAG foundations
- credit, resource, and value accounting
- skill evolution
- local data structures
- controlled background services

The project should not build a complete platform before proving these core mechanisms.

## Stage 1: Documents, Identity, And Minimal Event Chain

The goal is to give Matrix minimal identity continuity.

Required capabilities:

- an identity skill can be loaded consistently
- the first Matrix agent identity can assist with the project
- interactions and key actions can be written into an append-only local database
- the event chain has increasing sequence numbers and previous-event references
- recent context can be recovered
- skill changes can record source events and versions

This stage should not include high-frequency autonomous background behavior, uncontrolled external actions, or a multi-agent selection system.

## Stage 2: Processed Memory And Retrieval

The second stage lets the agent use long-term memory rather than only recent context.

Required capabilities:

- raw interaction summaries
- event summaries
- tag and topic extraction
- person and project entity extraction
- full-text search
- initial vector index
- references from processed memory to raw events

Retrieval results must be able to return to raw evidence, and the system must distinguish fact, summary, and inference.

## Stage 3: Temporal Knowledge Graph

The third stage lets Matrix remember people, events, relationships, and change.

Required capabilities:

- entity tables
- relation tables
- relation observations
- structured event tables
- LLM extraction queues
- confidence and evidence management
- basic graph queries

The system should be able to answer who participated in an event, how a relationship changed, and what timeline belongs to a project or person.

## Stage 4: GraphRAG

The fourth stage combines graph structure, timelines, source evidence, and semantic recall for reasoning.

Required capabilities:

- query-intent classification
- vector recall
- subgraph expansion
- timeline construction
- evidence compression
- token-budget control
- answer-generation templates

Important conclusions should cite evidence where possible, and uncertain content should be marked as uncertain.

## Stage 5: Credits, Resources, And Self-Assessment

The fifth stage creates the value-feedback loop.

Required capabilities:

- credit accounts
- credit transactions
- task-value records
- token and tool-cost records
- periodic value assessment
- resource-budget policies
- evaluation of return on learning investment

Each task should be able to record both return and consumption. The agent should learn which behaviors are valuable, which are inefficient, and which investments should change in the next cycle.

## Stage 6: Sidecar Service

The sixth stage introduces a background service as a sidecar.

Its role is low-risk organization:

- summarize recent interactions
- generate processed memory
- run extraction jobs
- update indexes
- create daily or periodic reflections
- detect possible skill updates
- draft value assessments
- put proposals into a review queue

The sidecar should not directly change core personality, delete memory, publish externally, or execute high-impact proactive behavior. It prepares material for review.

## Stage 7: Controlled Proactive Behavior

The seventh stage allows limited proactive behavior.

Possible abilities include:

- proactive reminders
- proposing a new skill trial
- asking for missing information
- organizing project material
- checking resource state
- summarizing external information
- low-risk proactive learning

High-impact actions must remain user-confirmed and must be recorded in the event chain.

## Stage 8: Multi-Agent Selection

The eighth stage supports multiple Matrix agents.

Required capabilities:

- isolated identities
- independent event chains
- independent memory spaces
- controlled shared external-world graph access
- contribution and consumption evaluation
- credit accounts for multiple agents
- resource allocation rules
- pause, retain, remove, restore, and archive mechanisms

Selection should observe not only one-time task performance, but long-term contribution to the project, users, and the agent's own continued existence.

## Three Core Development Tracks

Matrix development can also be viewed as three interdependent tracks.

| Track | Purpose |
|---|---|
| Agent creation | Create an initial personality and identity structure |
| Agent growth | Support memory, self-improvement, slow personality evolution, and behavior optimization |
| Agent selection | Compare multiple agents and allocate resources based on contribution, efficiency, and fit |

The first two tracks will require repeated development, testing, and adjustment. The third track depends on the observability built into the first two.

## Recursive Improvement

Matrix itself and the agents created by Matrix should both improve over time.

The project improves through better documents, skills, architecture, and implementation. The agents improve through memory, reflection, skill changes, and personality growth.

The long-term goal is a stable self-evolution loop: agents that learn, adapt, create value, and participate in the continued development of Matrix.
