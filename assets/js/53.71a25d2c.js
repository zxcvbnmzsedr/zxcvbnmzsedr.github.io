(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{375:function(a,t,s){"use strict";s.r(t);var n=s(7),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"gradle-java和groovy混编"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gradle-java和groovy混编"}},[a._v("#")]),a._v(" Gradle Java和Groovy混编")]),a._v(" "),t("p",[a._v("首先安装Gradle插件")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// build.gradle")]),a._v("\nplugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    id "),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'java'")]),a._v("\n    id "),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'groovy'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        implementation 'org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("groovy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("groovy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("all"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".6")]),a._v("'\n        testImplementation 'org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("groovy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("groovy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("all"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".6")]),a._v("'\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("加入Gradle插件之后，编译顺序就会在"),t("code",[a._v("compileJava")]),a._v("​ 之后 添加一步"),t("code",[a._v("compileGroovy")]),a._v("​的操作。")]),a._v(" "),t("p",[a._v("由于存在编译顺序的关系，在java代码中引用groovy的代码时候，会编译失败。")]),a._v(" "),t("p",[a._v("所以需要覆盖Java的源代码路径，将所有的代码防在同一个目录下，避免编译顺序带来的问题。")]),a._v(" "),t("p",[a._v("在build.gradle中添加下面的代码")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("apply plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'groovy'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\nsourceSets "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  main "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    java "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" srcDirs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// no source dirs for the java compiler")]),a._v("\n    groovy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" srcDirs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"src/main/java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"src/main/groovy"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// compile   everything in src/ with groovy")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);