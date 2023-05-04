(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{388:function(v,_,a){"use strict";a.r(_);var t=a(6),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"垃圾收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[v._v("#")]),v._v(" 垃圾收集器")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220818194336.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("用Java语言编写代码有一个优势，就是无需手动管理释放内存，都会由JVM中的GC模块来帮助我们去回收掉无效的内存。")]),v._v(" "),_("p",[v._v("目前主流的GC算法是诞生在分代收集理论上面的：")]),v._v(" "),_("ol",[_("li",[v._v("对象大多数都是朝生夕死的")]),v._v(" "),_("li",[v._v("存活越久的对象，越不容易被回收")])]),v._v(" "),_("p",[v._v("在分代收集理论的基础上，就诞生了三种目前最常用的垃圾回收的算法：复制算法、标记整理、标记清除。")]),v._v(" "),_("h1",{attrs:{id:"垃圾回收算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[v._v("#")]),v._v(" 垃圾回收算法")]),v._v(" "),_("h2",{attrs:{id:"_1-标记清除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-标记清除"}},[v._v("#")]),v._v(" 1. 标记清除")]),v._v(" "),_("p",[v._v("将存活的对象进行标记，然后清理掉未被标记的对象。")]),v._v(" "),_("p",[v._v("不足:")]),v._v(" "),_("ul",[_("li",[v._v("标记和清除过程效率都不高；")]),v._v(" "),_("li",[v._v("会产生大量不连续的内存碎片，导致无法给大对象分配内存。")])]),v._v(" "),_("h3",{attrs:{id:"​​"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#​​"}},[v._v("#")]),v._v(" ​"),_("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220818195041.png",alt:""}}),v._v("​")]),v._v(" "),_("h2",{attrs:{id:"_2-标记整理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-标记整理"}},[v._v("#")]),v._v(" 2. 标记整理")]),v._v(" "),_("p",[v._v("让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存。")]),v._v(" "),_("p",[v._v("​"),_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220818195028.png",alt:""}}),v._v("​")]),v._v(" "),_("h2",{attrs:{id:"_3-复制算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-复制算法"}},[v._v("#")]),v._v(" 3. 复制算法")]),v._v(" "),_("p",[v._v("​"),_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220818195235.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("将内存划分为大小相等的两块，每次只使用其中一块，当这一块内存用完了就将还存活的对象复制到另一块上面，然后再把使用过的内存空间进行一次清理。")]),v._v(" "),_("p",[v._v("主要不足是只使用了内存的一半。")]),v._v(" "),_("p",[v._v("现在的商业虚拟机都采用这种收集算法来回收新生代，但是并不是将新生代划分为大小相等的两块，而是分为一块较大的 Eden 空间和两块较小的 Survivor 空间，每次使用 Eden 空间和其中一块 Survivor。在回收时，将 Eden 和 Survivor 中还存活着的对象一次性复制到另一块 Survivor 空间上，最后清理 Eden 和使用过的那一块 Survivor。")]),v._v(" "),_("p",[v._v("HotSpot 虚拟机的 Eden 和 Survivor 的大小比例默认为 8:1，保证了内存的利用率达到 90%。如果每次回收有多于 10% 的对象存活，那么一块 Survivor 空间就不够用了，此时需要依赖于老年代进行分配担保，也就是借用老年代的空间存储放不下的对象。")]),v._v(" "),_("h2",{attrs:{id:"_4-分代收集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-分代收集"}},[v._v("#")]),v._v(" 4. 分代收集")]),v._v(" "),_("p",[v._v("现在的商业虚拟机采用分代收集算法，它根据对象存活周期将内存划分为几块，不同块采用适当的收集算法。")]),v._v(" "),_("p",[v._v("针对于分代收集理论中的，"),_("code",[v._v("对象都是朝生夕死的")]),v._v("这部分对象划分为新生代。")]),v._v(" "),_("p",[v._v("而针对"),_("code",[v._v("存活越久的对象，越不容易被回收")]),v._v("，则划分成老年代。")]),v._v(" "),_("ul",[_("li",[v._v("新生代使用: 复制算法，提升回收效率")]),v._v(" "),_("li",[v._v("老年代使用: "),_("code",[v._v("标记清除")]),v._v(" 或者 "),_("code",[v._v("标记整理 ​")]),v._v("算法，提升内存可用性")])]),v._v(" "),_("h1",{attrs:{id:"垃圾收集器-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器-2"}},[v._v("#")]),v._v(" 垃圾收集器")]),v._v(" "),_("p",[v._v("收集算法是内存回收的理论基础，在理论基础上诞生了很多内存回收的具体实践。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220818201020.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("‍")]),v._v(" "),_("h2",{attrs:{id:"serial收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#serial收集器"}},[v._v("#")]),v._v(" Serial收集器")]),v._v(" "),_("p",[v._v("开启方式：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-XX:+UseSerialGC")]),v._v("（年轻代）")]),v._v(" "),_("li",[_("code",[v._v("-XX:+UseSerialOldGC")]),v._v(" （老年代）")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220819111214.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("Serial 翻译为串行，也就是说它以串行的方式执行。它是单线程的收集器，只会使用一个线程进行垃圾收集工作。")]),v._v(" "),_("p",[_("strong",[v._v("它的优点是简单高效，对于单个 CPU 环境来说，由于没有线程交互的开销，因此拥有最高的单线程收集效率。")])]),v._v(" "),_("p",[v._v("它是 "),_("strong",[v._v("Client 模式下的")]),v._v("​"),_("strong",[v._v("默认新生代收集器")]),v._v("，因为在用户的桌面应用场景下，分配给虚拟机管理的内存一般来说不会很大。Serial 收集器收集几十兆甚至一两百兆的新生代停顿时间可以控制在一百多毫秒以内，只要不是太频繁，这点停顿是可以接受的。")]),v._v(" "),_("h2",{attrs:{id:"parnew收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parnew收集器"}},[v._v("#")]),v._v(" ParNew收集器")]),v._v(" "),_("p",[v._v("开启方式:")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-XX:+UseParNewGC")]),v._v("(年轻代)")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220819112146.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("它是 Serial 收集器的多线程版本。是 Server 模式下的虚拟机首选新生代收集器，除了性能原因外，主要是因为除了 Serial 收集器，"),_("strong",[v._v("只有它能与 CMS 收集器配合工作。")])]),v._v(" "),_("p",[v._v("默认开启的线程数量与 CPU 数量相同，可以使用 -XX:ParallelGCThreads 参数来设置线程数。")]),v._v(" "),_("h2",{attrs:{id:"parallel收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parallel收集器"}},[v._v("#")]),v._v(" Parallel收集器")]),v._v(" "),_("p",[_("strong",[v._v("开启方式：")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-XX:+UseParallelGC")]),v._v("(年轻代)")]),v._v(" "),_("li",[_("code",[v._v("-XX:+UseParallelOldGC")]),v._v("(老年代)")])]),v._v(" "),_("p",[v._v("与 ParNew 一样是多线程收集器。")]),v._v(" "),_("p",[v._v("其它收集器关注点是尽可能缩短垃圾收集时用户线程的停顿时间，而它的目标是"),_("strong",[v._v("达到一个可控制的吞吐量")]),v._v("，它被称为“吞吐量优先”收集器。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220819112146.png",alt:""}}),v._v("​")]),v._v(" "),_("blockquote",[_("p",[v._v("这里的吞吐量指 CPU 用于运行用户代码的时间占总时间的比值。")])]),v._v(" "),_("p",[v._v("停顿时间越短就越适合需要与用户交互的程序，良好的响应速度能提升用户体验。")]),v._v(" "),_("p",[v._v("而高吞吐量则可以高效率地利用 CPU 时间，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的任务。")]),v._v(" "),_("p",[v._v("缩短停顿时间是以牺牲吞吐量和新生代空间来换取的: 新生代空间变小，垃圾回收变得频繁，导致吞吐量下降。")]),v._v(" "),_("p",[v._v("可以通过一个开关参数打开 GC 自适应的调节策略(GC Ergonomics)，就不需要手动指定新生代的大小(-Xmn)、Eden 和 Survivor 区的比例、晋升老年代对象年龄等细节参数了。"),_("code",[v._v("虚拟机会根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或者最大的吞吐量。")])]),v._v(" "),_("h2",{attrs:{id:"cms-收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器"}},[v._v("#")]),v._v(" CMS 收集器")]),v._v(" "),_("p",[v._v("开始方式：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-XX:+UseConcMarkSweepGC")]),v._v("(老年代)")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220819132725.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。")]),v._v(" "),_("p",[v._v("它非常符合在注重用户体验的应用上使用，它是HotSpot虚拟机第一款真正意义上的"),_("strong",[v._v("并发收集器")]),v._v("，"),_("strong",[v._v("它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作")]),v._v("。")]),v._v(" "),_("p",[v._v("从名字中的Mark Sweep这两个词可以看出，CMS收集器是一种 “标记-清除”算法实现的，它的运作过程相比于前面几种垃圾收集器来说更加复杂一些。")]),v._v(" "),_("p",[v._v("整个过程分为四个步骤：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("初始标记：")]),v._v(" 暂停所有的其他线程(STW)，并记录下gc roots直接能引用的对象，速度很快。")]),v._v(" "),_("li",[_("strong",[v._v("并发标记：")]),v._v(" 并发标记阶段就是从GC Roots的直接关联对象开始遍历整个对象图的过程， 这个过程耗时较长但是不需要停顿用户线程， 可以与垃圾收集线程一起并发运行。因为用户程序继续运行，可能会有导致已经标记过的对象状态发生改变。")]),v._v(" "),_("li",[_("strong",[v._v("重新标记：")]),v._v(" 重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短。主要用到"),_("strong",[v._v("三色标记")]),v._v("里的增量更新算法做重新标记。")]),v._v(" "),_("li",[_("strong",[v._v("并发清理：")]),v._v(" 开启用户线程，同时GC线程开始对未标记的区域做清扫。这个阶段如果有新增对象会被标记为黑色不做任何处理")])]),v._v(" "),_("p",[v._v("执行完之后"),_("strong",[v._v("并发重置")]),v._v("，重置本次GC过程中的标记数据。")]),v._v(" "),_("p",[v._v("在整个过程中耗时最长的并发标记和并发清除过程中，收集器线程都可以与用户线程一起工作，不需要进行停顿。")]),v._v(" "),_("p",[_("strong",[v._v("具有以下缺点:")])]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("吞吐量低")]),v._v(": 低停顿时间是以牺牲吞吐量为代价的，导致 CPU 利用率不够高。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("无法处理浮动垃圾")]),v._v("，可能出现"),_("code",[v._v("​ Concurrent Mode Failure")]),v._v("。")]),v._v(" "),_("p",[v._v("浮动垃圾是指并发清除阶段由于用户线程继续运行而产生的垃圾，这部分垃圾只能到下一次 GC 时才能进行回收。由于浮动垃圾的存在，因此需要预留出一部分内存，意味着 CMS 收集不能像其它收集器那样等待老年代快满的时候再回收。")]),v._v(" "),_("p",[v._v("如果预留的内存不够存放浮动垃圾，就会出现 Concurrent Mode Failure，这时虚拟机将临时启用 Serial Old 来替代 CMS。")])]),v._v(" "),_("li",[_("p",[v._v("标记 - 清除算法导致的"),_("strong",[v._v("空间碎片")]),v._v("，往往出现老年代空间剩余，但无法找到足够大连续空间来分配当前对象，不得不提前触发一次 Full GC。")]),v._v(" "),_("p",[v._v("可以通过参数"),_("code",[v._v("-XX:+UseCMSCompactAtFullCollection")]),v._v("可以让jvm在执行完标记清除后再做整理")])])]),v._v(" "),_("h3",{attrs:{id:"cms的相关核心参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cms的相关核心参数"}},[v._v("#")]),v._v(" CMS的相关核心参数")]),v._v(" "),_("ol",[_("li",[v._v("-XX:ConcGCThreads：并发的GC线程数")]),v._v(" "),_("li",[v._v("-XX:+UseCMSCompactAtFullCollection：FullGC之后做压缩整理（减少碎片）")]),v._v(" "),_("li",[v._v("-XX:CMSFullGCsBeforeCompaction：多少次FullGC之后压缩一次，默认是0，代表每次FullGC后都会压缩一次")]),v._v(" "),_("li",[v._v("-XX:CMSInitiatingOccupancyFraction: 当老年代使用达到该比例时会触发FullGC（默认是92，这是百分比）")]),v._v(" "),_("li",[v._v("-XX:+UseCMSInitiatingOccupancyOnly：只使用设定的回收阈值(-XX:CMSInitiatingOccupancyFraction设定的值)，如果不指定，JVM仅在第一次使用设定值，后续则会自动调整")]),v._v(" "),_("li",[v._v("-XX:+CMSScavengeBeforeRemark：在CMS GC前启动一次minor gc，降低CMS GC标记阶段(也会对年轻代一起做标记，如果在minor gc就干掉了很多对垃圾对象，标记阶段就会减少一些标记时间)时的开销，一般CMS的GC耗时 80%都在标记阶段")]),v._v(" "),_("li",[v._v("-XX:+CMSParallellnitialMarkEnabled：表示在初始标记的时候多线程执行，缩短STW")]),v._v(" "),_("li",[v._v("-XX:+CMSParallelRemarkEnabled：在重新标记的时候多线程执行，缩短STW")])]),v._v(" "),_("h2",{attrs:{id:"g1收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器"}},[v._v("#")]),v._v(" G1收集器")]),v._v(" "),_("p",[v._v("开启方式："),_("code",[v._v("-XX:+UseG1GC")]),v._v("(混合回收)")]),v._v(" "),_("p",[v._v("G1(Garbage-First)，它是一款面向服务端应用的垃圾收集器，在多 CPU 和大内存的场景下有很好的性能。")]),v._v(" "),_("p",[v._v("HotSpot 开发团队赋予它的使命是未来可以替换掉 CMS 收集器。堆被分为新生代和老年代，其它收集器进行收集的范围都是整个新生代或者老年代，而 G1 可以直接对新生代和老年代一起回收。")]),v._v(" "),_("p",[v._v("‍")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220822093535.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[_("strong",[v._v("G1保留了年轻代和老年代的概念，但不再是物理隔阂了，它们都是（可以不连续）Region的集合。")])]),v._v(" "),_("p",[v._v("通过引入 Region 的概念，从而将原来的一整块内存空间划分成多个的小空间，使得每个小空间可以单独进行垃圾回收。")]),v._v(" "),_("p",[v._v("这种划分方法带来了很大的灵活性，使得可预测的停顿时间模型成为可能。通过记录每个 Region 垃圾回收时间以及回收所获得的空间(这两个值是通过过去回收的经验获得)，并维护一个优先列表，每次根据允许的收集时间，优先回收价值最大的 Region。")]),v._v(" "),_("p",[v._v("每个 Region 都有一个 "),_("code",[v._v("Remembered Set")]),v._v("，用来记录该 Region 对象的引用对象所在的 Region。通过使用 "),_("code",[v._v("Remembered Set")]),v._v("，在做可达性分析的时候就可以避免全堆扫描。")]),v._v(" "),_("p",[_("strong",[v._v("如果不计算维护 Remembered Set 的操作，G1 收集器的运作大致可划分为以下几个步骤:")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("初始标记（initial mark，STW）：暂停所有的其他线程，并记录下gc roots直接能引用的对象，速度很快")])]),v._v(" "),_("li",[_("p",[v._v("并发标记（Concurrent Marking）：同CMS的并发标记")])]),v._v(" "),_("li",[_("p",[v._v("最终标记（Remark，STW）：")]),v._v(" "),_("p",[v._v("为了修正在并发标记期间因用户程序继续运作而导致标记产生变动的那一部分标记记录，虚拟机将这段时间对象变化记录在线程的 Remembered Set Logs 里面，最终标记阶段需要把 Remembered Set Logs 的数据合并到 Remembered Set 中。这阶段需要停顿线程，但是可并行执行。")])]),v._v(" "),_("li",[_("p",[v._v("筛选回收（Cleanup，STW）：筛选回收阶段首先对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿STW时间(可以用JVM参数"),_("code",[v._v("-XX:MaxGCPauseMillis")]),v._v("指定)来制定回收计划。")]),v._v(" "),_("p",[v._v("老年代此时有1000个Region都满了，但是因为根据预期停顿时间，本次垃圾回收可能只能停顿200毫秒，那么通过之前回收成本计算得知，可能回收其中800个Region刚好需要200ms，那么就只会回收800个Region(Collection Set，要回收的集合)，尽量把GC导致的停顿时间控制在我们指定的范围内。")]),v._v(" "),_("p",[v._v("**这个阶段其实也可以做到与用户程序一起并发执行，但是因为只回收一部分Region，时间是用户可控制的，而且停顿用户线程将大幅提高收集效率。**不管是年轻代或是老年代，回收算法主要用的是复制算法，将一个region中的存活对象复制到另一个region中，这种不会像CMS那样回收完因为有很多内存碎片还需要整理一次，G1采用复制算法回收几乎不会有太多内存碎片。(注意：CMS回收阶段是跟用户线程一起并发执行的，G1因为内部实现太复杂暂时没实现并发回收，不过到了ZGC，Shenandoah就实现了并发收集，Shenandoah可以看成是G1的升级版本)")])])]),v._v(" "),_("p",[v._v("G1收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的Region(这也就是它的名字Garbage-First的由来)。")]),v._v(" "),_("p",[v._v("比如一个Region花200ms能回收10M垃圾，另外一个Region花50ms能回收20M垃圾，在回收时间有限情况下，G1当然会优先选择后面这个Region回收。")]),v._v(" "),_("p",[_("strong",[v._v("这种使用Region划分内存空间以及有优先级的区域回收方式，保证了G1收集器在有限时间内可以尽可能高的收集效率。")])]),v._v(" "),_("p",[v._v("被视为JDK1.7以上版本Java虚拟机的一个重要进化特征。它具备以下特点：")]),v._v(" "),_("ul",[_("li",[v._v("并行与并发：G1能充分利用CPU、多核环境下的硬件优势，使用多个CPU（CPU或者CPU核心）来缩短Stop-The-World停顿时间。部分其他收集器原本需要停顿Java线程来执行GC动作，G1收集器仍然可以通过并发的方式让java程序继续执行。")]),v._v(" "),_("li",[v._v("分代收集：虽然G1可以不需要其他收集器配合就能独立管理整个GC堆，但是还是保留了分代的概念。")]),v._v(" "),_("li",[v._v("空间整合：与CMS的“标记--清理”算法不同，G1从整体来看是基于“标记整理”算法实现的收集器；从局部上来看是基于“复制”算法实现的。")]),v._v(" "),_("li",[v._v('可预测的停顿：这是G1相对于CMS的另一个大优势，降低停顿时间是G1 和 CMS 共同的关注点，但G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为M毫秒的时间片段(通过参数"-XX:MaxGCPauseMillis"指定)内完成垃圾收集。')])]),v._v(" "),_("p",[v._v("毫无疑问， 可以由用户指定期望的停顿时间是G1收集器很强大的一个功能， 设置不同的期望停顿时间， 可使得G1在不同应用场景中取得关注吞吐量和关注延迟之间的最佳平衡。 不过， 这里设置的“期望值”必须是符合实际的， 不能异想天开， 毕竟G1是要冻结用户线程来复制对象的， 这个停顿时")]),v._v(" "),_("p",[v._v("间再怎么低也得有个限度。 它默认的停顿目标为两百毫秒， 一般来说， 回收阶段占到几十到一百甚至接近两百毫秒都很正常， 但如果我们把停顿时间调得非常低， 譬如设置为二十毫秒， 很可能出现的结果就是由于停顿目标时间太短， 导致每次选出来的回收集只占堆内存很小的一部分， 收集器收集的速度逐渐跟不上分配器分配的速度， 导致垃圾慢慢堆积。 很可能一开始收集器还能从空闲的堆内存中获得一些喘息的时间， 但应用运行时间一长就不行了， 最终占满堆引发Full GC反而降低性能， 所以通常把期望停顿时间设置为一两百毫秒或者两三百毫秒会是比较合理的。")]),v._v(" "),_("h3",{attrs:{id:"分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[v._v("#")]),v._v(" 分类")]),v._v(" "),_("h4",{attrs:{id:"younggc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#younggc"}},[v._v("#")]),v._v(" YoungGC")]),v._v(" "),_("p",[_("strong",[v._v("YoungGC并不是说现有的Eden区放满了就会马上触发。")])]),v._v(" "),_("p",[v._v("G1会计算下现在Eden区回收大概要多久时间，如果回收时间远远小于参数 -XX:MaxGCPauseMills 设定的值，那么增加年轻代的region，继续给新对象存放，不会马上做Young GC。")]),v._v(" "),_("p",[v._v("直到下一次Eden区放满，G1计算回收时间接近参数 -XX:MaxGCPauseMills 设定的值，那么就会触发Young GC。")]),v._v(" "),_("h4",{attrs:{id:"mixedgc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mixedgc"}},[v._v("#")]),v._v(" MixedGC")]),v._v(" "),_("p",[_("strong",[v._v("区别于FullGC")]),v._v("，"),_("strong",[v._v("回收所有的Young和部分Old(根据期望的GC停顿时间确定old区垃圾收集的优先顺序)以及大对象区")]),v._v("。")]),v._v(" "),_("p",[v._v("老年代的堆占有率达到参数(-XX:InitiatingHeapOccupancyPercent)设定的值则触发。正常情况G1的垃圾收集是先做MixedGC，主要使用复制算法，需要把各个region中存活的对象拷贝到别的region里去，拷贝过程中如果发现没有足够的空region能够承载拷贝对象就会触发一次Full GC。")]),v._v(" "),_("h4",{attrs:{id:"fullgc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fullgc"}},[v._v("#")]),v._v(" FullGC")]),v._v(" "),_("p",[v._v("停止系统程序，然后采用单线程进行标记、清理和压缩整理，好空闲出来一批Region来供下一次MixedGC使用，这个过程是非常耗时的。(Shenandoah优化成多线程收集了)")]),v._v(" "),_("h3",{attrs:{id:"g1收集器参数设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器参数设置"}},[v._v("#")]),v._v(" G1收集器参数设置")]),v._v(" "),_("ul",[_("li",[v._v("-XX:+UseG1GC:使用G1收集器")]),v._v(" "),_("li",[v._v("-XX:ParallelGCThreads:指定GC工作的线程数量")]),v._v(" "),_("li",[v._v("-XX:G1HeapRegionSize:指定分区大小(1MB~32MB，且必须是2的N次幂)，默认将整堆划分为2048个分区")]),v._v(" "),_("li",[v._v("-XX:MaxGCPauseMillis:目标暂停时间(默认200ms)")]),v._v(" "),_("li",[v._v("-XX:G1NewSizePercent:新生代内存初始空间(默认整堆5%，值配置整数，默认就是百分比)")]),v._v(" "),_("li",[v._v("-XX:G1MaxNewSizePercent:新生代内存最大空间")]),v._v(" "),_("li",[v._v("-XX:TargetSurvivorRatio:Survivor区的填充容量(默认50%)，Survivor区域里的一批对象(年龄1+年龄2+年龄n的多个年龄对象)总和超过了Survivor区域的50%，此时就会把年龄n(含)以上的对象都放入老年代")]),v._v(" "),_("li",[v._v("-XX:MaxTenuringThreshold:最大年龄阈值(默认15)")]),v._v(" "),_("li",[v._v("-XX:InitiatingHeapOccupancyPercent:老年代占用空间达到整堆内存阈值(默认45%)，则执行新生代和老年代的混合收集(MixedGC)，比如我们之前说的堆默认有2048个region，如果有接近1000个region都是老年代的region，则可能就要触发MixedGC了")]),v._v(" "),_("li",[v._v("-XX:G1MixedGCLiveThresholdPercent(默认85%)  region中的存活对象低于这个值时才会回收该region，如果超过这个值，存活对象过多，回收的的意义不大。")]),v._v(" "),_("li",[v._v("-XX:G1MixedGCCountTarget:在一次回收过程中指定做几次筛选回收(默认8次)，在最后一个筛选回收阶段可以回收一会，然后暂停回收，恢复系统运行，一会再开始回收，这样可以让系统不至于单次停顿时间过长。")]),v._v(" "),_("li",[v._v("-XX:G1HeapWastePercent(默认5%): gc过程中空出来的region是否充足阈值，在混合回收的时候，对Region回收都是基于复制算法进行的，都是把要回收的Region里的存活对象放入其他Region，然后这个Region中的垃圾对象全部清理掉，这样的话在回收过程就会不断空出来新的Region，一旦空闲出来的Region数量达到了堆内存的5%，此时就会立即停止混合回收，意味着本次混合回收就结束了。")])]),v._v(" "),_("h3",{attrs:{id:"g1垃圾收集器优化建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#g1垃圾收集器优化建议"}},[v._v("#")]),v._v(" G1垃圾收集器优化建议")]),v._v(" "),_("p",[v._v("假设参数 -XX:MaxGCPauseMills 设置的值很大，导致系统运行很久，年轻代可能都占用了堆内存的60%了，此时才触发年轻代gc，那么存活下来的对象可能就会很多，此时就会导致Survivor区域放不下那么多的对象，就会进入老年代中。")]),v._v(" "),_("p",[v._v("或者年轻代gc过后，存活下来的对象过多，导致进入Survivor区域后触发了动态年龄判定规则，达到了Survivor区域的50%，也会快速导致一些对象进入老年代中。")]),v._v(" "),_("p",[v._v("所以这里核心还是在于调节 -XX:MaxGCPauseMills 这个参数的值，在保证他的年轻代gc别太频繁的同时，还得考虑每次gc过后的存活对象有多少,避免存活对象太多快速进入老年代，频繁触发mixed gc.")]),v._v(" "),_("h3",{attrs:{id:"什么场景适合使用g1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么场景适合使用g1"}},[v._v("#")]),v._v(" 什么场景适合使用G1")]),v._v(" "),_("ol",[_("li",[v._v("50%以上的堆被存活对象占用")]),v._v(" "),_("li",[v._v("对象分配和晋升的速度变化非常大")]),v._v(" "),_("li",[v._v("垃圾回收时间特别长，超过1秒")]),v._v(" "),_("li",[v._v("8GB以上的堆内存(建议值)")]),v._v(" "),_("li",[v._v("停顿时间是500ms以内")])]),v._v(" "),_("h2",{attrs:{id:"zgc收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zgc收集器"}},[v._v("#")]),v._v(" ZGC收集器")]),v._v(" "),_("p",[v._v("开启方式："),_("code",[v._v("-XX:+UseZGC")]),v._v("(混合回收)")]),v._v(" "),_("p",[v._v("ZGC是一款JDK 11中新加入的具有实验性质的低延迟垃圾收集器，ZGC可以说源自于是Azul System公司开发的C4（Concurrent Continuously Compacting Collector） 收集器。")]),v._v(" "),_("p",[v._v("具体实践可以看："),_("a",{attrs:{href:"https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("如下图所示，ZGC的目标主要有4个：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220822110723.png",alt:""}}),v._v("​")]),v._v(" "),_("ul",[_("li",[v._v("支持TB量级的堆")]),v._v(" "),_("li",[v._v("最大GC停顿时间不超过10ms")]),v._v(" "),_("li",[v._v("奠定未来GC特性的基础")]),v._v(" "),_("li",[v._v("最糟糕的情况下吞吐量会降低15%")])]),v._v(" "),_("p",[v._v("另外，它最大的优点是：**它的停顿时间不会随着堆的增大而增长！**也就是说，几十G堆的停顿时间是10ms以下，几百G甚至上T堆的停顿时间也是10ms以下。")]),v._v(" "),_("h3",{attrs:{id:"内存布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存布局"}},[v._v("#")]),v._v(" 内存布局")]),v._v(" "),_("p",[v._v("ZGC收集器是一款基于Region内存布局的， 不设分代的， 使用了读屏障、 颜色指针等技术来实现可并发的标记-复制算法的，以低延迟为首要目标的一款垃圾收集器。")]),v._v(" "),_("p",[v._v("ZGC的Region有大、 中、 小三类容量：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("小型Region（Small Region） ： 容量固定为2MB， 用于放置小于256KB的小对象。")])]),v._v(" "),_("li",[_("p",[v._v("中型Region（Medium Region） ： 容量固定为32MB， 用于放置大于等于256KB但小于4MB的对象。")])]),v._v(" "),_("li",[_("p",[v._v("大型Region（Large Region） ： 容量不固定， 可以动态变化， 但必须为2MB的整数倍， 用于放置4MB或以上的大对象。")]),v._v(" "),_("p",[v._v("每个大型Region中只会存放一个大对象， 这也预示着虽然名字叫作“大型Region”， 但它的实际容量完全有可能小于中型Region， 最小容量可低至4MB。 大型Region在ZGC的实现中是不会被重分配的， 因为复制一个大对象的代价非常高昂。")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220822111613.png",alt:""}}),v._v("​")]),v._v(" "),_("h3",{attrs:{id:"运作过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运作过程"}},[v._v("#")]),v._v(" 运作过程")]),v._v(" "),_("p",[v._v("与CMS中的ParNew和G1类似， "),_("strong",[v._v("ZGC也采用标记-复制算法")]),v._v(" ，不过ZGC对该算法做了重大改进："),_("strong",[v._v("ZGC在标记、转移和重定位阶段几乎都是并发")]),v._v("的，这是ZGC实现停顿时间小于10ms目标的最关键原因。")]),v._v(" "),_("p",[v._v("回收周期如下：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220822111312.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("ZGC只有三个STW阶段：")]),v._v(" "),_("ol",[_("li",[v._v("初始标记")]),v._v(" "),_("li",[v._v("再标记")]),v._v(" "),_("li",[v._v("初始转移")])]),v._v(" "),_("p",[v._v("其中，初始标记和初始转移分别都只需要扫描所有GC Roots，其处理时间和GC Roots的数量成正比，一般情况耗时非常短。再标记阶段STW时间很短，最多1ms，超过1ms则再次进入并发标记阶段。"),_("strong",[v._v("即，ZGC几乎所有暂停都只依赖于GC Roots集合大小，停顿时间不会随着堆的大小或者活跃对象的大小而增加。")])]),v._v(" "),_("p",[v._v("与ZGC对比，G1的转移阶段完全STW的，且停顿时间随存活对象的大小增加而增加。")]),v._v(" "),_("p",[v._v("每个STW之后，都会有并发标记：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("并发标记")]),v._v(" "),_("p",[v._v("与G1一样，并发标记是遍历对象图做可达性分析的阶段，它的初始标记(Mark Start)和最终标记(Mark End)也会出现短暂的停顿，与G1不同的是， ZGC的标记是在指针上而不是在对象上进行的， 标记阶段会更新颜色指针中的Marked 0、 Marked 1标志位")])]),v._v(" "),_("li",[_("p",[v._v("并发转移准备")]),v._v(" "),_("p",[v._v("这个阶段需要根据特定的查询条件统计得出本次收集过程要清理哪些Region，将这些Region组成重分配集（Relocation Set）。ZGC每次回收都会扫描所有的Region，用范围更大的扫描成本换取省去G1中记忆集的维护成本。")])]),v._v(" "),_("li",[_("p",[v._v("并发转移")]),v._v(" "),_("p",[v._v("转移是ZGC执行过程中的核心阶段，这个过程要把转移集中的存活对象复制到新的Region上，并为转移集中的每个Region维护一个转发表（Forward Table），记录从旧对象到新对象的转向关系。ZGC收集器能仅从引用上就明确得知一个对象是否处于转移集之中，如果用户线程此时并发访问了位于转移集中的对象，这次访问将会被预置的内存屏障(读屏障)所截获，然后立即根据Region上的转发表记录将访问转发到新复制的对象上，并同时修正更新该引用的值，使其直接指向新对象，ZGC将这种行为称为指针的“自愈”（Self-Healing）能力。")]),v._v(" "),_("blockquote",[_("p",[v._v("ZGC的颜色指针因为“自愈”（Self-Healing）能力，所以只有第一次访问旧对象会变慢。")]),v._v(" "),_("p",[v._v("一旦转移集中某个Region的存活对象都复制完毕后，这个Region就可以立即释放用于新对象的分配，但是转发表还得留着不能释放掉， 因为可能还有访问在使用这个转发表。")])])]),v._v(" "),_("li",[_("p",[v._v("并发重映射")]),v._v(" "),_("p",[v._v("重映射所做的就是修正整个堆中指向重分配集中旧对象的所有引用，但是ZGC中对象引用存在“自愈”功能，所以这个重映射操作并不是很迫切（第三步）。ZGC很巧妙地把并发重映射阶段要做的工作，合并到了下一次垃圾收集循环中的并发标记阶段里去完成，反正它们都是要遍历所有对象的，这样合并就节省了一次遍历对象图的开销。一旦所有指针都被修正之后， 原来记录新旧对象关系的转发表就可以释放掉了。")])])]),v._v(" "),_("h3",{attrs:{id:"关键技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键技术"}},[v._v("#")]),v._v(" 关键技术")]),v._v(" "),_("p",[v._v("ZGC通过颜色指针（着色指针）和读屏障技术，解决了转移过程中准确访问对象的问题，实现了并发转移。")]),v._v(" "),_("p",[v._v("大致原理描述如下：")]),v._v(" "),_("p",[v._v("并发转移中“并发”意味着GC线程在转移对象的过程中，应用线程也在不停地访问对象。假设对象发生转移，但对象地址未及时更新，那么应用线程可能访问到旧地址，从而造成错误。而在ZGC中，应用线程访问对象将触发“读屏障”，如果发现对象被移动了，那么“读屏障”会把读出来的指针更新到对象的新地址上，这样应用线程始终访问的都是对象的新地址。")]),v._v(" "),_("p",[v._v("区别于之前的垃圾收集器，以前的垃圾回收器的GC信息都保存在对象头中，而ZGC的GC信息保存在指针中。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220822112918.png",alt:""}}),v._v("​")]),v._v(" "),_("p",[v._v("每个对象有一个64位指针，这64位被分为：")]),v._v(" "),_("ul",[_("li",[v._v("18位：预留给以后使用；")]),v._v(" "),_("li",[v._v("1位：Finalizable标识，此位与并发引用处理有关，它表示这个对象只能通过finalizer才能访问；")]),v._v(" "),_("li",[v._v("1位：Remapped标识，设置此位的值后，对象未指向relocation set中（relocation set表示需要GC的Region集合）；")]),v._v(" "),_("li",[v._v("1位：Marked1标识；")]),v._v(" "),_("li",[v._v("1位：Marked0标识，和上面的Marked1都是标记对象用于辅助GC；")]),v._v(" "),_("li",[v._v("42位：对象的地址（所以它可以支持2^42=4T内存）：")])]),v._v(" "),_("p",[_("strong",[v._v("为什么有2个mark标记？")])]),v._v(" "),_("p",[v._v("每一个GC周期开始时，会交换使用的标记位，使上次GC周期中修正的已标记状态失效，所有引用都变成未标记。")]),v._v(" "),_("p",[v._v("GC周期1：使用mark0, 则周期结束所有引用mark标记都会成为01。")]),v._v(" "),_("p",[v._v("GC周期2：使用mark1, 则期待的mark标记10，所有引用都能被重新标记。")]),v._v(" "),_("p",[v._v("通过对配置ZGC后对象指针分析我们可知，对象指针必须是64位，那么ZGC就无法支持32位操作系统，同样的也就无法支持压缩指针了（CompressedOops，压缩指针也是32位）。")]),v._v(" "),_("h4",{attrs:{id:"颜色指针的三大优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#颜色指针的三大优势"}},[v._v("#")]),v._v(" 颜色指针的三大优势：")]),v._v(" "),_("ol",[_("li",[v._v("一旦某个Region的存活对象被移走之后，这个Region立即就能够被释放和重用掉，而不必等待整个堆中所有指向该Region的引用都被修正后才能清理，这使得理论上只要还有一个空闲Region，ZGC就能完成收集。")]),v._v(" "),_("li",[v._v("颜色指针可以大幅减少在垃圾收集过程中内存屏障的使用数量，ZGC只使用了读屏障。")]),v._v(" "),_("li",[v._v("颜色指针具备强大的扩展性，它可以作为一种可扩展的存储结构用来记录更多与对象标记、重定位过程相关的数据，以便日后进一步提高性能。")])]),v._v(" "),_("h4",{attrs:{id:"读屏障"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#读屏障"}},[v._v("#")]),v._v(" 读屏障")]),v._v(" "),_("blockquote",[_("p",[v._v("读屏障是JVM向应用代码插入一小段代码的技术。当应用线程从堆中读取对象引用时，就会执行这段代码。需要注意的是，仅“从堆中读取对象引用”才会触发这段代码。")])]),v._v(" "),_("p",[v._v("读屏障示例：")]),v._v(" "),_("div",{staticClass:"language-java extra-class"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[_("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("Object")]),v._v(" o "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[_("span",{pre:!0,attrs:{class:"token namespace"}},[v._v("obj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")])]),v._v("FieldA")]),v._v("   "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 从堆中读取引用，需要加入屏障")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token generics"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),_("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("Load")]),v._v(" barrier"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("Object")]),v._v(" p "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" o  "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 无需加入屏障，因为不是从堆中读取引用")]),v._v("\no"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("dosomething")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 无需加入屏障，因为不是从堆中读取引用")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("int")]),v._v(" i "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("  "),_("span",{pre:!0,attrs:{class:"token class-name"}},[_("span",{pre:!0,attrs:{class:"token namespace"}},[v._v("obj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")])]),v._v("FieldB")]),v._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//无需加入屏障，因为不是对象引用")]),v._v("\n")])])]),_("p",[v._v("如果这时候对象在GC时被移动了，接下来JVM就会加上一个读屏障，这个屏障会把读出的指针更新到对象的新地址上，并且把堆里的这个指针“修正”到原本的字段里。这样就算GC把对象移动了，读屏障也会发现并修正指针，于是应用代码就永远都会持有更新后的有效指针，而且不需要STW。")]),v._v(" "),_("p",[v._v("正是因为Load Barriers的存在，所以会导致配置ZGC的应用的吞吐量会变低。官方的测试数据是需要多出额外4%的开销")]),v._v(" "),_("h3",{attrs:{id:"zgc存在的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zgc存在的问题"}},[v._v("#")]),v._v(" ZGC存在的问题")]),v._v(" "),_("p",[v._v("ZGC最大的问题是浮动垃圾。ZGC的停顿时间是在10ms以下，但是ZGC的执行时间还是远远大于这个时间的。")]),v._v(" "),_("p",[v._v("假如ZGC全过程需要执行10分钟，在这个期间由于对象分配速率很高，将创建大量的新对象，这些对象很难进入当次GC，所以只能在下次GC的时候进行回收，这些只能等到下次GC才能回收的对象就是浮动垃圾。")]),v._v(" "),_("blockquote",[_("p",[v._v("ZGC没有分代概念，每次都需要进行全堆扫描，导致一些“朝生夕死”的对象没能及时的被回收。")])]),v._v(" "),_("h4",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[v._v("#")]),v._v(" 解决方案")]),v._v(" "),_("p",[v._v("目前唯一的办法是增大堆的容量，使得程序得到更多的喘息时间，但是这个也是一个治标不治本的方案。")]),v._v(" "),_("p",[v._v("如果需要从根本上解决这个问题，还是需要引入分代收集，让新生对象都在一个专门的区域中创建，然后专门针对这个区域进行更频繁、更快的收集。")]),v._v(" "),_("h3",{attrs:{id:"zgc参数设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zgc参数设置"}},[v._v("#")]),v._v(" ZGC参数设置")]),v._v(" "),_("p",[v._v("启用ZGC比较简单，设置JVM参数即可：-XX:+UnlockExperimentalVMOptions 「-XX:+UseZGC」。")]),v._v(" "),_("p",[v._v("调优也并不难，因为ZGC调优参数并不多，远不像CMS那么复杂。它和G1一样，可以调优的参数都比较少，大部分工作JVM能很好的自动完成。")]),v._v(" "),_("p",[v._v("下图所示是ZGC可以调优的参数：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("-XX:ReservedCodeCacheSize -XX:InitialCodeCacheSize")]),v._v(" ：设置CodeCache的大小， JIT编译的代码都放在CodeCache中，一般服务64m或128m就已经足够。")]),v._v(" "),_("li",[_("strong",[v._v("-XX:ConcGCThreads")]),v._v(" ：并发回收垃圾的线程。默认是总核数的12.5%，8核CPU默认是1。调大后GC变快，但会占用程序运行时的CPU资源，吞吐会受到影响。")]),v._v(" "),_("li",[_("strong",[v._v("-XX:ParallelGCThreads")]),v._v(" ：STW阶段使用线程数，默认是总核数的60%。")]),v._v(" "),_("li",[_("strong",[v._v("-XX:ZCollectionInterval")]),v._v(" ：ZGC发生的最小时间间隔，单位秒。")]),v._v(" "),_("li",[_("strong",[v._v("-XX:ZAllocationSpikeTolerance")]),v._v(" ：ZGC触发自适应算法的修正系数，默认2，数值越大，越早的触发ZGC。")]),v._v(" "),_("li",[_("strong",[v._v("-XX:-ZProactive")]),v._v(" ：是否启用主动回收，默认开启")])]),v._v(" "),_("h3",{attrs:{id:"触发时机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#触发时机"}},[v._v("#")]),v._v(" "),_("strong",[v._v("触发时机")])]),v._v(" "),_("p",[v._v("ZGC目前有4中机制触发GC：")]),v._v(" "),_("ul",[_("li",[v._v("定时触发，默认为不使用，可通过ZCollectionInterval参数配置。")]),v._v(" "),_("li",[v._v("预热触发，最多三次，在堆内存达到10%、20%、30%时触发，主要时统计GC时间，为其他GC机制使用。")]),v._v(" "),_("li",[v._v("分配速率，基于正态分布统计，计算内存99.9%可能的最大分配速率，以及此速率下内存将要耗尽的时间点，在耗尽之前触发GC（耗尽时间 - 一次GC最大持续时间 - 一次GC检测周期时间）。")]),v._v(" "),_("li",[v._v("主动触发，（默认开启，可通过ZProactive参数配置） 距上次GC堆内存增长10%，或超过5分钟时，对比距上次GC的间隔时间跟（49 * 一次GC的最大持续时间），超过则触发。")])]),v._v(" "),_("h1",{attrs:{id:"如何选择垃圾收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何选择垃圾收集器"}},[v._v("#")]),v._v(" 如何选择垃圾收集器")]),v._v(" "),_("ol",[_("li",[v._v("优先调整堆的大小让服务器自己来选择")]),v._v(" "),_("li",[v._v("如果内存小于100M，使用串行收集器")]),v._v(" "),_("li",[v._v("如果是单核，并且没有停顿时间的要求，串行或JVM自己选择")]),v._v(" "),_("li",[v._v("如果允许停顿时间超过1秒，选择并行或者JVM自己选")]),v._v(" "),_("li",[v._v("如果响应时间最重要，并且不能超过1秒，使用并发收集器")]),v._v(" "),_("li",[v._v("4G以下可以用parallel，4-8G可以用ParNew+CMS，8G以上可以用G1，几百G以上用ZGC")])]),v._v(" "),_("h1",{attrs:{id:"安全点与安全区域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全点与安全区域"}},[v._v("#")]),v._v(" 安全点与安全区域")]),v._v(" "),_("p",[v._v("安全点就是指代码中一些特定的位置,当线程运行到这些位置时它的状态是确定的,这样JVM就可以安全的进行一些操作,比如GC等，所以GC不是想什么时候做就立即触发的，是需要等待所有线程运行到安全点后才能触发。")]),v._v(" "),_("p",[v._v("这些特定的安全点位置主要有以下几种:")]),v._v(" "),_("ol",[_("li",[v._v("方法返回之前")]),v._v(" "),_("li",[v._v("调用某个方法之后")]),v._v(" "),_("li",[v._v("抛出异常的位置")]),v._v(" "),_("li",[v._v("循环的末尾")])]),v._v(" "),_("p",[v._v("大体实现思想是当垃圾收集需要中断线程的时候， 不直接对线程操作， 仅仅简单地设置一个标志位， 各个线程执行过程时会不停地主动去轮询这个标志， 一旦发现中断标志为真时就自己在最近的安全点上主动中断挂起。 轮询标志的地方和安全点是重合的。")]),v._v(" "),_("h2",{attrs:{id:"安全区域又是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全区域又是什么"}},[v._v("#")]),v._v(" 安全区域又是什么？")]),v._v(" "),_("p",[v._v("Safe Point 是对正在执行的线程设定的。")]),v._v(" "),_("p",[v._v("如果一个线程处于 Sleep 或中断状态，它就不能响应 JVM 的中断请求，再运行到 Safe Point 上。")]),v._v(" "),_("p",[v._v("因此 JVM 引入了 Safe Region。")]),v._v(" "),_("p",[v._v("Safe Region 是指在一段代码片段中，引用关系不会发生变化。在这个区域内的任意地方开始 GC 都是安全的。")])])}),[],!1,null,null,null);_.default=e.exports}}]);