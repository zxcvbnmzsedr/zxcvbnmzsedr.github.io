(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{383:function(a,t,e){"use strict";e.r(t);var r=e(7),v=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jep425虚拟线程来了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jep425虚拟线程来了"}},[a._v("#")]),a._v(" JEP425虚拟线程来了")]),a._v(" "),t("p",[a._v("现在Go这么火热，不就是馋人家高并发的能力吗？现在Java也将要迎来天然的并发利器——虚拟线程。")]),a._v(" "),t("p",[a._v("虚拟线程可显着减少编写、维护和观察高吞吐量并发应用程序的工作量。")]),a._v(" "),t("p",[a._v("在过去 Java 中常常使用线程池来进行平台线程的共享以提高对计算机硬件的使用率，但在这种异步风格中，请求的每个阶段可能在不同的线程上执行，每个线程以交错的方式运行属于不同请求的阶段，与 Java 平台的设计不协调从而导致：")]),a._v(" "),t("ul",[t("li",[a._v("堆栈跟踪不提供可用的上下文")]),a._v(" "),t("li",[a._v("调试器不能单步执行请求处理逻辑")]),a._v(" "),t("li",[a._v("分析器不能将操作的成本与其调用方关联。")])]),a._v(" "),t("p",[a._v("而虚拟线程既保持与平台的设计兼容，同时又能最佳地利用硬件从而不影响可伸缩性。")]),a._v(" "),t("p",[t("strong",[a._v("虚拟线程是由 JDK 而非操作系统提供的线程的轻量级实现")]),a._v(" ：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("虚拟线程")]),a._v("是没有绑定到"),t("strong",[a._v("特定操作系统线程")]),a._v("的线程。")]),a._v(" "),t("li",[t("strong",[a._v("平台线程")]),a._v("是以传统方式实现的线程，作为 "),t("strong",[a._v("围绕操作系统线程的简单包装")]),a._v(" 。")])]),a._v(" "),t("h1",{attrs:{id:"java平台线程和虚拟线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java平台线程和虚拟线程"}},[a._v("#")]),a._v(" Java平台线程和虚拟线程")]),a._v(" "),t("p",[a._v("目前Java通过new Thread出来的线程，是和系统内核线程是一一对应的，系统内核的线程调度程序负责调度 Java 线程。")]),a._v(" "),t("p",[a._v("为了提高系统的性能，往往会新增很多不同的线程，去对不同的资源进行一个调度，在系统并发量上来之后在这些线程上下调度的时候会消耗不少的CPU性能，即使使用了池化技术将不同种类的线程交由给线程池统一管理，某一个承担着高负载的线程池也会成为系统的一个瓶颈，不能最大限度的释放硬件应该具有的性能。")]),a._v(" "),t("p",[a._v("为了解决这个问题，Java就提出了虚拟线程的东西，虚拟线程和平台线程就不是一一对应的关系了，多个虚拟线程会被 JVM 调度到某一个平台线程上执行，一个平台线程同时只会执行一个虚拟线程。也就意味着，大量的虚拟线程只会由一个平台线程管理，减少了平台线程上下文切换带来的损耗，尤其在web应用程序中，能显著的提升效率。")]),a._v(" "),t("p",[a._v("举个简单的例子：")]),a._v(" "),t("p",[a._v("假设你的机器有16G的内存，一个线程占用20M，这样一个机器上大约有800个平台线程可用，假设这些线程正在处理耗时的IO资源，准备请求和处理请求在1000纳秒内完成，从数据库获取资源需要100ms，如下图所示：")]),a._v(" "),t("p",[a._v("​"),t("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220926144202.png",alt:""}}),a._v("​")]),a._v(" "),t("p",[a._v("在获取数据库数据和自身的处理之间，存在10万倍之间的差距，在使用平台线程从数据库中获取数据的时候，这个线程啥也干不了只能等到，或者CPU没有获取到时间片导致频繁的上下文切换。")]),a._v(" "),t("p",[a._v("如果有800个线程全部都在执行上面这个逻辑，那么CPU占用可能不到1%的占用，因为基本都阻塞在那干不了啥事。")]),a._v(" "),t("p",[a._v("显然对于这看似基本的业务需求，平台线程没有法子重复利用CPU性能，真正做到了1核干活、8核围观。")]),a._v(" "),t("p",[a._v("​"),t("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220926144833.png",alt:""}}),a._v("​")]),a._v(" "),t("p",[a._v("所以，需要另外一个线程模型 ，以充分的调度硬件资源，这就是虚拟线程诞生的目的。")]),a._v(" "),t("p",[a._v("任何时刻，只能执行一个虚拟线程，但是，一旦该虚拟线程执行一个IO操作进入等待时，它会被立刻“挂起”，然后执行下一个虚拟线程。什么时候IO数据返回了，这个挂起的虚拟线程才会被再次调度。因此，若干个虚拟线程可以在一个普通线程中交替运行。")]),a._v(" "),t("p",[a._v("如果我们单独看一个虚拟线程的代码，在一个方法中：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('void register() {\n    config = readConfigFile("./config.json"); // #1\n    if (config.useFullName) {\n        name = req.firstName + " " + req.lastName;\n    }\n    insertInto(db, name); // #2\n    if (config.cache) {\n        redis.set(key, name); // #3\n    }\n}\n')])])]),t("p",[a._v("涉及到IO读写的1、2、#3处，执行到这些地方的时候（进入相关的JNI方法内部时）会自动挂起，并切换到其他虚拟线程执行。等到数据返回后，当前虚拟线程会再次调度并执行，因此，代码看起来是同步执行，但实际上是异步执行的。")]),a._v(" "),t("h1",{attrs:{id:"简单示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单示例"}},[a._v("#")]),a._v(" 简单示例")]),a._v(" "),t("p",[a._v("虚拟线程的接口和普通线程一样，唯一区别在于创建虚拟线程只能通过特定方法。")]),a._v(" "),t("p",[a._v("方法一：直接创建虚拟线程并运行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 传入Runnable实例并立刻运行:\nThread vt = Thread.startVirtualThread(() -> {\n    System.out.println("Start virtual thread...");\n    Thread.sleep(10);\n    System.out.println("End virtual thread.");\n});\n')])])]),t("p",[a._v("方法二：创建虚拟线程但不自动运行，而是手动调用"),t("code",[a._v("start()")]),a._v("开始运行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 创建VirtualThread:\nThread.ofVirtual().unstarted(() -> {\n    System.out.println("Start virtual thread...");\n    Thread.sleep(1000);\n    System.out.println("End virtual thread.");\n});\n// 运行:\nvt.start();\n')])])]),t("p",[a._v("方法三：通过虚拟线程的ThreadFactory创建虚拟线程，然后手动调用"),t("code",[a._v("start()")]),a._v("开始运行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 创建ThreadFactory:\nThreadFactory tf = Thread.ofVirtual().factory();\n// 创建VirtualThread:\nThread vt = tf.newThread(() -> {\n    System.out.println("Start virtual thread...");\n    Thread.sleep(1000);\n    System.out.println("End virtual thread.");\n});\n// 运行:\nvt.start();\n')])])]),t("p",[a._v("直接调用"),t("code",[a._v("start()")]),a._v("实际上是由"),t("code",[a._v("ForkJoinPool")]),a._v("的线程来调度的。我们也可以自己创建调度线程，然后运行虚拟线程：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 创建调度器:\nExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();\n// 创建大量虚拟线程并调度:\nThreadFactory tf = Thread.ofVirtual().factory();\nfor (int i=0; i<100000; i++) {\n    Thread vt = tf.newThread(() -> { ... });\n    executor.submit(vt);\n    // 也可以直接传入Runnable或Callable:\n    executor.submit(() -> {\n        System.out.println("Start virtual thread...");\n        Thread.sleep(1000);\n        System.out.println("End virtual thread.");\n        return true;\n    });\n}\n')])])]),t("p",[a._v("由于虚拟线程属于非常轻量级的资源，因此，用时创建，用完就扔，不要池化虚拟线程。")]),a._v(" "),t("p",[a._v("最后注意，虚拟线程在Java 19中是预览功能，默认关闭，需要添加参数"),t("code",[a._v("--enable-preview")]),a._v("启用：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java --source 19 --enable-preview Main.java\n")])])]),t("h2",{attrs:{id:"线程调度原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程调度原理"}},[a._v("#")]),a._v(" 线程调度原理")]),a._v(" "),t("p",[a._v("JDK 的虚拟线程调度器是一个在 FIFO 模式下运行的类似ForkJoinPool的线程池。调度器的并行数量取决于调度器虚拟线程的平台线程数量。默认情况下是 CPU 可用核心数量，但可以使用系统属性jdk.virtualThreadScheduler.parallelism进行调整。")]),a._v(" "),t("p",[a._v("ForkJoinPool和ExecutorService的工作方式不同，ExecutorService有一个等待队列来存储它的任务，其中的线程将接收并处理这些任务。而ForkJoinPool的每一个线程都有一个等待队列，当一个由线程运行的任务生成另一个任务时，该任务被添加到该线程的等待队列中，当我们运行Parallel Stream，一个大任务划分成两个小任务时就会发生这种情况。")]),a._v(" "),t("p",[a._v("为了防止线程饥饿问题，当一个线程的等待队列中没有更多的任务时，ForkJoinPool还实现了另一种模式，称为任务窃取， 也就是说：饥饿线程可以从另一个线程的等待队列中窃取一些任务。")]),a._v(" "),t("p",[a._v("通常，当虚拟线程执行 I/O 或 JDK 中的其他阻止操作（如BlockingQueue.take()时，虚拟线程会从平台线程上卸载。当阻塞操作准备完成时（例如，网络 IO 已收到字节数据），调度程序将虚拟线程挂载到平台线程上以恢复执行。")]),a._v(" "),t("p",[a._v("关于ForkJoin框架，可以看"),t("a",{attrs:{href:"https://www.ztianzeng.com/topic/Java%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%85/%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7/%E7%BA%BF%E7%A8%8B%E6%B1%A0/ForkJoin%E6%A1%86%E6%9E%B6/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.ztianzeng.com/topic/Java%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%85/%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7/%E7%BA%BF%E7%A8%8B%E6%B1%A0/ForkJoin%E6%A1%86%E6%9E%B6/"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("通常，当虚拟线程执行 I/O 或 JDK 中的其他阻止操作（如BlockingQueue.take()时，虚拟线程会从平台线程上卸载。当阻塞操作准备完成时（例如，网络 IO 已收到字节数据），调度程序将虚拟线程挂载到平台线程上以恢复执行。")]),a._v(" "),t("p",[a._v("JDK 中的绝大多数阻塞操作会将虚拟线程从平台线程上卸载，使平台线程能够执行其他工作任务。但是，JDK 中的少数阻塞操作不会卸载虚拟线程，因此会阻塞平台线程。因为操作系统级别（例如许多文件系统操作）或 JDK 级别（例如Object.wait()）的限制。这些阻塞操作阻塞平台线程时，将通过暂时增加平台线程的数量来补偿其他平台线程阻塞的损失。因此，调度器的ForkJoinPool中的平台线程数量可能会暂时超过 CPU 可用核心数量。")]),a._v(" "),t("p",[a._v("虚拟线程被固定不会影响程序运行的正确性，但它可能会影响系统的并发度和吞吐量。如果虚拟线程在被固定时执行 I/O或BlockingQueue.take() 等阻塞操作，则负责运行它的平台线程在操作期间会被阻塞。（如果虚拟线程没有被固定，那会执行 I/O 等阻塞操作时会从平台线程上卸载）")]),a._v(" "),t("h1",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("p",[a._v("响应式编程解决了平台线程需要阻塞等待其他系统响应的问题。使用异步 API 不会阻塞等待响应，而是通过回调通知结果。")]),a._v(" "),t("p",[a._v("当响应到达时，JVM 将从线程池中分配另一个线程来处理响应。这样，处理单个异步请求会涉及多个线程。")]),a._v(" "),t("p",[a._v("在异步编程中，我们可以降低系统的响应延迟，但由于硬件限制，平台线程的数量仍然有限，因此我们的系统吞吐量仍有瓶颈。另一个问题是，异步程序在不同的线程中执行，很难调试或分析它们。")]),a._v(" "),t("p",[a._v("虚拟线程通过较小的语法调整来提高代码质量（降低编码、调试、分析代码的难度），同时具有响应式编程的优点，能大幅提高系统吞吐量。")])])}),[],!1,null,null,null);t.default=v.exports}}]);