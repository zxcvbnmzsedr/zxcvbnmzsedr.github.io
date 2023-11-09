---
title: onlyoffice在线预览加载优化
short_title: 
date: 2023-11-08 11:16:56
article: true
timeline: false
isOriginal: true
permalink: /pages/ad9611/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# onlyoffice在线预览加载优化

onlyoffice在线预览时会加载相关连的样式和js等静态文件，部分文件体积较大（如sdk文件、fonts文件等）导致前端加载缓慢

将大体积文件备份到oss等服务，并修改nginx转发到指定服务

1. 找到指定的静态文件：在docker版中onlyoffice的静态文件在/var/www/onlyoffice/documentserver目录下（版本不一致请对应查找文件即可）
2. 将docker容器的目标文件复制到宿主机并上传到oss；docker复制命令：docker cp [容器]:/var/www/onlyoffice/documentserver/fonts /tmp/onlyoffice/fonts
3. 找到nginx配置文件：在docker版中nginx文件在：/etc/nginx/includes目录下，这里主要修改ds-docservice.conf
4. 添加目标文件的转发配置,示例：

    ```sql
      location ~* /7.4.1-36/fonts(.*){
    	return https://xxxxxx.com/7.4.1-36/fonts$1?$args;
      }
    ```
