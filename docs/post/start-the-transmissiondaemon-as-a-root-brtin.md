---
title: 以 root 身份启动 transmission-daemon
short_title: 
date: 2024-12-13 03:21:31
article: true
timeline: false
isOriginal: true
permalink: /pages/33f168/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# 以 root 身份启动 transmission-daemon

下载文件老是出现 `Error: Permission denied`的问题，是因为transmission是以debain-daemon进行启动的。

尝试了一些方案，将文件夹chown到debain-daemon用户下，依然还会有其他的问题。

家用NAS讲究的就是一把梭，一堆权限配置搞起来麻烦，索性直接root启动他。

## debain安装

```shell
 apt-get update && apt-get install transmission-daemon
```

## 优化界面

```shell
wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control-cn.sh && bash install-tr-control-cn.sh
```

## 修改为root用户启动

```shell
systemctl edit transmission-daemon.service
```

添加以下内容

```shell
[Service]
User=root
```

保存文件:

Save the file. 保存文件。

* `nano`: <kbd>Ctrl</kbd>+<kbd>x</kbd>, <kbd>y</kbd>, <kbd>Enter</kbd>
* `vi`/`vim`: <kbd>Escape</kbd>, <kbd>:</kbd>, <kbd>w</kbd>, <kbd>q</kbd>, <kbd>Enter</kbd>  
  注意：这将创建文件 /etc/systemd/system/transmission-daemon.service.d/override.conf

```shell
systemctl daemon-reload
systemctl restart transmission-daemon.service
```

现在应该是以root用户运行

## 修改配置文件

在以root用户启动之后，配置文件会移动位置

原本在`/var/lib/transmission-daemon/info/settings.json`的会移动到`/root/.config/transmission-daemon/settings.json`

编辑配置文件 `vim` `/root/.config/transmission-daemon/settings.json`

```shell
"rpc-password": "{535bfcdd3dc7a043b3f0e27d25143fb65ae7dd35T1TN1HwG", // 密码
    "rpc-username": "root", // 用户名
    "rpc-whitelist": "*", // 允许访问的ip
    "rpc-whitelist-enabled": false, // 是否开启白名单过滤
```

将一些外网访问的限制关掉

最后配置开机启动

```shell
systemctl enable transmission-daemon.service
systemctl restart transmission-daemon.service
```
