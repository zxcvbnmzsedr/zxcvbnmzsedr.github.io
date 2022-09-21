(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{404:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"相同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[t._v("#")]),t._v(" 相同点")]),t._v(" "),a("h3",{attrs:{id:"用来保护资源安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用来保护资源安全"}},[t._v("#")]),t._v(" 用来保护资源安全")]),t._v(" "),a("p",[t._v("最基本的作用")]),t._v(" "),a("h3",{attrs:{id:"都可以保证可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#都可以保证可见性"}},[t._v("#")]),t._v(" 都可以保证可见性")]),t._v(" "),a("p",[t._v("对于 synchronized 而言，线程 A 在进入 synchronized 块之前或在 synchronized 块内进行操作，对于后续的获得同一个 monitor 锁的线程 B 是可见的，也就是线程 B 是可以看到线程 A 之前的操作的，这也体现了 happens-before 针对 synchronized 的一个原则。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/%E7%BB%98%E5%9B%BE2.png",alt:"绘图2"}})]),t._v(" "),a("p",[t._v("而对于 Lock 而言，它和 synchronized 是一样，都可以保证可见性，如图所示，在解锁之前的所有操作对加锁之后的所有操作都是可见的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/LockHappensBefor.png",alt:"LockHappensBefor"}})]),t._v(" "),a("h3",{attrs:{id:"都可重入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#都可重入"}},[t._v("#")]),t._v(" 都可重入")]),t._v(" "),a("p",[t._v("可重入指的是某个线程如果已经获得了一个锁，现在试图再次请求这个它已经获得的锁，如果它无需提前释放这个锁，而是直接可以继续使用持有的这个锁。\n如果必须释放锁后才能再次申请这个锁，就是不可重入的。")]),t._v(" "),a("p",[t._v("而 synchronized 和 ReentrantLock 都具有可重入的特性。")]),t._v(" "),a("h2",{attrs:{id:"不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[t._v("#")]),t._v(" 不同点")]),t._v(" "),a("h3",{attrs:{id:"用法不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法不同"}},[t._v("#")]),t._v(" 用法不同")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Lock的加锁方式是显示的。")]),t._v(" "),a("p",[t._v("必须使用Lock对象来加锁和解锁，通常会在finally中使用unlock进行解锁，以避免出现异常锁无法释放的情况。")])]),t._v(" "),a("li",[a("p",[t._v("Synchronized的加锁方式是隐式。")]),t._v(" "),a("p",[t._v("加锁解锁都不需要手动去控制，仅仅需要声明一下即可。不需要指定锁对象，可以在方法上、也可以在代码中加锁。")])])]),t._v(" "),a("h3",{attrs:{id:"加解锁顺序不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加解锁顺序不同"}},[t._v("#")]),t._v(" 加解锁顺序不同")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Lock的加解锁顺序可以自由控制")]),t._v(" "),a("p",[t._v("如果有多把Lock锁，可以不按照加锁的顺序来反序解锁。如代码所示")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("lock1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlock2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nlock1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlock2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Synchronized的解锁顺序必须和解锁顺序完全相反")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("因为synchronized的由JVM控制的，在编译的时候会将上列代码解析成大致如下")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("monitorenter "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加obj1的锁")]),t._v("\n  monitorenter "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加obj2的锁")]),t._v("\n\n  monitorexit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解obj2的锁")]),t._v("\nmonitorexit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解obj2的锁")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"synchronized锁不够灵活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized锁不够灵活"}},[t._v("#")]),t._v(" synchronized锁不够灵活")]),t._v(" "),a("p",[t._v("一旦 synchronized 锁已经被某个线程获得了，此时其他线程如果还想获得，那它只能被阻塞，直到持有锁的线程运行完毕或者发生异常从而释放这个锁。如果持有锁的线程持有很长时间才释放，那么整个程序的运行效率就会降低，而且如果持有锁的线程永远不释放锁，那么尝试获取锁的线程只能永远等下去。")]),t._v(" "),a("p",[t._v("相比之下，Lock 类在等锁的过程中，如果使用的是 lockInterruptibly 方法，那么如果觉得等待的时间太长了不想再继续等待，可以中断退出，也可以用 tryLock() 等方法尝试获取锁，如果获取不到锁也可以做别的事，更加灵活。")]),t._v(" "),a("h3",{attrs:{id:"synchronized锁同时只能被一个线程拥有-lock没有这个限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized锁同时只能被一个线程拥有-lock没有这个限制"}},[t._v("#")]),t._v(" synchronized锁同时只能被一个线程拥有，Lock没有这个限制")]),t._v(" "),a("p",[t._v("例如在读写锁中的读锁，是可以同时被多个线程持有的，可是 synchronized 做不到。")]),t._v(" "),a("p",[t._v("Lock 根据实现不同，有不同的原理，例如 ReentrantLock 内部是通过 AQS 来获取和释放锁的。")]),t._v(" "),a("h3",{attrs:{id:"是否可以设置公平锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否可以设置公平锁"}},[t._v("#")]),t._v(" 是否可以设置公平锁")]),t._v(" "),a("p",[t._v("公平锁是指多个线程在等待同一个锁时，根据先来后到的原则依次获得锁。")]),t._v(" "),a("p",[t._v("ReentrantLock 等 Lock 实现类可以根据自己的需要来设置公平或非公平，synchronized 则不能设置。")]),t._v(" "),a("h3",{attrs:{id:"性能区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能区别"}},[t._v("#")]),t._v(" 性能区别")]),t._v(" "),a("p",[t._v("在 Java 5 以及之前，synchronized 的性能比较低，但是到了 Java 6 以后，发生了变化，因为 JDK 对 synchronized 进行了很多优化，比如自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁等，所以后期的 Java 版本里的 synchronized 的性能并不比 Lock 差。")]),t._v(" "),a("h2",{attrs:{id:"如何选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/topic/Java并发工具包/并发工具/各种锁/synchronized和Lock的对比/lock的常用方法.html"}},[t._v("如何选择")])],1),t._v(" "),a("ol",[a("li",[a("p",[t._v("如果能不用最好既不使用 Lock 也不使用 synchronized。")]),t._v(" "),a("p",[t._v("因为在许多情况下你可以使用 java.util.concurrent 包中的机制，它会为你处理所有的加锁和解锁操作，也就是推荐优先使用工具类来加解锁。")])]),t._v(" "),a("li",[a("p",[t._v("如果 synchronized 关键字适合你的程序， 那么请尽量使用它，这样可以减少编写代码的数量，减少出错的概率。")]),t._v(" "),a("p",[t._v("因为一旦忘记在 finally 里 unlock，代码可能会出很大的问题，而使用 synchronized 更安全。")])]),t._v(" "),a("li",[a("p",[t._v("如果特别需要 Lock 的特殊功能，比如尝试获取锁、可中断、超时功能等,或者是需要实现分布式锁的时候，才使用 Lock。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);