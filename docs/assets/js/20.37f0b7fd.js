(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{326:function(a,v,_){"use strict";_.r(v);var s=_(6),e=Object(s.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"java自动重启原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java自动重启原因"}},[a._v("#")]),a._v(" Java自动重启原因")]),a._v(" "),v("h1",{attrs:{id:"引言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[a._v("#")]),a._v(" 引言")]),a._v(" "),v("p",[a._v("今天朋友问了我一个面试题：Java服务每个一段时间就会重启是什么原因？")]),a._v(" "),v("p",[a._v("刚看到这个问题的时候，一下子没反应过来。")]),a._v(" "),v("p",[a._v("因为单从进程的角度看，除非有外部的经常来对Java进程进行一个保活，才能够实现自动重启的功能。")]),a._v(" "),v("blockquote",[v("p",[a._v("常见的保活手段常见的大概有两种：")]),a._v(" "),v("p",[a._v("一种通过Docker打包成容器利用restart策略进行保活")]),a._v(" "),v("p",[a._v("另一种将Java的启动命令注册成service服务，利用linux的service进行保活。")])]),a._v(" "),v("p",[a._v("所以，自动重启的问题就转化为 Java进行在何时会被杀死？")]),a._v(" "),v("p",[a._v("杀死的Java也分为两大类，内部力量和外部力量。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("内部力量是Java自身的业务的代码出现了问题。")])]),a._v(" "),v("li",[v("p",[a._v("外部力量是操作系统把进程杀死了")])])]),a._v(" "),v("h1",{attrs:{id:"linux的oom-killer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux的oom-killer"}},[a._v("#")]),a._v(" Linux的OOM killer")]),a._v(" "),v("p",[a._v("OOM killer是Linux保障操作系统平稳运行的一个机制，不会由于用户进程把系统资源耗尽导致操作系统的崩溃。")]),a._v(" "),v("p",[a._v("在当物理内存和交换空间不够用时，OOM Killer 就会选择杀死进程，Linux每个进程都记录了"),v("code",[a._v("oom_score")]),a._v("这个值记录了每个PID（进程ID）被操作系统杀掉的先后顺序，这个文件位于"),v("code",[a._v("/proc/<pid>/oom_score")]),a._v("。")]),a._v(" "),v("p",[a._v("oom_score 的值是由很多因素共同决定的：")]),a._v(" "),v("ul",[v("li",[a._v("如果进程消耗的内存越大，它的 oom_score 通常也会越大。")]),a._v(" "),v("li",[a._v("如果进程运行了很长时间，并且消耗很多 CPU 时间，那么通常它的 oom_score 会偏小。")]),a._v(" "),v("li",[a._v("如果进程以 superuser 的身份运行，那么它的 oom_score 也会偏小。")])]),a._v(" "),v("p",[a._v("所以说，在Java进程不断地吃内存和CPU的时候，"),v("code",[a._v("oom_score")]),a._v("也随之变得越来越大，最后被杀掉。")]),a._v(" "),v("p",[a._v("这种情况下，可以通过"),v("code",[a._v("dmesg")]),a._v("命令进行查询")]),a._v(" "),v("div",{staticClass:"language-dmesg extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("dmesg | grep java\n")])])]),v("p",[a._v("也可以执行，下面这个命令到日志中查询")]),a._v(" "),v("div",{staticClass:"language-dmesg extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("egrep -i 'killed process' /var/log/messages\n")])])]),v("h1",{attrs:{id:"业务代码故障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务代码故障"}},[a._v("#")]),a._v(" 业务代码故障")]),a._v(" "),v("p",[a._v("JVM发生致命错误导致崩溃时，会生成一个hs_err_pid_xxx.log这样的文件，该文件包含了导致 JVM crash 的重要信息，我们可以通过分析该文件定位到导致 JVM Crash 的原因，从而修复保证系统稳定")]),a._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[a._v("-XX:ErrorFile"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/log/hs_err_pid"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".log\n")])])]),v("p",[a._v("当然这个文件巨复杂，包含JVM死掉之前的各种信息，这个文件的内容他主要有如下内容")]),a._v(" "),v("ul",[v("li",[a._v("日志头文件")]),a._v(" "),v("li",[a._v("导致 crash 的线程信息")]),a._v(" "),v("li",[a._v("所有线程信息")]),a._v(" "),v("li",[a._v("安全点和锁信息")]),a._v(" "),v("li",[a._v("堆信息")]),a._v(" "),v("li",[a._v("本地代码缓存")]),a._v(" "),v("li",[a._v("编译事件")]),a._v(" "),v("li",[a._v("gc 相关记录")]),a._v(" "),v("li",[a._v("jvm 内存映射")]),a._v(" "),v("li",[a._v("jvm 启动参数")]),a._v(" "),v("li",[a._v("服务器信息")])]),a._v(" "),v("p",[a._v("一般情况下，也不会使用这个文件去进行分析，更多的是打印OOM的崩溃日志")]),a._v(" "),v("div",{staticClass:"language-dmesg extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("-XX:+HeapDumpOnOutOfMemoryError\n")])])]),v("p",[a._v("这个文件就比较好懂了，给丢到VisualVM中 很快就能定位问题。")]),a._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),v("p",[a._v("针对服务被干掉的问题可以先看有没有dump日志，再用dmesg命令看是不是操作系统把进程干掉了，都查不到就只能啃ErrorFile了。")]),a._v(" "),v("p",[a._v("👋🏻👋🏻👋🏻")])])}),[],!1,null,null,null);v.default=e.exports}}]);