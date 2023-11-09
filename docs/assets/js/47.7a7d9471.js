(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{372:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker环境pgsql安装zhparser分词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker环境pgsql安装zhparser分词"}},[s._v("#")]),s._v(" Docker环境PgSQL安装Zhparser分词")]),s._v(" "),t("p",[s._v("版本基于PG 14")]),s._v(" "),t("p",[s._v("进入docker环境安装基本工具：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("apt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("\napt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install gcc\napt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install wget\napt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install make\napt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install git\napt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("get install bzip2\n")])])]),t("p",[s._v("安装PG 开发工具包")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("apt install postgresql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n")])])]),t("p",[s._v("安装SCWS环境")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("wget http:"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.xunsearch.com/scws/down/scws-1.2.3.tar.bz2")]),s._v("\ntar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jxvf scws"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\ncd scws"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" make install\n")])])]),t("p",[s._v("安装zhparser")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" git clone https:"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//github.com/amutu/zhparser.git")]),s._v("\ncd zhparser\n make "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" make install\n")])])]),t("p",[s._v("最后就能到PG里面创建扩展了")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTENSION zhparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),s._v(" SEARCH CONFIGURATION testzhcfg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PARSER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zhparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),s._v(" SEARCH CONFIGURATION testzhcfg "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" MAPPING "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("l "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("simple")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);