(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{448:function(v,t,l){"use strict";l.r(t);var s=l(6),_=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("Redis将数据存储在内存中，但是内存有限，当存储的数据超过内存容量时，需要对缓存的数据进行剔除。")]),v._v(" "),t("p",[v._v("淘汰算法一般有以下几种")]),v._v(" "),t("ul",[t("li",[v._v("FIFO: 淘汰最早数据")]),v._v(" "),t("li",[v._v("LRU: 剔除最近最少使用")]),v._v(" "),t("li",[v._v("LFU: 剔除最近使用频率最低的数据")])]),v._v(" "),t("h2",{attrs:{id:"redis的内存淘汰策略-有以下几种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis的内存淘汰策略-有以下几种"}},[v._v("#")]),v._v(" Redis的内存淘汰策略，有以下几种")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("noeviction:")]),v._v(" (默认策略) 返回错误。当内存达到限制，客户端尝试执行的命令（大部分的写入指令，但DEL和几个例外）")]),v._v(" "),t("li",[t("strong",[v._v("allkeys-lru:")]),v._v(" 尝试回收最少使用的键（LRU）（适用所有缓存数据，不管是否设置过期时间）")]),v._v(" "),t("li",[t("strong",[v._v("volatile-lru:")]),v._v(" 尝试回收最少使用的键（LRU），（仅限于在过期集合的键）。")]),v._v(" "),t("li",[t("strong",[v._v("allkeys-random:")]),v._v(" 随机回收数据（适用所有缓存数据，不管是否设置过期时间）")]),v._v(" "),t("li",[t("strong",[v._v("volatile-random:")]),v._v(" 随机回收数据（仅限于在过期集合的键）。")]),v._v(" "),t("li",[t("strong",[v._v("volatile-ttl:")]),v._v(" 回收在过期集合的键，并且优先回收存活时间（TTL）较短的键。")])]),v._v(" "),t("h2",{attrs:{id:"数据库中有-3000w-的数据-而-redis-中只有-100w-数据-如何保证-redis-中存放的都是热点数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库中有-3000w-的数据-而-redis-中只有-100w-数据-如何保证-redis-中存放的都是热点数据"}},[v._v("#")]),v._v(" 数据库中有 3000w 的数据，而 Redis 中只有 100w 数据，如何保证 Redis 中存放的都是热点数据")]),v._v(" "),t("p",[v._v("这个题你说它的考点是什么？")]),v._v(" "),t("p",[v._v("考的就是淘汰策略呀，同志们，只是方式比较隐晦而已。")]),v._v(" "),t("p",[v._v("我们先指定淘汰策略为 allkeys-lru 或者 volatile-lru，然后再计算一下 100w 数据大概占用多少内存，根据算出来的内存，限定 Redis 占用的内存。")])])}),[],!1,null,null,null);t.default=_.exports}}]);