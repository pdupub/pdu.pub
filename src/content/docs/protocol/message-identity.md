---
title: Message & Identity
description: Messages are the only protocol object, and publisher identity is the ordered chain they form.
sidebar:
  order: 3
---

The atomic unit of ParaDigi Universe is the **message**. Everything else is built from it.

### Message Structure
A message carries three essential parts:

- **Content:** the media or interaction itself
- **References:** signatures of related messages, including the publisher's previous message
- **Signature:** proof that the message belongs to one publisher identity

### Identity as a Collection of Events
Unlike systems where an account is a database record, publisher identity here is:

> The set of messages signed by the same private key that form a consistent total-order sequence.

### The Cost of Identity
Creating a meaningful identity requires **time**.

1. **Linearity:** a publisher cannot maintain two conflicting next states in the same history.
2. **Consistency:** if the chain forks, participants can stop trusting that identity beyond the fork.
3. **Persistence:** the longer and more coherent the history, the easier it is for others to evaluate.
