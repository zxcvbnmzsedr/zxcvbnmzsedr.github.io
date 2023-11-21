---
title: MySQL锁思维导图
date: 2022-09-01 14:28
permalink: /posts/MySQL%E9%94%81%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE
categories:
- posts
tags: 
---
# MySQL锁思维导图

![](http://image.ztianzeng.com/uPic/20220901143020.png)​

# 间隙锁死锁

间隙锁的引入可能会导致死锁。前面提到了 **间隙锁只与往间隙里写入记录这个操作冲突** 。同一个间隙多次加锁是不会冲突的，于是问题来了。

|SessionA|SessionB|
| --------------------------------------------------| ------------------------------------------|
|begin;||
|select * from t where id = 9 for update;||
||begin;|
||select * from t where id = 9 for update;|
||insert into values(9,9,9);(blocked)|
|insert into values(9,9,9);(ERROR Deadlock found)||

分析如下：

* 1）session A 执行 select … for update 语句，由于 id=9 这一行并不存在，因此会加上间隙锁 (5,10);
* 2）session B 执行 select … for update 语句，同样会加上间隙锁 (5,10)，间隙锁之间不会冲突，因此这个语句可以执行成功；
* 3）session B 试图插入一行 (9,9,9)，被 session A 的间隙锁挡住了，只好进入等待；
* 4）session A 试图插入一行 (9,9,9)，被 session B 的间隙锁挡住了。

至此，两个 session 进入互相等待状态，形成死锁。当然，InnoDB 的死锁检测马上就发现了这对死锁关系，让 session A 的 insert 语句报错返回了。

# **Next-Key Lock**

能够解决幻读问题的关键在于MySQL的数据存储结构是B+树，并且Next-Key Lock只有对于建立索引的列才能够起作用，在没有建立索引的列为了解决幻读使用的是表锁。

在对一列建立了索引后，那么就会在这个非聚集索引结构中以B+树的，将当前列的值作为Key对数据进行组织。

那么数据也就会按当前列的值有序存储。所以通过Next-Key Lock锁住符合当前条件行的前后区间能够，使用间隙锁组织新数据的插入能够防止出现幻读的情况。

**Next-key lock（只在RR的当前读有效）出现的条件**

行锁 + gap锁。

1. 没有设置索引或者没有命中索引，表锁

2. 命中非唯一索引，next-key lock

3. 命中唯一索引，x锁
