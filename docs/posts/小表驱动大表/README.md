---
title: 小表驱动大表
date: 2022-08-30 19:49
permalink: /posts/%E5%B0%8F%E8%A1%A8%E9%A9%B1%E5%8A%A8%E5%A4%A7%E8%A1%A8
categories:
- posts
tags: 
---
# 小表驱动大表

在数据库查询的时候，尤其在传统行业中经常会用到表关联查询，也就是各种join表操作。

除了[《Java开发手册》](https://www.haicheng.website/download/book/Java%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%EF%BC%88%E5%B5%A9%E5%B1%B1%E7%89%88%EF%BC%89.pdf)上面规范的**超过3个表禁止join**之外，听到最多的规则是 **小表驱动大表。**

> 即：用小的数据集去驱动(匹配)大的数据集

# 为何要用小表驱动大表

本质上和join的原理有关，join的原理是查询出每一条**前表**的数据，然后放入`join_buffer`中，直到`join_buffer`装不下数据。

* 然后将**后表**加载进内存，和这些**前表**数据进行匹配，找出连接的数据，然后**后表**从内存中踢出；

* 如果**前表**中还有数据，就再一条一条的查找出来，一条一条的放入join_buffer中，直到join_buffer中装不下数据，然后将**后表**加载进内存，和这些数据进行匹配，找出连接的数据，然后**后表**从内存中踢出；
* 最后合并查询出所有的数据

现在有两个表 `A表`与`B表`。表A数据有20条数据，表B有20W条数据。

外部执行一次连接，内部需要执行很多次。

A驱动B的伪代码如下：

```js
for (20条){
	for (20W条){

	}
}
```

**小的循环在外层，表连接需要20次**

B驱动A的伪代码如下:

```js
for (20W条){
	for (20条){

	}
}
```

**大的循环在外层，表连接需要20W次**

根据Join的基本原理可以知道

1. **前表**查询出数据需要一条一条的加入到join_buffer中，这需要IO操作，比较耗时，因此如果**前表**比较小，那么效率就高，这是小表驱动大表的一个主要原因。
2. 将join_buffer中的数据和**后表**中的数据进行匹配，如果连接的字段可以使用索引，那么效率非常高，但是如果没有索引，抛开第一点描述的，连接查询得IO操作时间，那么小表驱动大表和大表驱动小表效率其实是差不多得，因为都需要双循环，M*N 和N*M是差不多的。

# 如何判断驱动表和被驱动表

* LEFT JOIN 左连接, 左边为驱动表, 右边为被驱动表
* RIGHT JOIN 右连接,右边为驱动表,左边为被驱动表
* INNER JOIN 内连接, mysql会选择数据量比较小的表作为驱动表，大表作为被驱动表
* 可通过EXPLANIN查看SQL语句的执行计划,EXPLANIN分析的第一行的表即是驱动表

# EXISTS

除了JOIN这种明显能看出驱动的关系，Exists语法也是遵循小表驱动大表的

```sql
SELECT ...FROM table WHERE EXISTS(subquery)
```

> 将主查询的数据放到子查询中做条件验证，根据验证结果（TRUE或者FALSE）来决定朱查询的数据结果是否得意保留。  
> 相当于从表A和B中取出交集，然后再从A表中取出所在交集的部分数据，当然后面加WHERE条件还可以进一步筛选。

1. EXISTS(subquery)只返回TRUE或者FALSE，因此子查询中的SELECT * 也可以是SELECT 1或者SELECT 'X'，官方说法是实际执行时会忽略SELECT清单，因此没有区别。
2. EXISTS子查询的实际执行过程可能经过了优化而不是我们理解上的逐条对比。
3. EXISTS子查询也可以用条件表达式，其他子查询或者JOIN来替代，何种最优需要具体问题具体分析。

**如果查询的两个表大小相当，那么用in和exists差别不大。**

如果两个表中一个较小，一个是大表，则子查询表大的用exists，子查询表小的用in：  
例如：表A（20小表），表B（20W大表）

```sql
select * from A where cc in (select cc from B) ;//  效率低，用到了A表上cc列的索引；
select * from A where exists(select cc from B where cc=A.cc) ;// 效率高，用到了B表上cc列的索引。
```

相反的：

```sql
select * from B where cc in (select cc from A) ; //效率高，用到了B表上cc列的索引；
select * from B where exists(select cc from A where cc=B.cc) ;//效率低，用到了A表上cc列的索引。
```

not in 和not exists如果查询语句使用了not in 那么内外表都进行全表扫描，没有用到索引；

而not extsts 的子查询依然能用到表上的索引。

**所以无论那个表大，用not exists都比not in要快。**
