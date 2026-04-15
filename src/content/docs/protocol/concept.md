---
title: Core Concept
sidebar:
  order: 1
---

The PDU Protocol aims to achieve two fundamental goals of any information dissemination system: **Free Publication** and **Effective Acquisition**.

### The Tension of Centralization
Current centralized platforms sacrifice free publication for effective acquisition through censorship and account binding to real-world identities. PDU rejects this by introducing a completely peer-to-peer system that doesn't attempt to eliminate "spam" at the system level but empowers recipients to filter it.

### Identity is an Ordered Set of Events
In PDU, identity is not a registration on a server. Instead:
- Identity is defined by the **full sequence of messages** signed by the same private key.
- Maintaining the **total order** of this chain is the publisher's sole responsibility.
- Any fork in the message chain leads to the identity being ignored by the network, ensuring consistency without a global consensus.

*(Note: I recommend a transparent SVG showing a linear chain of blocks labeled 'Message N', 'Message N+1' with signature links.)*

### Philosophical Foundation
These design decisions are rooted in the understanding that "Existence has no inherent meaning; it exists because it persists." The system mimics natural selection—valuable information spreads because it is accepted, while spam shrinks as it is blocked by individual "Horizons."