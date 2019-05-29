---
layout: splash
permalink: /
header:
  overlay_color: "#0092ca"
  overlay_image: /assets/images/home-page-feature.svg
  actions:
    - label: "<i class='fas fa-download'></i> GitHub"
      url: "https://github.com/pdupub/"
excerpt: >
  A decentralized identity-based social network.<br />
feature_row:

---



# PDU 一种基于去中心化账户系统的社交网络
Parallel Digital Universe - A decentralized identity-based social network

* email: hello@pdu.pub
* wechat: pengpengt00
* twitter: [@PDUPUB](https://twitter.com/pdupub)

[![License](https://img.shields.io/badge/license-GPL%20v3-blue.svg)](LICENSE)
[![Chat](https://img.shields.io/badge/gitter-Docs%20chat-4AB495.svg)](https://gitter.im/pdupub/Welcome)

**摘要：** 通常意义上的社交网络服务(SNS)，如Facebook、twitter、微信，用户可以在其上创建身份，维护关系并进行信息传播、交互。但现有的SNS均依赖于某个第三方提供的中心化的网络服务，这使得其很容易被控制或封锁隔离。BitTorrent协议，能够实现P2P的信息传播，但其根本目的是提高对于已知内容的传播效率，其弱化的账户系统设计不利于使用者对未知内容有所判别。对于去中心化的系统，即便用数字签名能够证明每个信息的来源，但是因为缺少第三方验证（如手机号注册）来给予账户创建成本，即便无用的信息充斥整个网络也无法信息来源进行惩罚。

我们提出一种在纯粹P2P的环境下给予账户创建成本的方式，并基于这种账户系统，构建完整的P2P社交网络形态。首先，我们以引用构建有序，用以证明某个特定行为发生于某行为之后，即时间证明。然后，规定新账户的创建必须由多个已存在的合法账户联合确认且同一账户的此类确认需满足的时间间隔。每个账户系统的使用者（包括非用户），都可以DAG的结构维护部分或全部账户之间的关系拓扑，并随时可以根据自己获知的消息，对新的账户进行验证增补，同时也可因作恶行为对某些账户及关联账户进行惩罚。使用者并不需要对所有行为产生共识，也无需维护同完全一致的信息。

详情请见[白皮书](https://github.com/pdupub/Documentation/blob/master/zh-CN/WhitePaper.md)

{% include feature_row %}

