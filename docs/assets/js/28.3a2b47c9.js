(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{337:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac使用fuse挂载ntfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac使用fuse挂载ntfs"}},[s._v("#")]),s._v(" Mac使用Fuse挂载NTFS")]),s._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("ol",[t("li",[s._v("安装Fuse和nefs-3g"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --cask macfuse\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gromgit/fuse/ntfs-3g\n")])])])]),s._v(" "),t("li",[s._v("获取相关参数")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 获取当前mac登录用户的id和gid，替换下面的参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 获取外挂盘的盘符，可以根据磁盘大小来推测，我的盘符是/dev/disk2s1")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("挂载")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" disk\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ntfs-3g -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",gid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("gid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",dmask"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("022,fmask"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("133")]),s._v(" -o auto_xattr /dev/disk2s1 ~/disk \n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);