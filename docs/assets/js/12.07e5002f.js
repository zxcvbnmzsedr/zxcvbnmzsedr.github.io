(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{317:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cloudflare让ipv6不在鸡肋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare让ipv6不在鸡肋"}},[s._v("#")]),s._v(" Cloudflare让IPV6不在鸡肋")]),s._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("随着国内IPV4的公网地址越来越少，以及IPV6的不断普及，我们能够很方便的获取到公网的IPV6地址。但是在外面没有IPV6的情况下，想要访问家里的IPV6服务是一件很困难的事情。")]),s._v(" "),a("p",[s._v("虽然有着共有的6in4，或者ipv4转v6的代理隧道可以用，但是实际用下来，感觉由于代理服务器的影响，没有办法达到预期的速度。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://tunnelbroker.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://tunnelbroker.net/"),a("OutboundLink")],1),s._v(" 提供了免费的IPV6隧道服务")])]),s._v(" "),a("p",[s._v("不过，国外有一个非常好用的CDN提供商，"),a("a",{attrs:{href:"https://www.cloudflare.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CloudFlare"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("它提供了一整套免费的CDN加速和代理，我们只需要通过CDN来代理请求的IPV6地址即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220613131516.png",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("要想使用这套服务，直接访问到家中的设备需要准备下面这几样东西:")]),s._v(" "),a("ol",[a("li",[s._v("一个属于自己的域名")]),s._v(" "),a("li",[s._v("一个能够编写脚本的路由器")]),s._v(" "),a("li",[s._v("有一定动手能力,爱折腾")])]),s._v(" "),a("h1",{attrs:{id:"开始折腾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始折腾"}},[s._v("#")]),s._v(" 开始折腾")]),s._v(" "),a("p",[s._v("我们第一步需要确保域名接入到了cloudflare中。通过修改名称服务器，将域名交给cloudflare进行托管。")]),s._v(" "),a("p",[s._v("然后在cloudflare中新建一个了类型是AAAA的DNS，内容随便写啥。")]),s._v(" "),a("blockquote",[a("p",[s._v("因为我用的是Openwrt，所以会以OpenWrt来进行说明")])]),s._v(" "),a("p",[s._v("先登录OpenWrt的路由器, 查看LAN口的获取到的IPV6地址，把这个IPV6地址粘贴到CloudFlare中。（关于OpenWrt如何开启IPV6，网上教程很多）")]),s._v(" "),a("p",[s._v("然后将Openwrt的端口修改成下面的任何一个（下面这些端口是CloudFlare支持的反向代理的端口，其次国内家用端口封80和443，我选择的是2095）")]),s._v(" "),a("ul",[a("li",[s._v("8880")]),s._v(" "),a("li",[s._v("2052")]),s._v(" "),a("li",[s._v("2082")]),s._v(" "),a("li",[s._v("2086")]),s._v(" "),a("li",[s._v("2095")])]),s._v(" "),a("p",[s._v("如果不能访问，一般是由于防火墙的问题，我们可以用5G手机，直接访问[:IPV6地址:]:2095，来确定是不是防火墙的问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220630093151.png",alt:""}})]),s._v(" "),a("p",[s._v("如果一切设置完成，就能访问了。")]),s._v(" "),a("blockquote",[a("p",[s._v("必须将代理状态设置成已代理，否则就会你和配置的域名之间就会走IPV6的方式访问。")])]),s._v(" "),a("h1",{attrs:{id:"ddns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddns"}},[s._v("#")]),s._v(" DDNS")]),s._v(" "),a("p",[s._v("由于我们拿到的IPV6是每次拨号都是在变化的，所以要能定时将最新的IPV6地址上报上去。")]),s._v(" "),a("p",[s._v("脚本在下面:")]),s._v(" "),a("p",[s._v("脚本需要用到jq，所以提取先安装"),a("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#LEDE/Openwrt may need install ca-bundle curl(opkg install ca-bundle curl)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Add you custom record to the CloudFlare first.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Your sub domain")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUB_DOMAIN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webdav.shiyitopo.tech"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dash --\x3e example.com --\x3e Overview --\x3e Zone ID:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://dash.cloudflare.com/_your_account_id_/example.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZONE_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#API Tokens")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://dash.cloudflare.com/profile/api-tokens")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Manage access and permissions for your accounts, sites, and products")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#example.com- Zone:Read, DNS:Edit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOKEN_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#The path of jq binaries . Download from https://stedolan.github.io/jq/download/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#If the system has installed jq. Just typed jq.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#If you custom a special binary. Just type the path of jq")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JQ_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/jq-linux64"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DNS_ZONE_ID")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The user has not configure the the ZONE ID "')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your dns zone id is: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZONE_ID")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.cloudflare.com/client/v4/zones/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZONE_ID}")]),s._v('/dns_records"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: Bearer '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TOKEN_ID}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("curlResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $jsonResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .success"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curlResult")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Get dns record success."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Get dns record fail.'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsonResult")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("recordSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $jsonResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH .result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH length"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Total found '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$recordSize")]),s._v(' record"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$index")]),s._v(" -lt "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$recordSize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $jsonResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tmpDomain")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $tResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .name"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $tResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .type"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tmpDomain")]),s._v('"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SUB_DOMAIN")]),s._v('"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AAAA"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v('"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Found AAAA domain:'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tmpDomain")]),s._v('"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("identifier_v6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $tResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .id"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v('"')]),s._v("x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Found A domain:'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tmpDomain")]),s._v('"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("identifier_v4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $tResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .id"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please add the A or AAAA record manually first."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" $index + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v4")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v6")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Get '"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SUB_DOMAIN")]),s._v("' identifier failed. Please add the A or AAAA record manually first.\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Get '"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SUB_DOMAIN")]),s._v("' identifier success. [A] identifier:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v4")]),s._v(" [AAAA] identifier:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v6")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v4")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPv4 address are not required."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#IP=$(curl -s http://members.3322.org/dyndns/getip)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s http://ip.3322.net/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("regex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("matchIP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $IP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E $regex"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$matchIP")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v('] IPv4 matches..."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -X PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.cloudflare.com/client/v4/zones/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZONE_ID}")]),s._v("/dns_records/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${identifier_v4}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: Bearer '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TOKEN_ID}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"type":"A","name":"\'')]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SUB_DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","content":"\'')]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","ttl":1,"proxied":false}\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("curlResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $jsonResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .success"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curlResult")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Update IPv4 dns record success."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Update IPv4 dns record fail."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v("]IPv4 doesn't match!\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$identifier_v6")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPv6 addresses are not required."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#IP=$(curl -6 ip.sb)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr show dev  ens18"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^.*inet6 \\([^ ]*\\)\\/.*$/\\1/;t;d'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2409")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -1"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("regex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{0,4}$'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("matchIP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $IP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E $regex"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$matchIP")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v('] IPv6 matches..."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Update IPv6 ..."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -X PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.cloudflare.com/client/v4/zones/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZONE_ID}")]),s._v("/dns_records/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${identifier_v6}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: Bearer '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TOKEN_ID}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"type":"AAAA","name":"\'')]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SUB_DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","content":"\'')]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","ttl":1,"proxied":true}\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("curlResult")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $jsonResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $JQ_PATH -r .success"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curlResult")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Update IPv6 dns record success."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Update IPv6 dns record fail."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v("] IPv6 doesn't match!\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[s._v("后续也能通过Nginx进行反向代理，这样就不用配置其他服务的域名了，只需要通过nginx进行统一的转发即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);