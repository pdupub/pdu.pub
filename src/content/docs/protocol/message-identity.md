---
title: Message & Identity
description: Messages are the only protocol object, and publisher identity is the ordered chain they form.
sidebar:
  order: 3
---

The atomic unit of ParaDigi Universe is the **message**. Everything else is built from it.

### Message Structure
A message carries three essential parts:

- **Content:** the media body and interaction type, such as publishing, replying, quoting, liking, or blocking
- **References:** signatures of related messages, including the publisher's previous message as the first reference
- **Signature:** proof that the message belongs to one publisher identity

The first reference must point to the previous message signed by the same private key. If the message is the first one signed by that key, the first reference is `0`. Other referenced message signatures can describe replies, quotes, and more precise temporal relationships.

### Identity as a Collection of Events
Unlike systems where an account is a database record, publisher identity here is:

> The set of messages signed by the same private key that form a consistent total-order sequence.

This total order is what allows contradictions to remain interpretable. If a publisher says one thing and later says the opposite, observers can still judge the change by reading the sequence. If the chain forks into incompatible next events, that shared interpretability is lost.

### The Cost of Identity
Creating a meaningful identity requires **time**.

1. **Linearity:** a publisher cannot maintain two conflicting next states in the same history.
2. **Consistency:** if the chain forks, participants can stop trusting that identity beyond the fork.
3. **Persistence:** the longer and more coherent the history, the easier it is for others to evaluate.

Maintaining the total order is the publisher's responsibility. If a referenced previous message has not yet been received, clients should temporarily store the new message rather than accept it or punish the publisher. If a real fork is discovered, the usual response is to discard the later-received conflicting branch and block or ignore the publisher from the conflict point onward.

Any lawful identity made from totally ordered events has equal protocol status, whether the entity behind it is a person, an organization, or an artificial intelligence.
