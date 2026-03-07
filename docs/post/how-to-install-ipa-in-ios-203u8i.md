---
title: IOS安装IPA的方法
short_title: 
date: 2024-02-19 05:04:30
article: true
timeline: false
isOriginal: true
permalink: /pages/d4b7af/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# IOS安装IPA的方法

首先从网络上下载的ipa是不带签名的，需要我们自行对ipa进行签名。

爱思助手提供了方便的签名工具：

​![image](./assets/how-to-install-ipa-in-ios-203u8i/202402191513713.png)​​​

选择IPA文件添加进去

​![image](./assets/how-to-install-ipa-in-ios-203u8i/202402191513602.png)​

为了不7天就安装一次，所以需要手动导入证书，（这个证书需要开通个人或者企业开发者）

制作证书需要登录[https://developer.apple.com/](https://developer.apple.com/)

点击Certificates创建一份证书，下载一份cer文件，保存到本地转换为p12文件

创建完证书之后到Devices中将自己设备的UUID写进去

到Identifiers中创建Bundle ID啥的

制作Profiles描述文件，将上面创建的证书，UUID设备，Bundle ID 一股脑都塞进去，最后下载出来一份mobileprovision格式的文件

‍

​![image](./assets/how-to-install-ipa-in-ios-203u8i/uPic202402191508672.png)​

全选进去进行签名。

‍

签名之后的ipa文件，命名成xxx@Bundle ID.ipa ，拖动到alist进行安装，或者爱思助手进行安装，还可以airdrop推到手机进行安装
