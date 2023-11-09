(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{442:function(t,a,s){"use strict";s.r(a);var v=s(7),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm整体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm整体结构"}},[t._v("#")]),t._v(" JVM整体结构")]),t._v(" "),a("p",[t._v("Java整体结构数十年来都没有啥很大的变化。得益于这套优秀的设计，Java才能够经久不衰。")]),t._v(" "),a("p",[t._v("下面的概念图说明了列举了整个Java体系中，所有的组件：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220815195509.png",alt:"",title:"https://docs.oracle.com/javase/8/docs/index.html"}}),t._v("​")]),t._v(" "),a("p",[t._v("所有的Java组件最终都将运行在JavaHotSpot虚拟机上，Java的跨平台的特性就是由这个HotSpot虚拟机来实现的。")]),t._v(" "),a("p",[t._v("通过c++语言的特性，编译成不同平台的二进制代码，实现Java语言的跨平台，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220815200938.png",alt:""}}),t._v("​")]),t._v(" "),a("h1",{attrs:{id:"jvm整体结构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm整体结构-2"}},[t._v("#")]),t._v(" JVM整体结构")]),t._v(" "),a("p",[t._v("JVM会屏蔽底层操作系统的细节，向上抽象出一套虚拟的结构，只需要遵循这套规范，你也可以实现自己的虚拟机。")]),t._v(" "),a("p",[t._v("基本结构如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220815221833.png",alt:"JVM基本结构",title:"JVM基本结构"}}),t._v("​")]),t._v(" "),a("p",[t._v("由类加载系统将class加载到虚拟机，再通过JVM的字节码执行引擎执行。")]),t._v(" "),a("p",[t._v("在一个方法执行期间，会启动一个线程，这个线程将会保存到运行时数据区的虚拟机栈中。")]),t._v(" "),a("p",[t._v("例如下面这个代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StackTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用javap -c 查看")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ztianzeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("StackTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ztianzeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("learn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("StackTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" invokespecial #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Method java/lang/Object."<init>":()V')]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iconst_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" istore_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iconst_2\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" istore_2\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iload_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iload_2\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iadd\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" istore_3\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("java编译之后，将会是一个个虚拟机的指令集，对应着压栈和出栈的逻辑, 上面套逻辑对应着压栈出栈的过程如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816094855.png",alt:""}}),t._v("​")]),t._v(" "),a("p",[t._v("因为需要不断的压栈，出栈。。再加之要考虑多线程的上下文切换的问题，为了更加好的管理这部分东西，JVM虚拟机规范又将虚拟机栈中每个方法快都抽象成一个小栈帧，再将栈帧继续划分4个小块，结构如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816095713.png",alt:""}}),t._v("​")]),t._v(" "),a("p",[t._v("这样就能够解决每个线程的执行问题了。但是，CPU在执行线程的时候主流操作系统的做法都是抢占时间片，有时间片才能够执行操作。")]),t._v(" "),a("p",[t._v("也就意味着，方法可能执行到一半就时间片就没有了，去执行其他的线程逻辑了，所以，每个线程还有一个程序计数器用于保存每个指令执行完之后的的位置。")]),t._v(" "),a("p",[t._v("这就是程序计数器的意义所在，整个完成的运转流程如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816101610.png",alt:""}}),t._v("​")]),t._v(" "),a("h1",{attrs:{id:"内存参数设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存参数设置"}},[t._v("#")]),t._v(" 内存参数设置")]),t._v(" "),a("p",[t._v("JVM提供了一系列参数来对各个部分的大小进行控制：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816133234.png",alt:""}}),t._v("​")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("参数名称")])]),t._v(" "),a("th",[a("strong",[t._v("含义")])]),t._v(" "),a("th",[a("strong",[t._v("默认值")])]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-Xms")]),t._v(" "),a("td",[t._v("初始堆大小")]),t._v(" "),a("td",[t._v("物理内存的1/64(<1GB)")]),t._v(" "),a("td",[t._v("默认(MinHeapFreeRatio参数可以调整)空余堆内存小于40%时，JVM就会增大堆直到-Xmx的最大限制.")])]),t._v(" "),a("tr",[a("td",[t._v("-Xmx")]),t._v(" "),a("td",[t._v("最大堆大小")]),t._v(" "),a("td",[t._v("物理内存的1/4(<1GB)")]),t._v(" "),a("td",[t._v("默认(MaxHeapFreeRatio参数可以调整)空余堆内存大于70%时，JVM会减少堆直到 -Xms的最小限制")])]),t._v(" "),a("tr",[a("td",[t._v("-Xmn")]),t._v(" "),a("td",[t._v("年轻代大小(1.4or lator)"),a("br")]),t._v(" "),a("td"),t._v(" "),a("td",[a("strong",[t._v("注意")]),t._v(" ：此处的大小是（eden+ 2 survivor space).与jmap -heap中显示的New gen是不同的。"),a("br"),t._v("整个堆大小=年轻代大小 + 年老代大小 + 持久代大小."),a("br"),t._v("增大年轻代后,将会减小年老代大小.此值对系统性能影响较大,Sun官方推荐配置为整个堆的3/8")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:NewSize")]),t._v(" "),a("td",[t._v("设置年轻代大小(for 1.3/1.4)")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxNewSize")]),t._v(" "),a("td",[t._v("年轻代最大值(for 1.3/1.4)")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:PermSize")]),t._v(" "),a("td",[t._v("设置持久代(perm gen)初始值")]),t._v(" "),a("td",[t._v("物理内存的1/64")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxPermSize")]),t._v(" "),a("td",[t._v("设置持久代最大值")]),t._v(" "),a("td",[t._v("物理内存的1/4")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-Xss")]),t._v(" "),a("td",[t._v("每个线程的堆栈大小")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("JDK5.0以后每个线程堆栈大小为1M,以前每个线程堆栈大小为256K.更具应用的线程所需内存大小进行 调整.在相同物理内存下,减小这个值能生成更多的线程.但是操作系统对一个进程内的线程数还是有限制的,不能无限生成,经验值在3000~5000左右"),a("br"),t._v("一般小的应用， 如果栈不是很深， 应该是128k够用的 大的应用建议使用256k。这个选项对性能影响比较大，需要严格的测试。（校长）"),a("br"),t._v('和threadstacksize选项解释很类似,官方文档似乎没有解释,在论坛中有这样一句话:"”'),a("br"),t._v("-Xss is translated in a VM flag named ThreadStackSize”"),a("br"),t._v("一般设置这个值就可以了。")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:NewRatio")]),t._v(" "),a("td",[t._v("年轻代(包括Eden和两个Survivor区)与年老代的比值(除去持久代)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("-XX:NewRatio=4表示年轻代与年老代所占比值为1:4,年轻代占整个堆栈的1/5"),a("br"),t._v("Xms=Xmx并且设置了Xmn的情况下，该参数不需要进行设置。")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:SurvivorRatio")]),t._v(" "),a("td",[t._v("Eden区与Survivor区的大小比值")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("设置为8,则两个Survivor区与一个Eden区的比值为2:8,一个Survivor区占整个年轻代的1/10")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:LargePageSizeInBytes")]),t._v(" "),a("td",[t._v("内存页的大小不可设置过大， 会影响Perm的大小")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("=128m")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseFastAccessorMethods")]),t._v(" "),a("td",[t._v("原始类型的快速优化")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+DisableExplicitGC")]),t._v(" "),a("td",[t._v("关闭System.gc()")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("这个参数需要严格的测试")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxTenuringThreshold")]),t._v(" "),a("td",[t._v("垃圾最大年龄")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("如果设置为0的话,则年轻代对象不经过Survivor区,直接进入年老代. 对于年老代比较多的应用,可以提高效率.如果将此值设置为一个较大值,则年轻代对象会在Survivor区进行多次复制,这样可以增加对象再年轻代的存活 时间,增加在年轻代即被回收的概率"),a("br"),t._v("该参数只有在串行GC时才有效.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+AggressiveOpts")]),t._v(" "),a("td",[t._v("加快编译")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseBiasedLocking")]),t._v(" "),a("td",[t._v("锁机制的性能改善")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-Xnoclassgc")]),t._v(" "),a("td",[t._v("禁用垃圾回收")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:SoftRefLRUPolicyMSPerMB")]),t._v(" "),a("td",[t._v("每兆堆空闲空间中SoftReference的存活时间")]),t._v(" "),a("td",[t._v("1s")]),t._v(" "),a("td",[t._v("softly reachable objects will remain alive for some amount of time after the last time they were referenced. The default value is one second of lifetime per free megabyte in the heap")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:PretenureSizeThreshold")]),t._v(" "),a("td",[t._v("对象超过多大是直接在旧生代分配")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("单位字节 新生代采用Parallel Scavenge GC时无效"),a("br"),t._v("另一种直接在旧生代分配的情况是大的数组对象,且数组中无外部引用对象.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:TLABWasteTargetPercent")]),t._v(" "),a("td",[t._v("TLAB占eden区的百分比")]),t._v(" "),a("td",[t._v("1%")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+"),a("em",[t._v("CollectGen0First")])]),t._v(" "),a("td",[t._v("FullGC时是否先YGC")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"jvm参数该如何设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数该如何设置"}},[t._v("#")]),t._v(" JVM参数该如何设置")]),t._v(" "),a("p",[t._v("JVM参数大小设置并没有固定标准，需要根据项目的实际运行情况，结合监控系统具体个分析。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816134831.png",alt:""}}),t._v("​")]),t._v(" "),a("p",[t._v("‍")]),t._v(" "),a("ol",[a("li",[t._v("一个 4 核 8G 的订单系统，假设给 JVM 运行内存为 3 个G，根据堆内存划分比例老年代可分 2G，Eden 800M，S0/S1 各 100M。")]),t._v(" "),a("li",[t._v("线程运行每秒产生 60M 对象，大概运行 13 秒就会占满 Eden 区，前 12 秒产生的对象在做一个 minor gc 后被当作垃圾对象处理掉，第 13 秒产生的对象不是垃圾对象，会被放到 S0 区。")]),t._v(" "),a("li",[t._v("第 13 秒产生的 60M 对象由于大于 S0 区的 50% 所以会被放到老年代。")])]),t._v(" "),a("p",[t._v("为了能更好地适应不同程序的内存状况，HotSpot虚拟机并不是永远要求对象的年龄必须达到 -XX:MaxTenuringThreshold 才能晋升老年代，如果在Survivor空间中相同年龄所有对象大小的总和大于Survivor空间的一半，年龄大于或等于该年龄的对象就可以直接进入老年代，无须等到 -XX:MaxTenuringThreshold 中要求的年龄。")]),t._v(" "),a("p",[t._v("因此每隔 13 秒就有 60M 对象会被放到老年代，大概 7 到 8 分钟就会放满老年代，老年代放满后就会产生一次 full gc，此时老年代里 99% 的对象是垃圾对象，会被清理掉。而一次 full gc，会收集整个堆的垃圾对象，时间过长。因此系统每隔七八分钟就会有持续性的卡顿现象。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816160058.png",alt:""}}),t._v("​")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("针对长期存活对象调大晋升年龄没有多大意义")]),t._v(" "),a("p",[t._v("假设 10 秒一次 Young GC "),a("code",[t._v("15 * 10 = 150s")]),t._v("，存活两分钟的对象，可以认为是系统中长期存活的对象，调大一点，也仅仅是让它在新生代在多待一会儿，还不如让它早点去它该区的老年区。")])]),t._v(" "),a("li",[a("p",[t._v("存活对象大于存活区大小和动态年龄判定二者产生原因差不多，都是 Survivor 区大小分配不合理可以同时进行优化。")]),t._v(" "),a("p",[t._v("核心思想就是合理分配新生代老年代内存比例大小。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220816160539.png",alt:""}}),t._v("​")]),t._v(" "),a("p",[t._v("如图调整内存比例")]),t._v(" "),a("ul",[a("li",[t._v("线程运行每秒产生 60M 对象，大概运行 28 秒就会占满 Eden 区")]),t._v(" "),a("li",[t._v("此时前 27 秒产生的对象在做一个 minor gc 后被当作垃圾对象销毁掉，第 28 秒产生的对象会被放到 S0 区")]),t._v(" "),a("li",[t._v("由于 60M 小于 S0 区的 50% 不会被放到老年代")]),t._v(" "),a("li",[t._v("当 Eden 再一次放满，此时 minor gc 会销毁 Eden 中前 27 秒的垃圾对象和 S0 中的对象，Eden 第 28 秒产生的对象会被放到 S1 区。")]),t._v(" "),a("li",[t._v("当 Eden 再一次放满，minor gc 会销毁 Eden 中前 27 秒的垃圾对象和 S1 中的对象，Eden 第 28 秒产生的对象会被放到 S0 区，如此 JVM 几乎不发生 full gc。")])]),t._v(" "),a("p",[t._v("原则是尽可能让对象都在新生代里分配和回收，尽量别让太多对象频繁进入老年代，避免频繁对老年代进行垃圾回收，同时给系统充足的内存大小，避免新生代频繁的进行垃圾回收。")]),t._v(" "),a("h1",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("h2",{attrs:{id:"jvm历代jvm整体结构演进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm历代jvm整体结构演进"}},[t._v("#")]),t._v(" JVM历代JVM整体结构演进")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220815134318.png",alt:""}}),t._v("​")]),t._v(" "),a("p",[t._v("‍")])])}),[],!1,null,null,null);a.default=e.exports}}]);