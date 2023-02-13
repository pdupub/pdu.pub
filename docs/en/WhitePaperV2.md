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

**Abstract**: We believe that the closest social network to its natural state should have two fundamental functions: any participant can **freely spread information**, and also be able to **effectively obtain information**.

The existence of third-party platforms has greatly helped to achieve the above two functions. By using identity authentication methods such as phone numbers and email addresses, it effectively prevents the creation of a large number of virtual identities and unrestricted information dissemination; using recommendation algorithms and user relationships, it improves the efficiency of users obtaining target information. However, at the same time, the impact of the third-party platform itself on information dissemination is becoming increasingly serious, limiting user rights, censoring speech, and using recommendation mechanisms to expand the scope of specific topics. We do not deny the positive meaning of public opinion guidance in certain specific events, but just want to express our concern about information not being naturally spread.

This paper proposes a new solution, building a social network service (SNS) system based on peer-to-peer (P2P) methods. All information in the system is determined by the signature of its source, referred to as a message. Through references between messages, source messages can form a total order relationship, and different source messages form a partial order relationship. Based on the source total order messages, the definition of an account is established. Any account can freely create community rules and, based on self-identification, invite other accounts to join the community they belong to. Accounts within the community have partial order relationships, and based on this relationship, they can filter accounts and information to achieve effective information retrieval.


<!-- MarkdownTOC depth=4 autolink=true bracket=round list_bullets="-*+" -->
- [Introduction](#Introduction)
  * [Current Status](#Current-Status)
  * [Objective](#Objective)
  * [Prerequisites](#Prerequisites)
- [Message](#Message)
- [Individual](#Individual)
- [Community](#Community)
  * [Rules](#Rules)
  * [Explanation](#Explanation)
- [Network Propagation](#Network-Propagation)
- [Rewards and Incentives](#Rewards-and-Incentives)
- [Privacy](#Privacy)
- [Summary](#Summary)
- [FAQ](#faq)
<!-- /MarkdownTOC -->

## Introduction

### Current Status

After the emergence of language, the earliest form of information transmission began, which was oral transmission. People transmitted their experiences and feelings to others through language according to their own will. Through this repeated process, information spread among the group. The invention of writing further expanded the boundaries of information transmission on the dimensions of time and space. Today, with the development of the network, the efficiency of information transmission has undergone a qualitative change and has basically freed itself from the shackles of physical conditions such as time and distance.

Just as the delivery of ancient letters relied on the postal system, today, the transmission of information on the network mostly relies on a powerful centralized third-party service, such as social network services such as Facebook, Twitter, WeChat, Weibo, and so on. There is no doubt that these services bring great convenience to users, but problems are gradually emerging. This center has the ability to make a decisive impact on the transmission of information according to its own will, such as increasing or decreasing the audience of the transmission of a certain category of information with a certain tendency, directly silencing or deleting certain users, and ignoring a large number of users from a single information source, and so on. Many problems can ultimately be attributed to one point, that is, the third-party platform has the complete ability to influence the natural transmission of information, and the extent of its influence is only controlled by the platform's own behavior standards and will.

The dependence on third-party services and the influence they receive in information transmission are inevitable coexistence. If you want information transmission to return to its original form and be closer to natural transmission, then you must give up the dependence on third-party platforms, which is equivalent to the need to achieve effective screening of information and users in a peer-to-peer environment.

### Objective

We believe that a natural information dissemination system should have two basic functions:

1. Any participant should be able to freely disseminate information.
2. Any participant should be able to effectively access information.

This paper proposes a new solution based on the original natural information dissemination methods in reality, so that the information dissemination process can be free from dependence on centralized third-party services. First, each message in the system must be accompanied by a digital signature to identify the source of the information. Messages can be used to build one or more partial order relationships for the entire system by referencing each other. At the same time, all messages from the same private key signature form a total order relationship by referencing each other. We view a sequence of messages from the same source and with a total order relationship as a single account, identified by the signature. Accounts can freely create communities by publishing specific types of messages and specifying community rules. Accounts belonging to a specific community can add members to their own community by inviting them in the form of specific types of messages. The invitation relationship between accounts in a community will become the main form of account and information screening.


### Prerequisites

For the information transmission system described later in this article, we need to point out two prerequisites:

1. All information in the system is public. We can simply understand that the transfer of confidential information is not the core problem that this system tries to solve, but can be solved based on this system.
2. All participants in the system measure their interests solely by the degree of information transmission. The degree of transmission mentioned here includes both the time scale and the spatial scale, and users hope that the information can be obtained by more audiences in a shorter time.

Further discussion on these two settings can be found in the documents listed in the appendix.

## Message

Messages are the most basic data structure in the system and the only data type for peer-to-peer interaction. Other data types involved in the system, such as accounts and communities, can be constructed based on messages. Messages consist of three components: Message Contents, References, and Signature.

Message Contents is the subject of the message and consists of a message type and multiple content fragments. Currently, there are 5 types of messages in the system.
* Info: The main message type used to publish information. The content can contain different format fragments such as text, image, audio, etc.
* Profile: Used for users to set their own attributes. Subsequent settings for the same attribute can override previous settings, indicating an update of the attribute.
* Community Define: Used to set new community rules, such as invitation restrictions, etc.
* Invitation: Used to invite other accounts to join the community.
* End: Used when the current account wants the system to ignore its subsequent messages for some reason (such as a private key leak).

The reference list can contain signatures of multiple messages to determine the order of relationships between messages.

A message can put the signature of any known message into its reference list, calculate the hash after that, and add the signature to prove that the message must happen after the referenced message. If the current account has signed a message before, the system requires that the reference must necessarily include the last message signed by this account. In the process of using it, it is recommended to include at least one relatively new message in the message body to give the message a more accurate range of credibility.

For messages from the same source, it should be ensured that through referencing, all messages form a total order relationship, so that any two messages signed by the same account have a determined order. Messages from different sources can use references to each other to form one or more partial order relationships, which can be represented by a directed acyclic graph (DAG).

The existence of signatures first can authenticate the identity of the message source and determine the completeness of the message content. Message signatures can also replace hash values and be placed in the reference list of subsequent messages to indicate a ordered relationship.

![msgs](../res/MsgLink.jpeg)

The figure above shows the construction and referencing relationship of each message.

## Individual

In the system, all messages come with a signature for verifying their source, which is the account. The account and the private key correspond one to one, but they are not equivalent. Since a user (natural person) in the system can create multiple accounts, or multiple users can operate the same account, there is no necessary relationship between the account and the user. We believe that the account in this system is a subject with the sole purpose of maximizing information dissemination, which is represented by a series of messages with full ordering relationships, and is the smallest unit that can perceive external rewards and punishments and modify its future behavior.

![msgs](../res/Individual.jpeg)

In the system, individual messages can be considered as existing isolated objective events, their content itself won't change due to the influence of rewards or punishments and can't express a desire to spread. We order and combine all messages signed by the same account and the expected future messages, as an account, the subject of action to achieve its own purposes and receive feedback from the outside world.

For the users who obtain information from the system, they can express rewards or punishments towards the message publishing account by treating the accounts differently, they will be more proactive in obtaining and spreading the information they like and paying attention to the messages that the account will publish in the future. On the other hand, they can also reduce the spread of this account through methods such as blocking accounts. For the account owner, due to the fact that the recipients of information can block the information based on the account identity, producing a large amount of meaningless information is not prohibited but loses its meaning due to its inability to be spread.

We believe that due to the unrestricted and anonymous nature of private key creation, the existence of an account won't hinder the freedom of users to publish information, i.e. active freedom. At the same time, the existence of an account provides a marking for information filtering and is the basis for users to effectively obtain information, which to some extent safeguards the users' negative freedom.

## Community

### Rules

The community is the basic organizational form of relationships between accounts and is a necessary part of decentralized social systems. With the help of the community, users of the system can filter effective information without information publication restrictions. In the previous section, we established connections between messages with signatures as markers and regarded them as accounts for filtering messages. The community in this section refers to the connection established between users through invitation relationships and the resulting user set is regarded as the community. It should be noted that the main purpose of the community's existence is to help system participants filter accounts that may be of interest and does not directly affect the message transmission process.

The creation and use process of communities should comply with the following rules:

1. Each account can define as many community rules as they wish, and each published rule defines a message that creates a community.
2. The rules include limits on the number of valid invitations each account within the community can receive, the minimum number of invitations that must be received by external accounts to join the community, and the initial accounts of the community. The creator is the default account within the community.
3. Joining a community can only be done through invitations from existing members and must meet the minimum requirements set by the community rules.
4. The existence of a community is just the foundation for account screening, and system users can freely block any account in any community to maintain negative freedom.

### Explanation

We believe that traditional third-party platforms are not only technology platforms that provide social network services, but more importantly, they provide a centralized authority that defines rules and standards and judges users based on those standards. For example, the platform often defines verifiable rules for accepting users, such as mobile phone verification, email verification, or KYC, etc. Similarly, in the internal organizational structure of the system, similar authorities are designed. In WeChat groups, there will be administrator identities; in Reddit, there will be moderators. Such users all have the authority to exceed other users, allowing them to punish other users within their jurisdiction, such as kicking out of a group chat or silencing, etc. We believe that first, this inequality should not be the most basic account relationship in the system, and secondly, we believe that it is unjust for individuals to represent a group and punish others based on their own subjective perceptions.

Unlike traditional group relationships in traditional platforms, in our proposed decentralized social service system, there is no single authoritative entity in the community and account identities are completely equal. Including the creator, no account has any special power. Any account can belong to multiple communities simultaneously, and accounts in each community are based on their self-role identification and are invited to join by other accounts. For example, my account x can belong to both the basketball sports community A and the movie lovers community B at the same time. If I feel that account y is particularly fond of basketball through browsing messages, I might invite him to join the basketball sports community A, but I wouldn't invite him to join the movie lovers community B. It should be emphasized that when account y receives enough invitations to join the basketball sports community A, he will be considered as having joined this community, but this only expresses the recognition of this community for this account and does not indicate the account's recognition of this community. Also, it should be noted that the community is defined for the account, not the message, so even if y joined the basketball sports community A, he may still be able to publish information related to movies or food, or stop publishing basketball-related messages.

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
