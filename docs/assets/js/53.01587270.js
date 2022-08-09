(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{356:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("hr"),s._v(" "),t("p",[s._v("title: '在上Alpine Linux安装Adguard Home'"),t("br"),s._v("\ndate: 2021-12-19 14:52:15"),t("br"),s._v("\ntags: [软路由]"),t("br"),s._v("\npublished: true"),t("br"),s._v("\nhideInList: false"),t("br"),s._v("\nfeature:"),t("br"),s._v("\nisTop: false")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("由于没有Systemd, Adguard Home的官网的安装方法在Alpine Linux上无法工作。\n然而，需要用OpenRC运行它非常简单。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("通过 "),t("code",[s._v("curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v")]),s._v(" 进行安装")])]),s._v(" "),t("li",[t("p",[s._v("编写命令  "),t("code",[s._v("vim /etc/init.d/AdguardHome")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/sbin/openrc-run")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# openrc service-script for AdGuardHome")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# place in /etc/init.d/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# start on boot: "rc-update add adguardhome"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# control service: "service adguardhome <start|stop|restart|status|checkconfig>"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AdGuard Home: Network-level blocker"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pidfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$RC_SVCNAME")]),s._v('.pid"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/AdGuardHome/AdGuardHome"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command_args")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-s run"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command_background")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extra_commands")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checkconfig"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("depend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  need net\n  provide dns\n  after firewall\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("checkconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$command")]),s._v('"')]),s._v(" --check-config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("stop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RC_CMD}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"restart"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    checkconfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n  ebegin "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Stopping '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$RC_SVCNAME")]),s._v('"')]),s._v("\n  start-stop-daemon --stop --exec "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$command")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pidfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pidfile")]),s._v('"')]),s._v(" --quiet\n  eend "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("启动服务，并开启自启动")]),s._v(" "),t("p",[t("code",[s._v("chmod +x /etc/init.d/AdguardHome")]),s._v(" "),t("code",[s._v("rc-update add AdguardHome")]),s._v(" "),t("code",[s._v("rc-service AdguardHome start")])])])]),s._v(" "),t("p")])}),[],!1,null,null,null);t.default=e.exports}}]);