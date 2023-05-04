(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{446:function(v,_,a){"use strict";a.r(_);var t=a(6),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"java内存模型介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java内存模型介绍"}},[v._v("#")]),v._v(" Java内存模型介绍")]),v._v(" "),_("p",[v._v("Java内存模型，又被称之为JMM，即Java Memory Model。")]),v._v(" "),_("p",[v._v("这个模型用于并发编程中的，线程之间通讯以及线程之间的同步")]),v._v(" "),_("h2",{attrs:{id:"容易混淆的jvm内存结构和java内存模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容易混淆的jvm内存结构和java内存模型"}},[v._v("#")]),v._v(" 容易混淆的JVM内存结构和Java内存模型")]),v._v(" "),_("p",[v._v("JVM内存结构，有的也称之为Java内存结构，与内存模型是截然不同的两种东西。")]),v._v(" "),_("p",[v._v("JVM的内存结构，是用于描述Java代码在编译成class是如何存储运行的，划分为两类:")]),v._v(" "),_("ul",[_("li",[v._v("线程共享的"),_("code",[v._v("堆")]),v._v("、"),_("code",[v._v("方法区")])]),v._v(" "),_("li",[v._v("线程独享的"),_("code",[v._v("栈")]),v._v(",栈中包含程序运行时的"),_("code",[v._v("程序计数器")]),v._v("、"),_("code",[v._v("本地方法栈")]),v._v("、"),_("code",[v._v("虚拟机栈")])])]),v._v(" "),_("p",[v._v("而Java内存模型，则是描述的是线程之间的通讯和线程之间的同步，与变法变成有关。")]),v._v(" "),_("p",[v._v("所以可以看出，这两种概念还是有所区别的。")]),v._v(" "),_("h3",{attrs:{id:"jvm内存结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存结构"}},[v._v("#")]),v._v(" JVM内存结构")]),v._v(" "),_("p",[v._v("我们都知道编写的代码是要运行在虚拟机上的，而虚拟机在执行Java程序的过程中会把所管理的内存划分成不同功能的数据区域。")]),v._v(" "),_("p",[v._v("下乳所示，就是从1.6版本的内存结构，逐渐进化到1.8的结构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/JVM.png",alt:"JVM"}})]),v._v(" "),_("ul",[_("li",[v._v("虚拟机栈: 保存局部变量和部分结果，方法调用和变量的存储都需要通过它。")]),v._v(" "),_("li",[v._v("本地方法栈: 和虚拟机栈类似，只不过代表着调用操作系统级别的操作。")]),v._v(" "),_("li",[v._v("程序计数器: 是最小的一块区域，保存着当前正在执行的JVM的指令地址，通俗来说，代码执行到哪里了。")]),v._v(" "),_("li",[v._v("运行时常量池: 保留着各种常量，在编译时候定义的常量就会在这个里面")]),v._v(" "),_("li",[v._v("方法区: 存储这每个类的结构。")]),v._v(" "),_("li",[v._v("堆: 内存划分中最大的一块，用于存储类实例和数组的。")])]),v._v(" "),_("h3",{attrs:{id:"jmm的引入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmm的引入"}},[v._v("#")]),v._v(" JMM的引入")]),v._v(" "),_("p",[v._v("我们从上图中能够看到，线程A和线程B 如果同时要对堆中实例进行操作，就会出现问题。")]),v._v(" "),_("p",[v._v("因为，线程只能够访问自己的线程堆栈，如果要操作堆中的实例，需要将堆中的实例给同步到自己的栈中。")]),v._v(" "),_("p",[v._v("线程A和线程B同时将堆中的一个变量C同步到栈中，那么线程A对C的修改，这个时候B是无感知的。")]),v._v(" "),_("p",[v._v("所以就有了JMM内存模型，这个模型就是为了解决线程和线程之间的通讯同步问题。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.png",alt:"内存模型"}})]),v._v(" "),_("h3",{attrs:{id:"jmm的含义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmm的含义"}},[v._v("#")]),v._v(" JMM的含义")]),v._v(" "),_("p",[v._v("JMM是针对多线程开发的一组规范，由于JVM是由各个不同的厂商开发的，所以要求各个厂商开发JVM的时候得统一遵循多线程开发规范，以便于使用者可以利用这些规范更加方便的开发多线程程序。这样一来即便是同一段程序在不同的虚拟机上运行，得到的结果也是一致的。")]),v._v(" "),_("p",[v._v("我们在使用了各种同步工具和关键字的时候，比如synchronized、Lock等，它们的底层原理都涉及到JMM。")]),v._v(" "),_("h2",{attrs:{id:"jmm与硬件结构的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmm与硬件结构的关系"}},[v._v("#")]),v._v(" JMM与硬件结构的关系")]),v._v(" "),_("p",[v._v("现代硬件内存架构与JMM的模型略有不同，Java的内存模型是基于现代内存架构的更高级别的抽象。")]),v._v(" "),_("p",[v._v("这是现代计算机硬件架构的示意图:")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/%E7%A1%AC%E4%BB%B6%E5%86%85%E5%AD%98%E6%9E%B6%E6%9E%84.png",alt:"硬件内存架构"}})]),v._v(" "),_("blockquote",[_("p",[v._v("现代计算机通常有2个或更多CPU。 其中一些CPU也可能有多个内核。 关键是，在具有2个或更多CPU的现代计算机上，可以同时运行多个线程。 每个CPU都能够在任何给定时间运行一个线程。 这意味着如果您的Java应用程序是多线程的，线程真的在可能同时运行.")]),v._v(" "),_("p",[v._v("每个CPU基本上都包含一组在CPU内存中的寄存器。 CPU可以在这些寄存器上执行的操作比在主存储器中对变量执行的操作快得多。 这是因为CPU可以比访问主存储器更快地访问这些寄存器。")]),v._v(" "),_("p",[v._v("每个CPU还可以具有CPU高速缓存存储器层。 事实上，大多数现代CPU都有一些大小的缓存存储层。 CPU可以比主存储器更快地访问其高速缓存存储器，但通常不会像访问其内部寄存器那样快。 因此，CPU高速缓存存储器介于内部寄存器和主存储器的速度之间。 某些CPU可能有多个缓存层(级别1和级别2)，但要了解Java内存模型如何与内存交互，这一点并不重要。 重要的是要知道CPU可以有某种缓存存储层。")]),v._v(" "),_("p",[v._v("计算机还包含主存储区(RAM)。 所有CPU都可以访问主内存。 主存储区通常比CPU的高速缓存存储器大得多。同时访问速度也就较慢.")]),v._v(" "),_("p",[v._v("通常，当CPU需要访问主存储器时，它会将部分主存储器读入其CPU缓存。 它甚至可以将部分缓存读入其内部寄存器，然后对其执行操作。 当CPU需要将结果写回主存储器时，它会将值从其内部寄存器刷新到高速缓冲存储器，并在某些时候将值刷新回主存储器。")])]),v._v(" "),_("p",[v._v("是不是和上面的JMM内存模型十分相似。在多个CPU，读取同一块的内存信息时候，也存在着竞争的操作。")])])}),[],!1,null,null,null);_.default=s.exports}}]);