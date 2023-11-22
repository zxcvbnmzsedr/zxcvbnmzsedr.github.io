---
title: 虚拟机开机时出现Press ESC in 5 seconds to skip startup.nsh, any other key to continue问题的解决办法
short_title: 
date: 2023-11-22 01:07:56
article: true
timeline: false
isOriginal: true
permalink: /pages/475585/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# 虚拟机开机时出现Press ESC in 5 seconds to skip startup.nsh, any other key to continue问题的解决办法

虚拟机中，使用UEFI模式安装的系统在开机时出现以下提示：

```sql
Press ESC in 5 seconds to skip startup.nsh, any other key to continue.
Shell>_
```

如果遇到这个问题，可以通过以下解决办法解决：

1. <span style="font-weight: bold;" data-type="strong">进入BIOS设置：</span>  在开机时，按照提示进入[BIOS设置](https://so.csdn.net/so/search?q=BIOS&spm=1001.2101.3001.7020)，将硬盘设为第一启动设备。
2. <span style="font-weight: bold;" data-type="strong">手动写入启动设备：</span>  如果BIOS设置不起作用，可以按照以下步骤手动设置启动设备。在Shell命令行中执行以下操作（尖括号中的内容为注释，enter表示按下回车键）：  
    a. 使用 `ls`​ 命令列出文件目录，然后输入 `fs0:`​ 进入目录fs0。

    ```sql
    Shell> ls  <enter>
     Shell> fs0:  <enter>
    ```

    b. 编辑文件 `startup.nsh`​。

    ```sql
     FS0> edit startup.nsh  <enter>
    ```

    c. 在文件中写入以下内容，例如：`\EFI\debian\grubx64.efi`​。

    ```sql
     \EFI<小写系统名，如：debian>\grubx64.efi  <enter>
    ```

    d. 按下`Ctrl S`​保存文件，然后按下`Ctrl Q`​退出编辑。

    ```sql
    <ctrl+s 保存> <enter>
     <ctrl+q 退出编辑> <enter>
    ```

    e. 输入`reset`​命令重启虚拟机。

    ```sql
     FS0> reset  <enter>
    ```

通过以上步骤，应该能够正常进入系统。
