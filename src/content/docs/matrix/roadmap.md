---
title: Roadmap
description: The staged implementation path for Matrix, from identity creation to memory, growth, sidecar services, proactive behavior, and multi-agent selection.
sidebar:
  order: 5
---


Matrix should be developed iteratively.

The project should first build a working loop for agent creation, memory, identity continuity, and skill evolution. Only after that should it expand into proactive behavior or a full independent platform.

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
- memory storage and retrieval
- event chains
- skill evolution
- local data structures
- controlled background services

The project should not build a complete platform before proving these core mechanisms.

## Stage 1: Codex, Skills, And Local Database

The goal is a minimal verifiable loop.

Required capabilities:

- an identity skill can be loaded consistently
- interactions and key actions can be written into a local database
- the event chain has increasing order
- recent context and long-term memory can be retrieved
- skill changes can record source events and versions

This stage should not include high-frequency autonomous background behavior, uncontrolled external actions, or a multi-agent selection system.

## Stage 2: Sidecar Service

The second stage introduces a background service as a sidecar.

Its role is low-risk organization:

- summarize recent interactions
- generate processed memory
- update indexes
- create daily or periodic reflections
- detect possible skill updates
- put proposals into a review queue

The sidecar should not directly change core personality. It prepares material for review.

## Stage 3: Controlled Proactive Behavior

The third stage allows limited proactive behavior.

Possible abilities include:

- proactive reminders
- proposing a new skill trial
- asking for missing information
- organizing project material
- checking resource state
- summarizing external information

High-impact actions must remain user-confirmed.

## Stage 4: Multi-Agent Selection

The fourth stage supports multiple Matrix agents.

Required capabilities:

- isolated identities
- independent event chains
- independent memory spaces
- contribution and consumption evaluation
- resource allocation rules
- pause, retain, remove, and restore mechanisms

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
