(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{429:function(t,v,_){"use strict";_.r(v);var r=_(7),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"准备迎接springboot3-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备迎接springboot3-0"}},[t._v("#")]),t._v(" 准备迎接SpringBoot3.0")]),t._v(" "),v("p",[t._v("‍")]),t._v(" "),v("p",[t._v("在2018年2月28号，发布了第一个"),v("code",[t._v("Spring Boot2.0")]),t._v("的版本。在最近发布了"),v("code",[t._v("Spring Boot2.7")]),t._v("的版本。")]),t._v(" "),v("p",[t._v("到目前为止，"),v("code",[t._v("Spring Boot 2.x ​")]),t._v("已经维护了超过4年了，总共发布了95个版本。")]),t._v(" "),v("p",[t._v("现在，整个Spring的团队和社会上的自由贡献者，在为下一代的Spring做准备。计划在2022年11月发布"),v("code",[t._v("Spring Boot3.0")]),t._v("。")]),t._v(" "),v("p",[t._v("下一个版本最重要的是基于Spring Framework 6.0的基础上进行开发，并且要求Java的版本在"),v("code",[t._v("Java17")]),t._v("或以上。这也是Spring Boot使用Jakarta EE 9 APIs( "),v("code",[t._v("jakarta.*")]),t._v(")的第一个版本（为了替代原来的Java EE 8 "),v("code",[t._v("javax.*")]),t._v("）")]),t._v(" "),v("p",[t._v("接下来6个月的时间是一个非常好的机会，将自己的项目升级到最新的"),v("code",[t._v("Spring Boot3.0")]),t._v("。这篇文章介绍了一些可以做的事情，使得未来发布的时候，使得迁移更加轻松。")]),t._v(" "),v("blockquote",[v("p",[t._v("估计国内应该是没什么公司敢这么激进的升级")])]),t._v(" "),v("h1",{attrs:{id:"升级到java-17"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#升级到java-17"}},[t._v("#")]),t._v(" 升级到Java 17")]),t._v(" "),v("p",[v("code",[t._v("Spring Boot3.0 ​")]),t._v("需要"),v("code",[t._v("Java 17")]),t._v("才能够运行。 但是现在就可以将手中项目的环境升级到17了。因为目前现有的"),v("code",[t._v("Spring Boot2.0")]),t._v("的版本，能够与"),v("code",[t._v("Java17")]),t._v("做到很好的兼容。")]),t._v(" "),v("p",[t._v("你也能够在自己的项目中用"),v("code",[t._v("Java 17")]),t._v("的特性。如果有可能的话，建议现在、立刻、马上就升级"),v("code",[t._v("JDK")]),t._v("系统。")]),t._v(" "),v("h1",{attrs:{id:"升级到最新的spring-boot-2-7-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#升级到最新的spring-boot-2-7-x"}},[t._v("#")]),t._v(" 升级到最新的Spring Boot 2.7.X")]),t._v(" "),v("p",[t._v("如果当前使用的是老的版本的"),v("code",[t._v("Spring Boot 2.0")]),t._v(" .强烈建议先升级到"),v("code",[t._v("Spring Boot 2.7")]),t._v(".")]),t._v(" "),v("p",[t._v("当"),v("code",[t._v("Spring Boot 3.0")]),t._v(" released 的时候将会发布一个从2.7升级到3.0的迁移指南，而不是从更老的版本进行一个迁移。")]),t._v(" "),v("p",[t._v("升级说明一般都会在release notes中进行提供。例如，如果你想升级"),v("code",[t._v("Spring Boot 2.6")]),t._v("到2.7，你可以查看"),v("a",{attrs:{href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes#upgrading-from-spring-boot-26",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("强烈不建议从Spring 2.5之前或者更早来进行一步到位的升级。通常来说小版本的升级会更加的容易（eg: 2.5->2.6-2.7）而不是直接从2.5->2.7。")]),t._v(" "),v("h1",{attrs:{id:"检测对标记deprecated代码的调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检测对标记deprecated代码的调用"}},[t._v("#")]),t._v(" 检测对标记Deprecated代码的调用")]),t._v(" "),v("p",[t._v("在"),v("code",[t._v("Spring Boot")]),t._v("的进化中，会废弃掉一些方法或者类 与此同时会提供替代的方法或者类。我们往往会提供12个月左右的迭代期，在12个月之后过期的代码将会被删除。")]),t._v(" "),v("p",[t._v("删除政策的文件在"),v("a",{attrs:{href:"https://github.com/spring-projects/spring-boot/wiki/Deprecations",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[v("code",[t._v("Spring Boot3.0")]),t._v("将会删除所有的过期代码，因此我们推荐检查现有的代码，来找出所有引用了标记"),v("code",[t._v("@Deprecated")]),t._v("的代码。当然，你能够开启-"),v("code",[t._v("Werror")]),t._v("选项，来将编译期间的警告变成错误，使其编译失败。")]),t._v(" "),v("blockquote",[v("p",[t._v("引用"),v("code",[t._v("@Deprecated")]),t._v("的代码，编译器会发出警告，然后转成error，这样不处理就编译不通过了")])]),t._v(" "),v("h1",{attrs:{id:"迁移application-properties和application-yml"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迁移application-properties和application-yml"}},[t._v("#")]),t._v(" 迁移application.properties和application.yml")]),t._v(" "),v("p",[v("code",[t._v("Spring Boot2.4")]),t._v("修改了配置文件的加载方式。大多数用户会对这个改动并没有什么感知，因为项目可以设置"),v("code",[t._v("spring.config.use-legacy-processing=true")]),t._v("来避免这个问题。")]),t._v(" "),v("p",[t._v("这个来兼容新旧配置文件加载方式的属性，也将会在Spring3.0中进行删除，所以需要检查项目是否设置了这个属性，并且修改掉加载方式。")]),t._v(" "),v("blockquote",[v("p",[t._v("这个被坑过，可以看 "),v("a",{attrs:{href:"../%E5%9C%A8Spring2.4%E4%B8%AD%E4%BD%BF%E7%94%A8NacosConfig"}},[t._v("Spring2.4中使用NacosConfig")])])]),t._v(" "),v("h1",{attrs:{id:"使用spring-mvc的pathpatternparser"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用spring-mvc的pathpatternparser"}},[t._v("#")]),t._v(" 使用Spring MVC的Pathpatternparser")]),t._v(" "),v("p",[t._v("Spring MVC 提供了两种解析URL路径的方式。自从Spring Boot 2.6之后"),v("code",[t._v("PathPatternParser")]),t._v("是默认的解析方式。")]),t._v(" "),v("p",[t._v("一些项目通过设置"),v("code",[t._v("spring.mvc.pathmatch")]),t._v("手动切换回"),v("code",[t._v("AntPathMatcher")]),t._v("来作为路径匹配的实现类。虽然在Spring Boot 3.0用也是能用，但是如果可能的话还是建议使用"),v("code",[t._v("PathPatternParser")]),t._v("，因为它提供了更好的性能。")]),t._v(" "),v("h2",{attrs:{id:"性能对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能对比"}},[t._v("#")]),t._v(" 性能对比:")]),t._v(" "),v("p",[t._v("循环100000次：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("路径匹配器")]),t._v(" "),v("th",[t._v("第1次耗时")]),t._v(" "),v("th",[t._v("第2次耗时")]),t._v(" "),v("th",[t._v("第3次耗时")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("AntPathMatcher")]),t._v(" "),v("td",[t._v("171")]),t._v(" "),v("td",[t._v("199")]),t._v(" "),v("td",[t._v("188")])]),t._v(" "),v("tr",[v("td",[t._v("PathPattern")]),t._v(" "),v("td",[t._v("118")]),t._v(" "),v("td",[t._v("134")]),t._v(" "),v("td",[t._v("128")])])])]),t._v(" "),v("p",[t._v("循环1000000次：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("路径匹配器")]),t._v(" "),v("th",[t._v("第1次耗时")]),t._v(" "),v("th",[t._v("第2次耗时")]),t._v(" "),v("th",[t._v("第3次耗时")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("AntPathMatcher")]),t._v(" "),v("td",[t._v("944")]),t._v(" "),v("td",[t._v("852")]),t._v(" "),v("td",[t._v("882")])]),t._v(" "),v("tr",[v("td",[t._v("PathPattern")]),t._v(" "),v("td",[t._v("633")]),t._v(" "),v("td",[t._v("637")]),t._v(" "),v("td",[t._v("626")])])])]),t._v(" "),v("p",[t._v("循环10000000次：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("路径匹配器")]),t._v(" "),v("th",[t._v("第1次耗时")]),t._v(" "),v("th",[t._v("第2次耗时")]),t._v(" "),v("th",[t._v("第3次耗时")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("AntPathMatcher")]),t._v(" "),v("td",[t._v("5561")]),t._v(" "),v("td",[t._v("5469")]),t._v(" "),v("td",[t._v("5461")])]),t._v(" "),v("tr",[v("td",[t._v("PathPattern")]),t._v(" "),v("td",[t._v("4495")]),t._v(" "),v("td",[t._v("4440")]),t._v(" "),v("td",[t._v("4571")])])])]),t._v(" "),v("h1",{attrs:{id:"检查三方的项目是否有jakarta-ee-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检查三方的项目是否有jakarta-ee-9"}},[t._v("#")]),t._v(" 检查三方的项目是否有Jakarta EE 9")]),t._v(" "),v("p",[t._v("Jakarta EE 9 是为了渠道Java EE 8的"),v("code",[t._v("javax")]),t._v("。例如，Servlet 在Jakarata EE 8中是"),v("code",[t._v("javax.servlet")]),t._v(",在9中则是"),v("code",[t._v("jakarta.servlet")]),t._v("。")]),t._v(" "),v("p",[t._v("一般来说，想在同一个项目中混用Java EE 和 Jakarta EE 是不可能的。你需要确保在你的代码和引用的三方库中，都是使用的"),v("code",[t._v("jakarta.*")]),t._v("。")]),t._v(" "),v("p",[t._v("一个好消息是，大多数维护良好的库都有提供Jakarta EE 9版本的包。例如，Hibernate、Thymeleaf、Tomcat、Jetty等。")]),t._v(" "),v("p",[t._v("我们推荐你花一些时间去检查三方库是否兼容了Jakarta EE。通常问题会出现在引入Servlet API中。")]),t._v(" "),v("h1",{attrs:{id:"检查三方库的spring版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检查三方库的spring版本"}},[t._v("#")]),t._v(" 检查三方库的Spring版本")]),t._v(" "),v("p",[t._v("Spring Framework 6.0 与上一代不兼容。你需要检查使用的三方的jar包是否提供了与Spring Framework 6.0的兼容的版本。")]),t._v(" "),v("h1",{attrs:{id:"尝试一下spring3-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#尝试一下spring3-0"}},[t._v("#")]),t._v(" 尝试一下Spring3.0")]),t._v(" "),v("p",[t._v("尽管不建议被用于到生产环境中，但是你也能够尝试一下看看将"),v("code",[t._v("Spring Boot 3.0")]),t._v("集成到项目中有多难。")]),t._v(" "),v("p",[t._v("切一个额外的分支出来来进行升级，这样能够提前的将问题暴露出来。")]),t._v(" "),v("p",[t._v("最好能在发布GA之前，将BUG提前暴露出来，然后反馈给我们。")]),t._v(" "),v("p",[t._v("可以在"),v("a",{attrs:{href:"https://github.com/spring-projects/spring-boot/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/spring-projects/spring-boot/issues"),v("OutboundLink")],1),t._v("上提出问题（提问时请说明Spring的版本）")]),t._v(" "),v("h1",{attrs:{id:"商业支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#商业支持"}},[t._v("#")]),t._v(" 商业支持")]),t._v(" "),v("p",[v("code",[t._v("Spring Boot 2.7")]),t._v("是"),v("code",[t._v("2.x")]),t._v("计划发布的最后一个版本。我们已经将此版本的开放源码支持延长了6个月，直至2023年11月。")]),t._v(" "),v("p",[t._v("此外，"),v("code",[t._v("Spring Boot 2.7")]),t._v("的商业支持也得到了扩展，直至2025年2月。")]),t._v(" "),v("p",[t._v("您可以在"),v("a",{attrs:{href:"spring.io/projects/spring-boot"}},[t._v("spring.io/projects/spring-boot")]),t._v("上找到项目支持详细信息。有关商业支持的详细信息，请访问"),v("a",{attrs:{href:"tanzu.vmware.com/spring-runtime"}},[t._v("tanzu.vmware.com/spring-runtime")]),t._v("。")]),t._v(" "),v("p",[t._v("由商业支持请求触发的任何版本都将始终以开源方式发布，这样商业客户也可以帮助开源社区。")]),t._v(" "),v("p",[t._v("‍")]),t._v(" "),v("blockquote",[v("p",[t._v("翻译自: "),v("a",{attrs:{href:"https://spring.io/blog/2022/05/24/preparing-for-spring-boot-3-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://spring.io/blog/2022/05/24/preparing-for-spring-boot-3-0"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);