---
title: 在Windows 11中找不到映射网络驱动器
date: 2022-11-01 11:44
permalink: /posts/%E5%9C%A8Windows%2011%E4%B8%AD%E6%89%BE%E4%B8%8D%E5%88%B0%E6%98%A0%E5%B0%84%E7%BD%91%E7%BB%9C%E9%A9%B1%E5%8A%A8%E5%99%A8
categories:
- posts
tags: 
---
# 在Windows 11中找不到映射网络驱动器

在局域网内的共享文件夹，建立了映射的网络驱动器驱动器，资源管理器能正常看到，但是在应用软件里打开文件，窗口却找不到该驱动器。

1. 在注册表编辑器中，找到并单击以下注册表子项：  
    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`
2. 右键单击  **“配置** ”，选择  **“新建** ”，然后选择  **“DWORD (32 位) 值** 。
3. 将新的注册表项命名为  *EnableLinkedConnections* 。
4. 双击 **EnableLinkedConnections** 注册表项。
5. 在 **“编辑 DWORD 值** ”对话框中，在**“值”数据**字段中键 *入 1* ，然后选择 **“确定** ”。
6. 退出注册表编辑器，然后重启计算机。

‍
