(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{355:function(a,t,v){"use strict";v.r(t);var e=v(6),_=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("从最开始折腾iKuai+OpenWrt到单Openwrt，到最后使用PVE搭建路由环境，前后将近快一年的时间。")]),a._v(" "),t("p",[a._v("经历过频繁的断网，断流，死机，已经摸索出一套相对稳定的方案。")]),a._v(" "),t("h2",{attrs:{id:"软路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软路由"}},[a._v("#")]),a._v(" 软路由")]),a._v(" "),t("p",[a._v("我对软路由的需求有三个:")]),a._v(" "),t("ol",[t("li",[a._v("分流设备，全局翻墙")]),a._v(" "),t("li",[a._v("DNS去广告")]),a._v(" "),t("li",[a._v("局域网存储用于播放内网视频")])]),a._v(" "),t("p",[a._v("基于这些需求，我选择了J3160作为软路由的硬件配置。")]),a._v(" "),t("p",[a._v("硬件:")]),a._v(" "),t("ul",[t("li",[a._v("J3160 + 4G内存 + 32G固态 + 500G机械")]),a._v(" "),t("li",[a._v("小米A3600做的AP")])]),a._v(" "),t("p",[a._v("网络拓扑图如下:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://image.ztianzeng.com/uPic/%E8%BD%AF%E8%B7%AF%E7%94%B1.png",alt:"软路由"}})]),a._v(" "),t("h2",{attrs:{id:"pve系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pve系统"}},[a._v("#")]),a._v(" PVE系统")]),a._v(" "),t("p",[a._v("为了在折腾其他比如NAS，DNS的时候，依然能够保证网络的畅通，所以选用了PVE来当做底层系统，这样即使路由挂了，依然能够通过网页访问PVE中的各种系统。")]),a._v(" "),t("h3",{attrs:{id:"接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[a._v("#")]),a._v(" 接口")]),a._v(" "),t("p",[a._v("我买的提供了4个网口，Lan 3口接入光猫，Lan1口接入路由。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://image.ztianzeng.com/uPic/image-20211221165148379.png",alt:"image-20211221165148379"}})]),a._v(" "),t("h2",{attrs:{id:"pve中安装的系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pve中安装的系统"}},[a._v("#")]),a._v(" PVE中安装的系统")]),a._v(" "),t("h3",{attrs:{id:"lede"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lede"}},[a._v("#")]),a._v(" Lede")]),a._v(" "),t("p",[a._v("lede作为主路由，承担了拨号、科学上网的职责。")]),a._v(" "),t("p",[a._v("固件是自己编译的:  https://github.com/zxcvbnmzsedr/Actions-OpenWrt-Template")]),a._v(" "),t("p",[a._v("为了运行的稳定，只保留了相对基础的功能，以及 "),t("code",[a._v("OpenClash")]),a._v("、"),t("code",[a._v("Zerotier")]),a._v("、"),t("code",[a._v("Ipv6")])]),a._v(" "),t("h3",{attrs:{id:"adguardhome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adguardhome"}},[a._v("#")]),a._v(" AdguardHome")]),a._v(" "),t("p",[a._v("直接通过PVE的LXC容器的alpine系统安装，最简化配置。")]),a._v(" "),t("p",[a._v("分离DNS是由于OpenClash和DNS的依赖性太强了，而且AdguardHome和OpenClash共存方案都不够优雅，就直接分离了。")]),a._v(" "),t("p",[a._v("注意事项参考: https://www.ztianzeng.com/post/zai-shang-alpine-linux-an-zhuang-adguard-home/")]),a._v(" "),t("h3",{attrs:{id:"openmediavault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openmediavault"}},[a._v("#")]),a._v(" openmediavault")]),a._v(" "),t("p",[a._v("采用OMV作为NAS的原因是它的资源远比群晖的低，且开源。")]),a._v(" "),t("h2",{attrs:{id:"硬路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬路由"}},[a._v("#")]),a._v(" 硬路由")]),a._v(" "),t("p",[a._v("硬路由就是普通的家用路由。")]),a._v(" "),t("p",[a._v("作用就两个:")]),a._v(" "),t("ol",[t("li",[a._v("作为小型交换机，扩展LAN口")]),a._v(" "),t("li",[a._v("提供wifi信号")])]),a._v(" "),t("p",[a._v("唯一需要注意的是，在设置路由的时候，将路由模式设置成桥接模式，这样对于硬路由而言它不再提供上网服务，只是作为流量的中间站，流量全会交给软路由进行处理。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://image.ztianzeng.com/uPic/image-20211221171438933.png",alt:"image-20211221171438933"}})]),a._v(" "),t("p",[a._v("PS: 光猫需要改桥接，以获得最佳性能。")])])}),[],!1,null,null,null);t.default=_.exports}}]);