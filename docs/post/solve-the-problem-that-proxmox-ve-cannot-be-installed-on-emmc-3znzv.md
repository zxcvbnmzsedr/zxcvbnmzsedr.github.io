---
title: 解决 Proxmox VE 无法安装到 eMMC 上的问题
short_title: 
date: 2024-07-03 08:34:13
article: true
timeline: false
isOriginal: true
permalink: /pages/476a3d/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# 解决 Proxmox VE 无法安装到 eMMC 上的问题

转载自：[https://18kas.com/pve-with-emmc](https://18kas.com/pve-with-emmc)

看到商家的介绍，8g 内存 64g 存储只要 200 多？！赶紧剁手下单，结果到手后才发现，内存和存储都是焊接到主板上的...不禁感叹，买的还是没有卖的精啊。

这个设备原装是两个存储设备，一个板载 64G 的 eMMC 另外一个是采用 mSATA 口的 SSD ，到手的时候这台机器只剩下板载的存储了，那个 SSD 已经不翼而飞了，为这设备再添购一个 SSD 实在是不划算，同时为了最大化利用这个硬件，我在这台设备上折腾了一下，尝试使用 PVE，结果安装的过程中提示 `unable to get device for partition 1 on device /dev/mmcblk1`​

## 解决

经过一天的尝试，通过以下方式可以绕开官方的限制，在 eMMC 上安装 Proxmox VE 6.3：

  **⚠️警告：PVE 并未针对这种设备优化，eMMC 也并非针对这种使用设计。PVE 每天要往存储设备中写入一定量的日志信息，USE AT YOUR OWN RISK！** 

1. 启动 PVE 安装程序，进入安装初始界面
2. 启动后点击 `Install Proxmox VE (Debug mode)`​
3. 在第一次提示你可以输入命令的时候输入 `Ctrl-D`​ ，继续安装过程
4. 在第二次提示你可以输入命令的时候输入 `vi /usr/bin/proxinstall`​ 编辑文件（或者使用其他文字编辑器如 nano）

    > 在PVE8上面的路径是`/usr/share/perl5/Proxmox/Sys/Block.pm`​
    >
5. 输入 `/unable to get device`​ 定位到对应位置
6. 你可以看到类似下方的内容：

    ```perl
    ...
        } elsif ($dev =~ m|^/dev/[^/]+/hd[a-z]$|) {
            return "${dev}$partnum";
        } elsif ($dev =~ m|^/dev/nvme\\d+n\\d+$|) {
            return "${dev}p$partnum";
        } else {
            die "unable to get device for partitionpartnum on devicedev\n";
        }
    ...
    ```

    将其修改（添加）为：

    ```perl
    ...
        } elsif ($dev =~ m|^/dev/[^/]+/hd[a-z]$|) {
            return "${dev}$partnum";
        } elsif ($dev =~ m|^/dev/nvme\\d+n\\d+$|) {
            return "${dev}p$partnum";
        } elsif ($dev =~ m|^/dev/mmcblk\\d+$|) {
            return "${dev}p$partnum";
        } else {
            die "unable to get device for partitionpartnum on devicedev\n";
        }
    ...
    ```
7. 然后输入 `Ctrl-D`​ ，继续安装过程
8. 此时应该进入了正常的安装程序，硬盘选择的时候选择 `/dev/mmcblk1`​ （没有 `bootX`​ 后缀）（建议关闭 swap）
9. 最后安装完成后输入 `Ctrl-D`​ ，重启系统

另外，也可以使用官方提供的方式，先安装 Debian 再安装 PVE，只不过那样安装很慢，而且网卡和分区并没有提前配置好，需要自己手动配置。具体参见：[Install Proxmox VE on Debian Buster - Proxmox VE ](https://pve.proxmox.com/wiki/Install_Proxmox_VE_on_Debian_Buster)

网上还有使用 bin 等类似 ghost 的方法直接 dd 进 eMMC，或者先安装到另外一个硬盘上再使用 DiskGenius 乾坤大挪移到 eMMC 等方法在此不再做过多叙述，可以参见下方文章：

* [N3450（锐角云）安装Proxmox VE（PVE）教程 - 方舟基地 ](https://www.wnark.com/archives/116.html)

## 原理

​`Install Proxmox VE (Debug mode)`​ 提供了在安装过程中各个阶段执行脚本的能力。

修改的文件是为安装程序提供 MMC 设备检测支持。

没有直接修改 ISO 主要是由于，一是该文件在 pve-installer.squashfs 中，由安装程序在运行的时候加载，修改需要解包后重新打包，二是这样更透明，避免使用一个来源不是很明确的二进制文件。

安装过程中，配置信息那里使用了 Linux 的图形界面，类似于 Ubuntu 的使用，按下 `Ctrl+Alt+F1/F2`​ 为相应的日志信息，按下 `Ctrl+Alt+F3`​ 可以切换出命令行，按下 `Ctrl+Alt+F4`​ 可以切换回图形界面。

## Ref

* [pve-installer/proxinstall at master · proxmox/pve-installer ](https://github.com/proxmox/pve-installer/blob/5577f86a6e7f030a46ee2010d95740e0f5da12e8/proxinstall#L745)
* [Proxmox VE镜像分析与定制 | LuminizeH&apos;s Blog ](https://luminizeh.com/2019/03/07/Proxmox-VE%E9%95%9C%E5%83%8F%E5%88%86%E6%9E%90%E4%B8%8E%E5%AE%9A%E5%88%B6/)
* [linux - Modifying a squashfs, - Unix &amp; Linux Stack Exchange ](https://unix.stackexchange.com/questions/8907/modifying-a-squashfs)
* [&quot;unable to get device for partition 1&quot; | Proxmox Support Forum ](https://forum.proxmox.com/threads/unable-to-get-device-for-partition-1.43234/)
* [Atomic Pi Installation | Proxmox Support Forum ](https://forum.proxmox.com/threads/atomic-pi-installation.63534/)
* [Migration from Debian to Proxmox on a NUC | Proxmox Support Forum ](https://forum.proxmox.com/threads/migration-from-debian-to-proxmox-on-a-nuc.67328/)
* [Unable to get device for partition 1 on device /dev/mmcblk0 | Proxmox Support Forum ](https://forum.proxmox.com/threads/unable-to-get-device-for-partition-1-on-device-dev-mmcblk0.42348/)
* [突破官方限制！！！！220元开车N3450PVE在EMMC上安装成功！-美国VPS综合讨论-全球主机交流论坛 - Powered by Discuz! ](https://www.hostloc.com/thread-704351-1-1.html)  
  Archive: [突破官方限制！！！！220元开车N3450PVE在EMMC上安装成功！ | 免费部落 ](http://freetribe.me/132927.html)
* [Installation - Proxmox VE ](https://pve.proxmox.com/wiki/Installation)
