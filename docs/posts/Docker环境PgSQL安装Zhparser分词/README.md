---
title: Docker环境PgSQL安装Zhparser分词
date: 2023-09-12 16:38
permalink: /posts/Docker%E7%8E%AF%E5%A2%83PgSQL%E5%AE%89%E8%A3%85Zhparser%E5%88%86%E8%AF%8D
categories:
- posts
tags: 
---
# Docker环境PgSQL安装Zhparser分词

版本基于PG 14

进入docker环境安装基本工具：

```sql
apt-get update
apt-get install gcc
apt-get install wget
apt-get install make
apt-get install git
apt-get install bzip2
```

安装PG 开发工具包

```sql
apt install postgresql-server-dev-14
```

安装SCWS环境

```sql
wget http://www.xunsearch.com/scws/down/scws-1.2.3.tar.bz2
tar -jxvf scws-1.2.3.tar.bz2
cd scws-1.2.3 ; ./configure ; make install
```

安装zhparser

```sql
 git clone https://github.com/amutu/zhparser.git
cd zhparser
 make && make install
```

最后就能到PG里面创建扩展了

```sql
CREATE EXTENSION zhparser;
CREATE TEXT SEARCH CONFIGURATION testzhcfg (PARSER = zhparser);
ALTER TEXT SEARCH CONFIGURATION testzhcfg ADD MAPPING FOR n,v,a,i,e,l WITH simple;
```
