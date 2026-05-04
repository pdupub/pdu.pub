---
title: Visible Identity Set
description: Consumers construct a local view of the network through trust propagation and blocking.
sidebar:
  order: 4
---

The **visible identity set** is the boundary of what a consumer can see in the network. This is how ParaDigi Universe contains spam without a central moderator.

It is not the same as a follow list. It is closer to a locally computed user range: only messages from identities inside that range can potentially become visible to the consumer.

### Trust Propagation

Consumers do not need a universal directory of good identities. They can grow visibility through local trust propagation.

- Consumers first choose initial trusted identities.
- If trusted Publisher A actively and positively interacts with Publisher B, your client may decide to include Publisher B.
- The direction matters: B commenting on A does not mean A has recognized B.
- This can extend through multiple layers, though shallow expansion is usually enough.
- Blocking cuts a specific trust path locally, but it is not a global ban. B may still enter through another trusted path.
- The expansion is gradual, which naturally limits the size of the visible set.

The time at which an interaction occurred does not change its trust weight in the basic mechanism. An interaction from a year ago and one from yesterday are treated the same unless a consumer's own local rules decide otherwise.

### New Identities

When a new publisher identity is created, it is initially outside every consumer's visible identity set. It must solve two problems:

- **Discovery:** third-party services may help new identities be found, but those services are auxiliary and non-decisive.
- **Trust:** the publisher must accumulate content and interactions over time. Time is the cost that cannot be forged.

### No Global Consensus

There is no global trending page, global blocklist, or system-wide ranking of relevance or spam.

- your visible identity set is **private** and **local**
- two consumers can have radically different versions of the network
- even the same algorithm may produce different visible sets if consumers have received different data
- information quality emerges statistically from many independent filtering decisions
