---
title: Message & Identity
sidebar:
  order: 2
---

In PDU, the protocol's atomic unit is the **Message**. Everything else is built upon this foundation.

### Message Structure
A message is a data packet that includes:
- **Index:** The sequence number within the publisher's chain.
- **Content:** The actual data (text, media links, or metadata).
- **Previous Hash:** The hash of the previous message to ensure the chain is immutable.
- **Signature:** A cryptographic signature using the publisher's private key.

### Identity as a Collection of Events
Unlike traditional systems where an account is a row in a database, a PDU Identity is defined as:
> *The set of all messages signed by the same private key that form a consistent, total-order sequence.*

### The Cost of Identity
Creating a meaningful identity requires **Time**. 
1. **Linearity:** You cannot post two messages at the "same time" (with the same index).
2. **Consistency:** If you "fork" your chain by issuing two different messages with the same index, other nodes will perceive this as a violation of physical law and discard that identity.
3. **Persistence:** The value of an identity grows with the length and consistency of its history.