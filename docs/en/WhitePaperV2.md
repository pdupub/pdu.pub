---
layout: default
---

# PDU - A decentralized social networking service (version 2)

* github: [github.com/pdupub/documentation](https://github.com/pdupub/documentation/blob/master/zh-CN/WhitePaperV2.md)
* email: pdupub@gmail.com
* wechat: pengpengt00
* twitter: [@PDUPUB](https://twitter.com/pdupub)

[![License](https://img.shields.io/badge/license-GPL%20v3-blue.svg)](LICENSE)
[![Chat](https://img.shields.io/badge/gitter-Docs%20chat-4AB495.svg)](https://gitter.im/pdupub/Welcome)

**Abstract:** We believe that a social network that is closest to the natural state should have two fundamental functions. Any participant can **freely disseminate information**, and also be able to **effectively obtain information**.

The existence of third-party platforms provides great help for the realization of the above two functions. Through identity authentication methods such as phone number or email address, the platform can effectively limit the creation of virtual identities to reduce the spread of redundant information; use recommendation algorithms and associations between users to improve the efficiency of users in obtaining target information. However, the impact of the third-party platform itself on information dissemination is becoming increasingly serious. Restricting user permissions, blocking speech, and using the recommendation mechanism to expand the scope of specific topics. We do not deny the positive meaning of public opinion guidance in certain specific events, but just want to express our serious concern about **the unnatural dissemination of information**.

This paper proposes a new solution, building a social network service (SNS) system based on peer-to-peer (P2P) methods. All information in the system is determined by the signature, called a message. Through references between messages, messages signed by same key can form a total order relationship, and all messages can form a partial order relationship. Accounts are then defined on the basis of homologous total sequence messages. Any account can freely create a community, define its rules, and invite other accounts to join its own community based on self-identity. In any community, accounts and information rows can be filtered according to the invitation association relationship to achieve effective information acquisition.

<!-- MarkdownTOC depth=4 autolink=true bracket=round list_bullets="-*+" -->
- [Introduction](#introduction)
  * [Current Status](#current-status)
  * [Objective](#objective)
  * [Prerequisites](#prerequisites)
- [Message](#message)
- [Account](#account)
- [Community](#community)
  * [Rules](#rules)
  * [Explanation](#explanation)
- [Network Propagation](#network-propagation)
- [Rewards and Incentives](#rewards-and-incentives)
- [Privacy](#privacy)
- [Summary](#summary)
- [Appendix](#appendix)
<!-- /MarkdownTOC -->

## Introduction

### Current Status

Word of mouth is the most primitive way of information dissemination, and it is also a completely natural way of information dissemination. People passed on their experiences and feelings to others according to their own will. Through this repeated process, information spread among the group. The invention of writing expanded the boundaries of information dissemination in two dimensions of time and space. Today, with the development of the network, the efficiency of information dissemination has undergone a qualitative change, basically freed itself from the shackles of physical conditions such as time and distance.

Just as the delivery of ancient letters relied on the postal system, the dissemination of information on the network mostly relies on a powerful centralized third-party service, such as Facebook, Twitter, WeChat, Weibo, etc. There is no doubt that these services bring great convenience to users, but problems are gradually emerging. This service provider has the ability to make a decisive impact on the dissemination of information according to its own wishes, such as increasing or decreasing the audience of the dissemination of a certain category of information, directly silencing or deleting certain users, and ignoring a large number of users from a single information source, and so on. Many problems can ultimately be attributed to one point, that is, the centralized service provider is fully capable of influencing the natural dissemination of information, and the extent of influence is only limited by the scale and willingness of the platform itself.

The reliance on and impact on centralized services in information dissemination must coexist. If you want information dissemination to return to its natural state, you must abandon this dependence, which is equivalent to the need to achieve effective filtering of information and users in a peer-to-peer environment.

### Objective

We believe that a natural information dissemination system should have two fundamental functions:

1. Any participant should be able to freely disseminate information.
2. Any participant should be able to effectively obtain information.

Based on the natural information dissemination process in reality, this paper proposes a new solution so that this process can get rid of the dependence on centralized services. First, every message in the system must be digitally signed to confirm its origin. All messages in the system can construct one or more partial order relationships according to the reference relationship among them. All messages signed by the same private key can form a total order relationship by reference. We regard message sequences with the same source and total order relationship as a single account, and use signatures to identify them. Accounts can freely create communities and define rules by publishing create-type messages. Any account can invite new members to join their own community through an invite-type message. The invitation relationship between accounts in the community will become the basis for filtering spam accounts and redundant information.


### Prerequisites

For the information dissemination system described later in this article, we need to point out two premises:

1. All information in the system is public. We can simply understand that the transmission of confidential information is not the core problem that this system tries to solve, but it can be solved based on this system.

2. Participants in the system take the degree of information dissemination as their sole interest. The degree of dissemination mentioned here includes both time scale and spatial scale. Users hope that information can be obtained by more audiences in a shorter period of time.

Further discussion of these two premises can be found in the documents listed in the appendix.

## Message

Messages are the most basic data structure in the system and the only data type for peer-to-peer interaction. Other data types involved in the system, such as accounts and communities, can be constructed based on messages. Messages consist of three components: Message Content, References, and Signature.


### Message Content
The message content is the main body of the message, consisting of a message type and multiple content fragments. There are currently 5 message types in the system:

* Info: The main message type used to publish information. The content can contain different format fragments such as text, image, audio, etc.
* Profile: It is used for users to set their own attributes. Subsequent settings for the same attribute can override previous settings.
* Community: It is used to create new communities and set rules, such as invitation restrictions, etc.
* Invitation: It is used to invite other accounts to join the community which the user belongs.
* End: It is used when the current account wants the system to ignore its follow-up messages due to private key disclosure or other reasons.

### Reference List
The signatures of multiple messages are allowed in the reference list to determine the ordered relationship between the messages.

The message is allowed to put any known message signature into the reference list of this message, then calculate the hash and add the signature to prove that this message must be created after the referenced message. If the current account has already signed other messages, the system requires that the reference list must contain the signature of the last message signed by this account before. It is also recommended to include at least one latest message from any account in the reference list, in order to give the current message a more accurate verifiable range in terms of timing.

All messages from the same source can be guaranteed to form a total order relationship by reference, that is, any two messages signed by the same account have a definite sequence. Messages from different sources can use mutual references to form one or more partial order relationships, which can be represented by a directed acyclic graph (DAG).

### Signature

The existence of the signature can authenticate the source of the message and determine the integrity of the message content. At the same time, message signatures can also be put into the reference list of subsequent messages, indicating an ordered relationship between messages.

![msgs](../res/MsgLink.jpeg)

The figure above shows the construction and referencing relationship of each message.

## Account

In the system, all messages come with a signature for verifying their source, which is the account. The account and the private key correspond one to one, but they are not equivalent. Since a user (natural person) in the system can create multiple accounts, or multiple users can operate the same account, there is no necessary relationship between the account and the user. We believe that the account in this system is a subject with the sole purpose of maximizing information dissemination, which is represented by a series of messages with total order relationship, and is the smallest unit that can perceive external rewards and punishments and modify its future behavior.

![msgs](../res/Individual.jpeg)

In the system, individual messages can be considered as existing isolated objective events, their content itself won't change due to the influence of rewards or punishments and can't express a desire to spread. We order and combine all messages signed by the same key and the expectation of possible future releases as an account, the subject of action to achieve its own purposes and receive feedback from the outside world.

For the users who obtain information from the system, they can express rewards or punishments towards the message publishing account by treating the accounts differently. Users will be more proactive in obtaining and spreading the information they like and paying attention to the messages that the account will publish in the future. On the other hand, they can also reduce the spread of this account or blocking accounts. For the account owner, due to the fact that the recipients of information can block the information based on the account identity, producing a large amount of meaningless information is not prohibited but loses its meaning due to its inability to be spread.

We believe that due to the unrestricted and anonymous nature of private key creation, the existence of an account won't hinder the freedom of users to publish information, i.e. active freedom. At the same time, the existence of an account provides a marking for information filtering and is the basis for users to effectively obtain information, which to some extent safeguards the users' negative freedom.

## Community

### Rules

The community is the basic organizational form of relationships between accounts and is a necessary part of decentralized social systems. With the help of the community, users of the system can filter effective information without information publication restrictions. In the previous section, we established connections between messages with signatures as markers and regarded them as accounts for filtering messages. The community in this section refers to the connection established between users through invitation relationships and the resulting user set is regarded as the community. It should be noted that the main purpose of the community's existence is to help system participants filter accounts that may be of interest and does not directly affect the message transmission process.

The creation and participation of communities should comply with the following rules:


1. Each account can create as many communities as it wants, and each community definition message creates a community and defines its rules.
2. The rules include limits on the number of valid invitations each account within the community can send, the minimum number of invitations that must be received by external accounts to join the community, and the initial accounts of the community. The creator is the default account within the community.
3. Joining a community can only be done through invitations from existing members and must meet the minimum requirements set by the community rules.
4. The existence of communities is only the basis for account screening. System users can independently block any account in any community to maintain negative freedom.

### Explanation

We believe that traditional centralized platforms are not only technical platforms that provide social networking services, but more importantly, provide a centralized authority that defines rules and judges users according to these rules. For example, during the user registration process, the platform often defines some verifiable rules, such as mobile phone number verification, email verification, or KYC. Similar authoritative identities are also set in the internal organizational structure of the system. In WeChat groups, there will be administrators; in reddit, there will be moderators. This type of user has authority over other users, allowing them to reward or punish other users within the scope of authority, such as kicking out of group chats or banning speeches. We believe that this kind of inequality should not belong to the most basic relationship between accounts in the system, and we also believe that it is unfair to punish others on behalf of the group based on one's own subjective cognition.

Different from the group relationship in traditional platforms, in the decentralized social service system we propose, there is no single judgment authority in the community, and the account identities in the community are completely equal. No account, including the creator, has any special powers. Any account can belong to multiple communities at the same time, and accounts in each community invite accounts to join based on their self-identity. For example, my account can belong to "Programmer Community" and "Chaoyang Mass Community" at the same time. When I browse the messages in the system and find that an account A publishes lots of useful Chaoyang local information, I will sign a invitation message to invite that account A to join "Chaoyang Mass Community", but not the "Programmer Community". It should be emphasized that when an account has received enough invitations to join a community, it will be considered to belong to this community, but this only expresses the community's approval of the account, and does not mean that the account agrees with the community. It should also be noted that the community is made up of accounts not messages, so in the process of use, the scope of the community is more inclined to a certain identity than a certain hobby.

For message publishers, being invited to join more communities indicates wider recognition, which is favorable for the dissemination of their own information. For information recipients, the existence of communities provides them with a better basis for information screening, combined with the association of accounts within communities based on invitation relationships, they can effectively filter out redundant accounts and their messages.

## Network Propagation

A social system should have two basic functions, namely **free release of information** and **effective acquisition of information**. In traditional centralized services, the release and acquisition of messages are based on the user identity, but in decentralized social systems, it is slightly different. An account adds a corresponding signature to each message to become the basic unit of information release. The node is taken as the basic unit of information acquisition and forms a network through mutual connections, realizing the natural spread of information.

Nodes and accounts do not have any mandatory binding relationships, and information acquirers can use or build nodes without any accounts. The role of nodes is to freely choose how to handle the received information, such as accepting (saving), rejecting (blocking), or forwarding. Each node can save any part of the message, not the full amount. The transmission process supports the existence of platform-based nodes, which can store more messages and provide services such as message queries and searches for users. However, unlike centralized third-party platforms, messages belong to the publishing account, so you can freely use any third-party platform to obtain the same information. Of course, any node also has the freedom to block specific messages according to its own will.


Typically, whether a node receives a message depends on the following two factors:

1. Whether the message signer is blocked.
2. The time represented by the message reference, which tends to be closer in time.

A node whether or not forwards a message depends on:

1. An impact on the message content similar to the behavior of liking and commenting on a traditional third-party platform.
2. Its own forwarding rules, which tend to be messages that have not been widely spread.

It should be noted that the process of message transmission is constantly changing, and every node in the system may transmit, store, or delete any message at any time.




## Rewards and Incentives

We believe that a sustainable system should include two essential elements: **necessary consensus rules** and **reasonable interest drive**. The agreement of all participants on the rules is the foundation of the system, or any system is composed of individuals who agree on some of the same rules. Reasonable interest drive is the reason for the behavior of system participants, which will not change, and the rules must follow the participants' interest drive in order to be sustainable. These two points are not specific to decentralized systems. By defining the concepts of **message**, **account**, and **community**, we have provided enough rules for building a decentralized information dissemination system. In this section, we further explain why, based on these rules, the system can meet the interest drive of participants and ensure the continuous operation of the system.

In the [Introduction](#introduction), we proposed a premise that the system participants measure the degree of information dissemination as their only interest, and in this section, we will also explain the impact of user behavior on each other based on this premise. We believe that a system participant shows reward to other participants by helping their message spread, while punishment is shown by their own message being shielded. In terms of the system as a whole, rewards and punishments for each account will eventually be reflected in the expected speed and breadth of message dissemination. At the individual level, rewards and punishments are completely dependent on the subjective willingness of each node to other users and messages, but since all node owners are equal and there is no node with the power to make decisions on behalf of other nodes to spread or shield messages, this subjective decision does not affect the natural spread of information.

It should be noted that there is a potentially overlooked malicious behavior in the system, which is the existence of indistinguishable, same-origin messages through referencing relationships. This means that known messages signed by this account can form a partial order relationship, but not a total order relationship. We consider this as a malicious behavior because it undermines the theoretical basis of viewing a series of messages issued by this account as a separate individual account. The recommended handling for this situation is as follows:

1. Once this situation is discovered, the account should be blocked and no further messages should be received.
2. For received messages, it is recommended to rely on non-contradictory messages received by the system first, but subjective choices are also allowed.
3. When publishing messages, it is recommended to reference messages published by multiple credible heterogeneous accounts to avoid affecting oneself.
4. Treat received messages with contradictory references as containing unknown references.

In the following chapter [Calculation](#calculation), you can see the difference between a message that is liked by many people and another message that is liked by very few people in the process of spreading. We can also see that the community as a user screening tool has an impact on message dissemination, which is not direct and compulsory, but very large. In conclusion, unlike traditional centralized social systems, we give the power of information screening to each system participant and their relationship with each other. Each system participant can have their own choice, instead of only receiving a centralized judgment from a service provider.

## Privacy

As stated in the introduction, the first premise of the system is that all information is public, and absolute privacy does not truly exist.

Any message that has been spread will leave a trail in some way, and may be stored by some nodes or referenced by other messages. Information that leaves no trace is equivalent to not existing, as it has no effect on the system. The speed and breadth of information dissemination depend on the information itself, and privacy is only a temporary and uncertain degree of openness. The consequence is often not the confidentiality of the information, but the distorted continuation of the dissemination.

The preference for protecting privacy stems from the limitations of thinking that the overall benefit is destroyed by the overall investigation of privacy, but we believe that the public does not come from the fact that all messages are equally completely open, and that in reality, only part of the individual's information can be known by another part. The opposite is not possible. True privacy is only the information that has never been expressed in an individual's heart and does not require any protection by the system in any form. And public, communicated information should be accurately recorded and open.

For the privacy information commonly referred to, we believe that it does not directly belong to the system. For articles involving privacy, we do not recommend creating messages, even in encrypted form, as meaningless information to others can affect the dissemination of other information in the account. For privacy-related communications, you can publish your contact information in the form of a message, and then contact each other through other means.

## Calculation

...

## Summary

We believe that the approach of creating a decentralized account system (DID) first and then building a social networking service (SNS) based on it is not feasible. This is because the process of creating a decentralized account system cannot attach a reasonable and verifiable cost that can be verified by all users. System users cannot verify real identity associations such as phone numbers, emails, etc. in the same way as centralized platforms. At the same time, the system cannot cost computing power like currency systems like Bitcoin, because when computing power is no longer a comprehensive measurement mechanism and becomes individual creation costs, it cannot avoid its inherent unfairness. So we abandoned the objective cost of creating a unified verifiable account and instead turned it into a subjective cost attached to the content published, on the basis of which we can directly build a decentralized social networking system.

By using digital signatures and mutual references, we combine messages into an account that represents a specific intention and build a community of accounts that have relationships based on the self-identification of the accounts. Through these two levels of relationship, the problem of information not being able to be screened in the process of point-to-point information transmission is thoroughly solved. This allows the system users to freely create messages while also having the ability to choose from the vast amount of data the parts they wish to receive. The point-to-point system itself ensures the users' positive freedom and anyone can publish information according to their own wishes. At the same time, this system also gives the users the right to protect their negative freedom by reducing the impact of redundant data on them.

In contrast to the current mainstream ideas of protecting user privacy, we believe that any information exchange between individuals will leave behind traces of existence. The problem today stems from the different levels of information disclosure between individuals. When all information is recorded and made public, lies will disappear and living in the present will become the past. We will complete the upgrade of the **TIME** dimension.

## Appendix

1. [Draft(中文)](../zh/Draft.md)
2. [Zen of PDU](Zen.md) 
3. Implementation of PDU by golang - [go-pdu](https://github.com/pdupub/go-pdu)


[back](../../)

<a href="https://pdu.pub"><img height="32" align="right" src="https://pdu.pub/assets/img/logo.png"></a>
