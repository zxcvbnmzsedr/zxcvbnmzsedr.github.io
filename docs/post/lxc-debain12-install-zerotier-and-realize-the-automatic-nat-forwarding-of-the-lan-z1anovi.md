---
title: LXC Debain12安装zerotier并实现局域网自动nat转发
short_title: 
date: 2024-07-29 01:34:39
article: true
timeline: false
isOriginal: true
permalink: /pages/40bb6f/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# LXC Debain12安装zerotier并实现局域网自动nat转发

# 安装Tun

众所周知，ZeroTier 是通过绑定   **/dev/net/tun**  的 tun 接口来进行组网的，然而 pve 中用创建的 lxc都默认不存在这个接口，因此需要一些手动安装Tun。

先查看宿主机的Tun

```shell
ls -al /dev/net/tun

> crw-rw-rw- 1 root root 10, 200 Jul 26 21:25 /dev/net/tun
```

编辑容器

```shell
# XXX为容器ID
vim /etc/pve/lxc/XXX.conf 
```

在末尾添加如下代码, 下面的10,200就是`ls -al /dev/net/tun`展示的10,200

```shell
lxc.cgroup.devices.allow: c 10:200 rwm
lxc.cgroup2.devices.allow: c 10:200 rwm
lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file
```

# 开启IP转发

启动 lxc 容器后, 编辑 `/etc/sysctl.conf` 文件, 将以下两行的注释去掉. 如果没有这两行, 需要添加

```shell
net.ipv4.ip_forward=1
net.ipv6.conf.all.forwarding=1
```

编辑完成后, 使用 `sysctl` 命令 reload

```shell
sysctl -p /etc/sysctl.conf
```

# 安装Zerotier

使用脚本一键安装

```shell
curl -s https://install.zerotier.com | bash
```

# 配置静态路由

由于用的Debain12默认使用的是nftable, 所以需要使用nftable的规则进行安装

通过 `ip a` 命令可以查询到 zerotier 虚拟网卡的名称是什么, 这里假设 zerotier 网卡名称为 `ztabcdef`, 物理网卡名称为 `eth0`. 对以下变量进行赋值

```shell
PHY_IFACE=eth0; ZT_IFACE=ztqu3nw5bu;
```

添加防火墙规则

```shell
nft add table ip filter
nft add chain ip filter FORWARD { type filter hook forward priority 0 \; }

nft add rule ip filter FORWARD iif $PHY_IFACE oif $ZT_IFACE ct state related,established accept
nft add rule ip filter FORWARD iif $ZT_IFACE oif $PHY_IFACE accept

```

持久化规则, 正常情况下`nft list ruleset > /etc/nftables.conf`就行了，但是我的由于装了crash，也是用的这套规则为了避免冲突，所以手动挑选一下规则 放过去。

执行`nft list ruleset`命令，能看到下面这一段

```shell
table ip filter {
	chain FORWARD {
		type filter hook forward priority filter; policy accept;
		iif "eth0" oif "ztqu3nw5bu" ct state established,related accept
		iif "ztqu3nw5bu" oif "eth0" accept
	}
}
```

将这个放置到`/etc/nftables.conf`即可
