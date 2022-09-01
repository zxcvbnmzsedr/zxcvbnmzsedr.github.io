(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{325:function(t,s,e){"use strict";e.r(s);var v=e(6),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20220901143020.png",alt:""}}),t._v("​")]),t._v(" "),s("h1",{attrs:{id:"间隙锁死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#间隙锁死锁"}},[t._v("#")]),t._v(" 间隙锁死锁")]),t._v(" "),s("p",[t._v("间隙锁的引入可能会导致死锁。前面提到了 "),s("strong",[t._v("间隙锁只与往间隙里写入记录这个操作冲突")]),t._v(" 。同一个间隙多次加锁是不会冲突的，于是问题来了。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("SessionA")]),t._v(" "),s("th",[t._v("SessionB")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("begin;")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("select * from t where id = 9 for update;")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("begin;")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("select * from t where id = 9 for update;")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("insert into values(9,9,9);(blocked)")])]),t._v(" "),s("tr",[s("td",[t._v("insert into values(9,9,9);(ERROR Deadlock found)")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("分析如下：")]),t._v(" "),s("ul",[s("li",[t._v("1）session A 执行 select … for update 语句，由于 id=9 这一行并不存在，因此会加上间隙锁 (5,10);")]),t._v(" "),s("li",[t._v("2）session B 执行 select … for update 语句，同样会加上间隙锁 (5,10)，间隙锁之间不会冲突，因此这个语句可以执行成功；")]),t._v(" "),s("li",[t._v("3）session B 试图插入一行 (9,9,9)，被 session A 的间隙锁挡住了，只好进入等待；")]),t._v(" "),s("li",[t._v("4）session A 试图插入一行 (9,9,9)，被 session B 的间隙锁挡住了。")])]),t._v(" "),s("p",[t._v("至此，两个 session 进入互相等待状态，形成死锁。当然，InnoDB 的死锁检测马上就发现了这对死锁关系，让 session A 的 insert 语句报错返回了。")])])}),[],!1,null,null,null);s.default=_.exports}}]);