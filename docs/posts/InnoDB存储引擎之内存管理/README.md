---
title: InnoDB存储引擎之内存管理
date: 2022-11-03 19:24
permalink: /posts/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E%E4%B9%8B%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86
categories:
- posts
tags: 
---
# InnoDB存储引擎之内存管理

在InnoDB存储引擎中，数据库中的Buffer Pool是通过LRU算法进行管理的。

在每次进行磁盘IO的时候，将磁盘上的一个16KB的页给丢到Buffer Pool中，采用LRU算法管理的Buffer Pool有下面三种特点：

1. 最频繁使用的页在LRU列表的最前段
2. 最少使用的页在LRU列表的尾端
3. 缓冲池不能存放新读取到的页时，首先释放LRU列表尾端的页。

​![](http://image.ztianzeng.com/uPic/20221103202726.png)​

在InnoDB存储引擎中，缓冲池中页的默认大小是16KB，LRU列表中有一个midpoint的位置，新读取到的数据页并不是直接放入到LRU列表的首部，而是放入到LRU列表的midpoint位置，这个操作称之为midpoint insertion stategy，也叫中间点插入策略。

mitpoint的位置可通过参数innodb_old_blocks_pct控制，如下：

```dmesg
mysql> show variables like 'innodb_old_blocks_pct';
+-----------------------+-------+
| Variable_name         | Value |
+-----------------------+-------+
| innodb_old_blocks_pct | 37    |
+-----------------------+-------+
```

从上面的例子看出，结果是37，这个37意味着新读取的页将被插入到大概距离LRU列表尾端37%的位置，差不多3/8的位置，在InnoDB存储引擎中，midpoint之前的页称为new列表，后面的页称之为old列表，new列表中的页是最为活跃的数据。

‍

**那为何MySQL不尊崇传统的LRU策略，直接把数据页放在LRU队列的首部？**

因为某些全表扫描的SQL操作可能会将所有的热点数据都刷新出LRU队列，导致下一次访问热点数据的时候，必须从磁盘中取相应的数据，从而影响缓冲池的效率。

为了解决这个问题，InnoDB使用另外一个参数来管理LRU列表，就是`innodb_old_blocks_time`，用于表示页读取到midpoint之后，多久才会加入到LRU列表的热端。

```dmesg
mysql> show variables like 'innodb_old_blocks_time';
+-----------------------+-------+
| Variable_name         | Value |
+-----------------------+-------+
| innodb_old_blocks_time | 1000    |
+-----------------------+-------+
```

当数据库刚启动时，LRU的内容是空的，这个时候，所有的数据页都放在Free列表中，当需要从缓冲池中分页时，首先从Free列表中查找是否有可用的Free页，如果存在，则将该页从Free页中删除，然后放入到LRU的列表中。淘汰掉LRU列表末尾的数据页，将该内存空间分配给新的页。

这个过程的流程图如下：

![](http://image.ztianzeng.com/uPic/20221104091944.png)​

当LRU列表中的页从old部分加入到new部分时，称此时发生的操作是page made young，而因为innodb_old_blocks_time的设置而没有从old部分移动到new部分的操作称之为page_not_made young。

可以通过show engine innodb status来观察LRU列表以及Free列表的使用情况和运行状态。

```dmesg
BUFFER POOL AND MEMORY
----------------------
Total large memory allocated 13224640512
Dictionary memory allocated 4470293
Buffer pool size   786432
Free buffers       1141
Database pages     764831
Old database pages 282310
Modified db pages  23600
Pending reads      0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 484261, not young 668580
0.00 youngs/s, 0.00 non-youngs/s
Pages read 483307, created 362673, written 1664309
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
Buffer pool hit rate 1000 / 1000, young-making rate 0 / 1000 not 0 / 1000
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 764831, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
```

在LRU列表中的页被修改之后，这个页就称之为“脏页”，即缓冲池中的数据页和磁盘上的数据产生了不一致，缓冲池的数据比较新，这时数据库会通过checkpoint机制将脏页刷新回磁盘，而Flush列表中的页也就是脏页列表，脏页既存在于LRU列表中，也存在与Flush列表中，LRU列表用来管理缓冲池中页的可用性，Flush列表用来管理将页刷新回磁盘，二者不影响。
