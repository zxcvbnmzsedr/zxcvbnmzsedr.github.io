(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{442:function(_,t,v){"use strict";v.r(t);var s=v(6),e=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("当有序集合中包含的元素数量超过服务器属性")]),_._v(" "),t("p",[_._v("zset_max_ziplist_entries 的值（默认值为 128 ），")]),_._v(" "),t("p",[_._v("或者 有序集合中新添加元素的 member 的长度大于服务器属性")]),_._v(" "),t("p",[_._v("zset_max_ziplist_value 的值（默认值为 64 ）时，")]),_._v(" "),t("p",[_._v("redis会使用 跳跃表 作为有序集合的底层实现。")]),_._v(" "),t("p",[_._v("否则会使用ziplist作为有序集合的底层实现")]),_._v(" "),t("h1",{attrs:{id:"跳表是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳表是什么"}},[_._v("#")]),_._v(" 跳表是什么?")]),_._v(" "),t("p",[_._v("跳表 = 链表 + 多级索引.")]),_._v(" "),t("p",[_._v("skiplist是一种以空间换取时间的结构。 时间复杂度O(logN),空间复杂度O(n);")]),_._v(" "),t("p",[_._v("由于链表，无法进行二分查找，因此借鉴数据库索引的思想，提取出链表中关键节点（索引），先在关键节点上查找，再进入下层链表查找。")]),_._v(" "),t("p",[_._v("提取多层关键节点，就形成了跳跃表.")]),_._v(" "),t("h2",{attrs:{id:"优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[_._v("#")]),_._v(" 优缺点")]),_._v(" "),t("p",[_._v("只有在 数据量较大的情况下 才能体现出来优势。\n而且应该是 读多写少的情况下 才能使用，所以它的适用范围应该还是比较有限的")]),_._v(" "),t("p",[_._v("维护成本相对要高, 新增或者删除时需要把所有索引都更新一遍；")]),_._v(" "),t("p",[_._v("最后在新增和删除的过程中的更新，时间复杂度也是O(log n)")]),_._v(" "),t("p",[_._v("​")])])}),[],!1,null,null,null);t.default=e.exports}}]);