---
title: 从Emby直链初识NJS模块
date: 2022-08-22 14:57
permalink: /posts/%E4%BB%8EEmby%E7%9B%B4%E9%93%BE%E5%88%9D%E8%AF%86NJS%E6%A8%A1%E5%9D%97
categories:
- posts
tags: 
---
# 从Emby直链初识NJS模块

直接分享了一篇文章[《Emby直链阿里云盘播放》](/posts/Emby直链阿里云盘播放/)里面使用Nginx的njs模块引入了js脚本，让原本访问到Emby服务的资源302到阿里云盘的直链上，以避免流量走Emby服务器来拖垮1M小水管。

# NJS诞生

NJS是Nginx + JavaScript的缩写。是为了那些web开发不熟悉lua语言特意推出的，是Nginx官方根据JS语言规范实现的一个完全独立的JavaScript的执行引擎，所以NJS是有限实现了JavaScript，并不是一个完整的与 [Node.JS](https://nodejs.org/) 和 [Google V8](https://developers.google.com/v8/) 这样的 JavaScript 解析引擎。由于项目还在不断开发当中，请自行到 [官方介绍页面](https://nginx.org/en/docs/njs/) 进行查看当前支持哪些 JS 的特性。

Nginx NJS 包含两个 Nginx 扩展模块，具体如下：

* [ngx_http_js_module](https://nginx.org/en/docs/http/ngx_http_js_module.html)
* [ngx_stream_js_module](https://nginx.org/en/docs/stream/ngx_stream_js_module.html)

这两个模块目前还没有默认集成到 Nginx mainline 的发布里面，但是你可以通过代码编译安装或者作为 Nginx 动态模块来安装。

## Nginx NJS 的安装

要求 nginx 的版本大于 1.9.11, 因为从该版本才开始支持 load_module 指令

### 方法一: 动态加载 NJS 模块

注意: 不同版本的 nginx 需要相应版本的 NJS 模块.

* 将 ngx_http_js_module.so 文件放在nginx 根目录的 modules 目录下,
* 在 nginx.conf 中增加引入模块

```
load_module modules/ngx_http_js_module.so;
load_module modules/ngx_stream_js_module.so;
```

### 方法二: 编译时增加模块

下载源码 https://hg.nginx.org/njs/?_ga=2.99259804.301589667.1638621670-451035464.1638621670

该仓库在mercurial中管理, 需要使用 hg 命令下载源码

```
hg clone  http://hg.nginx.org/njs
```

nginx 编译时增加如下配置

```
./configure --add-module=<path to njs>/njs/nginx
```

# NJS 模块支持的指令及对应的处理阶段

|处理阶段|HTTP 模块|Stream 模块|
| ---------------------------------------------| ---------------------------------| -------------|
|Access – Authentication and access control|auth_request and js_content|js_access|
|Pre-read – Read/write payload|N/A|js_preread|
|Filter – Read/write response during proxy|js_body_filter js_header_filter|js_filter|
|Content – Send response to client|js_content|N/A|
|Log / Variables – Evaluated on demand|js_set|js_set|

* js_content，执行其中 JS 内容并输出
* js_include，指定特定的文件内的 JS 代码处理请求
* js_set，设置特定的 JS 变量
* js_body_filter、js_header_filter,过滤请求

* js_access，Nginx [Access](https://nginx.org/en/docs/stream/stream_processing.html#access_phase) 阶段执行的 JS 内容
* js_filter，Nginx 输出的数据过滤阶段执行的 JS 内容
* js_include，指定特定的文件内的 JS 代码处理请求
* js_preread，Nginx [Preread](https://nginx.org/en/docs/stream/stream_processing.html#preread_phase) 阶段执行的 JS 内容
* js_set，设置特定的 JS 变量

# NJS 支持的指令

NJS 支持的指令并不多. 要实现复杂的功能需要与 Nginx 的其他指令结合一起使用.

**js_body_filter 修改 response 的 body**

```java
Syntax:	js_body_filter function | module.function [buffer_type=string | buffer];
Default:	—
Context:	location, limit_except
This directive appeared in version 0.5.2.

/**
* 处理 response body 的函数
* @param { object } r - http 对象
* @param { buffer_type } data - 请求的 body 的数据
* @param { boolean } flags - 是否是最后一个数据块
*/
function filter(r, data, flags) {
    r.sendBuffer(data.toLowerCase(), flags);
}
```

**js_content 处理请求的返回**

```java
Syntax:	js_content function | module.function;
Default:	—
Context:	location, limit_except

http {
    # 引入 js 模块
    js_import  http.js;             
    server {
        listen 80;
        location /content {
            # 通过 js_content 指令指定要执行的 js 函数
            js_content http.content;
        }
    }
}
// http.js 文件
function content(r) {
    r.status = 200;
    r.headersOut['Content-Type'] = "text/plain; charset=utf-8";
    r.headersOut['Content-Length'] = 12;
    r.sendHeader();
    r.send("hello world");
}
```

# NJS编程实践

直接拿Emby转直链来举例：

在emby.conf的最上方，引入了emby.js文件

```java
js_path /etc/nginx/conf.d/;
js_import emby2Pan from emby.js;
```

然后在路径匹配上，制定了视频文件的路径匹配规则 ，还声明了emby的后端地址，以便于后面在js无法处理302跳转的时候，采用原路径匹配。

```java
// 可以匹配 /emby/videos/34262/stream.mp4
 location ~* /videos/(.*)/stream {         
        js_content emby2Pan.redirect2Pan;
    }
    # for webClient download ,android is SyncService api
    location ~* /Items/(.*)/Download {
        js_content emby2Pan.redirect2Pan;
    }
    location @backend {
        proxy_pass $emby;
    }
```

通过emby.conf的配置能够将`/emby/videos/34262/stream.mp4`路径的地址，交由给emby.js中的redirect2Pan进行处理。

```java
async function redirect2Pan(r) {

}
```

剩下的基本都是业务逻辑的处理，唯一要注意的地方是，如果没有匹配到路径，使用`r.internalRedirect("@backend")`可以指向服务器的原始路径:

更多的关于这个r对象的用法，可以查看官网：[https://nginx.org/en/docs/njs/reference.html](https://nginx.org/en/docs/njs/reference.html)

```js
    //根据实际情况修改下面4个设置
    const embyHost = 'http://embyserver:8096'; //这里默认emby/jellyfin的地址是宿主机,要注意iptables给容器放行端口
    const embyMountPath = '/mnt/share/pan';  // rclone 的挂载目录, 例如将od, gd挂载到/mnt目录下:  /mnt/onedrive  /mnt/gd ,那么这里 就填写 /mnt
    const alistPwd = '123456';      //alist password
    const alistApiPath = 'http://192.168.1.10:5244/api/public/path'; //访问宿主机上5244端口的alist api, 要注意iptables给容 器放行端口

    //fetch mount emby/jellyfin file path
    const regex = /[A-Za-z0-9]+/g;
    const itemId = r.uri.replace('emby', '').replace(/-/g, '').match(regex)[1]; 
    const mediaSourceId = r.args.MediaSourceId;
    let api_key = r.args.api_key;

    //infuse用户需要填写下面的api_key, 感谢@amwamw968
    if ((api_key === null) || (api_key === undefined)) {
        api_key = '34665a2b42e5456a9011dc2c7accc445';//这里填自己的emby/jellyfin API KEY
        r.warn(`api key for Infuse: ${api_key}`);
    }

    const itemInfoUri = `${embyHost}/Items/${itemId}/PlaybackInfo?MediaSourceId=${mediaSourceId}&api_key=${api_key}`;
    r.warn(`itemInfoUri: ${itemInfoUri}`);
    const embyRes = await fetchEmbyFilePath(itemInfoUri);
    if (embyRes.startsWith('error')) {
        r.error(embyRes);
        r.return(500, embyRes);
        return;
    }
    r.warn(`mount emby file path: ${embyRes}`);

    //fetch alist direct link
    const alistFilePath = embyRes.replace(embyMountPath, '');
    const alistRes = await fetchAlistPathApi(alistApiPath, alistFilePath, alistPwd);
    if (!alistRes.startsWith('error')) {
        r.warn(`redirect to: ${alistRes}`);
        r.return(302, alistRes);
        return;
    }
    if (alistRes.startsWith('error401')) {
        r.error(alistRes);
        r.return(401, alistRes);
        return;
    }
    if (alistRes.startsWith('error404')) {
        const filePath = alistFilePath.substring(alistFilePath.indexOf('/', 1));
        const foldersRes = await fetchAlistPathApi(alistApiPath, '/', alistPwd);
        if (foldersRes.startsWith('error')) {
            r.error(foldersRes);
            r.return(500, foldersRes);
            return;
        }
        const folders = foldersRes.split(',').sort();
        for (let i = 0; i < folders.length; i++) {
            r.warn(`try to fetch alist path from /${folders[i]}${filePath}`);
            const driverRes = await fetchAlistPathApi(alistApiPath, `/${folders[i]}${filePath}`, alistPwd);
            if (!driverRes.startsWith('error')) {
                r.warn(`redirect to: ${driverRes}`);
                r.return(302, driverRes);
                return;
            }
        }
        r.warn(`not found direct ${alistRes}`);
        r.internalRedirect("@backend");
        return;

    }
    r.warn(`not found direct ${alistRes}`);
    r.internalRedirect("@backend");
    return;
```
