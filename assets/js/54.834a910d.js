(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{381:function(n,e,a){"use strict";a.r(e);var s=a(7),t=Object(s.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"innodb存储引擎之内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎之内存管理"}},[n._v("#")]),n._v(" InnoDB存储引擎之内存管理")]),n._v(" "),e("p",[n._v("在InnoDB存储引擎中，数据库中的Buffer Pool是通过LRU算法进行管理的。")]),n._v(" "),e("p",[n._v("在每次进行磁盘IO的时候，将磁盘上的一个16KB的页给丢到Buffer Pool中，采用LRU算法管理的Buffer Pool有下面三种特点：")]),n._v(" "),e("ol",[e("li",[n._v("最频繁使用的页在LRU列表的最前段")]),n._v(" "),e("li",[n._v("最少使用的页在LRU列表的尾端")]),n._v(" "),e("li",[n._v("缓冲池不能存放新读取到的页时，首先释放LRU列表尾端的页。")])]),n._v(" "),e("p",[n._v("​"),e("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20221103202726.png",alt:""}}),n._v("​")]),n._v(" "),e("p",[n._v("在InnoDB存储引擎中，缓冲池中页的默认大小是16KB，LRU列表中有一个midpoint的位置，新读取到的数据页并不是直接放入到LRU列表的首部，而是放入到LRU列表的midpoint位置，这个操作称之为midpoint insertion stategy，也叫中间点插入策略。")]),n._v(" "),e("p",[n._v("mitpoint的位置可通过参数innodb_old_blocks_pct控制，如下：")]),n._v(" "),e("div",{staticClass:"language-dmesg extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show variables like 'innodb_old_blocks_pct';\n+-----------------------+-------+\n| Variable_name         | Value |\n+-----------------------+-------+\n| innodb_old_blocks_pct | 37    |\n+-----------------------+-------+\n")])])]),e("p",[n._v("从上面的例子看出，结果是37，这个37意味着新读取的页将被插入到大概距离LRU列表尾端37%的位置，差不多3/8的位置，在InnoDB存储引擎中，midpoint之前的页称为new列表，后面的页称之为old列表，new列表中的页是最为活跃的数据。")]),n._v(" "),e("p",[n._v("‍")]),n._v(" "),e("p",[e("strong",[n._v("那为何MySQL不尊崇传统的LRU策略，直接把数据页放在LRU队列的首部？")])]),n._v(" "),e("p",[n._v("因为某些全表扫描的SQL操作可能会将所有的热点数据都刷新出LRU队列，导致下一次访问热点数据的时候，必须从磁盘中取相应的数据，从而影响缓冲池的效率。")]),n._v(" "),e("p",[n._v("为了解决这个问题，InnoDB使用另外一个参数来管理LRU列表，就是"),e("code",[n._v("innodb_old_blocks_time")]),n._v("，用于表示页读取到midpoint之后，多久才会加入到LRU列表的热端。")]),n._v(" "),e("div",{staticClass:"language-dmesg extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show variables like 'innodb_old_blocks_time';\n+-----------------------+-------+\n| Variable_name         | Value |\n+-----------------------+-------+\n| innodb_old_blocks_time | 1000    |\n+-----------------------+-------+\n")])])]),e("p",[n._v("当数据库刚启动时，LRU的内容是空的，这个时候，所有的数据页都放在Free列表中，当需要从缓冲池中分页时，首先从Free列表中查找是否有可用的Free页，如果存在，则将该页从Free页中删除，然后放入到LRU的列表中。淘汰掉LRU列表末尾的数据页，将该内存空间分配给新的页。")]),n._v(" "),e("p",[n._v("这个过程的流程图如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://image.ztianzeng.com/uPic/20221104091944.png",alt:""}}),n._v("​")]),n._v(" "),e("p",[n._v("当LRU列表中的页从old部分加入到new部分时，称此时发生的操作是page made young，而因为innodb_old_blocks_time的设置而没有从old部分移动到new部分的操作称之为page_not_made young。")]),n._v(" "),e("p",[n._v("可以通过show engine innodb status来观察LRU列表以及Free列表的使用情况和运行状态。")]),n._v(" "),e("div",{staticClass:"language-dmesg extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("BUFFER POOL AND MEMORY\n----------------------\nTotal large memory allocated 13224640512\nDictionary memory allocated 4470293\nBuffer pool size   786432\nFree buffers       1141\nDatabase pages     764831\nOld database pages 282310\nModified db pages  23600\nPending reads      0\nPending writes: LRU 0, flush list 0, single page 0\nPages made young 484261, not young 668580\n0.00 youngs/s, 0.00 non-youngs/s\nPages read 483307, created 362673, written 1664309\n0.00 reads/s, 0.00 creates/s, 0.00 writes/s\nBuffer pool hit rate 1000 / 1000, young-making rate 0 / 1000 not 0 / 1000\nPages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s\nLRU len: 764831, unzip_LRU len: 0\nI/O sum[0]:cur[0], unzip sum[0]:cur[0]\n")])])]),e("p",[n._v("在LRU列表中的页被修改之后，这个页就称之为“脏页”，即缓冲池中的数据页和磁盘上的数据产生了不一致，缓冲池的数据比较新，这时数据库会通过checkpoint机制将脏页刷新回磁盘，而Flush列表中的页也就是脏页列表，脏页既存在于LRU列表中，也存在与Flush列表中，LRU列表用来管理缓冲池中页的可用性，Flush列表用来管理将页刷新回磁盘，二者不影响。")])])}),[],!1,null,null,null);e.default=t.exports}}]);