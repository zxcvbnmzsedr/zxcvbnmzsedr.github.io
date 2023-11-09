(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{415:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用centos7构建安卓apk包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用centos7构建安卓apk包"}},[s._v("#")]),s._v(" 使用Centos7构建安卓apk包")]),s._v(" "),a("h2",{attrs:{id:"基础环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础环境"}},[s._v("#")]),s._v(" 基础环境")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" java-1.8.0-openjdk-devel.x86_64 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodejs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--silent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--location")]),s._v(" https://rpm.nodesource.com/setup_10.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" nodejs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--silent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--location")]),s._v(" https://dl.yarnpkg.com/rpm/yarn.repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/yarn.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" https://dl.yarnpkg.com/rpm/pubkey.gpg\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件数限制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nfs.inotify.max_user_watches=524288\nEOF")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"安卓环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓环境"}},[s._v("#")]),s._v(" 安卓环境")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" andoird\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" gradle\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装gradle")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gradle\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gradle_version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.7")]),s._v(".1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://downloads.gradle-dn.com/distributions/gradle-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gradle_version")]),s._v("-bin.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" gradle-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gradle_version")]),s._v("-bin.zip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v("  gradle-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gradle_version")]),s._v("-bin.zip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile.d/andoird.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nexport GRADLE_USER_HOME=/home/gradle/gradle-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gradle_version")]),s._v("\nexport PATH="),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GRADLE_USER_HOME")]),s._v("/bin\nEOF")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装安卓相关的类库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" android\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装commandlinetools-linux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" commandlinetools-linux-7583922_latest.zip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" commandlinetools-linux-7583922_latest.zip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 安装环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" cmdline-tools/bin/sdkmanager "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"platform-tools"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"platforms;android-24"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sdk_root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/android/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);