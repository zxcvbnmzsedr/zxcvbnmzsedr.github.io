---
title: 解决爱快安装Debian虚拟机中ksoftirqd高CPU占用问题的有效方案
short_title: ''
date: 2023-12-26 07:43:57
article: true
timeline: false
isOriginal: true
---


<!-- more -->


# 解决爱快安装Debian虚拟机中ksoftirqd高CPU占用问题的有效方案

在爱快安装虚拟机过程中，遇到ksoftirqd CPU占用异常高的情况，但是网络占用一直上不去，导致系统性能下降。

经过猜测与分析，这一问题可能与未安装virtio驱动有关。本文将介绍一种有效的解决方案，以优化系统性能并提升IO性能。

## 问题背景

爱快内置Debian虚拟机在半虚拟化网卡模式下，某些情况下可能触发ksoftirqd CPU占用100%的问题。通过初步分析，有理由怀疑这一问题可能源于[未安装virtio驱动](https://wiki.debian.org/DebianKVMGuests)。

## 解决方案步骤

### 1. 编辑initramfs-tools配置文件

打开终端，使用以下命令编辑`/etc/initramfs-tools/modules`​文件：

```pgsql
vim /etc/initramfs-tools/modules
```

### 2. 添加virtio驱动模块

在打开的文件中，添加以下两行，用于指定加载virtio_pci和virtio_blk模块：

```pgsql
virtio_pci
virtio_blk
```

保存文件后，使用以下命令重新编译并安装：

```pgsql
update-initramfs -u
```

### 3. 重启系统

完成模块的重新编译和安装后，通过执行以下命令重启系统：

```pgsql
reboot
```

## 结果验证

重启系统后，观察系统性能有明显改善，虽然检查ksoftirqd CPU占用依旧非常高，但与此同时整体的网络速度也有明显的提高。

通过正确安装virtio驱动，系统的IO性能可能会翻倍，提升整体虚拟机性能。
