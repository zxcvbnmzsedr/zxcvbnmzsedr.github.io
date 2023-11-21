---
title: nftables配置Zerotier
date: 2023-08-08 09:48
permalink: /posts/nftables%E9%85%8D%E7%BD%AEZerotier
categories:
- posts
tags: 
---
# nftables配置Zerotier

```sql
nft add table ip nat
nft add chain ip nat PREROUTING { type nat hook prerouting priority -100\; policy accept\; }
add rule ip nat POSTROUTING ip saddr 192.168.193.0/24 counter masquerade
add rule ip nat POSTROUTING oifname "ztqu3nw5bu" counter masquerade

add table ip filter
add chain ip filter FORWARD { type filter hook forward priority 0\; policy accept\; }
add rule ip filter FORWARD oifname "ztqu3nw5bu" counter accept
add rule ip filter FORWARD iifname "ztqu3nw5bu" counter accept
```

# 以下是GPT的解释

这个配置是用NFT (nftables)语法配置了两个表（tables）和相应的链（chains）来实现网络地址转换（NAT）和过滤功能。下面我会对每一部分进行解释：

1. 配置NAT表：

    ```sql
    nft add table ip nat
    ```

这行命令创建了一个名为 "nat" 的IP表，用于处理NAT规则。

2. 配置NAT表中的PREROUTING链：

```sql
nft add chain ip nat PREROUTING { type nat hook prerouting priority -100; policy accept; }
```

这行命令创建了一个名为 "PREROUTING" 的NAT链，并指定它的类型为 "nat"，表示这是一个用于处理入站数据包的NAT链。`hook prerouting`​表示此链挂钩到数据包在路由之前处理的阶段。`priority -100`​表示链的优先级为 -100，较高的优先级将在较低优先级之前处理。`policy accept`​表示默认情况下，如果数据包不匹配任何规则，将允许通过。

3. 在NAT表的POSTROUTING链中添加规则：

```sql
add rule ip nat POSTROUTING ip saddr 192.168.193.0/24 counter masquerade
```

这行命令添加了一个规则到名为 "POSTROUTING" 的NAT链。该规则的意思是将源IP地址为 `192.168.193.0/24`​ 的所有数据包进行NAT转换（Masquerade）。NAT转换会将内部私有IP地址（192.168.193.0/24）转换为外部公共IP地址（通常为出口网络接口的IP地址），以便这些数据包能够在公共网络上正确发送和接收。

4. 继续在NAT表的POSTROUTING链中添加规则：

```sql
add rule ip nat POSTROUTING oifname "ztqu3nw5bu" counter masquerade
```

这行命令添加了另一个规则到名为 "POSTROUTING" 的NAT链。该规则的意思是将通过网络接口名为 "ztqu3nw5bu" 发出的所有数据包进行NAT转换（Masquerade）。这可以确保通过特定网络接口发出的数据包也能正确地进行NAT处理。

5. 配置Filter表：

```sql
add table ip filter
```

这行命令创建了一个名为 "filter" 的IP表，用于处理过滤规则。

6. 配置Filter表中的FORWARD链：

```sql
add chain ip filter FORWARD { type filter hook forward priority 0; policy accept; }
```

这行命令创建了一个名为 "FORWARD" 的Filter链，并指定它的类型为 "filter"，表示这是一个用于处理转发数据包的过滤链。`hook forward`​表示此链挂钩到转发数据包的处理阶段。`priority 0`​表示链的优先级为0，较低的优先级将在较高优先级之后处理。`policy accept`​表示默认情况下，如果数据包不匹配任何规则，将允许通过。

7. 在Filter表的FORWARD链中添加规则：

```sql
add rule ip filter FORWARD oifname "ztqu3nw5bu" counter accept
```

这行命令添加了一个规则到名为 "FORWARD" 的Filter链。该规则的意思是允许所有通过网络接口名为 "ztqu3nw5bu" 转发的数据包通过。这可以确保特定网络接口的转发流量被允许通过。

8. 继续在Filter表的FORWARD链中添加规则：

```sql
add rule ip filter FORWARD iifname "ztqu3nw5bu" counter accept
```

这行命令添加了另一个规则到名为 "FORWARD" 的Filter链。该规则的意思是允许所有进入网络接口名为 "ztqu3nw5bu" 的数据包通过。这可以确保特定网络接口的入站流量被允许通过。

总结：以上配置示例展示了如何使用NFT来设置NAT和过滤规则。它首先创建了一个名为 "nat" 的NAT表，并在其下创建了一个PREROUTING链和一个POSTROUTING链，用于处理入站和出站数据包的NAT转换。然后，它创建了一个名为 "filter" 的Filter表，并在其下创建了一个FORWARD链，用于处理转发数据包的过滤。在各自的链中，添加了一些规则来实现相应的功能。
