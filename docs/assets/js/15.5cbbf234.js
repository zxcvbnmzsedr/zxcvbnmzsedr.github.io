(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{317:function(t,r,n){"use strict";n.r(r);var e=n(6),v=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Ingress 是提供了一个路由，用于反向代理到集群内部的服务中。")]),t._v(" "),r("p",[t._v("这是官网的一张请求示例图。能清晰的看到Ingress所提供的功能。")]),t._v(" "),r("h1",{attrs:{id:"ingress-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ingress-controller"}},[t._v("#")]),t._v(" Ingress Controller")]),t._v(" "),r("p",[t._v("Ingress 提供了好多种实现方式，比如 traefic / Kong / Istio / Nginx 等")]),t._v(" "),r("p",[t._v("最恶心的是，Nginx 还提供了两个版本 :")]),t._v(" "),r("p",[t._v("一个是Nginx公司实现的 "),r("a",{attrs:{href:"https://github.com/nginxinc/kubernetes-ingress",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx-ingress"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("还有一个是K8S 社区实现的 "),r("a",{attrs:{href:"https://github.com/kubernetes/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ingress-nginx"),r("OutboundLink")],1)]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("特性")]),t._v(" "),r("th",[t._v("K8S 实现版本")]),t._v(" "),r("th",[t._v("Nginx 实现版本 (NGINX)")]),t._v(" "),r("th",[t._v("Nginx 实现版本 (NGINX Plus)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{attrs:{align:"center",colspan:"4"}},[r("strong",[t._v("基础")])])]),t._v(" "),r("tr",[r("td",[t._v("作者")]),t._v(" "),r("td",[t._v("K8S 社区")]),t._v(" "),r("td",[t._v("Nginx 公司和社区")]),t._v(" "),r("td",[t._v("Nginx 公司和社区")])]),t._v(" "),r("tr",[r("td",[t._v("Nginx版本")]),t._v(" "),r("td",[t._v("包含一些三方模块的定制的 Nginx 版本")]),t._v(" "),r("td",[t._v("Nginx 官方版本")]),t._v(" "),r("td",[t._v("Nginx Plus")])]),t._v(" "),r("tr",[r("td",[t._v("商业支持")]),t._v(" "),r("td",[t._v("N/A")]),t._v(" "),r("td",[t._v("N/A")]),t._v(" "),r("td",[t._v("包含")])]),t._v(" "),r("tr",[r("strong",[t._v("通过Ingress资源配置负载均衡")])]),r("tr",[r("td",[t._v("合并同一host的Ingress规则")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("通过 "),r("a",{attrs:{target:"_blank",href:"https://github.com/nginxinc/kubernetes-ingress/blob/master/examples/mergeable-ingress-types"}},[t._v("Mergeable Ingresses")]),t._v(" 支持")]),t._v(" "),r("td",[t._v("通过 "),r("a",{attrs:{target:"_blank",href:"https://github.com/nginxinc/kubernetes-ingress/blob/master/examples/mergeable-ingress-types"}},[t._v("Mergeable Ingresses")]),t._v(" 支持")])]),t._v(" "),r("tr",[r("td",[t._v("HTTP负载均衡扩展 -- 注解方式")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"}},[t._v("K8S 支持的注解")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations/"}},[t._v("Nginx 支持的注解")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations/"}},[t._v("Nginx 支持的注解")])])]),t._v(" "),r("tr",[r("td",[t._v("HTTP负载均衡扩展 -- ConfigMap 方式")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/"}},[t._v("K8S 支持的 ConfigMap 主键")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/global-configuration/configmap-resource/"}},[t._v("Nginx 支持的 ConfigMap 主键")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/global-configuration/configmap-resource/"}},[t._v("Nginx 支持的 ConfigMap 主键")])])]),t._v(" "),r("tr",[r("td",[t._v("TCP/UDP")]),t._v(" "),r("td",[t._v("通过 ConfigMap 支持")]),t._v(" "),r("td",[t._v("通过 ConfigMap (原生 NGINX 配置) 支持")]),t._v(" "),r("td",[t._v("通过 ConfigMap (原生 NGINX 配置) 支持")])]),t._v(" "),r("tr",[r("td",[t._v("Websocket")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("通过注解支持")]),t._v(" "),r("td",[t._v("通过注解支持")])]),t._v(" "),r("tr",[r("td",[t._v("TCP SSL Passthrough")]),t._v(" "),r("td",[t._v("通过 ConfigMap 支持")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("不支持")])]),t._v(" "),r("tr",[r("td",[t._v("JWT 验证")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",[t._v("Session 持久化")]),t._v(" "),r("td",[t._v("通过三方库支持")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",[t._v("金丝雀测试 (通过 header, cookie, weight)")]),t._v(" "),r("td",[t._v("通过注解支持")]),t._v(" "),r("td",[t._v("通过定制的资源支持")]),t._v(" "),r("td",[t._v("通过定制的资源支持")])]),t._v(" "),r("tr",[r("td",[t._v("配置模板 *1")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://github.com/kubernetes/ingress-nginx/blob/master/rootfs/etc/nginx/template/nginx.tmpl"}},[t._v("模板")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://github.com/nginxinc/kubernetes-ingress/blob/master/internal/configs/version1"}},[t._v("模板")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://github.com/nginxinc/kubernetes-ingress/blob/master/internal/configs/version1"}},[t._v("模板")])])]),t._v(" "),r("tr",[r("td",{attrs:{align:"center",colspan:"4"}},[r("strong",[t._v("通过定制化资源配置负载均衡配置")])])]),t._v(" "),r("tr",[r("td",[t._v("HTTP负载均衡")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/virtualserver-and-virtualserverroute-resources/"}},[t._v("VirtualServer 和 VirtualServerRoute")]),t._v(" 资源")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/virtualserver-and-virtualserverroute-resources/"}},[t._v("VirtualServer 和 VirtualServerRoute")]),t._v(" 资源")])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"4"}},[r("strong",[t._v("部署")])])]),t._v(" "),r("tr",[r("td",[t._v("命令行参数 *2")]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://kubernetes.github.io/ingress-nginx/user-guide/cli-arguments/"}},[t._v("K8S 版 参数列表")])]),t._v(" "),r("td",[t._v("见 "),r("a",{attrs:{target:"_blank",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/global-configuration/command-line-arguments/"}},[t._v("Nginx 版 参数列表")])]),t._v(" "),r("td",[t._v("同左")])]),t._v(" "),r("tr",[r("td",[t._v("默认 Server 的 TLS 证书和秘钥")]),t._v(" "),r("td",[t._v("必需(命令行参数) / 自动生成")]),t._v(" "),r("td",[t._v("必需(命令行参数)")]),t._v(" "),r("td",[t._v("必需(命令行参数)")])]),t._v(" "),r("tr",[r("td",[t._v("Helm Chart")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",{attrs:{align:"center",colspan:"4"}},[r("strong",[t._v("运维")])])]),t._v(" "),r("tr",[r("td",[t._v("上报 Ingress 控制器的 IP地址到Ingress资源")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",[t._v("扩展的状态")]),t._v(" "),r("td",[t._v("通过三方模块支持")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",[t._v("Prometheus 整合")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")]),t._v(" "),r("td",[t._v("支持")])]),t._v(" "),r("tr",[r("td",[t._v("动态配置 endpoints (无需重新加载配置)")]),t._v(" "),r("td",[t._v("通过三方模块支持")]),t._v(" "),r("td",[t._v("不支持")]),t._v(" "),r("td",[t._v("支持")])])])]),t._v(" "),r("p",[t._v("我自己一开始使用的是Nginx出品的那个，后面发现Stack Overflow上讨论的问题都没有K8S出品的多，就使用上了K8S的版本Ingress。")]),t._v(" "),r("h1",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# 正常情况下就能装上，但是国内由于某些特殊原因导致访问不了谷歌服务，所以需要手动修改镜像地址\ncurl  https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml -O\n\nkubectl apply -f deploy.yaml\n")])])])])}),[],!1,null,null,null);r.default=v.exports}}]);