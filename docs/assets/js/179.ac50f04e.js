(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{488:function(e,a,t){"use strict";t.r(a);var s=t(6),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mapreduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce"}},[e._v("#")]),e._v(" MapReduce")]),e._v(" "),a("h1",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[e._v("#")]),e._v(" 摘要")]),e._v(" "),a("p",[e._v("MapReduce是一个用来处理和生成大型数据集的编程模型和相关实现。用户需要指定"),a("em",[e._v("map")]),e._v("函数和"),a("em",[e._v("reduce")]),e._v("函数。"),a("em",[e._v("map")]),e._v("函数处理键值对并生成一组由键值对组成的中间值，"),a("em",[e._v("reduce")]),e._v("函数将所有键相同的中间值合并。就像本文中展示的那样，现实世界中的很多任务都可以通过这个模型表示。")]),e._v(" "),a("p",[e._v("以这种函数式风格编写的程序可以自动地作为并行程序在大型商用机集群上执行，运行时（run-time）系统负责对输入数据分区、在一系列机器间调度程序执行、处理机器故障、管理必要的机器间的通信。这让没有任何并行程序和分布式系统开发经验的编程人员能够轻松利用一个大型分布式系统的资源。")]),e._v(" "),a("p",[e._v("我们的MapReduce实现是高度可伸缩的，其运行在一个由商用机器组成的大型分布式集群上。通常，一个MapReduce计算会处理上千台机器上数TB的数据。每天都有数百个MapReduce程序提交的高达上千个MapReduce任务在Google集群上执行。开发人员认为这个系统非常易用。")]),e._v(" "),a("h1",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),a("p",[e._v("在过去的五年中，本文作者和其他在Google的开发者实现了数以百计的计算程序，以计算处理不同来源的大规模原始数据（如爬取到的文档、web请求日志等）。这些程序可能用来计算倒排索引（inverted index）、web文档在图论中的各种表示、每个主机爬取到的页面数量之和、给定的某天中查询最频繁的集合等等。虽然大部分的计算程序逻辑非常简单，但是由于其输入数据的规模通常很大，所以这些程序必须在成百上千台机器上分布式执行以在可可接受的时间内完成。解决并行计算、数据分布、故障处理等问题需要大量复杂的代码，让原本简单的问题不再简单。")]),e._v(" "),a("p",[e._v("为了应对这种复杂性，我们设计了一个新的程序抽象。其允许我们通过简单的描述表达我们要执行的计算，同时将并行化、容错、数据分布、负载均衡等细节隐藏在库中。我们的抽象收到了Lisp和许多其他函数式语言中的"),a("em",[e._v("map")]),e._v("和"),a("em",[e._v("reduce")]),e._v("原语的启发。我们意识到，我们大部分的计算都设计"),a("em",[e._v("map")]),e._v("操作和"),a("em",[e._v("reduce")]),e._v("操作。首先对输入数据中每条逻辑记录应用"),a("em",[e._v("map")]),e._v("操作以计算出一系列的中间键值对，然后对所有键相同的值应用"),a("em",[e._v("reduce")]),e._v("操作以合理地整合这些派生数据。用户可以自定义"),a("em",[e._v("map")]),e._v("和"),a("em",[e._v("reduce")]),e._v("操作，这让大型计算的并行化更为简单，且可以使用“重跑（re-execution）”的方法作为主要容错机制。")]),e._v(" "),a("p",[e._v("本工作的主要贡献为一个简单且功能强大的能实现自动并行化、高伸缩性分布式计算的的接口，和该接口在大型商用PC集群上的高性能的实现。")]),e._v(" "),a("ul",[a("li",[e._v("第二章描述了基本编程模型，并给出了几个例子。")]),e._v(" "),a("li",[e._v("第三章描述了为我们基于集群的计算环境定制的MapReduce接口实现。")]),e._v(" "),a("li",[e._v("第四章描述了该编程模型中我们认为有帮助的细节。")]),e._v(" "),a("li",[e._v("第五章我们的实现在各种任务重的性能测试。")]),e._v(" "),a("li",[e._v("第六章探究了MapReduce在Google中的使用，其中包括了我们以MapReduce为基础重写我们产品索引系统的经历。第七章探讨了相关工作与未来的工作。")])]),e._v(" "),a("h1",{attrs:{id:"编程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程模型"}},[e._v("#")]),e._v(" 编程模型")]),e._v(" "),a("p",[e._v("计算任务以一系列"),a("em",[e._v("输入键值对")]),e._v("作为输入，并产出一系列"),a("em",[e._v("输出键值对")]),e._v("作为输出。MapReduce库的用户将计算表示为两个函数："),a("em",[e._v("map")]),e._v("和 "),a("em",[e._v("reduce")]),e._v(" 。")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Map")])]),e._v(" "),a("p",[e._v("是由用户编写的，取一个输入对，并且产生一系列中间的键值对。MapReduce 库将那些具有相同的中间键I的中间值聚集在一起，然后将它们传递给 Reduce 函数。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Reduce")])]),e._v(" "),a("p",[e._v("同样是由用户编写的，接收一个中间键I和该键对应的一系列的中间值。Reduce 函数通过将这些值合并来组成一个可能更小的集合（值的集合）。通常每个 Reduce 函数只产生 0 个或 1 个输出值。Reduce 函数一般通过一个迭代器（via an iterator）来获取中间值，从而在中间值的数目远远大于内存容量时，我们也能够处理。")])])]),e._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("考虑如下一个问题：统计一个大量文档集合中每个单词出现的次数。用户会编写如下的伪代码。")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("　　"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// key: document name")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// value: document contents")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" each word w in value"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n　　　　　　"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("EmitIntermediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n　　"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Iterator")]),e._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// key: a word")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// values: a list of counts")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" each v in values"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n　　　　　　result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ParseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n　　　　"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AsString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[a("em",[e._v("map")]),e._v("计算出每个单词与其（译注：在每个文档中的）出现的次数（在本例中为“1”）。"),a("em",[e._v("reduce")]),e._v("函数会求出每个单词出现次数的和。")]),e._v(" "),a("p",[e._v("另外，用户编写代码来一个"),a("em",[e._v("mapreduce specification（规格/规范）"),a("em",[e._v("对象，填写输入输出文件名和可选的调节参数。随后，用户调用MapReduce函数，将")]),e._v("mapreduce specification")]),e._v("对象作为参数传入。用户代码会被与MapReduce库（C++实现）链接到一起。"),a("a",{attrs:{href:"https://mrcroxx.github.io/posts/paper-reading/mapreduce-osdi04/#%e9%99%84%e5%bd%95a-%e8%af%8d%e9%a2%91%e7%bb%9f%e8%ae%a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("附录A"),a("OutboundLink")],1),e._v("包含本示例的完整程序。")]),e._v(" "),a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[e._v("#")]),e._v(" 类型")]),e._v(" "),a("p",[e._v("尽管前面的伪代码中使用了字符串作为输入输出类型，但理论上用户提供的"),a("em",[e._v("map")]),e._v("和"),a("em",[e._v("reduce")]),e._v("函数可以使用相关联的类型：")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("map     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nreduce  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("需要注意的是，输入的 key 和 value 与输出的 key 和 value 是不同的类型，而中间的 key 和 value 与输出的 key 和 value 是相同的类型（用 k1 和 k2 表示）。")]),e._v(" "),a("p",[e._v("我们的 C++实现都是以字符串的形式和用户代码进行交互的，至于将字符串类型转换成相应合适的类型的工作则由用户代码来完成了。")]),e._v(" "),a("h2",{attrs:{id:"更多示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多示例"}},[e._v("#")]),e._v(" 更多示例")]),e._v(" "),a("p",[e._v("本节中，我们给出了一些简单的示例。这些示例是可以简单地通过MapReduce计算表示的有趣的程序。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Distributed Grep")]),e._v(" ：Map函数获取匹配提供的模式的行，Reduce函数只是简单地将这些中间数据拷贝到输出")]),e._v(" "),a("li",[a("strong",[e._v("Count of URL Access Frequency")]),e._v(" ：Map函数处理web请求的日志，并且输出<URL, 1>。Reduce函数将拥有相同URL的value相加，得到<URL, total count>对")]),e._v(" "),a("li",[a("strong",[e._v("Reverse Web-Link Graph")]),e._v(" ：Map函数输出<target, source>对，其中source所在的page都有连向target这个URL的链接。Reduce函数将给定target的所有的source URL连接起来，输出<target, list(source)>对")]),e._v(" "),a("li",[a("strong",[e._v("Term-Vector per Host")]),e._v(" ：一个term vector表示一系列<word, frequency>的键值对，word表示一篇或者一系列文章中出现的比较重要的单词，frequency表示它们出现的次数。Map函数对于每篇输入的文章输出<hostname, term vector>键值对（其中hostname是从文章所在的URL中抽取出来的）Reduce函数获取给定host的term vectors。它将这些term vectors累加起来，丢弃非频繁出现的term，并产生一个最终的<hostname, term vector>对。")]),e._v(" "),a("li",[a("strong",[e._v("Inverted Index：")]),e._v(" Map函数对每篇文章进行处理，并输出一系列的<word, document ID>对。Reduce函数接收给定word的所有键值对，对相应的document ID进行排序并且输出<word, list"),a("document",{attrs:{ID:""}},[e._v(">对。所有输出对的集合构成了一个简单的倒排索引。用了MapReduce模型，对单词位置的追踪就变得非常简单了。")])],1),e._v(" "),a("li",[a("strong",[e._v("Distributed Sort：")]),e._v(" Map函数从每个record中抽取出key，产生<key, record>键值对。Reduce函数只是简单地将所有对输出。这个计算模型依赖于Section 4.1中描述的划分技巧以及Section 4.2中描述的排序特性。")])]),e._v(" "),a("h1",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("p",[e._v("对于MapReduce的接口，各种各样不同的实现都是可能的。所有正确的实现都是基于应用环境的。比如，一种实现可能适合于小的共享内存的机器，另一种可能适合于大型的NUMA多处理器机器，甚至有的是为更大的互联的机器集群设计的。")]),e._v(" "),a("p",[e._v("本节中描述的实现基于的是Google中最常用的计算环境：一个由大量商用PC机通过交换以太网互联的集群。")]),e._v(" "),a("p",[e._v("在我们的环境中：")]),e._v(" "),a("ol",[a("li",[e._v("机器通常都是x86的双核处理器，其上运行Linux，每台机器拥有2-4G的内存")]),e._v(" "),a("li",[e._v("商用网络硬件---通常是100 M/s或者1 G/s，但是综合起来要小于平均带宽")]),e._v(" "),a("li",[e._v("一个集群由成千上万台机器组成，因此机器故障是常有的事")]),e._v(" "),a("li",[e._v("存储由便宜的IDE磁盘提供，它们都与独立的机器直接相连。一个内部研发的文件系统用于管理所有存储于这些硬盘上的文件。该文件系统通过Replication在不可靠的硬件上提供了可用性和可靠性")]),e._v(" "),a("li",[e._v("用户提交jobs给调度系统。每个job由一系列的task组成，并且由调度器分配到集群中一系列可用的机器上")])]),e._v(" "),a("h2",{attrs:{id:"执行概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行概览"}},[e._v("#")]),e._v(" 执行概览")]),e._v(" "),a("p",[e._v("通过将输入数据自动分割成 M 份，Map 函数得以在多台机器上分布式执行。每一个输入块都能并行地在不同的机器上执行。通过划分函数(例如，hash(key) mod R)将中间键划分为 R 份，Reduce 函数也能被分布式地调用。其中划分的数目 R 和划分函数都是由用户指定的。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220504223220.png",alt:"图1 执行概览",title:"图1 执行概览"}})]),e._v(" "),a("p",[e._v("上图 1 展示了在我们的实现中 MapReduce 全部的流程。当用户程序调用 MapReduce 函数时，接下来的动作将按序发生（图 1 中标记的数字与下面的数字是一一对应的）：")]),e._v(" "),a("ol",[a("li",[e._v("用户程序中的 MapReduce 库首先将输入文件划分为M片，每片大小一般在 16MB 到 64MB 之间（由用户通过一个可选的参数指定）。之后，它在集群的很多台机器上都启动了相同的程序拷贝。")]),e._v(" "),a("li",[e._v("其中有一个拷贝程序是特别的——master。剩下的都是 worker，它们接收 master 分配的任务。其中有 M 个 Map 任务和 R 个 Reduce 任务要分配。master 挑选一个空闲的 worker 并且给它分配一个 map 任务或者 reduce 任务。")]),e._v(" "),a("li",[e._v("被分配到 Map 任务的 worker 会去读取相应的输入块的内容。它从输入文件中解析出键值对并且将每个键值对传送给用户定义的 Map 函数。而由 Map 函数产生的中间键值对缓存在内存中。")]),e._v(" "),a("li",[e._v("被缓存的键值对会阶段性地写回本地磁盘，并且被划分函数分割成 R 份。这些缓存对在磁盘上的位置会被回传给 master，master 再负责将这些位置转发给 Reduce worker。")]),e._v(" "),a("li",[e._v("当 Reduce worker 从 master 那里接收到这些位置信息时，它会使用远程过程调用从 Map worker 的本地磁盘中获取缓存的数据。当 Reduce worker 读入全部的中间数据之后，它会根据中间键对它们进行排序，这样所有具有相同键的键值对就都聚集在一起了。排序是必须的，因为会有许多不同的键被映射到同一个 reduce task 中。如果中间数据的数量太大，以至于不能够装入内存的话，还需要另外的排序。")]),e._v(" "),a("li",[e._v("Reduce worker 遍历已经排完序的中间数据。每当遇到一个新的中间键，它会将 key 和相应的中间值传递给用户定义的 Reduce 函数。Reduce 函数的输出会被添加到这个 Reduce 部分的输出文件中。")]),e._v(" "),a("li",[e._v("当所有的 Map tasks 和 Reduce tasks 都已经完成的时候，master 将唤醒用户程序。到此为止，用户代码中的 MapReduce 调用返回。")])]),e._v(" "),a("p",[e._v("当成功执行完之后，MapReduce 的执行结果被存放在 R 个输出文件中（每个 Reduce task 对应一个，文件名由用户指定）。通常用户并不需要将 R 个输出文件归并成一个。因为它们通常将这些文件作为另一个 MapReduce 调用的输入，或者将它们用于另外一个能够以多个文件作为输入的分布式应用。")]),e._v(" "),a("h2",{attrs:{id:"master数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master数据结构"}},[e._v("#")]),e._v(" master数据结构")]),e._v(" "),a("p",[e._v("在 master 中保存了许多的数据结构。对于每个 Map task 和 Reduce task，master 都保存了它们的状态（idle，in-progress 或者是 completed）以及 worker 所在机器的标识（对于非 idle 空转状态的 tasks 而言）。")]),e._v(" "),a("p",[e._v("master 相当于是一个管道，通过它 Map task 所产生的中间文件被传递给了 Reduce task。因此，对于每一个已经完成的 Map task，master 会存储由它产生的 R 个中间文件的位置和大小（分配给 R 个 Reduce task 执行，需要远程读取这些数据，所以要记录位置和大小）。当 Map task 完成的时候，master 就会收到位置和大小的更新信息。而这些信息接下来就会逐渐被推送到处于 in-progress 状态的 Reduce task 中。")]),e._v(" "),a("h2",{attrs:{id:"容错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错"}},[e._v("#")]),e._v(" 容错")]),e._v(" "),a("p",[e._v("因为MapReduce库是为使用成百上千台机器处理大规模数据提供帮助而设计的，所以必须能够优雅地对机器故障进行容错。")]),e._v(" "),a("h3",{attrs:{id:"worker故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker故障"}},[e._v("#")]),e._v(" worker故障")]),e._v(" "),a("p",[e._v("master会定期ping每个worker。如果在一定时间内没有收到worker的响应，master会将该worker标记为故障。被故障的worker处理的已完成的"),a("em",[e._v("map")]),e._v("任务会被重设为其初始的“等待中”的状态，因此其符合被调度到其他worker的条件。同样，在故障的worker上任何执行中的"),a("em",[e._v("map")]),e._v("或"),a("em",[e._v("reduce")]),e._v("任务也会被重设为“等待中”的状态，符合重新调度的条件。")]),e._v(" "),a("p",[e._v("当worker故障发生时，该worker完成的"),a("em",[e._v("map")]),e._v("任务也需要被重新执行，因为"),a("em",[e._v("map")]),e._v("任务的输出被存储在故障的机器的本地磁盘上，无法被访问。故障worker完成的"),a("em",[e._v("reduce")]),e._v("任务则不需要被重新执行，因为他们的输出被存储在全局的文件系统中")]),e._v(" "),a("p",[e._v("当一个起初被worker A执行的"),a("em",[e._v("map")]),e._v("任务因A发生故障而随后被worker B执行时，所有正在执行"),a("em",[e._v("reduce")]),e._v("任务的worker会被告知这个"),a("em",[e._v("map")]),e._v("任务被重新执行。任何没从worker A中读取完数据的"),a("em",[e._v("reduce")]),e._v("任务将会从worker B中读取数据。")]),e._v(" "),a("p",[e._v("MapReduce可以弹性处理大规模worker故障。例如，在MapReduce操作中，由于在正在运行的集群中的网络维护工作导致了80台机器在几分钟内同时变得不可访问。MapReduce的master会简单地重新执行不可访问的worker的机器上已完成的工作，并继续执行后续任务，最终完成整个MapReduce操作。")]),e._v(" "),a("h3",{attrs:{id:"master故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master故障"}},[e._v("#")]),e._v(" master故障")]),e._v(" "),a("p",[e._v("对于master，我们可以简单地对上文所述的master数据结构做周期性的快照。如果一个master task死了，我们可以很快地根据最新的快照来重新启动一个master task。但是，因为我们只有一个master，因此故障的概率比较低。所以，在我们的实现中如果master出现了故障就只是简单地停止MapReduce操作。用户可以检测到这种情况，并且如果他们需要的话可以重新开始一次MapReduce操作。")]),e._v(" "),a("h3",{attrs:{id:"故障出现时的语义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障出现时的语义"}},[e._v("#")]),e._v(" 故障出现时的语义")]),e._v(" "),a("p",[e._v("如果用户提供的Map和Reduce操作是关于输入值的确定性函数，那么我们分布式的实现将会产生同样的输出，在整个程序经过没有出现故障的顺序执行之后。")]),e._v(" "),a("p",[e._v("我们依赖Map task和Reduce task原子性地提交输出来实现上述特性。每一个正在执行的task都会将它的输出写到一个私有的临时文件中。一个Reduce task产生一个这样的文件，而一个Map task产生R个这样的文件（每个Reduce work一个）。当一个Map task完成的时候，worker就会给master发送一个信息，，其中包含了R个临时文件的名字。如果master收到了一个来自于已经完成了的Map task的完成信息，那么它就将它自动忽略。否则，将R个文件的名称记录到一个master数据结构中。")]),e._v(" "),a("p",[e._v("当一个Reduce task完成的时候，Reduce worker会自动将临时输出文件命名为最终输出文件。如果同一个Reduce task在多台机器上运行，那么多个重命名操作产生的最终输出文件名将会产生冲突。对此，我们依赖底层文件系统提供的原子重命名操作来保证最终文件系统中的数据来自一个Reduce task。")]),e._v(" "),a("p",[e._v("大多数的Map和Reduce操作都是确定性的，事实上，我们的语义等同于顺序执行。因此这让程序员非常容易地能够解释他们程序的行为。当Map和Reduce操作是非确定性的时候，我们提供较弱，但仍然合理的语义。在非确定性的操作中，对于一个特定的Reduce task R1的输出是和非确定性程序顺序执行产生R1产生的输出是相同的。然而，对于另一个Reduce task R2，它的输出对应于非确定性程序另一个顺序执行的结果。")]),e._v(" "),a("p",[e._v("下面考虑Map task M和Reduce task R1和R2。让e(Ri)表示Ri的执行结果。更弱的语义意味着，e(R1)可能从M的一次执行结果中读取输入，而e(R2)可能从M的另一次执行中读取输入。")]),e._v(" "),a("h2",{attrs:{id:"位置分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置分配"}},[e._v("#")]),e._v(" 位置分配")]),e._v(" "),a("p",[e._v("网络带宽在我们的计算环境中是相对稀缺的资源。我们通过将输入数据存储在集群中每台机器的本地磁盘的方法来节省带宽。GFS将输入文件切分成64MB大小的块，并且将每个块的多份拷贝（通常为3份）存储在不同的机器上。MapReduce的master获取所有输入文件的位置信息，然后将Map task调度到有相应输入文件副本的机器上。当发生故障时，再将Map task调度到邻近的具有该task输入文件副本的机器（即在同一台交换机内具有相同数据的机器）。当在一个集群的大量机器上做MapReduce操作时，大多数的输入数据都是从本地读取的，而不用消耗带宽。")]),e._v(" "),a("h2",{attrs:{id:"任务粒度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务粒度"}},[e._v("#")]),e._v(" 任务粒度")]),e._v(" "),a("p",[e._v("如上所述，我们将Map操作分成M份，Reduce操作分成R份。在理想的情况下，M和R的值应该要比集群中worker machine的数量多得多。让一个worker同时进行许多不同的task有利于提高动态的负载均衡，同时在一个worker故障的时候能尽快恢复。许多已经完成的Map task也能尽快地传播到其他所有的worker machine上。")]),e._v(" "),a("p",[e._v("在我们的实现中，M和R的大小是有一个实用范围的。因为我们的master需要做O（M+R）个调度决定，并且还要在内存中保存O（M"),a("em",[e._v("R）个状态。（但是内存使用的常数还是比较小的，O（M")]),e._v("R）个Map task/Reduce task 状态对，每个的大小大概在一个字节）")]),e._v(" "),a("p",[e._v("另外，R通常受限于用户，因为每个Reduce task的输出都分散在不同的输出文件中。事实上，我们会选择M，因此每个输入文件大概16MB到64MB的输入文件（因此上文所述的局部性优化会达到最优）。而我们会让R成为worker machine数量的一个较小的倍数。因此，我们通常在进行MapReduce操作时，将M设为200000，R设为5000，使用2000个worker machine。")]),e._v(" "),a("h2",{attrs:{id:"任务副本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务副本"}},[e._v("#")]),e._v(" 任务副本")]),e._v(" "),a("p",[e._v('“straggler”（落伍的士兵）的存在是拖慢整个MapReduce操作的通常的原因之一。所谓的"straggler"是指一台机器用了过长的时间去完成整个计算任务中最后几个Map或者Reduce task。Straggler出现的原因有很多。比如一台机器上硬盘坏了，它就会经历大量的可纠正错误，从而让它的性能从30MB/s下降到1MB/s。集群的调度系统可能将其他task调度到该机器上，导致它执行MapReduce代码的速度变慢很多，因为CPU，内存，本地磁盘，网络带宽的竞争加剧。我们最近遇到的一个问题是一台机器的初始化代码有点问题，它会导致处理器的缓存被禁用，在这些受影响的机器上进行的计算速度会下降到原来的百分之一。')]),e._v(" "),a("p",[e._v("对此，我们有一个通用的机制用来缓解straggler的问题。当MapReduce操作接近结束的时候，master会将那些还在执行的task的备份进行调度执行。无论是原来的还是备份执行完成，该task都被标记为已完成。我们通过调整将该操作导致的计算资源消耗仅仅提高了几个百分点。但是在完成大型的MapReduce操作时，却让整个执行时间下降了好多。例如，Section 5.3中所描述的排序算法在备份机制关闭的情况下，需要多消耗44%的时间。")]),e._v(" "),a("h1",{attrs:{id:"改进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改进"}},[e._v("#")]),e._v(" 改进")]),e._v(" "),a("h2",{attrs:{id:"分区函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区函数"}},[e._v("#")]),e._v(" 分区函数")]),e._v(" "),a("p",[e._v("MapReduce用户决定他们的Reduce task或者输出文件的数目R。通过一个划分函数，根据中间键值将各个task的数据进行划分。默认的划分函数是通过哈希（比如，hash(key) mod R）。这通常会产生非常好的较为均衡的划分。但是在其他一些情况下，通过键值的其他函数来划分要更好一些。例如，有的时候输出键值是一些URL，我们希望同一个host的内容能放在同一个输出文件中。为了支持这种情况，MapReduce库的用户可以提供一个特殊的划分函数。例如，使用“hash(Hostname(urlKey)) mod R”作为划分函数，从而让所有来自于同一个host的URL的内容都输出到同一个输出文件。")]),e._v(" "),a("h2",{attrs:{id:"有序性保证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序性保证"}},[e._v("#")]),e._v(" 有序性保证")]),e._v(" "),a("p",[e._v("我们确保在一个给定的划分中，中间键值对都按照键值的升序进行处理。这样的处理顺序确保了每一个划分产生一个排好序的输出文件。这样的话，如果输出文件格式需要支持根据 key 进行有效的随机查找会比较方便。同时，输出文件（应用）的用户也会觉得已经排好序的数据使用起来特别方便。")]),e._v(" "),a("h2",{attrs:{id:"合并函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并函数"}},[e._v("#")]),e._v(" 合并函数")]),e._v(" "),a("p",[e._v("在有些情况下，每个Map task都会产生大量的中间键的重复而用户指定的Reduce函数是交互和关联的。Section 2.1中的单词统计就是一个很好的例子。因为单词的出现频率服从于Zipf分布，每个Map Task都会产生成百上千个<the, 1>这样的记录。所有这些记录都会通过网络被送到一个Reduce task中，并且由Reduce函数加在一起去产生一个数。我们允许用户使用了可选的Cominer函数，用于在网络传输之前部分地进行归并操作。")]),e._v(" "),a("p",[e._v("Combiner函数在每个执行Map task的机器上执行。通常Combiner和Reduce函数使用的是相同的代码。Reduce函数和Combiner函数唯一的不同是MapReduce库如何处理函数的输出。Reduce函数的输出写到最终的输出文件中。而Combiner函数的输出会被写到一个最终将被送给Reduce task的中间文件中。")]),e._v(" "),a("p",[e._v("部分的合并操作能极大地加速某类特定的MapReduce操作。Appendix A包含了一个使用Combiner的例子。")]),e._v(" "),a("h2",{attrs:{id:"输入输出类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入输出类型"}},[e._v("#")]),e._v(" 输入输出类型")]),e._v(" "),a("p",[e._v('MapReduce库提供了对读入数据文件多种的格式支持。例如，"text"格式的输入将每一行作为键值对：key是文件内的偏移，value是该行的内容。另外一种比较常用的格式存储一系列按照键进行排序的键值对。每一个输出格式的实现都知道如何将自己进行合理的划分从而能让不同的Map task进行处理（例如，text模式就知道将区域划分到以行为边界）。用户可以通过简单地定义一个reader接口来提供一个新的输入类型的实现。事实上，大多数用户只使用了预定义输入类型的很小一部分。')]),e._v(" "),a("p",[e._v("reader并不一定要从文件中读取数据。例如，我们可以很容易地定义一个从数据库，或者内存中映射的数据结构中读取记录的reader。")]),e._v(" "),a("p",[e._v("同理，我们也支持产生不同格式的输出数据，用户也能编写新的输出数据格式。")]),e._v(" "),a("h2",{attrs:{id:"附属输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附属输出"}},[e._v("#")]),e._v(" 附属输出")]),e._v(" "),a("p",[e._v("在有些情况下，MapReduce的用户会很容易发现Map或者Reduce操作会产生一些辅助文件作为额外的输出文件。我们依赖应用的编写者去保证这些副作用是原子和幂等的。一般来说，应用会写到一个临时文件中，并且在它完全产生之后，通过一个原子操作将它重命名。")]),e._v(" "),a("p",[e._v("对于一个单一的task产生的多个输出文件，我们不提供原子性的两相提交支持。因此，产生多个输出文件并且有跨文件一致性要求的task需要是确定性的。但是这样的限制在实践过程中并不是什么问题。")]),e._v(" "),a("h2",{attrs:{id:"跳过损坏的记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳过损坏的记录"}},[e._v("#")]),e._v(" 跳过损坏的记录")]),e._v(" "),a("p",[e._v("有时候，如果用户的代码中有bug的话，会导致Map或者Reduce操作在某些记录上崩溃。这些bug会导致MapReduce操作的正常完成。对于这种情况，通常就是去修bug。不过有时候这是不可行的，也许bug是第三方库造成的，而我们并不能得到它的源代码。而且，有时候我们允许忽略掉一些记录，例如在对一个大数据集做分析的时候。因此我们提供了一种可选的执行模式，当MapReduce库检测到一些记录会造成崩溃时，就会主动跳过它们，从而保证正常地运行。")]),e._v(" "),a("p",[e._v('每一个worker进程都安装了一个signal handler用于捕捉段错误和bug。在调用用户的Map和Reduce操作之前，MapReduce库会将参数的序号保存在一个全局变量中。如果用户代码产生了一个信号，signal handler就会传输一个参数含有序号的"last gasp"UDP包给MapReduce的master。当master在一个特定的记录中发现了不知一次的错误，这表示在下一次执行相应的Map或者Reduce操作的时候一个将它跳过。')]),e._v(" "),a("h2",{attrs:{id:"本地执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地执行"}},[e._v("#")]),e._v(" 本地执行")]),e._v(" "),a("p",[e._v("Map或者Reduce函数的调试问题是非常tricky的。因为实际的计算发生在分布式的系统中，通常由成百上千台机器组成，并且工作的分配由master动态执行。为了帮助调试，分析，以及小规模的测试，我们开发了另外一个MapReduce库的实现，它能够在本地机器上顺序执行一个MapReduce操作的所有工作。它的控制交给用户，因此计算可以被限定到制定的Map task中执行。用户利用指定的flag启动程序，然后就能非常简单地使用任何它们觉得有用的调试或者测试工具了。")]),e._v(" "),a("h2",{attrs:{id:"状态信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态信息"}},[e._v("#")]),e._v(" 状态信息")]),e._v(" "),a("p",[e._v("master运行了一个内置的HTTP server并且暴露了一系列供人类使用的状态页。状态页会显示程序的计算过程，例如已经完成了多少个task，还有多少个task正在执行，输入的字节数，中间数据的字节数，输出的字节数，以及处理速度等等。该页还包含了指向各个task的标准错误和标准输出链接。用户可以利用这些数据来判断计算会持续多长时间，以及计算是否需要添加更多的资源。这些页面还能用来发现什么时候处理速度比预期地下降好多。")]),e._v(" "),a("p",[e._v("另外，顶层的状态页显示了那些worker出错了，以及在它们出错时正在执行哪些Map和Reduce task。这些信息在诊断用户代码出现的bug时是非常有用的。")]),e._v(" "),a("h2",{attrs:{id:"计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计数器"}},[e._v("#")]),e._v(" 计数器")]),e._v(" "),a("p",[e._v("MapReduce库提供了一个叫counter的设施用于统计各种不同事件出现的次数。例如，用户可能想要统计已经处理过的单词的数目或者德国文件的索引数量。")]),e._v(" "),a("p",[e._v("为了使用这一特性，用户代码创建一个命名的counter对象，并且在Map以及Reduce函数中对counter进行增加。例如：")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Counter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" uppercase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nuppercase "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GetCounter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"uppercase"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" contents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" each word w in contents"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IsCapitalized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      uppercase"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("EmitIntermediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("每个worker机器上counter的值会定期传给master（捎带在给master的ping回复中）。master将来自成功执行的Map和Reduce task的counter值聚集起来。然后在MapReduce操作完成之后返回给用户代码。当前的counter值也会显示在master的状态页上，所以用户能从实时观看计算的进行。在聚集counter的值的时候，master会消除Map或者Reduce task的重复执行造成的重复计算。（重复执行可能由backup tasks或者因为错误重新执行的task引起）。")]),e._v(" "),a("p",[e._v("有些counter的值是由MapReduce库自动维护的，例如已经处理的输入键值对数目以及已经产生的输出键值对数目。")]),e._v(" "),a("p",[e._v("用户发现counter特性对于检查MapReduce操作的执行是非常有用的。例如，在有些MapReduce操作中，用户代码想要确保产生的输出对的数目和已经处理的输入对的数目是恰好相等的，或者处理的德语文件的数目占总处理文件数目的比重在一个可容忍的范围内。")]),e._v(" "),a("h1",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[e._v("#")]),e._v(" 性能")]),e._v(" "),a("p",[e._v("在这个section中，我们通过运行在一个集群上的两个computation来测试MapReduce的性能。一个Computation搜索一个T的数据，从中获取一个特定的模式。另一个computation对一个T的数据进行排序。")]),e._v(" "),a("p",[e._v("这两个程序代表了由用户实际编写的MapReduce程序的一个子集------一类程序用于将数据从一种表示方法切换到另一种表示方法。另一类程序则从大数据集中抽取出一小部分有趣的数据。")]),e._v(" "),a("h2",{attrs:{id:"集群配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群配置"}},[e._v("#")]),e._v(" 集群配置")]),e._v(" "),a("p",[e._v("所有程序都运行在一个由 1800 台机器组成的机器上。每一台机器都有两个 2GHz 的 Intel Xeon 处理器，并且允许 Hper-Threading（超线程）， 4GB 内存，两个 160GB 的 IDE 磁盘，以及一个 G 比特的以太网链路。这些机器被安排在一个两层树状的交换网络中，根节点的带宽大概在 100-200Gbps。因为所有机器都在同一个托管设备中，因此任意两台机器间的 RTT 少于 1ms。")]),e._v(" "),a("p",[e._v("其中 4GB 中的 1-1.5G 是为集群中运行的其他任务预留的。程序在一个周末的下午运行，此时 CPU，磁盘，网络基本都处于空闲状态。")]),e._v(" "),a("h2",{attrs:{id:"grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[e._v("#")]),e._v(" grep")]),e._v(" "),a("p",[a("em",[e._v("grep")]),e._v("程序会扫描101010^{10}"),a("strong",[e._v("1")]),e._v("0"),a("strong",[e._v("10")]),e._v("条100B的记录，以搜索匹配一个相对较少的三个字母的模板（92,337条记录命中）。输入数据被分割为约64MB的分片（M=15000M=15000"),a("strong",[e._v("M")]),e._v("="),a("strong",[e._v("15000")]),e._v("），所有的输出被放置在一个文件中（R=1R=1"),a("strong",[e._v("R")]),e._v("="),a("strong",[e._v("1")]),e._v("）。")]),e._v(" "),a("p",[a("strong",[e._v("图2")]),e._v("展示了计算进度随时间的变化。Y轴展示了输入数据被扫描的速率。随着分配给MapReduce计算的机器越来越多，其速度也逐渐提高。当有1764个worker被分配到该任务时，速率峰值超过了30GB/s。当"),a("em",[e._v("map")]),e._v("任务完成时，速率开始逐渐下降并在整个计算时间的大概第80s时下降到0。整个计算从开始到结束大概消耗了150s。这包括了大概一分钟的启动时间开销。这一开销的原因是程序需要传播到所有worker机器与打开1000个输入文件并获取局部优化所需的信息时与GFS交互的时延。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220505131347.png",alt:"图2 数据传输速率随时间变化图",title:"图2 数据传输速率随时间变化图"}})]),e._v(" "),a("h2",{attrs:{id:"sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[e._v("#")]),e._v(" sort")]),e._v(" "),a("p",[a("em",[e._v("sort")]),e._v("程序会对10的十次方条100B的记录进行排序（大约1TB的数据）。这个程序是模仿"),a("em",[e._v("TeraSort")]),e._v("的"),a("em",[e._v("benchmark")]),e._v("程序构建的。")]),e._v(" "),a("p",[e._v("排序程序的用户代码少于50行。三行的"),a("em",[e._v("map")]),e._v("函数从一行文本中提取一个10字节的排序用的键，并将这个键与原始文本作为"),a("em",[e._v("中间键值对")]),e._v("输出。我们使用了一个内建的恒等函数作为"),a("em",[e._v("reduce")]),e._v("操作。这个函数不对"),a("em",[e._v("中间键值对")]),e._v("就行修改，直接作为"),a("em",[e._v("输出键值对")]),e._v("传递。最终排序的输出被写入一系列2副本的GFS文件中（即，程序输出总计写入了2TB）。")]),e._v(" "),a("p",[e._v("与前者相同，输入数据被分割为64MB的分片（M=15000）。我们将排序的输出分区到4000个文件中（R=4000）。分区函数根据键的首字节将其划分到"),a("strong",[e._v("R")]),e._v("个分区之一中。")]),e._v(" "),a("p",[e._v("该benchmark的分区函数内建了键的分布情况。在通常的排序程序中，我们会增加一个提前执行的MapReduce操作，该操作会采集一些键的样本，并通过这些样本来计算最终排序时的分割点。")]),e._v(" "),a("p",[a("strong",[e._v("图3")]),e._v("展示了以普通方式执行时程序的进度。左上角的图表展示了输入数据读取的速率。速率的峰值达到大概13GB/s，随后快速下降，因为所有"),a("em",[e._v("map")]),e._v("任务都在大概第200秒前完成。需要注意的是该程序数据输入速率比"),a("em",[e._v("grep")]),e._v("低。这是因为"),a("em",[e._v("sort")]),e._v("的"),a("em",[e._v("map")]),e._v("任务消耗了大概一半的时间和I/O带宽用于将中间数据写入到本地磁盘，而"),a("em",[e._v("grep")]),e._v("的中间数据大小几乎可以忽略不计。")]),e._v(" "),a("p",[e._v("左侧中间的图表展示了数据通过网络从"),a("em",[e._v("map")]),e._v("任务发送到"),a("em",[e._v("reduce")]),e._v("任务的速率。该数据转移（shuffle）在第一个"),a("em",[e._v("map")]),e._v("任务完成时便开始。图表中第一个峰中的数据转移是为了第一批约1700个"),a("em",[e._v("reduce")]),e._v("任务（整个MapReduce被分配到1700台机器上，每台机器同时最多执行1个"),a("em",[e._v("reduce")]),e._v("任务）。在整个计算任务的大概第300秒时，部分第一批"),a("em",[e._v("reduce")]),e._v("任务完成了，并开始为剩余的"),a("em",[e._v("reduce")]),e._v("任务转移数据。所有的数据转移在整个计算的大概第600秒是完成。")]),e._v(" "),a("p",[e._v("左下角的图表展示了排好序的数据被"),a("em",[e._v("reduce")]),e._v("任务写入最终输出文件的速率。在第一个数据转移阶段和数据开始被"),a("em",[e._v("reduce")]),e._v("任务写入到最终文件间有一段延时，这是因为这期间机器都在忙于排序中间数据。写入操作以2~4GB/s的速率持续了一段时间，在整个计算过程的大概第850秒时完成了数据写入。算上启动的开销，整个计算过程消耗了891秒。这与目前在TeraSort benchmark中报道的最佳结果1057秒非常接近 。")]),e._v(" "),a("p",[e._v("这有一些需要注意的点：由于我们的局部性优化，大部分数据直接从本地磁盘读取，绕过了带宽相对受限的玩过，所以数据输入速率比数据转移速率高。由于数据输出阶段写入了两份排好序的数据的副本，所以数据转移的速率比输出的速率高（为了可靠性和可用性，我们为输出数据设置了两份副本）。我们的下层文件系统为了可靠性和可用性的考虑而写入了两份副本。如果我们使用擦除编码（erasure code）的方式而不是副本的方式，写入数据时网络带宽的需求会减少。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220504224925.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"任务副本的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务副本的影响"}},[e._v("#")]),e._v(" 任务副本的影响")]),e._v(" "),a("p",[e._v("在图 3（b）中，我们展示了禁止 backup tasks 情况下执行排序操作的结果。")]),e._v(" "),a("p",[e._v("流程与图 3（a）很相似，但存在一个相当长的且看不出有明显活动的尾部。960 秒后，除了剩余的 5 个，其余 reduce tasks 均已完成，然而剩余的 stragglers 直到 300 秒后才完成任务，着导致整体耗时 1283 秒，比具备 backup tasks（最终备份处理任务）情况下多耗时 44%。")]),e._v(" "),a("h2",{attrs:{id:"机器故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器故障"}},[e._v("#")]),e._v(" 机器故障")]),e._v(" "),a("p",[e._v("在图 3（c）中，我们展示了将 1746 台工作机器中的 200 台机器故意宕机几分钟以模拟机器故障情况下排序操作的执行结果，底层的集群立刻重启新的工作进程（因为仅仅是 kill 进程，实际上机器功能良好）。")]),e._v(" "),a("p",[e._v("worker 的 deaths 通过图表中负值输入速率来表示，因为先前一些已完成的 map work 丢失而需要被重新执行（根据先前分析，由于 map task 得到的中间结果存储在本地，宕机后无法正确访问，使得之前的任务需要被重新执行 re-execute）。重执行开始得十分迅速，整体耗时仅仅比正常情况多耗时 5%。")]),e._v(" "),a("h1",{attrs:{id:"研发经历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#研发经历"}},[e._v("#")]),e._v(" 研发经历")]),e._v(" "),a("p",[e._v("我们得 MapReduce 库首个版本于 2003 年 2 月写成，并在 2003 年 8 月进行了重要加强，包括引入局部优化，worker 执行任务间动态负载均衡等等。从那时起，我们非常欣喜得看到 MapReduce 在解决各类问题上的广泛应用。现在，它已 Google 用于以下广泛领域的研究。")]),e._v(" "),a("ul",[a("li",[e._v("大规模机器学习问题")]),e._v(" "),a("li",[e._v("Google News 和 Froogle products（Google 购物）的聚类问题")]),e._v(" "),a("li",[e._v("提取用于生成热门查询报告的数据（如 Google Zeitgeiest）")]),e._v(" "),a("li",[e._v("提取网页上进行的试验或产品性能")]),e._v(" "),a("li",[e._v("大规模图形计算")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20220505131702.png",alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("图4")]),e._v("中可见，在我们的主源代码管理系统中，独立的MapReduce程序随时间大幅增长。其数量从2003年初的0个增长到2004年9月末的几乎800个独立实例。MapReduce取得了很大的成功，它可以让用户仅编写简单的代码即可在半小时内在上千台机器上高效运行，这大大的提高了开发和设计周期。此外，MapReduce让没有任何分布式和（或）并行系统编程经验的开发者能够轻松利用大量资源。")]),e._v(" "),a("p",[e._v("在每个工作的最后，MapReduce库会记录该工作使用的计算资源的统计数据。"),a("strong",[e._v("表1")]),e._v("展示了Google在2004年8月运行的MapReduce工作的子集的统计数据。")]),e._v(" "),a("h2",{attrs:{id:"大规模索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大规模索引"}},[e._v("#")]),e._v(" 大规模索引")]),e._v(" "),a("p",[e._v("目前，我们使用MapReduce做的最重要的工作之一是完全重写了一个索引系统，该系统被用作生成用于Google web搜索服务的数据结构。该索引系统将大量被我们爬虫系统检索到的文档（作为GFS文件存储）作为输入。这些文档的原始内容的数据大小超过20TB。索引进程会运行一系列5~10个MapReduce操作。使用MapReduce（而不是旧版索引系统中ad-hoc分布式传递方案）提供了很多好处：")]),e._v(" "),a("ul",[a("li",[e._v("索引代码更简单、短、便于理解，因为处理容错、分布式和并行的代码被隐藏在了MapReduce库中。例如，计算中的有一个阶段的代码量从3800行C++代码所见到了700行使用MapReduce的代码。")]),e._v(" "),a("li",[e._v("MapReduce库的性能足够好，这让我们可以将概念上不相关的计算分离开，而不是将它们混合在一起，这样可以避免传递过多额外的数据。这使改变索引程序变得非常简单。例如，在我们旧的索引系统中，一处修改会花费几个月的时间，而新的系统仅需要几天就能实现。")]),e._v(" "),a("li",[e._v("索引系统变得更容易操作。大部分因机器故障、缓慢的机器、网络不稳定等引起的问题都被MapReduce库自动处理了，不需要引入额外的操作。此外，向索引集群添加新机器以获得更好的性能变得更加简单。")])]),e._v(" "),a("h1",{attrs:{id:"相关工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关工作"}},[e._v("#")]),e._v(" 相关工作")]),e._v(" "),a("p",[e._v("许多系统提供了受限制的编程模型，并通过这些限制来进行自动化并行计算。例如，使用并行前缀和计算（parallel prefix computation），可以使用N个处理器上在O(logN)的时间内计算有N个元素的数组中所有前缀和。MapReduce可被看做是对一些这类模型基于我们在现实世界中对大型计算的经验做出的简化和升华。更重要的是，我们提供了适用于大规模的数千个处理器的带有容错机制的实现。相反，大部分并行处理系统仅被小规模使用，且将处理机器故障的细节留给了开发者。")]),e._v(" "),a("p",[e._v("BSP模型（Bulk Synchronous Programming）和一些MPI（Message Passing Interface，消息传递接口）原语提供了让开发者编写并行程序更简单的高层抽象。这些系统和MapReduce的关键区别在于MapReduce提供了一个受限的编程模型，以自动地并行化用户程序，并提供了透明的容错机制。")]),e._v(" "),a("p",[e._v("我们的局部性优化的灵感来自于如活动磁盘（active disk）技术，即计算程序被推送到靠近本地磁盘的处理设备中，这减少了I/O子系统或者网络的总数据发送量。我们在直连少量磁盘的商用处理器上运行程序，而不是直接在磁盘控制处理器上运行，但最终目的都是一样的。")]),e._v(" "),a("p",[e._v("我们的任务副本机制类似Charlotte System 中使用的Eager调度机制。简单的Eager调度的一个缺点是，当一个任务反复故障时，整个计算都无法完成。我们通过跳过损坏记录的方式来解决导致该问题的一些情况。")]),e._v(" "),a("p",[e._v("MapReduce的实现依赖了一个内部的集群管理系统，该系统负责在大量共享的机器上分配并运行用户任务。该系统比较神似如Condor ^[16]^ 的其他系统，但这并不是本文的重点。")]),e._v(" "),a("p",[e._v("MapReduce中的排序机制在操作上类似NOW-Sort。源机器（"),a("em",[e._v("map")]),e._v(" worker）将待排序的数据分区，并将其发送到R个"),a("em",[e._v("reduce")]),e._v(" worker之一。每个"),a("em",[e._v("reduce")]),e._v(" worker将其数据在本地排序（如果可以，会在内存中执行）。当然，NOW-Sort不支持用户自定义"),a("em",[e._v("map")]),e._v("和"),a("em",[e._v("reduce")]),e._v("函数，这让我们的库适用范围更广。")]),e._v(" "),a("p",[e._v("River 提供了一个通过分布式队列发送数据来处理程序间交互的编程模型。就像MapReduce，River系统试图在存在由异构硬件或系统干扰导致的性能不均匀的情况下提供良好的平均性能。River通过小心地调度磁盘和网络传输以使计算时间平衡的方式实现这一点。而MapReduce框架通过对编程模型进行限制，将问题划分为大量更细致的任务。这些任务在可用的worker间动态调度，以让更快的worker处理更多任务。这种受限的编程模型还允许在工作末期调度冗余执行的任务，这样可以大大缩减离群机器（如慢速或者卡死的worker）中的计算时间。")]),e._v(" "),a("p",[e._v("BAD-FS 采用了和MapReduce区别非常大的编程模型。与MapReduce不同，BAD-FS的目标是在广域网中执行工作。然而，有两个基本点很相似。")]),e._v(" "),a("p",[e._v("（1）二者都使用了冗余执行的方式恢复因故障丢失的数据。")]),e._v(" "),a("p",[e._v("（2）二者都使用了有位置感知（locality-aware）调度方式来减少拥堵的网络连接中数据发送的总量。")]),e._v(" "),a("p",[e._v("TACC是一个为简化高可用网络服务设计的系统。像MapReduce一样，TACC依赖重新执行的方式作为容错机制。")]),e._v(" "),a("h1",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[e._v("#")]),e._v(" 结论")]),e._v(" "),a("p",[e._v("MapReduce编程模型被成功应用于Google中的很多目标。我们将这种成功归结于几个原因。第一，因为该模型隐藏了并行化、容错、本地优化和复杂均衡的细节，所以甚至没有相关经验的程序员都可以轻松使用。第二，很多不同的问题都可以被表示为MapReduce计算。例如，MapReduce在Google的生产系统的web搜索服务、排序、数据挖掘、机器学习和很多其他系统中被作为数据生成工具使用。第三，我们开发了一个适用于由上千台机器组成的大型集群的MapReduce实现。该实现可以高效利用这些机器的资源，因此其非常适用于Google中的大型计算问题。")]),e._v(" "),a("p",[e._v("我们从这项工作中学习到了很多事。第一，对编程模型进行限制可以让并行化、分布式计算、容错等更加简单。第二，网络带宽是非常稀缺的资源。我们系统中的大量优化都是为了减少网络发送的数据量：局部性优化允许我们从本地磁盘读取数据，在本地磁盘中写单个中间数据的副本同样节约了网络带宽。第三，冗余执行可以用来减少缓慢的机器带俩的影响，并可以用来处理机器故障和数据丢失。")]),e._v(" "),a("h1",{attrs:{id:"致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[e._v("#")]),e._v(" 致谢")]),e._v(" "),a("p",[e._v("Josh Levenberg在修订和扩展用户级MapReduce API方面提供了很大帮助，他根据自己对MapReduce的使用经验和其他人对功能增强的建议，提供了很多新特性。MapReduce从GFS 读取输入并写入输出。感谢Mohit Aron, Howard Gobioff, Markus Gutschke, David Kramer, Shun-Tak Leung和Josh Redstone在开发GFS中做出做出的工作。同样感谢Percy Liang和Olcan Sercinoglu在MapReduce使用的集群管理系统中做出的工作。Mike Burrows, Wilson Hsieh, Josh Levenberg, Sharon Perl, Rob Pike和Debby Wallach为本文的早期草稿提供了有帮助的评论。OSDI的匿名审稿者和我们的领导者Eric Brewer对本文的改进提供了帮助。最后，我们希望感谢来自Google工程师的MapReduce使用者，他们给出了很多有帮助的反馈、建议和bug报告。")])])}),[],!1,null,null,null);a.default=r.exports}}]);