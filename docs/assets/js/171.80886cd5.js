(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{477:function(v,_,a){"use strict";a.r(_);var t=a(6),i=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("在电商领域等互联⽹场景下，刚性事务在数据库性能和处理能⼒上都暴露出了瓶颈。")])]),v._v(" "),_("p",[v._v("柔性事务有两个特性：基本可⽤和柔性状态。")]),v._v(" "),_("p",[v._v("基本可⽤是指分布式系统出现故障的时候允许损失⼀部分的可⽤性。")]),v._v(" "),_("p",[v._v("柔性状态是指允许系统存在中间状态，这个中间状态不会影响系统整体的可⽤性，⽐如数据库读写分离的主从同步延迟等。")]),v._v(" "),_("p",[v._v("柔性事务的⼀致性指的是最终⼀致性。")]),v._v(" "),_("h1",{attrs:{id:"柔性事务的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#柔性事务的分类"}},[v._v("#")]),v._v(" 柔性事务的分类")]),v._v(" "),_("p",[v._v("柔性事务主要分为两大类:")]),v._v(" "),_("ul",[_("li",[v._v("通知型: 实现方案 -> MQ事务消息、本地消息表，特点: 异步调用")]),v._v(" "),_("li",[v._v("补偿型: 实现方案-> TCC、Sega ，特点: 同步调用")])]),v._v(" "),_("h2",{attrs:{id:"通知型事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通知型事务"}},[v._v("#")]),v._v(" 通知型事务")]),v._v(" "),_("p",[v._v("通知型事务的主流实现是通过MQ（消息队列）来通知其他事务参与者⾃⼰事务的执⾏状态，引⼊MQ组件，有效的将事务参与者进⾏解耦，各参与者都可以异步执⾏，所以通知型事务⼜被称为异步事务。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("异步确保型事务：主要适⽤于内部系统的数据最终⼀致性保障，因为内部相对⽐较可控，如订单和购物⻋、收货与清算、⽀付与结算等等场景")])]),v._v(" "),_("li",[_("p",[v._v("最⼤努⼒通知：主要⽤于外部系统，因为外部的⽹络环境更加复杂和不可信，所以只能尽最⼤努⼒去通知实现数据最终⼀致性，⽐如充值平台与运营商、⽀付对接等跨⽹络系统级别对接")])])]),v._v(" "),_("h3",{attrs:{id:"异步确保型事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步确保型事务"}},[v._v("#")]),v._v(" 异步确保型事务")]),v._v(" "),_("p",[v._v("指将⼀系列同步的事务操作修改为基于消息队列异步执⾏的操作，来避免分布式事务中同步阻塞带来的数据操作性能的下降。")]),v._v(" "),_("h4",{attrs:{id:"mq事务消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mq事务消息"}},[v._v("#")]),v._v(" MQ事务消息")]),v._v(" "),_("p",[v._v("基于MQ的事务消息⽅案主要依靠MQ的半消息机制来实现投递消息和参与者⾃身本地事务的⼀致性保障。半消息机制实现原理其实借鉴的2PC的思路，是⼆阶段提交的⼴义拓展。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/RSb0i0.jpg",alt:"RSb0i0"}})]),v._v(" "),_("p",[_("strong",[v._v("事务消息发送步骤如下：")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("生产者将半事务消息发送至MQ服务端。")])]),v._v(" "),_("li",[_("p",[v._v("MQ服务端将消息持久化成功之后，向生产者返回Ack确认消息已经发送成功，此时消息为半事务消息。")])]),v._v(" "),_("li",[_("p",[v._v("生产者开始执行本地事务逻辑。")])]),v._v(" "),_("li",[_("p",[v._v("生产者根据本地事务执行结果向服务端提交二次确认结果（Commit或是Rollback），服务端收到确认结果后处理逻辑如下：")]),v._v(" "),_("ul",[_("li",[v._v("二次确认结果为Commit：服务端将半事务消息标记为可投递，并投递给消费者。")]),v._v(" "),_("li",[v._v("二次确认结果为Rollback：服务端将回滚事务，不会将半事务消息投递给消费者。")])])]),v._v(" "),_("li",[_("p",[v._v("在断网或者是生产者应用重启的特殊情况下，若服务端未收到发送者提交的二次确认结果，或服务端收到的二次确认结果为Unknown未知状态，经过固定时间后，服务端将对消息生产者即生产者集群中任一生产者实例发起消息回查。")])])]),v._v(" "),_("p",[_("strong",[v._v("事务消息回查步骤如下：")])]),v._v(" "),_("ol",[_("li",[v._v("生产者收到消息回查后，需要检查对应消息的本地事务执行的最终结果。")]),v._v(" "),_("li",[v._v("生产者根据检查得到的本地事务的最终状态再次提交二次确认，服务端仍按照步骤4对半事务消息进行处理。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/zS54uh.jpg",alt:"zS54uh"}})]),v._v(" "),_("h4",{attrs:{id:"本地消息表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地消息表"}},[v._v("#")]),v._v(" 本地消息表")]),v._v(" "),_("p",[v._v("有时候我们⽬前的MQ组件并不⽀持事务消息，或者我们想尽量少的侵⼊业务⽅。这时我们需要另外⼀种⽅案——基于DB本地消息表。")]),v._v(" "),_("p",[v._v("本地消息表最初由eBay 提出来解决分布式事务的问题。是⽬前业界使⽤的⽐较多的⽅案之⼀，它的核⼼思想就是将分布式事务拆分成本地事务进⾏处理。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20200825135927900.png",alt:"20200825135927900"}})]),v._v(" "),_("p",[_("strong",[v._v("发送消息⽅：")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("需要有⼀个消息表，记录着消息状态相关信息。")])]),v._v(" "),_("li",[_("p",[v._v("业务数据和消息表在同⼀个数据库，要保证它俩在同⼀个本地事务。直接利⽤本地事务，将业务数据和事务消息直接写⼊数据库。")])]),v._v(" "),_("li",[_("p",[v._v("在本地事务中处理完业务数据和写消息表操作后，通过写消息到 MQ 消息队列。")])]),v._v(" "),_("li",[_("p",[v._v("使⽤专⻔的投递⼯作线程进⾏事务消息投递到MQ，根据投递ACK去删除事务消息表记录消息会发到消息消费⽅，如果发送失败，即进⾏重试。")])])]),v._v(" "),_("p",[_("strong",[v._v("消息消费⽅：")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("处理消息队列中的消息，完成⾃⼰的业务逻辑。")])]),v._v(" "),_("li",[_("p",[v._v("如果本地事务处理成功，则表明已经处理成功了。")])]),v._v(" "),_("li",[_("p",[v._v("如果本地事务处理失败，那么就会重试执⾏。")])]),v._v(" "),_("li",[_("p",[v._v("如果是业务层⾯的失败，给消息⽣产⽅发送⼀个业务补偿消息，通知进⾏回滚等操作。")])])]),v._v(" "),_("p",[_("strong",[v._v("需要注意的问题:")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("业务主动⽅在完成业务处理后，向业务被动⽅(第三⽅系统)发送通知消息，允许存在消息丢失。")])]),v._v(" "),_("li",[_("p",[v._v("业务主动⽅提供递增多挡位时间间隔(5min、10min、30min、1h、24h)，⽤于失败重试调⽤业务被动⽅的接⼝；在通知N次之后就不再通知，报警+记⽇志+⼈⼯介⼊。")])]),v._v(" "),_("li",[_("p",[v._v("业务被动⽅提供幂等的服务接⼝，防⽌通知重复消费。")])]),v._v(" "),_("li",[_("p",[v._v("业务主动⽅需要有定期校验机制，对业务数据进⾏兜底；防⽌业务被动⽅⽆法履⾏责任时进⾏业务回滚，确保数据最终⼀致性。")])])]),v._v(" "),_("p"),v._v(" "),_("h4",{attrs:{id:"mq事务消息-vs-本地消息表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mq事务消息-vs-本地消息表"}},[v._v("#")]),v._v(" MQ事务消息 VS 本地消息表")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("⼆者的共性：")]),v._v(" "),_("p",[v._v("1、 事务消息都依赖MQ进⾏事务通知，所以都是异步的。")]),v._v(" "),_("p",[v._v("2、 事务消息在投递⽅都是存在重复投递的可能，需要有配套的机制去降低重复投递率，实现更友好的消息投递去重。")]),v._v(" "),_("p",[v._v("3、 事务消息的消费⽅，因为投递重复的⽆法避免，因此需要进⾏消费去重设计或者服务幂等设计。")])]),v._v(" "),_("li",[_("p",[v._v("⼆者的区别：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("MQ事务消息：")]),v._v(" "),_("p",[v._v("需要MQ⽀持半消息机制或者类似特性，在重复投递上具有⽐较好的去重处理；")]),v._v(" "),_("p",[v._v("具有⽐较⼤的业务侵⼊性，需要业务⽅进⾏改造，提供对应的本地操作成功的回查功能；")])]),v._v(" "),_("li",[_("p",[v._v("DB本地消息表：")]),v._v(" "),_("p",[v._v("使⽤了数据库来存储事务消息，降低了对MQ的要求，但是增加了存储成本；")]),v._v(" "),_("p",[v._v("事务消息使⽤了异步投递，增⼤了消息重复投递的可能性；")])])])])]),v._v(" "),_("h2",{attrs:{id:"通知型事务的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通知型事务的问题"}},[v._v("#")]),v._v(" 通知型事务的问题")]),v._v(" "),_("p",[v._v("通知型事务，是⽆法解决本地事务执⾏和消息发送的⼀致性问题的。")]),v._v(" "),_("p",[v._v("因为消息发送是⼀个⽹络通信的过程，发送消息的过程就有可能出现发送失败、或者超时的情况。超时有可能发送成功了，有可能发送失败了，消息的发送⽅是⽆法确定的，所以此时消息发送⽅⽆论是提交事务还是回滚事务，都有可能不⼀致性出现。")]),v._v(" "),_("h3",{attrs:{id:"消息发送一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息发送一致性"}},[v._v("#")]),v._v(" 消息发送⼀致性")]),v._v(" "),_("p",[v._v("消息中间件在分布式系统中的核⼼作⽤就是异步通讯、应⽤解耦和并发缓冲（也叫作流量削峰）。在分布式环境下，需要通过⽹络进⾏通讯，就引⼊了数据传输的不确定性，也就是CAP理论中的分区容错性。")]),v._v(" "),_("p",[v._v("消息发送⼀致性是指产⽣消息的业务动作与消息发送动作⼀致，也就是说如果业务操作成功，那么由这个业务操作所产⽣的消息⼀定要发送出去，否则就丢失。")]),v._v(" "),_("h4",{attrs:{id:"常规mq消息处理流程和特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常规mq消息处理流程和特点"}},[v._v("#")]),v._v(" 常规MQ消息处理流程和特点")]),v._v(" "),_("p",[v._v("常规的MQ队列处理流程⽆法实现消息的⼀致性。所以，需要借助半消息、本地消息表，保障⼀致性。")]),v._v(" "),_("h3",{attrs:{id:"消息重复投递和业务幂等性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息重复投递和业务幂等性"}},[v._v("#")]),v._v(" 消息重复投递和业务幂等性")]),v._v(" "),_("p",[v._v("对于未确认的消息，采⽤按规则重新投递的⽅式进⾏处理。")]),v._v(" "),_("p",[v._v("对于以上流程，消息重复发送会导致业务处理接⼝出现重复调⽤的问题。消息消费过程中消息重复发送的主要原因就是消费者成功接收处理完消息后，消息中间件没有及时更新投递状态导致的。")]),v._v(" "),_("p",[v._v("如果允许消息重复发送，那么消费⽅应该实现业务接⼝的幂等性设计。")]),v._v(" "),_("h2",{attrs:{id:"补偿型事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补偿型事务"}},[v._v("#")]),v._v(" 补偿型事务")]),v._v(" "),_("blockquote",[_("p",[v._v("但是基于消息实现的事务并不能解决所有的业务场景，例如以下场景：某笔订单完成时，同时扣掉⽤户的现⾦。")])]),v._v(" "),_("p",[v._v("这⾥事务发起⽅是管理订单库的服务，但对整个事务是否提交并不能只由订单服务决定，因为还要确保⽤户有⾜够的钱，才能完成这笔交易，⽽这个信息在管理现⾦的服务⾥。这⾥我们可以引⼊基于补偿实现的事务，其流程如下：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("创建订单数据，但暂不提交本地事务")])]),v._v(" "),_("li",[_("p",[v._v("订单服务发送远程调⽤到现⾦服务，以扣除对应的⾦额")])]),v._v(" "),_("li",[_("p",[v._v("上述步骤成功后提交订单库的事务")])])]),v._v(" "),_("p",[v._v("以上这个是正常成功的流程，异常流程需要回滚的话，将额外发送远程调⽤到现⾦服务以加上之前扣掉的⾦额。")]),v._v(" "),_("p",[v._v("以上流程⽐基于消息队列实现的事务的流程要复杂，同时开发的⼯作量也更多：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("编写订单服务⾥创建订单的逻辑")])]),v._v(" "),_("li",[_("p",[v._v("编写现⾦服务⾥扣钱的逻辑")])]),v._v(" "),_("li",[_("p",[v._v("编写现⾦服务⾥补偿返还的逻辑")])])]),v._v(" "),_("p",[v._v("可以看到，该事务流程相对于基于消息实现的分布式事务更为复杂，需要额外开发相关的业务回滚⽅法，也失去了服务间流量削峰填⾕的功能。")]),v._v(" "),_("p",[v._v("但其仅仅只⽐基于消息的事务复杂多⼀点，若不能使⽤基于消息队列的最终⼀致性事务，那么可以优先考虑使⽤基于补偿的事务形态。")]),v._v(" "),_("blockquote",[_("p",[v._v("补偿模式使⽤⼀个额外的协调服务来协调各个需要保证⼀致性的业务服务，协调服务按顺序调⽤各个业务微服务，如果某个业务服务调⽤异常（包括业务异常和技术异常）就取消之前所有已经调⽤成功的业务服务。")])]),v._v(" "),_("p",[v._v("补偿模式也大致分为两大类:")]),v._v(" "),_("ul",[_("li",[v._v("TCC事务模型")]),v._v(" "),_("li",[v._v("Sega模型")])]),v._v(" "),_("h3",{attrs:{id:"tcc-事务模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcc-事务模型"}},[v._v("#")]),v._v(" TCC 事务模型")]),v._v(" "),_("p",[v._v("TCC（Try-Confirm-Cancel）的概念来源于 Pat Helland 发表的⼀篇名为“Life beyond Distributed Transactions:an Apostate’s Opinion”的论⽂。")]),v._v(" "),_("p",[v._v("TCC 分布式事务模型包括三部分：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("主业务服务：主业务服务为整个业务活动的发起⽅，服务的编排者，负责发起并完成整个业务活动。")])]),v._v(" "),_("li",[_("p",[v._v("从业务服务：从业务服务是整个业务活动的参与⽅，负责提供 TCC 业务操作，实现初步操作(Try)、确认操作(Confirm)、取消操作(Cancel)三个接⼝，供主业务服务调⽤。")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20210710092138838.png",alt:"20210710092138838"}})]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("业务活动管理器：业务活动管理器管理控制整个业务活动，包括记录维护 TCC 全局事务的事务状态和每个从业务服务的⼦事务状态，并在业务活动提交时调⽤所有从业务服务的 Confirm 操作，在业务活动取消时调⽤所有从业务服务的 Cancel 操作。")])]),v._v(" "),_("blockquote",[_("p",[v._v("TCC 提出了⼀种新的事务模型，基于业务层⾯的事务定义，锁粒度完全由业务⾃⼰控制，⽬的是解决复杂业务中，跨表跨库等⼤颗粒度资源锁定的问题。")]),v._v(" "),_("p",[v._v("TCC 把事务运⾏过程分成 Try、Confirm / Cancel 两个阶段，每个阶段的逻辑由业务代码控制，避免了⻓事务，可以获取更⾼的性能。")])]),v._v(" "),_("h4",{attrs:{id:"工作流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[v._v("#")]),v._v(" 工作流程")]),v._v(" "),_("p",[v._v("TCC(Try-Confirm-Cancel)分布式事务模型相对于 XA 等传统模型，其特征在于它不依赖资源管理器(RM)对分布式事务的⽀持，⽽是通过对业务逻辑的分解来实现分布式事务。")]),v._v(" "),_("p",[v._v("TCC 模型认为对于业务系统中⼀个特定的业务逻辑，其对外提供服务时，必须接受⼀些不确定性，即对业务逻辑初步操作的调⽤仅是⼀个临时性操作，调⽤它的主业务服务保留了后续的取消权。如果主业务服务认为全局事务应该回滚，它会要求取消之前的临时性操作，这就对应从业务服务的取消操作。")]),v._v(" "),_("p",[v._v("⽽当主业务服务认为全局事务应该提交时，它会放弃之前临时性操作的取消权，这对应从业务服务的确认操作。每⼀个初步操作，最终都会被确认或取消。")]),v._v(" "),_("p",[v._v("因此，针对⼀个具体的业务服务，TCC 分布式事务模型需要业务系统提供三段业务逻辑：")]),v._v(" "),_("ul",[_("li",[v._v("初步操作 Try：完成所有业务检查，预留必须的业务资源。")]),v._v(" "),_("li",[v._v("确认操作 Confirm：真正执⾏的业务逻辑，不作任何业务检查，只使⽤ Try阶段预留的业务资源。因此，只要 Try操作成功，Confirm 必须能成功。另外，Confirm 操作需满⾜幂等性，保证⼀笔分布式事务有且只能成功⼀次")]),v._v(" "),_("li",[v._v("取消操作 Cancel：释放 Try 阶段预留的业务资源。同样的，Cancel 操作也需要满⾜幂等性。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/1bf0b27725f150295091457167_1001046.png",alt:"1bf0b27725f150295091457167_1001046"}})]),v._v(" "),_("p",[_("strong",[v._v("Try 阶段失败可以 Cancel，如果 Confirm 和 Cancel 阶段失败了怎么办？")])]),v._v(" "),_("p",[v._v("TCC 中会添加事务⽇志，如果 Confirm 或者 Cancel 阶段出错，则会进⾏重试，所以这两个阶段需要⽀持幂等；")]),v._v(" "),_("p",[v._v("如果重试失败，则需要⼈⼯介⼊进⾏恢复和处理等。")]),v._v(" "),_("h3",{attrs:{id:"tcc事务模型-vs-dtp事务模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcc事务模型-vs-dtp事务模型"}},[v._v("#")]),v._v(" TCC事务模型 VS DTP事务模型")]),v._v(" "),_("p",[v._v("⽐较⼀下TCC事务模型和DTP事务模型，如下所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20191210222510796.png",alt:"20191210222510796"}})]),v._v(" "),_("p",[v._v("1、TCC模型中的 "),_("code",[v._v("主业务服务")]),v._v(" 相当于 DTP模型中的"),_("code",[v._v("AP")]),v._v("，TCC模型中的"),_("code",[v._v("从业务服务")]),v._v(" 相当于 DTP模型中的"),_("code",[v._v("RM")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("在DTP模型中，应⽤AP操作多个资源管理器RM上的资源；")])]),v._v(" "),_("li",[_("p",[v._v("在TCC模型中，是主业务服务操作多个从业务服务上的资源。")]),v._v(" "),_("blockquote",[_("p",[v._v("例如航班预定案例中，美团App就是主业务服务，⽽川航和东航就是从业务服务，主业务服务需要使⽤从业务服务上的机票资源。")]),v._v(" "),_("p",[v._v("不同的是DTP模型中的资源提供者是类似于Mysql这种关系型数据库，⽽TCC模型中资源的提供者是其他业务服务。")])])])]),v._v(" "),_("p",[v._v("2、TCC模型中，从业务服务提供的"),_("code",[v._v("try")]),v._v("、"),_("code",[v._v("confirm")]),v._v("、"),_("code",[v._v("cancel")]),v._v("接⼝ 相当于DTP模型中RM提供的"),_("code",[v._v("prepare")]),v._v("、"),_("code",[v._v("commit")]),v._v("、"),_("code",[v._v("rollback")]),v._v("接⼝")]),v._v(" "),_("ul",[_("li",[v._v("XA协议中规定了DTP模型中定RM需要提供"),_("code",[v._v("prepare")]),v._v("、"),_("code",[v._v("commit")]),v._v("、"),_("code",[v._v("rollback")]),v._v("接⼝给TM调⽤，以实现两阶段提交。")]),v._v(" "),_("li",[v._v("在TCC模型中，从业务服务相当于"),_("code",[v._v("RM")]),v._v("，提供了类似的"),_("code",[v._v("try")]),v._v("、"),_("code",[v._v("confirm")]),v._v("、"),_("code",[v._v("cancel")]),v._v("接⼝。")])]),v._v(" "),_("p",[v._v("TCC是可以解决部分场景下的分布式事务的，但是，它的⼀个问题在于，需要每个参与者都分别实现Try，Confirm和Cancel接⼝及逻辑，这对于业务的侵⼊性是巨⼤的。")]),v._v(" "),_("p",[v._v("TCC ⽅案严重依赖回滚和补偿代码，最终的结果是：回滚代码逻辑复杂，业务代码很难维护。所以，TCC ⽅案的使⽤场景较少，但是也有使⽤的场景。")]),v._v(" "),_("p",[v._v("⽐如说跟钱打交道的，⽀付、交易相关的场景，⼤家会⽤ TCC⽅案，严格保证分布式事务要么全部成功，要么全部⾃动回滚，严格保证资⾦的正确性，保证在资⾦上不会出现问题。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/20201102225620490.jpg",alt:"20201102225620490"}})]),v._v(" "),_("h3",{attrs:{id:"sega事务模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sega事务模型"}},[v._v("#")]),v._v(" Sega事务模型")]),v._v(" "),_("p",[v._v("SAGA可以看做⼀个异步的、利⽤队列实现的补偿事务。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://image.ztianzeng.com/uPic/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444"}})]),v._v(" "),_("h4",{attrs:{id:"相关概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[v._v("#")]),v._v(" 相关概念")]),v._v(" "),_("p",[v._v("1987年普林斯顿⼤学的Hector Garcia-Molina和Kenneth Salem发表了⼀篇Paper Sagas，讲述的是如何处理long lived transaction（⻓活事务）。")]),v._v(" "),_("p",[v._v("Saga是⼀个⻓活事务可被分解成可以交错运⾏的⼦事务集合。其中每个⼦事务都是⼀个保持数据库⼀致性的真实事务。")]),v._v(" "),_("p",[v._v("论⽂地址："),_("a",{attrs:{href:"https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf",target:"_blank",rel:"noopener noreferrer"}},[v._v("sagas"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("Saga模型是把⼀个分布式事务拆分为多个本地事务，每个本地事务都有相应的执⾏模块和补偿模块（对应TCC中的Confirm和Cancel），当Saga事务中任意⼀个本地事务出错时，可以通过调⽤相关的补偿⽅法恢复之前的事务，达到事务最终⼀致性。")]),v._v(" "),_("p",[v._v("这样的SAGA事务模型，是牺牲了⼀定的隔离性和⼀致性的，但是提⾼了长事务的可⽤性。")]),v._v(" "),_("h4",{attrs:{id:"组成部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组成部分"}},[v._v("#")]),v._v(" 组成部分")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("LLT（Long Live Transaction）：由⼀个个本地事务组成的事务链。")])]),v._v(" "),_("li",[_("p",[v._v("本地事务：事务链由⼀个个⼦事务（本地事务）组成，LLT = T1+T2+T3+...+Ti。")])]),v._v(" "),_("li",[_("p",[v._v("补偿：每个本地事务 Ti 有对应的补偿 Ci。")])])]),v._v(" "),_("p"),v._v(" "),_("h4",{attrs:{id:"执行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[v._v("#")]),v._v(" 执⾏顺序")]),v._v(" "),_("p",[v._v("sega 有两种执行顺序:")]),v._v(" "),_("ol",[_("li",[v._v("T1, T2, T3, ..., Tn")]),v._v(" "),_("li",[v._v("T1, T2, ..., Tj, Cj,..., C2, C1，其中0 < j < n")])]),v._v(" "),_("p",[v._v("如果没有出异常的话，就按照第一种执行顺序向下执行即可，如果出现了异常需要通过逆向操作将之前的事务进行回滚")]),v._v(" "),_("h4",{attrs:{id:"恢复策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复策略"}},[v._v("#")]),v._v(" 恢复策略")]),v._v(" "),_("ul",[_("li",[v._v("向后恢复（Backward Recovery）：撤销掉之前所有成功⼦事务。如果任意本地⼦事务失败，则补偿已完成的事务。如异常情况的执⾏顺序T1,T2,T3,..Ti,Ci,...C3,C2,C1。")]),v._v(" "),_("li",[v._v("向前恢复（Forward Recovery）：即重试失败的事务，适⽤于必须要成功的场景，该情况下不需要Ci。执⾏顺序：T1,T2,...,Tj（失败）,Tj（重试）,...,Ti。")])]),v._v(" "),_("p",[v._v("向前恢复没有必要提供补偿事务，如果你的业务中，⼦事务（最终）总会成功，或补偿事务难以定义或不可能，向前恢复更符合你的需求。")]),v._v(" "),_("p",[v._v("理论上补偿事务永不失败，然⽽，在分布式世界中，服务器可能会宕机，⽹络可能会失败，甚⾄数据中⼼也可能会停电。在这种情况下我们能做些什么？ 最后的⼿段是提供回退措施，⽐如⼈⼯⼲预。")]),v._v(" "),_("h4",{attrs:{id:"使用条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用条件"}},[v._v("#")]),v._v(" 使用条件")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("Saga只允许两个层次的嵌套，顶级的Saga和简单⼦事务")])]),v._v(" "),_("li",[_("p",[v._v("saga可能会看到其他saga的部分结果")])]),v._v(" "),_("li",[_("p",[v._v("每个⼦事务应该是独立的原⼦⾏为")])]),v._v(" "),_("li",[_("p",[v._v("在我们的业务场景下，各个业务环境（如：航班预订、租⻋、酒店预订和付款）是⾃然独⽴的⾏为，⽽且每个事务都可以⽤对应服务的数据库保证原⼦操作。")])])]),v._v(" "),_("p",[_("strong",[v._v("补偿也有需考虑的事项：")])]),v._v(" "),_("p",[v._v("补偿事务从语义⻆度撤消了事务Ti的⾏为，但未必能将数据库返回到执⾏Ti时的状态。（例如，如果事务触发导弹发射， 则可能⽆法撤消此操作）")]),v._v(" "),_("p",[v._v("但这对我们的业务来说不是问题。其实难以撤消的⾏为也有可能被补偿。例如，发送邮件的事务可以通过发送解释问题的另⼀封邮件来补偿。")]),v._v(" "),_("h4",{attrs:{id:"对于acid的保证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对于acid的保证"}},[v._v("#")]),v._v(" 对于ACID的保证")]),v._v(" "),_("p",[v._v("Saga对于ACID的保证和TCC⼀样：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("原⼦性（Atomicity）：正常情况下保证。")])]),v._v(" "),_("li",[_("p",[v._v("⼀致性（Consistency），在某个时间点，会出现A库和B库的数据违反⼀致性要求的情况，但是最终是⼀致的。")])]),v._v(" "),_("li",[_("p",[v._v("隔离性（Isolation），在某个时间点，A事务能够读到B事务部分提交的结果。")])]),v._v(" "),_("li",[_("p",[v._v("持久性（Durability），和本地事务⼀样，只要commit则数据被持久。")])])]),v._v(" "),_("h3",{attrs:{id:"saga和tcc对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#saga和tcc对比"}},[v._v("#")]),v._v(" Saga和TCC对⽐")]),v._v(" "),_("p",[v._v("Saga相⽐TCC的缺点是缺少预留动作，导致补偿动作的实现⽐较麻烦：Ti就是commit，⽐如⼀个业务是发送邮件，在TCC模式下，先保存草稿（Try）再发送（Confirm），撤销的话直接删除草稿（Cancel）就⾏了。")]),v._v(" "),_("p",[v._v("⽽Saga则就直接发送邮件了（Ti），如果要撤销则得再发送⼀份邮件说明撤销（Ci），实现起来有⼀些麻烦。")]),v._v(" "),_("p"),v._v(" "),_("p",[v._v("如果把上⾯的发邮件的例⼦换成：")]),v._v(" "),_("p",[v._v("A服务在完成Ti后⽴即发送Event到ESB（企业服务总线，可以认为是⼀个消息中间件），下游服务监听到这个Event做⾃⼰的⼀些⼯作然后再发送Event到ESB，如果A服务执⾏补偿动作Ci，那么整个补偿动作的层级就很深。")]),v._v(" "),_("p"),v._v(" "),_("p",[v._v("不过没有预留动作也可以认为是优点")]),v._v(" "),_("p",[v._v("有些业务很简单，套⽤TCC需要修改原来的业务逻辑，⽽Saga只需要添加⼀个补偿动作就⾏了。")]),v._v(" "),_("p",[v._v("TCC最少通信次数为2n，⽽Saga为n（n=sub-transaction的数量）。")]),v._v(" "),_("p",[v._v("有些第三⽅服务没有Try接⼝，TCC模式实现起来就⽐较困难了，⽽Saga则很简单。")]),v._v(" "),_("p",[v._v("没有预留动作就意味着不必担⼼资源释放的问题，异常处理起来也更简单。")]),v._v(" "),_("p")])}),[],!1,null,null,null);_.default=i.exports}}]);