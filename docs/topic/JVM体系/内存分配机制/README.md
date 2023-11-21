---
title: 内存分配机制
date: 2022-08-15 13:11
permalink: /topic/JVM%E4%BD%93%E7%B3%BB/%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E6%9C%BA%E5%88%B6
topic: 
  - topic
tags: null
categories: 
  - topic
  - JVM体系
  - 内存分配机制
---
# 内存分配机制

JVM在运行Class文件时，会将Class文件中的各个结构区域按照规则映射成C++的代码。所以将从HotSpot加载Class的整个过程来剖析Class在JVM中内存分配情况。

# 对象创建流程

对象创建的主要流程图如下：

![](https://image.ztianzeng.com/uPic/20220816180351.png)​

## 类加载检查

虚拟机需要一条new指令的时候，首先将回去检查这个指令的参数是否能够在常量池中定位到一个类的符号引用，并且检查这个符号引用的类是否已被加载、解析和初始化过。

## 分配内存

在类加载检查通过之后，虚拟机会为这个对象分配内存。

对象所需内存的大小在类加载完成后便可完全确定，为对象分配空间的任务等同于把 一块确定大小的内存从Java堆中划分出来。

JVM默认采用TLAB方式进行内存分配，TLAB即ThreadLocalAllocationBuffers（线程局部分配缓存）。

每个线程都有自己的一块内存区域，用于分配对象，这块内存区域便为TLAB区。这样的好处是在分配内存时，无需对一整块内存进行加锁。TLAB只是在分配对象时的操作属于线程私有，分配的对象对于其他线程仍是可读的。

具体代码如下：

```cpp
// templateTable_x86.cpp
if (UseTLAB) {
    // 获取TLAB区剩余空间首地址，放入rax寄存器。
    __ movptr(rax, Address(thread, in_bytes(JavaThread::tlab_top_offset())));
    // rdx寄存器已经记录了对象大小，此处及根据TLAB空闲区首地址，计算出对象分配后，对象尾地址，放入rbx中
    __ lea(rbx, Address(rax, rdx, Address::times_1));
    // 将rbx中内容与TLAB空闲区尾地址进行比较。
    __ cmpptr(rbx, Address(thread, in_bytes(JavaThread::tlab_end_offset())));
    // 如果上面比较结果表明rbx > TLAB空闲区尾地址，则表明TLAB区空闲区大小不足以分配该对象，那么在allow_shared_alloc（允许在Eden区分配）情况下，就直接跳往Eden区分配内存标号处运行,即第8步
    __ jcc(Assembler::above, allow_shared_alloc ? allocate_shared : slow_case);
   // 因为对象分配后，TLAB区空间变小，此处更新TLAB空闲区首地址为对象尾地址
    __ movptr(Address(thread, in_bytes(JavaThread::tlab_top_offset())), rbx);
   // 如果TLAB区默认会对回收的空闲区清零，那么就不需要在为对象变量进行清零操作了，直接跳往对象头初始化处运行。清零操作是因为分配的内存可能还保留着上次分配给其他对象时的数据，内存块虽然被回收了，但是之前的数据没有被清除，会污染新对象。
   if (ZeroTLAB) {
      // the fields have been already cleared
      __ jmp(initialize_header);
   } else {
      // initialize both the header and fields
      __ jmp(initialize_object);
   }
}
```

如果在TLAB区分配失败，会直接在Eden区进行分配:

```cpp
if (allow_shared_alloc) {
    // TLAB区分配失败会跳到这。
    __ bind(allocate_shared);
    // 获取Eden区剩余空间的首地址和结束地址。
    ExternalAddress heap_top((address)Universe::heap()->top_addr());
    ExternalAddress heap_end((address)Universe::heap()->end_addr());

    Label retry;
    __ bind(retry);
  
    // 将空闲区首地址放入rax中，用作对象分配开始处。
    __ movptr(rax, heap_top);
  
    // 计算对象尾地址，与空闲区尾地址进行比较，内存不足则跳往慢速分配。
    __ lea(rbx, Address(rax, rdx, Address::times_1));
    __ cmpptr(rbx, heap_end);
    __ jcc(Assembler::above, slow_case);

    // rax,: object begin，rax此时记录了对象分配的内存首地址
    // rbx,: object end    rbx此时记录了对象分配的内存尾地址
    // rdx: instance size in bytes rdx记录了对象大小

    // 利用CAS操作，更新Eden空闲区首地址为对象尾地址，因为Eden区是线程共用的，所以需要加锁。
    __ locked_cmpxchgptr(rbx, heap_top);

    // if someone beat us on the allocation, try again, otherwise continue
    __ jcc(Assembler::notEqual, retry);

    __ incr_allocated_bytes(thread, rdx, 0);
}
```

## 初始化零值

内存分配完成后，虚拟机需要将分配到的内存空间都初始化为零值（不包括对象头）

如果使用TLAB，这一工作过程也可以提前至TLAB分配时进行。这一步操作保证了对象的实例字段在Java代码中可以不赋初始值就直接使用，程序能访问到这些字段的数据类型所对应的零值。

```cpp
// 开始初始化对象处
__ bind(initialize_object);
// 如果rdx和sizeof(oopDesc)大小一样，即对象所需大小和对象头大小一样，则表明对象真正的实例数据内存为0，那么就不需要进行对象实例数据的初始化了，直接跳往对象头初始化处即可。Hotspot中虽然对象头在内存中排在对象实例数据前，但是会先初始化对象实例数据，再初始化对象头。
__ decrement(rdx, sizeof(oopDesc));
__ jcc(Assembler::zero, initialize_header);

// 执行异或，使得rcx为0，为之后给对象变量赋零值做准备
__ xorl(rcx, rcx);    // use zero reg to clear memory (shorter code)
__ shrl(rdx, LogBytesPerLong); // divide by 2*oopSize and set carry flag if odd

Label L;
__ jccb(Assembler::carryClear, L);
__ stop("object size is not multiple of 2 - adjust this code");
__ bind(L);

// 此处以rdx（对象大小）递减，按字节进行循环遍历对内存，初始化对象实例内存为零值。
{ Label loop;
__ bind(loop);
__ movptr(Address(rax, rdx, Address::times_8, sizeof(oopDesc) - 1*oopSize), rcx);
NOT_LP64(__ movptr(Address(rax, rdx, Address::times_8, sizeof(oopDesc) - 2*oopSize), rcx));
__ decrement(rdx);
__ jcc(Assembler::notZero, loop);
}
```

## 设置对象头

初始化零值之后，虚拟机要对对象进行必要的设置。

例如这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码、对象的GC分代年龄等信息。这些信息存放在对象的对象头Object Header之中。

在HotSpot虚拟机中，对象在内存中存储的布局可以分为3块区域：

1. 对象头（Header）
2.  实例数据（Instance Data）
3. 对齐填充（Padding）。

HotSpot虚拟机的对象头包括两部分信息，第一部分用于存储对象自身的运行时数据， 如哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时间戳等。

对象头的另外一部分是类型指针，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。

### 32位对象头

![](https://image.ztianzeng.com/uPic/20220817135701.png)​

### 64位对象头

   ![](https://image.ztianzeng.com/uPic/20220817135725.png)​

对象头在hotspot的C++源码markOop.hpp文件里的注释如下：

```cpp
// Bit-format of an object header (most significant first, big endian layout below):
//
//  32 bits:
//  --------
//             hash:25 ------------>| age:4    biased_lock:1 lock:2 (normal object)
//             JavaThread*:23 epoch:2 age:4    biased_lock:1 lock:2 (biased object)
//             size:32 ------------------------------------------>| (CMS free block)
//             PromotedObject*:29 ---------->| promo_bits:3 ----->| (CMS promoted object)
//
//  64 bits:
//  --------
//  unused:25 hash:31 -->| unused:1   age:4    biased_lock:1 lock:2 (normal object)
//  JavaThread*:54 epoch:2 unused:1   age:4    biased_lock:1 lock:2 (biased object)
//  PromotedObject*:61 --------------------->| promo_bits:3 ----->| (CMS promoted object)
//  size:64 ----------------------------------------------------->| (CMS free block)
//
//  unused:25 hash:31 -->| cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && normal object)
//  JavaThread*:54 epoch:2 cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && biased object)
//  narrowOop:32 unused:24 cms_free:1 unused:4 promo_bits:3 ----->| (COOPs && CMS promoted object)
//  unused:21 size:35 -->| cms_free:1 unused:7 ------------------>| (COOPs && CMS free block)
```

## 执行Init方法

对象按照Java代码中的逻辑进行初始化。

对应到语言层面上讲，就是为属性赋值，和执行构造方法。

比如 `int a = 10; int b = 20;`这种就是在init过程中执行的。

```cpp
// 初始化对象头标号处
__ bind(initialize_header);

// 是否使用偏向锁，大多时一个对象只会被同一个线程访问，所以在对象头中记录获取锁的线程id，下次线程获取锁时就不需要加锁了。
if (UseBiasedLocking) {
    // 第4步中有将类数据InstanceKlass的地址入栈，此时重新出栈，放入rcx寄存器。
    __ pop(rcx);  
    // 接下来两步将类的偏向锁相关数据移动到对象头部
    __ movptr(rbx, Address(rcx, Klass::prototype_header_offset()));
    __ movptr(Address(rax, oopDesc::mark_offset_in_bytes ()), rbx);
} else {
    __ movptr(Address(rax, oopDesc::mark_offset_in_bytes ()),
                (intptr_t)markOopDesc::prototype()); // header
    __ pop(rcx);   // get saved klass back in the register.
}
// 此时rcx保存了InstanceKlass，rax保存了对象首地址，此处保存对象所属的类数据InstanceKlass放入对象头中，对象头尾oopDesc类型，里面有个_metadata联合体，_metadata中专门有个Klass指针用来指向类所属对象，此处其实就是将InstanceKlass地址放入该指针中。
__ store_klass(rax, rcx);  // klass

{
  SkipIfEqual skip_if(_masm, &DTraceAllocProbes, 0);
  // Trigger dtrace event for fastpath
  __ push(atos);
  __ call_VM_leaf(
           CAST_FROM_FN_PTR(address, SharedRuntime::dtrace_object_alloc), rax);
  __ pop(atos);
}

__ jmp(done);

```

‍

# 对象内存分配

整个对象创建最复杂的步骤就是对象分配那一块，涉及到多种概念，大致分配流程如下：

![](https://image.ztianzeng.com/uPic/20220817154907.png)​

## 对象栈上分配

我们通过JVM内存分配可以知道JAVA中的对象都是在堆上进行分配，当对象没有被引用的时候，需要依靠GC进行回收内存，如果对象数量较多的时候，会给GC带来较大压力，也间接影响了应用的性能。

为了减少临时对象在堆内分配的数量，JVM通过**逃逸分析**确定该对象不会被外部访问。

如果不会逃逸可以将该对象在栈上分配内存，这样该对象所占用的内存空间就可以随栈帧出栈而销毁，就减轻了垃圾回收的压力。

**对象逃逸分析：**就是分析对象动态作用域，当一个对象在方法中被定义后，它可能被外部方法所引用，例如作为调用参数传递到其他地方中。

**标量替换：**通过逃逸分析确定该对象不会被外部访问，并且对象可以被进一步分解时，JVM不会创建该对象，而是将该对象成员变量分解若干个被这个方法使用的成员变量所代替，这些代替的成员变量在栈帧或寄存器上分配空间，这样就不会因为没有一大块连续空间导致对象内存不够分配。开启标量替换参数(-XX:+EliminateAllocations)，JDK7之后默认开启。

**标量与聚合量：**标量即不可被进一步分解的量，而JAVA的基本数据类型就是标量（如：int，long等基本数据类型以及reference类型等），标量的对立就是可以被进一步分解的量，而这种量称之为聚合量。而在JAVA中对象就是可以被进一步分解的聚合量。

## 对象在Eden区分配

大多数情况下，对象在新生代中 Eden 区分配。当 Eden 区没有足够空间进行分配时，虚拟机将发起一次Minor GC。

## 大对象进入老年代

为了避免为大对象分配内存时的复制操作而降低效率。JVM会将需要大量连续内存空间的对象直接丢入到老年代中。

JVM参数 -XX:PretenureSizeThreshold 可以设置大对象的大小，如果对象超过设置大小会直接进入老年代，不会进入年轻代，这个参数只在 Serial 和ParNew两个收集器下有效。

## 长期存活的对象将进入老年代

既然虚拟机采用了分代收集的思想来管理内存，那么内存回收时就必须能识别哪些对象应放在新生代，哪些对象应放在老年代中。为了做到这一点，虚拟机给每个对象一个对象年龄（Age）计数器。

如果对象在 Eden 出生并经过第一次 Minor GC 后仍然能够存活，并且能被 Survivor 容纳的话，将被移动到 Survivor 空间中，并将对象年龄设为1。对象在 Survivor 中每熬过一次 MinorGC，年龄就增加1岁，当它的年龄增加到一定程度，就会被晋升到老年代中。对象晋升到老年代的年龄阈值，可以通过参数 -XX:MaxTenuringThreshold 来设置。

## 对象动态年龄判断

当前放对象的Survivor区域里，一批对象的总大小大于这块Survivor区域内存大小的50%(-XX:TargetSurvivorRatio可以指定)，那么此时大于等于这批对象年龄最大值的对象，就可以直接进入老年代了，例如Survivor区域里现在有一批对象，年龄1+年龄2+年龄n的多个年龄对象总和超过了Survivor区域的50%，此时就会把年龄n(含)以上的对象都放入老年代。这个规则其实是希望那些可能是长期存活的对象，尽早进入老年代。对象动态年龄判断机制一般是在minor gc之后触发的。

## 老年代空间分配担保机制

年轻代每次minor gc之前JVM都会计算下老年代剩余可用空间。

如果这个可用空间小于年轻代里现有的所有对象大小之和(包括垃圾对象) 就会看一个`-XX:-HandlePromotionFailure`(jdk1.8默认就设置了)的参数是否设置了。

如果有这个参数，就会看看老年代的可用内存大小，是否大于之前每一次minor gc后进入老年代的对象的平均大小。

如果上一步结果是小于或者之前说的参数没有设置，那么就会触发一次Full gc，对老年代和年轻代一起回收一次垃圾，如果回收完还是没有足够空间存放新的对象就会发生"OOM"

当然，如果minor gc之后剩余存活的需要挪动到老年代的对象大小还是大于老年代可用空间，那么也会触发full gc，full gc完之后如果还是没有空间放minor gc之后的存活对象，则也会发生“OOM”

## 对象内存回收

堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是要判断哪些对象已经死亡（即不能再被任何途径使用的对象）。

‍
