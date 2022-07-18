---
layout: default
---

# PDU 去中心化网络社交服务 

**摘要：** 我们认为一个最接近自然状态的社交网络应当具备两个基础功能，任何参与者都能够**自由的传播信息**，同时也能够**有效的获取信息**。

第三方平台的存在，为这两个目的提供了极大的帮助，通过手机号，邮箱等身份认证方式，有效的防止了大量创建虚拟身份和无限制的信息传播；利用推荐算法及用户之间的关联，提高了使用者获取目标信息的效率。但同时，第三方平台本身对于信息传播的影响也越来越严重，限制用户权限，屏蔽言论，利用推荐机制扩大特定话题的传播范围。我们并不否定舆论的引导在某特定事件上存在的积极意义，只想表达对于**信息非自然传播**的担忧。

本文提出一种新的解决方案，基于点对点的方式构建社交网络服务。网络中的每一条信息均由签名确定其来源，称为消息。通过消息之间的引用，同源消息可以构成全序关系，异源消息构成偏序关系。以消息为基础，使用者可以自由的创建社区规则，并基于自我认同，邀请他人参与自己所在的社区。社区内的用户均存在偏序的关联，使用者可以基于这种关联关系，以身份为标志对信息，及其关联身份的信息进行筛选。

[去中心化的SNS / A decentralized identity-based social networking service](https://github.com/pdupub/documentation/blob/master/zh-CN/WhitePaperV2.md)


# Zen release 0.3
* Events determine partial order relationships through directed associations.
* Homologous fully sequenced events can constitute a single individual.
* The composition of groups arises from the self-identification of individuals.
* The system world is determined by the subjective choices of individuals.


# PDU之禅 Relase 0.3 
* 事件通过有向关联确定偏序关系.
* 同源的全序事件能构成单一个体.
* 群体的构成源于个体的自我认同.
* 系统世界决定于个体的主观选择.

这个版本与之前有所区别，依然保留了关系的有向链接，但去掉了对于时序的强制。


# 对于PDU想法的再次精简

* 事件通过直接或间接的影响确定偏序关系。
* 任何有全序关系的系列事件都可作为时间。
* 系统的构成基于个体对于事件的主观选择。
* 系统有限的变化速度依赖于事件附有成本。

在思考的过程中，我也试过将偏序直接作为时间，而不用全序的事件作为简化替代。
但那需要空间的配合能够让概念回归到速度这个更基础概念，且需要足够的事件将任何单独事件都视为微观。

想想还是如此吧，虽然真实世界更接近相对论的描述，但我们还是生活（感知）在经典物理中。


# PDU之禅

* 选择相同时间的个体组成一个系统。
* 个体可以任意选择自己接受的创建成本与生命周期。
* 系统中新的个体由现有个体通过特定消息创建，发布创建消息的时间间隔可表述创建成本。
* 个体只接受任意个体从创建之后到特定时间之前发布的消息，并称之为其的生命周期。
* 系统最初包必含有限个体，相关后续系统由最初系统通过改变时间分裂而来，其后续系统包含原系统中的个体并继承其生命周期的剩余。
* 个体可选择包含自己在内的任一个体发布的有序消息作为时间。
* 消息的时间由其直接或间接引用的时间来表述，可证明本消息发生于特定时间之后。
* 个体可以发布特定消息来表述结束自己的生命周期。


# Zen of PDU

* The system consists of individuals who choose the same time。
* Individuals can arbitrarily choose the creation cost and life length they accept.
* New individuals in the system are created by existing individuals through specific messages, and the time interval for publishing the creating messages can be used to measure the creation cost.
* An individual only accepts messages published by any individual from its creation to a specific time, and this is called its life length.
* The initial state of the system must contain limited individuals. Related subsequent systems are split from the initial system by changing time. The subsequent systems include individuals in the original system and inherit the remainder of their life length.
* Individuals can choose orderly messages published by any individual including themselves as the time.
* The time of the message is expressed by the directly or indirectly quoted specific time, which can prove that the message occurred after a that time.
* Individuals can post specific messages to mark the end of their life.


# 八卦国编年史--PDU的通俗解释

本文尝试用一个简单的故事来说明以下观点：
  1. 源生的信息传播是基于点对点的。
  2. 阻碍信息正常传播的根本在于系统中创建新节点的成本不一致。
  3. 时间及节点间相互关系是为创建新节点增加成本的正常方式。 

  * 欢迎 ✨Star✨ [https://github.com/pdupub](https://github.com/pdupub)

八卦国是一个神奇的国家，交流八卦是他们的生活态度，这里所讲述的就是他们的故事。

很久很久以前，八卦国还只是一个百十户人家的村庄，他们因共同的爱好“讲八卦”而聚在一起。村民们大都相互认识，八卦完全是靠口耳相传，由村民讲给自己身边的亲友。有的八卦闹全村人尽皆知，有的八卦则只会在几个密友间流传。八卦真真假假，包罗万象，随着新的八卦层出不穷，老的八卦总会被人遗忘。这种看似原始的状态也可以认为是最**正常**的状态，消息系统本身构成一个闭环，每个节点以同等的权重决定信息的传播。消息传播过程的正常与信息内容的真假，目的的好坏，事情的对错无关。

[八卦国编年史更多章节...](https://github.com/pdupub/Documentation/blob/master/zh-CN/FakeHistory.md)


# Parallel Digital Universe 
A decentralized identity-based social network

We propose a way to make sure account creation costs in a pure P2P environment, and based on this account system, build a complete P2P social network. First, we construct an order by reference to prove that a particular behavior occurs after a certain behavior, that is time proof. Then, the time interval between the creation of a new account must be jointly confirmed by multiple existing legal accounts and such confirmation of the same account must be met. Users (including non-users) of each account system can maintain the relationship topology between some or all of the accounts of the DAG structure. new accounts can be verified at any time based on the information they have learned. Evil acts punish certain accounts and related accounts. Users do not need to agree on all behaviors, nor do they need to maintain consistent information.

White Paper: [https://github.com/pdupub/Documentation](https://github.com/pdupub/Documentation/blob/master/WhitePaper.md)



# PDU 基于去中心化账户系统的社交网络

我们提出一种在纯粹P2P的环境下给予账户创建成本的方式，并基于这种账户系统，构建完整的P2P社交网络形态。首先，我们以引用构建有序，用以证明某个特定行为发生于某行为之后，即时间证明。然后，规定新账户的创建必须由多个已存在的合法账户联合确认且同一账户的此类确认需满足的时间间隔。每个账户系统的使用者（包括非用户），都可以DAG的结构维护部分或全部账户之间的关系拓扑，并随时可以根据自己获知的消息，对新的账户进行验证增补，同时也可因作恶行为对某些账户及关联账户进行惩罚。使用者并不需要对所有行为产生共识，也无需维护同完全一致的信息。

白皮书: [https://github.com/pdupub/Documentation](https://github.com/pdupub/Documentation/blob/master/zh-CN/WhitePaper.md)

