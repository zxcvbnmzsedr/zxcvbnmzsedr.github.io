(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{433:function(n,t,e){"use strict";e.r(t);var r=e(7),o=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"记-多线程中调用feign失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记-多线程中调用feign失败"}},[n._v("#")]),n._v(" 记:多线程中调用feign失败")]),n._v(" "),t("p",[n._v("在代码运行的时候，在第一次调用feign抛出异常")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Could not find class [org.springframework.boot.autoconfigure.condition.OnPropertyCondition]\n")])])]),t("p",[n._v("一查发现github上有个issus:"),t("br"),n._v(" "),t("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-openfeign/issues/475",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/spring-cloud/spring-cloud-openfeign/issues/475"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("目前暂无解决方案")]),n._v(" "),t("p",[n._v("目前只有启动时监听配置文件，让其能够主动先将feign初始化好，以免后续在调用的时候进行初始化")]),n._v(" "),t("p",[n._v("大佬的pr:"),t("br"),n._v(" "),t("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-openfeign/pull/512",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/spring-cloud/spring-cloud-openfeign/pull/512"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("但是，openfeign的作者认为这个并没有解决本质的问题，还是考虑在ForkjoinPool中以异步的方式初始化feignclient")]),n._v(" "),t("p",[n._v("不过，这个PR是目前，对代码侵入性最小的解决方案。")])])}),[],!1,null,null,null);t.default=o.exports}}]);