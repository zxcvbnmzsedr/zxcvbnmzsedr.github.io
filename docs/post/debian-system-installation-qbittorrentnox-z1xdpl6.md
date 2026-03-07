---
title: Debian系统安装qbittorrent-nox
short_title: 
date: 2024-12-09 04:56:48
article: true
timeline: false
isOriginal: true
permalink: /pages/1031db/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# Debian系统安装qbittorrent-nox

Docker安装配置ipv6过于费事，不如直接在系统上安装。

## apt安装qbittorrent-nox

```shell
apt update -y
apt install qbittorrent-nox -y
```

## 启动qbittorrent-nox进程

```shell
cat << EOF > /etc/systemd/system/qbittorrent-nox.service
[Unit]
Description=qBittorrent Command Line Client
After=network.target
[Service]
Type=forking
User=root
# 启动命令，端口自定义
ExecStart=/usr/bin/qbittorrent-nox -d --webui-port=8090
ExecStop=/usr/bin/kill -w qbittorrent-nox
Restart=on-failure
[Install]
WantedBy=multi-user.target
EOF
```

```shell
# 更新配置
systemctl daemon-reload
# 启动服务
systemctl restart qbittorrent-nox
# 开机自启
systemctl enable qbittorrent-nox
# 查看状态
systemctl status qbittorrent-nox

```

访问: http://<host>:8090 , 默认用户名是admin，用户密码：adminadmin。

### 屏蔽吸血雷

如果想屏蔽迅雷这种只下载不上传的客户端，可以采用qbt增强

```shell
echo 'deb http://download.opensuse.org/repositories/home:/nikoneko:/test/Debian_12/ /' | sudo tee /etc/apt/sources.list.d/home:nikoneko:test.list
curl -fsSL https://download.opensuse.org/repositories/home:nikoneko:test/Debian_12/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_nikoneko_test.gpg > /dev/null
sudo apt update
sudo apt install qbittorrent-enhanced-nox
```

安装完之后重启qbt即可
