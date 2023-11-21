(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{491:function(t,_,v){"use strict";v.r(_);var r=v(7),s=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"每个程序员都应该知道的延迟数字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#每个程序员都应该知道的延迟数字"}},[t._v("#")]),t._v(" 每个程序员都应该知道的延迟数字")]),t._v(" "),_("p",[t._v("在一些情况下对系统设计的时候，需要做出对系统性能的保守估计。")]),t._v(" "),_("p",[t._v("Jeff Dean （谷歌的巨佬，分布式系统的奠基人）在"),_("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的PPT"),_("OutboundLink")],1),t._v('中列出了"Latency Numbers Every Programmer Should Know"(每个程序员都应该了解的数字)，对计算机中的各类的操作的耗时做了大致的估计。')]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("延迟")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("执行一个指令")]),t._v(" "),_("td",[t._v("1 ns")])]),t._v(" "),_("tr",[_("td",[t._v("L1 缓存查询")]),t._v(" "),_("td",[t._v("0.5 ns")])]),t._v(" "),_("tr",[_("td",[t._v("分支预测错误（Branch mispredict）")]),t._v(" "),_("td",[t._v("3 ns")])]),t._v(" "),_("tr",[_("td",[t._v("L2 缓存查询")]),t._v(" "),_("td",[t._v("4 ns")])]),t._v(" "),_("tr",[_("td",[t._v("互斥锁/解锁")]),t._v(" "),_("td",[t._v("17 ns")])]),t._v(" "),_("tr",[_("td",[t._v("在 1Gbps 的网络上发送 2KB")]),t._v(" "),_("td",[t._v("44 ns")])]),t._v(" "),_("tr",[_("td",[t._v("主存访问")]),t._v(" "),_("td",[t._v("100 ns")])]),t._v(" "),_("tr",[_("td",[t._v("Zippy 压缩 1KB")]),t._v(" "),_("td",[t._v("2,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("从内存顺序读取 1 MB")]),t._v(" "),_("td",[t._v("3,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("SSD 随机读")]),t._v(" "),_("td",[t._v("16,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("从 SSD 顺序读取 1 MB")]),t._v(" "),_("td",[t._v("49,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("同一个数据中心往返")]),t._v(" "),_("td",[t._v("500,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("从磁盘顺序读取 1 MB")]),t._v(" "),_("td",[t._v("825,000 ns")])]),t._v(" "),_("tr",[_("td",[t._v("磁盘寻址")]),t._v(" "),_("td",[t._v("2,000,000 ns (2 ms)")])]),t._v(" "),_("tr",[_("td",[t._v("从美国发送到欧洲的数据包")]),t._v(" "),_("td",[t._v("150,000,000 ns（150 ms）")])])])]),t._v(" "),_("p",[t._v("基于上述数字的指标：")]),t._v(" "),_("ul",[_("li",[t._v("从磁盘以 30 MB/s 的速度顺序读取")]),t._v(" "),_("li",[t._v("以 100 MB/s 从 1 Gbps 的以太网顺序读取")]),t._v(" "),_("li",[t._v("从 SSD 以 1 GB/s 的速度读取")]),t._v(" "),_("li",[t._v("以 4 GB/s 的速度从主存读取")]),t._v(" "),_("li",[t._v("每秒能绕地球 6-7 圈")]),t._v(" "),_("li",[t._v("数据中心内每秒有 2,000 次往返")])]),t._v(" "),_("p",[t._v("Jeff Dean给出这些数字的重点是在于了解这些操作之间的数量级和比例，而不是具体的数字。")]),t._v(" "),_("p",[t._v("因为计算机会随着科技的发展，变得越来越快。")]),t._v(" "),_("p",[t._v("伯克利大学有个"),_("a",{attrs:{href:"https://colin-scott.github.io/personal_website/research/interactive_latency.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态网页"),_("OutboundLink")],1),t._v("，可以查看每年各个操作耗时的变化")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220524195143.png",alt:""}})])])}),[],!1,null,null,null);_.default=s.exports}}]);