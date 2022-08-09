(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{418:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在JSR-133规范中，提出了happens-before的概念，通过这个概念来阐述操作之间的内存可见性。")]),t._v(" "),a("h2",{attrs:{id:"什么是happens-before关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是happens-before关系"}},[t._v("#")]),t._v(" 什么是happens_before关系")]),t._v(" "),a("p",[t._v("如果一个操作的执行结果需要对另一个操作可见，那么这两个操作必须存在happens-before的关系。")]),t._v(" "),a("p",[t._v("也就是说，在第二个操作执行的时候一都能够保证看到第一个操作执行的结果。")]),t._v(" "),a("h2",{attrs:{id:"不具备happens-before的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不具备happens-before的例子"}},[t._v("#")]),t._v(" 不具备happens_before的例子")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Visibility")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果有两个线程，分别执行write和read方法，由于这两个线程没有相互配合的机制，所以write和read方法内的代码不具备happens_before关系, 其中的变量的可见性无法保证。")]),t._v(" "),a("p",[t._v("假设线程 1 已经先执行了 write 方法，修改了共享变量 x 的值，然后线程 2 执行 read 方法去读取 x 的值，此时我们并不能确定线程 2 现在是否能读取到之前线程 1 对 x 所做的修改，线程 2 有可能看到这次修改，所以读到的 x 值是 1，也有可能看不到本次修改，所以读到的 x 值是最初始的 0。既然存在不确定性，那么 write 和 read 方法内的代码就不具备 happens-before 关系。相反，如果第一个操作 happens-before 第二个操作，那么第一个操作对于第二个操作而言一定是可见的。")]),t._v(" "),a("h2",{attrs:{id:"happens-before的规则有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#happens-before的规则有哪些"}},[t._v("#")]),t._v(" happens_before的规则有哪些")]),t._v(" "),a("h3",{attrs:{id:"单线程规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程规则"}},[t._v("#")]),t._v(" 单线程规则")]),t._v(" "),a("p",[t._v("在一个单独的线程中，按照代码的顺序，先执行的操作happens-before后执行的操作。")]),t._v(" "),a("p",[t._v("单线程，无需考虑happens-before，反过来想，如果单线程的代码执行不能保证，岂不是乱套了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/happens-before.png",alt:"happens-before"}})]),t._v(" "),a("p",[t._v("注意: 在单线程中，即使发生了指令重排，重排后的语义也必须符合happens-before的原则。")]),t._v(" "),a("h3",{attrs:{id:"锁操作规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁操作规则"}},[t._v("#")]),t._v(" 锁操作规则")]),t._v(" "),a("p",[t._v("synchronized和lock接口。")]),t._v(" "),a("p",[t._v("如果操作A是解锁，而操作B是对同一个锁的加锁，那么hb(A,B)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/LockHappensBefor.png",alt:"LockHappensBefor"}})]),t._v(" "),a("p",[t._v("从上图中可以看到，有线程 A 和线程 B 这两个线程。线程 A 在解锁之前的所有操作，对于线程 B 的对同一个锁的加锁之后的所有操作而言，都是可见的。")]),t._v(" "),a("h3",{attrs:{id:"volatile变量规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile变量规则"}},[t._v("#")]),t._v(" volatile变量规则")]),t._v(" "),a("p",[t._v("对volatile变量的写操作happens-before后面对该变量的操作。")]),t._v(" "),a("p",[t._v("这就代表了呗volatile修饰的变量，每次修改之后，其他线程读取这个变量的时候，可以读取到这个变量的最新值。")]),t._v(" "),a("p",[t._v("volatile可以保证可见性，就是由于这条规则规定的")]),t._v(" "),a("h3",{attrs:{id:"线程启动规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程启动规则"}},[t._v("#")]),t._v(" 线程启动规则")]),t._v(" "),a("p",[t._v("Thread 对象的 start 方法 happen-before 此线程 run 方法中的每一个操作。如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/Cgq2xl57Dw6AdKyOAADBt-00qXo349.png",alt:"img"}})]),t._v(" "),a("p",[t._v("在图中的例子中，左侧区域是线程 A 启动了一个子线程 B，而右侧区域是子线程 B，那么子线程 B 在执行 run 方法里面的语句的时候，它一定能看到父线程在执行 threadB.start() 前的所有操作的结果。")]),t._v(" "),a("h3",{attrs:{id:"线程join规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程join规则"}},[t._v("#")]),t._v(" 线程join规则")]),t._v(" "),a("p",[t._v("我们知道 join 可以让线程之间等待，假设线程 A 通过调用 threadB.start() 启动了一个新线程 B，然后调用 threadB.join() ，那么线程 A 将一直等待到线程 B 的 run 方法结束（不考虑中断等特殊情况），然后 join 方法才返回。在 join 方法返回后，线程 A 中的所有后续操作都可以看到线程 B 的 run 方法中执行的所有操作的结果，也就是线程 B 的 run 方法里面的操作 happens-before 线程 A 的 join 之后的语句。如下图所示："),a("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/Cgq2xl57Dw6ADE7rAADRJKFrbWE816.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"中断规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中断规则"}},[t._v("#")]),t._v(" 中断规则")]),t._v(" "),a("p",[t._v("对线程的interrupt方法的调用happens-before检测该线程的中断事件。")]),t._v(" "),a("p",[t._v("也就是说，如果一个线程被其他线程 interrupt，那么在检测中断时（比如调用 Thread.interrupted 或者 Thread.isInterrupted 方法）一定能看到此次中断的发生，不会发生检测结果不准的情况。")]),t._v(" "),a("h3",{attrs:{id:"并发工具类的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发工具类的规则"}},[t._v("#")]),t._v(" 并发工具类的规则")]),t._v(" "),a("ul",[a("li",[t._v("线程安全的并发容器（如 HashTable）在 get 某个值时一定能看到在此之前发生的 put 等存入操作的结果。也就是说，线程安全的并发容器的存入操作 happens-before 读取操作。")]),t._v(" "),a("li",[t._v("信号量（Semaphore）它会释放许可证，也会获取许可证。这里的释放许可证的操作 happens-before 获取许可证的操作，也就是说，如果在获取许可证之前有释放许可证的操作，那么在获取时一定可以看到。")]),t._v(" "),a("li",[t._v("Future：Future 有一个 get 方法，可以用来获取任务的结果。那么，当 Future 的 get 方法得到结果的时候，一定可以看到之前任务中所有操作的结果，也就是说 Future 任务中的所有操作 happens-before Future 的 get 操作。")]),t._v(" "),a("li",[t._v("线程池：要想利用线程池，就需要往里面提交任务（Runnable 或者 Callable），这里面也有一个 happens-before 关系的规则，那就是提交任务的操作 happens-before 任务的执行。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("需要重点掌握的是，锁操作的happens-before和volatile的happens-before规则。")]),t._v(" "),a("p",[t._v("这两个规则与synchronized和volatile的使用有紧密的联系。")]),t._v(" "),a("p",[t._v("除这两个之外的规则，可以不作为重点了解，这些规则都是被当做已知条件去使用的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);