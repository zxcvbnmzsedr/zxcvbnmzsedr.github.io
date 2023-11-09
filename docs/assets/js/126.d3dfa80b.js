(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{455:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"waitnotifynotifyall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waitnotifynotifyall"}},[t._v("#")]),t._v(" waitnotifynotifyAll")]),t._v(" "),a("h2",{attrs:{id:"为什么wait必须在synchronized保护的代码中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么wait必须在synchronized保护的代码中使用"}},[t._v("#")]),t._v(" 为什么wait必须在synchronized保护的代码中使用")]),t._v(" "),a("p",[t._v("在使用wait方法时，必须在synchronized代码块中才能够正确的执行，否则会抛出"),a("code",[t._v("IllegalMonitorStateException: current thread is not owner")]),t._v("异常.")]),t._v(" "),a("p",[a("code",[t._v("wait")]),t._v(" 方法的源码注释如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("# “wait method should always be used in a loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition does not hold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Perform action appropriate to condition")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("This")]),t._v(" method should only be called by a thread that is the owner of "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" object's monitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("”\n")])])]),a("p",[t._v("翻译下，即： "),a("code",[t._v("wait")]),t._v(" 方法应在 "),a("code",[t._v("synchronized")]),t._v(" 保护的 "),a("code",[t._v("while")]),t._v(" 代码块中使用，并始终判断执行条件是否满足，如果满足就往下继续执行，如果不满足就执行 "),a("code",[t._v("wait")]),t._v(" 方法。在执行 "),a("code",[t._v("wait")]),t._v(" 方法之前，必须先持有对象的 "),a("code",[t._v("monitor")]),t._v(" 锁，即 "),a("code",[t._v("synchronized")]),t._v(" 锁。")]),t._v(" "),a("p",[a("strong",[t._v("为什么这样设计？这样设计又有什么好处？")])]),t._v(" "),a("p",[t._v("反向思考，如果不要求 "),a("code",[t._v("wait")]),t._v(" 方法放在 "),a("code",[t._v("synchronized")]),t._v(" 保护的同步代码中使用，而是可以随意调用，那么就有可能写出这样的代码，如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockingQueue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Queue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since someone may be waiting in take")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("take")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在代码中有两个方法：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("offer")]),t._v(" 方法负责往 "),a("code",[t._v("buffer")]),t._v(" 中添加数据，添加完之后执行 "),a("code",[t._v("notify")]),t._v(" 方法来唤醒之前等待的线程")]),t._v(" "),a("li",[a("code",[t._v("take")]),t._v(" 方法负责检查整个 "),a("code",[t._v("buffer")]),t._v(" 是否为空，如果为空就进入等待，如果不为空就取出一个数据。")])]),t._v(" "),a("p",[t._v("但是这段代码并没有受 "),a("code",[t._v("synchronized")]),t._v(" 保护，于是便有可能发生以下场景：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("首先，消费者线程调用 "),a("code",[t._v("take")]),t._v(" 方法并判断 "),a("code",[t._v("buffer.isEmpty")]),t._v(" 方法是否返回 "),a("code",[t._v("true")]),t._v("，若为 "),a("code",[t._v("true")]),t._v(" 代表 "),a("code",[t._v("buffer")]),t._v(" 是空的，则线程希望进入等待，但是在线程调用 "),a("code",[t._v("wait")]),t._v(" 方法之前，就被调度器暂停了，所以此时还没来得及执行 "),a("code",[t._v("wait")]),t._v(" 方法。")]),t._v(" "),a("li",[t._v("此时生产者开始运行，执行了整个 "),a("code",[t._v("offer")]),t._v(" 方法，它往 "),a("code",[t._v("buffer")]),t._v(" 中添加了数据，并执行了 "),a("code",[t._v("notify")]),t._v(" 方法，但 "),a("code",[t._v("notify")]),t._v(" 并没有任何效果，因为消费者线程的 "),a("code",[t._v("wait")]),t._v(" 方法没来得及执行，所以没有线程在等待被唤醒。")]),t._v(" "),a("li",[t._v("此时，刚才被调度器暂停的消费者线程回来继续执行 "),a("code",[t._v("wait")]),t._v(" 方法并进入了等待。")])])]),t._v(" "),a("p",[t._v("把代码改写成源码注释所要求的被 "),a("code",[t._v("synchronized")]),t._v(" 保护的同步代码块的形式，代码如下:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("take")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样就可以确保 "),a("code",[t._v("notify")]),t._v(" 方法永远不会在 "),a("code",[t._v("buffer.isEmpty")]),t._v(" 和 "),a("code",[t._v("wait")]),t._v(" 方法之间被调用，提升了程序的安全性。")]),t._v(" "),a("p",[t._v("另外，"),a("code",[t._v("wait")]),t._v(" 方法会释放 "),a("code",[t._v("monitor")]),t._v(" 锁，这也要求必须首先进入到 "),a("code",[t._v("synchronized")]),t._v(" 内持有这把锁。")]),t._v(" "),a("p",[t._v("这里还存在一个“虚假唤醒”（"),a("code",[t._v("spurious wakeup")]),t._v("）的问题，线程可能在既没有被 "),a("code",[t._v("notify/notifyAll")]),t._v("，也没有被中断或者超时的情况下被唤醒，这种唤醒是不希望看到的。虽然在实际生产中，虚假唤醒发生的概率很小，但是程序依然需要保证在发生虚假唤醒的时候的正确性，所以就需要采用 "),a("code",[t._v("while")]),t._v(" 循环的结构。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition does not hold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样即便被虚假唤醒了，也会再次检查 "),a("code",[t._v("while")]),t._v(" 里面的条件，如果不满足条件，就会继续 "),a("code",[t._v("wait")]),t._v("，也就消除了虚假唤醒的风险。")]),t._v(" "),a("h2",{attrs:{id:"为什么-wait-notify-notifyall-被定义在-object-类中-而-sleep-定义在-thread-类中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-wait-notify-notifyall-被定义在-object-类中-而-sleep-定义在-thread-类中"}},[t._v("#")]),t._v(" 为什么 wait/notify/notifyAll 被定义在 Object 类中，而 sleep 定义在 Thread 类中？")]),t._v(" "),a("ol",[a("li",[t._v("因为Java中每个对象都有一把叫做monitor的锁，由于每个对象都能够上锁，所以就要求在对象头中保存锁的信息，这个锁是对象级别的而不是线程级别的。wait/notify/notifyAll都属于锁级别的操作，他们的锁属于对象，所以把他们定义在Object类中最为合适，因为Object类是所有对象的父类。")]),t._v(" "),a("li",[t._v("假设，我们把wait/notify/notifyAll给定义在Thread中，这个时候需要一个线程需要持有多个对象的锁，以便于满足业务需求，也就是把wait定义在Thread中的时候，我们无法灵活的控制一个线程持有多把锁的逻辑，一个wait就把整个线程锁住了。既然是让线程去等待某个对象的锁，就 应该是操作对象来实现，而不是操作线程")])]),t._v(" "),a("h2",{attrs:{id:"wait-notify-和-sleep-方法的异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-notify-和-sleep-方法的异同"}},[t._v("#")]),t._v(" wait/notify 和 sleep 方法的异同？")]),t._v(" "),a("p",[t._v("相同点：")]),t._v(" "),a("ol",[a("li",[t._v("都能够让线程进入阻塞状态。")]),t._v(" "),a("li",[t._v("都能够响应interrupt异常，在等待的过程中能够响应中断信号，并报出InterruptedException异常")])]),t._v(" "),a("p",[t._v("不同点:")]),t._v(" "),a("ol",[a("li",[t._v("wait/notify是Object的方法。sleep是Thread的方法")]),t._v(" "),a("li",[t._v("在Synchronized包裹的代码中，调用sleep不会释放monitor锁，而调用wait会释放monitor锁")]),t._v(" "),a("li",[t._v("使用sleep需要设置时间，时间到了之后会进入runable状态继续执行，而wait调用之后，如果没有notify去唤醒则一直会阻塞下去")]),t._v(" "),a("li",[t._v("wait必须在synchronized包裹的代码中使用，而sleep则不需要")])])])}),[],!1,null,null,null);a.default=e.exports}}]);