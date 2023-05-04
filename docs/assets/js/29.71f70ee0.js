(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{334:function(a,t,s){"use strict";s.r(t);var e=s(6),v=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"maven包管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven包管理"}},[a._v("#")]),a._v(" Maven包管理")]),a._v(" "),t("p",[a._v("今天面试被问到maven包管理的机制。")]),a._v(" "),t("blockquote",[t("p",[a._v("A引用B A引用C ，B引用D1.0版本，C引用D2.0版本。。那么A引用的是1.0还是2.0\n这个问题没答上来，不过按照自己的多年的经验来进行推断，推断出来是依赖隔离那套，明显是有点问题。哈哈。")])]),a._v(" "),t("p",[a._v("平常在排查mavenjar冲突的时候，使用mvn dependency:tree找出有问题的jar,然后粗暴的用exclusion将出现问题的jar包给排除掉。还真没了解过其中奥妙。")]),a._v(" "),t("p",[a._v("maven 是有两种规则来尽可能规避依赖冲突问题，广度优先 和 声明优先。")]),a._v(" "),t("h2",{attrs:{id:"广度优先"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广度优先"}},[a._v("#")]),a._v(" 广度优先")]),a._v(" "),t("p",[a._v("看下图这种依赖关系，最终项目中存在的是哪个？")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("A\n├── B\n│   └── C\n│       └── D 2.0\n└── E\n    └── D 1.0\n")])])]),t("p",[a._v("从A到D有两条路径，A->B->C->D 2.0 和 A->E->D 1.0 。根据广度优先的规则，先扫描到的是D 1.0 这个版本，后面再扫描到了D 2.0 就不会加入依赖，因此最后的版本是1.0;")]),a._v(" "),t("h2",{attrs:{id:"声明优先"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明优先"}},[a._v("#")]),a._v(" 声明优先")]),a._v(" "),t("p",[a._v("看下图这种依赖关系，最终项目中存在的是哪个？")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("A\n├── B\n│ └── D 2.0\n└── C\n    └── D 1.0\n")])])]),t("p",[a._v("根据广度优先的理论，从A到D都是三层，A->B->D 2.0 和 A->C->D 1.0 。在扫描时发现有两个D，会将先声明的D 2.0 加入到依赖中，也就是D 2.0.")]),a._v(" "),t("h2",{attrs:{id:"依赖隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖隔离"}},[a._v("#")]),a._v(" 依赖隔离")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("A\n├── B\n│ └── D 2.0\n└── C\n    └── D 1.0\n")])])]),t("p",[a._v("有的时候我们的jar在修改的时候没有考虑到兼容升级的问题，导致1.0和2.0的版本差异非常大。")]),a._v(" "),t("p",[a._v("这个时候，无论怎么修改jar版本其实都没有办法满足需求，其最好的方式还是采用C依赖D1.0，B依赖2.0。")]),a._v(" "),t("p",[a._v("各依赖各自的版本，这样就不会出现jar冲突了。")]),a._v(" "),t("p",[a._v("目前有两个解决思路，打包时解决和运行时解决")]),a._v(" "),t("h2",{attrs:{id:"打包时解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包时解决"}},[a._v("#")]),a._v(" 打包时解决")]),a._v(" "),t("p",[a._v("maven-shade-plugin将B或者C打成一个独立的jar包来解决。")]),a._v(" "),t("p",[a._v("maven-shade-plugin 在打包时，可以将项目中依赖的 jar 包中的一些类文件打包到项目构建生成的 jar 包中，在打包的时候把类重命名。")]),a._v(" "),t("h2",{attrs:{id:"运行时解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时解决"}},[a._v("#")]),a._v(" 运行时解决")]),a._v(" "),t("p",[a._v("运行时解决只有通过我们神奇的classLoader了。")]),a._v(" "),t("p",[a._v("这块官方并没有什么比较好的解决方案。")]),a._v(" "),t("p",[a._v("目前支付宝开源的sofa可以了解一下，https://www.sofastack.tech/projects/sofa-boot/sofa-ark-readme/")])])}),[],!1,null,null,null);t.default=v.exports}}]);