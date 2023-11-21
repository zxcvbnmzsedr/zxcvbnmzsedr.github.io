(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{524:function(_,v,t){"use strict";t.r(v);var a=t(7),i=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"刚性事务的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刚性事务的实现"}},[_._v("#")]),_._v(" 刚性事务的实现")]),_._v(" "),v("p",[_._v("刚性事务的是通过XA模型来进行实现的，XA模型是X/Open组织提出来的分布式事务的实现标准。")]),_._v(" "),v("blockquote",[v("p",[_._v("X/OPEN是⼀个组织.X/Open国际联盟有限公司是⼀个欧洲基⾦会，它的建⽴是为了向UNIX环境提供标准。它主要的⽬标是促进对UNIX语⾔、接⼝、⽹络和应⽤的开放式系统协议的制定。它还促进在不同的UNIX环境之间的应⽤程序的互操作性，以及⽀持对电⽓电⼦⼯程师协会（IEEE）对UNIX的可移植操作系统接⼝（POSIX）规范。")])]),_._v(" "),v("p",[_._v("XA模型主要使⽤了两段提交(2PC - Two-Phase-Commit)来保证分布式事务的完整性。")]),_._v(" "),v("p",[_._v("在XA模型中，定义了三个角色，AP、TM、RM。")]),_._v(" "),v("p",[_._v("AP: Application，应⽤程序。也就是业务层。哪些操作属于⼀个事务，就是AP定义的。")]),_._v(" "),v("p",[_._v("TM: Transaction Manager，事务管理器。接收AP的事务请求，对全局事务进⾏管理，管理事务分⽀状态，协调RM的处理，通知RM哪些操作属于哪些全局事务以及事务分⽀等等。这个也是整个事务调度模型的核⼼部分。")]),_._v(" "),v("p",[_._v("RM：Resource Manager，资源管理器。⼀般是数据库，也可以是其他的资源管理器，如消息队列(如JMS数据源)，⽂件系统等。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/adfns079.gif",alt:"Developing Applications with Oracle XA"}})]),_._v(" "),v("p",[_._v("XA则规范了TM与RM之间的通信接⼝，在TM与多个RM之间形成⼀个双向通信桥梁，从⽽在多个数据库资源下保证ACID四个特性。⽬前知名的数据库，如Oracle, DB2,mysql等，都是实现了XA接⼝的，都可以作为RM。")]),_._v(" "),v("p",[_._v("XA是数据库的分布式事务，强⼀致性，在整个过程中，数据⼀张锁住状态，即从prepare到commit、rollback的整个过程中，TM⼀直把持折数据库的锁，如果有其他⼈要修改数据库的该条数据，就必须等待锁的释放，存在⻓事务⻛险。")]),_._v(" "),v("p",[_._v("XA事务处理流程示意图如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://www.shiyitopo.tech/uPic/XA%E4%BA%8B%E5%8A%A1.png",alt:"XA事务"}})]),_._v(" "),v("h2",{attrs:{id:"_2pc-标准xa模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-标准xa模型"}},[_._v("#")]),_._v(" 2PC(标准XA模型)")]),_._v(" "),v("p",[_._v("2PC 将数据分为两个阶段进行处理:")]),_._v(" "),v("p",[_._v("阶段⼀：提交事务请求")]),_._v(" "),v("p",[_._v("阶段⼆：执⾏事务提交;")]),_._v(" "),v("p",[_._v("如果阶段⼀超时或者出现异常，2PC的阶段⼆：中断事务")]),_._v(" "),v("h3",{attrs:{id:"阶段一-提交事务请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段一-提交事务请求"}},[_._v("#")]),_._v(" 阶段⼀：提交事务请求")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("事务询问。协调者向所有参与者发送事务内容，询问是否可以执⾏提交操作，并开始等待各参与者进⾏响应")])]),_._v(" "),v("li",[v("p",[_._v("执⾏事务。各参与者节点，执⾏事务操作，并将Undo和Redo操作计⼊本机事务⽇志")])]),_._v(" "),v("li",[v("p",[_._v("各参与者向协调者反馈事务问询的响应。成功执⾏返回Yes，否则返回No")])])]),_._v(" "),v("h3",{attrs:{id:"阶段二-执行事务提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段二-执行事务提交"}},[_._v("#")]),_._v(" 阶段⼆：执⾏事务提交")]),_._v(" "),v("p",[_._v("协调者在阶段⼆决定是否最终执⾏事务提交操作。")]),_._v(" "),v("p",[_._v("这⼀阶段包含两种情形：")]),_._v(" "),v("p",[v("strong",[_._v("事务提交")])]),_._v(" "),v("p",[_._v("执⾏事务提交所有参与者Reply Yes，那么执⾏事务提交")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("发送提交请求。协调者向所有参与者发送Commit请求")])]),_._v(" "),v("li",[v("p",[_._v("事务提交。参与者收到Commit请求后，会正式执⾏事务提交操作，并在完成提交操作之后，释放在整个事务执⾏期间占⽤的资源")])]),_._v(" "),v("li",[v("p",[_._v("反馈事务提交结果。参与者在完成事务提交后，写协调者发送Ack消息确认")])]),_._v(" "),v("li",[v("p",[_._v("完成事务。协调者在收到所有参与者的Ack后，完成事务。")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"http://image.ztianzeng.com/uPic/5wRmVD.jpg",alt:"5wRmVD"}})]),_._v(" "),v("p",[v("strong",[_._v("事务中断")])]),_._v(" "),v("p",[_._v("当存在某⼀参与者向协调者发送No响应，或者等待超时。协调者只要⽆法收到所有参与者的Yes响应，就会中断事务。")]),_._v(" "),v("ol",[v("li",[_._v("发送回滚请求。协调者向所有参与者发送Rollback请求")]),_._v(" "),v("li",[_._v("回滚。参与者收到请求后，利⽤本机Undo信息，执⾏Rollback操作。并在回滚结束后释放该事务所占⽤的系统资源")]),_._v(" "),v("li",[_._v("反馈回滚结果。参与者在完成回滚操作后，向协调者发送Ack消息")]),_._v(" "),v("li",[_._v("中断事务。协调者收到所有参与者的回滚Ack消息后，完成事务中断")])]),_._v(" "),v("p",[v("img",{attrs:{src:"http://image.ztianzeng.com/uPic/37WkXj.jpg",alt:"37WkXj"}})]),_._v(" "),v("h3",{attrs:{id:"二阶段的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二阶段的优缺点"}},[_._v("#")]),_._v(" 二阶段的优缺点")]),_._v(" "),v("p",[_._v("优点主要体现在实现原理简单；")]),_._v(" "),v("p",[_._v("缺点⽐较多：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("性能问题")]),_._v(" "),v("p",[_._v("从流程上我们可以看得出，其最⼤缺点就在于它的执⾏过程中间，节点都处于阻塞状态。各个操作数据库的节点此时都占⽤着数据库资源，只有当")]),_._v(" "),v("p",[_._v("所有节点准备完毕，事务协调者才会通知进⾏全局提交，参与者进⾏本地事务提交后才会释放资源。这样的过程会⽐较漫⻓，对性能影响⽐较⼤。")])]),_._v(" "),v("li",[v("p",[_._v("协调者单点故障问题")]),_._v(" "),v("p",[_._v("事务协调者是整个XA模型的核⼼，⼀旦事务协调者节点挂掉，会导致参与者收不到提交或回滚的通知，从⽽导致参与者节点始终处于事务⽆法完成")]),_._v(" "),v("p",[_._v("的中间状态。")])]),_._v(" "),v("li",[v("p",[_._v("丢失消息导致的数据不⼀致问题")]),_._v(" "),v("p",[_._v("在第⼆个阶段，如果发⽣局部⽹络问题，⼀部分事务参与者收到了提交消息，另⼀部分事务参与者没收到提交消息，那么就会导致节点间数据的不⼀致问题。")])])]),_._v(" "),v("h2",{attrs:{id:"_3pc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3pc"}},[_._v("#")]),_._v(" 3PC")]),_._v(" "),v("p",[_._v("针对2PC的缺点，研究者提出了3PC，即Three-Phase Commit。")]),_._v(" "),v("p",[_._v("作为2PC的改进版，3PC将原有的两阶段过程，重新划分为CanCommit、PreCommit和do Commit三个阶段。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://image.ztianzeng.com/uPic/fxQv2n.jpg",alt:"fxQv2n"}})]),_._v(" "),v("h3",{attrs:{id:"阶段一-cancommit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段一-cancommit"}},[_._v("#")]),_._v(" 阶段⼀：CanCommit")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("事务询问。协调者向所有参与者发送包含事务内容的canCommit的请求，询问是否可以执⾏事务提交，并等待应答；")])]),_._v(" "),v("li",[v("p",[_._v("各参与者反馈事务询问。正常情况下，如果参与者认为可以顺利执⾏事务，则返回Yes，否则返回No。")])])]),_._v(" "),v("h3",{attrs:{id:"阶段二-precommit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段二-precommit"}},[_._v("#")]),_._v(" 阶段⼆：PreCommit")]),_._v(" "),v("p",[_._v("在本阶段，协调者会根据上⼀阶段的反馈情况来决定是否可以执⾏事务的PreCommit操作")]),_._v(" "),v("p",[_._v("有以下两种可能：执⾏事务预提交")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("发送预提交请求。协调者向所有节点发出PreCommit请求，并进⼊prepared阶段；")])]),_._v(" "),v("li",[v("p",[_._v("事务预提交。参与者收到PreCommit请求后，会执⾏事务操作，并将Undo和Redo⽇志写⼊本机事务⽇志；")])]),_._v(" "),v("li",[v("p",[_._v("各参与者成功执⾏事务操作，同时将反馈以Ack响应形式发送给协调者，同事等待最终的Commit或Abort指令。")])])]),_._v(" "),v("p",[v("strong",[_._v("中断事务")])]),_._v(" "),v("p",[_._v("加⼊任意⼀个参与者向协调者发送No响应，或者等待超时，协调者在没有得到所有参与者响应时，即可以中断事务:")]),_._v(" "),v("ol",[v("li",[_._v("发送中断请求。 协调者向所有参与者发送Abort请求；")]),_._v(" "),v("li",[_._v("中断事务。⽆论是收到协调者的Abort请求，还是等待协调者请求过程中出现超时，参与者都会中断事务；")])]),_._v(" "),v("h3",{attrs:{id:"阶段三-docommit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阶段三-docommit"}},[_._v("#")]),_._v(" 阶段三：doCommit")]),_._v(" "),v("p",[_._v("在这个阶段，会真正的进⾏事务提交，同样存在两种可能。")]),_._v(" "),v("p",[v("strong",[_._v("执⾏提交")])]),_._v(" "),v("ol",[v("li",[v("p",[_._v("发送提交请求。假如协调者收到了所有参与者的Ack响应，那么将从预提交转换到提交状态，并向所有参与者，发送doCommit请求；")])]),_._v(" "),v("li",[v("p",[_._v("事务提交。参与者收到doCommit请求后，会正式执⾏事务提交操作，并在完成提交操作后释放占⽤资源；")])]),_._v(" "),v("li",[v("p",[_._v("反馈事务提交结果。参与者将在完成事务提交后，向协调者发送Ack消息；")])]),_._v(" "),v("li",[v("p",[_._v("完成事务。协调者接收到所有参与者的Ack消息后，完成事务。")])])]),_._v(" "),v("p",[v("strong",[_._v("中断事务")])]),_._v(" "),v("p",[_._v("在该阶段，假设正常状态的协调者接收到任⼀个参与者发送的No响应，或在超时时间内，仍旧没收到反馈消息，就会中断事务：")]),_._v(" "),v("ol",[v("li",[_._v("发送中断请求。协调者向所有的参与者发送abort请求；")]),_._v(" "),v("li",[_._v("事务回滚。参与者收到abort请求后，会利⽤阶段⼆中的Undo消息执⾏事务回滚，并在完成回滚后释放占⽤资源；")]),_._v(" "),v("li",[_._v("反馈事务回滚结果。参与者在完成回滚后向协调者发送Ack消息；")]),_._v(" "),v("li",[_._v("中端事务。协调者接收到所有参与者反馈的Ack消息后，完成事务中断。")])]),_._v(" "),v("h2",{attrs:{id:"_2pc和3pc的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2pc和3pc的区别"}},[_._v("#")]),_._v(" 2PC和3PC的区别")]),_._v(" "),v("p",[_._v("3PC有效降低了2PC带来的参与者阻塞范围，并且能够在出现单点故障后继续达成⼀致；")]),_._v(" "),v("p",[_._v("但3PC带来了新的问题，在参与者收到preCommit消息后，如果⽹络出现分区，协调者和参与者⽆法进⾏后续的通信，这种情况下，参与者在等待超时后，依旧会执⾏事务提交，这样会导致数据的不⼀致。")]),_._v(" "),v("p",[_._v("三阶段提交协议在协调者和参与者中都引⼊ 超时机制，并且把两阶段提交协议的第⼀个阶段拆分成了两步：询问，然后再锁资源，最后真正提交。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://image.ztianzeng.com/uPic/image-20220421204125-ux86w8m.png",alt:"image-20220421204125-ux86w8m"}})]),_._v(" "),v("p",[_._v("‍")])])}),[],!1,null,null,null);v.default=i.exports}}]);