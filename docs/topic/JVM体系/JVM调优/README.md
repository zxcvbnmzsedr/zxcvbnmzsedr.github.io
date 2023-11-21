---
title: JVM调优
date: 2022-08-15 13:11
permalink: /topic/JVM%E4%BD%93%E7%B3%BB/JVM%E8%B0%83%E4%BC%98
topic: 
  - topic
tags: null
categories: 
  - topic
  - JVM体系
  - JVM调优
---
# JVM调优

> 在当下，最好的jvm调优，就是升级你的java版本。
>
> 并且调参JVM是迫不得已的选择！

你所看到的大部分jvm调优的文章，都是关于古老的，那个已经被废弃不用的cms的gc策略的调优手段。新版本的jdk/java中是找不到这个gc策略的。

默认的gc策略是g1，g1缺省参数已经能满足大部分应用需要了。

​![](https://image.ztianzeng.com/uPic/20220822145043.png)​

完！

‍
