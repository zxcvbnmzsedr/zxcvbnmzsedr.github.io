---
title: Openwrt镜像包扩容
short_title: 
date: 2024-07-03 11:11:44
article: true
timeline: false
isOriginal: true
permalink: /pages/68b875/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# Openwrt镜像包扩容

1、首先下载好镜像包，如果镜像包是压缩文件，如gz结尾，那么需要先解压出镜像包，一般是img后缀的文件就是镜像包。解压命令一般如下：

```
#解压，得到img文件
gzip -kd openwrt-22.03.6-x86-64-generic-ext4-combined-efi.img.gz
```

2. 在这个img镜像文件后面增加空数据

```java
dd if=/dev/zero bs=1G count=5 >> openwrt-22.03.6-x86-64-generic-ext4-combined-efi.img
```

3. 执行分区命令

```java
# 查看当前img分区 
parted openwrt-22.03.6-x86-64-generic-ext4-combined-efi.img
```

```print
# 查看当前镜像包的分区情况
print
```

> Disk /mnt/sda1/template/iso/openwrt-22.03.6-x86-64-generic-ext4-combined-efi.img: 5495MB  
> Sector size (logical/physical): 512B/512B  
> Partition Table: gpt  
> Disk Flags:
>
> Number  Start   End     Size    File system  Name  Flags  
> 128     17.4kB  262kB   245kB                      bios_grub  
>  1      262kB   17.0MB  16.8MB  fat16              legacy_boot  
>  2      17.0MB  126MB   109MB   ext2

```使用命令将刚才增加的5GB空数据整合进这个分区
# 使用命令将刚才增加的5GB空数据整合进这个分区
resizepart 2 100%
```
