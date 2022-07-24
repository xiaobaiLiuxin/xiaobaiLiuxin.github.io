(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{636:function(s,a,n){"use strict";n.r(a);var t=n(17),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"what"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[s._v("#")]),s._v(" WHAT")]),s._v(" "),n("p",[s._v("Redis 事务允许一次性执行多个命令，其本质上是 一组命令的集合。一个事务中的所有命令都会序列化，"),n("strong",[s._v("按顺序地串行执行而不会被其他命令插入，不允许加塞。")])]),s._v(" "),n("h3",{attrs:{id:"官网介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#官网介绍"}},[s._v("#")]),s._v(" 官网介绍")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211127102900.png",alt:"image-20211127102859979"}})]),s._v(" "),n("h2",{attrs:{id:"can"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#can"}},[s._v("#")]),s._v(" CAN")]),s._v(" "),n("p",[s._v("一个队列中，一次性、顺序性、排他性地执行一系列命令")]),s._v(" "),n("h2",{attrs:{id:"how"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[s._v("#")]),s._v(" HOW")]),s._v(" "),n("h3",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("ul",[n("li",[s._v("DISCARED ：取消事务，放弃执行事务块内所有命令")]),s._v(" "),n("li",[s._v("EXEC ： 执行所有事务块内的命令")]),s._v(" "),n("li",[s._v("MULTI ： 标记一个事务块的开始")]),s._v(" "),n("li",[s._v("UNWATCH ： 取消 WATCH 命令对所有 KEY 的监视")]),s._v(" "),n("li",[s._v("WATCH key [key] ： 监视一个（或多个）key，如果在事务执行之前这个（或这些）key 被其他命令所改动，那么事务将被打断。")])]),s._v(" "),n("h3",{attrs:{id:"执行策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行策略"}},[s._v("#")]),s._v(" 执行策略")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("正常执行")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清空数据库")]),s._v("\nflushdb\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标记事务开始")]),s._v("\nMULTI\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置id值为12")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取id的值")]),s._v("\nget "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对k1的值进行加1操作")]),s._v("\nincr k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对k1的值进行加1操作")]),s._v("\nincr k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取k1的值")]),s._v("\nget k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行事务内所有命令")]),s._v("\nEXEC\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("img",{attrs:{src:"C:/Users/20689/AppData/Roaming/Typora/typora-user-images/image-20211126110541082.png",alt:"image-20211126110541082"}})]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("放弃事务")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("MULTI\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置name值为xiaobai")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name xiaobai\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置age值为18")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对k1的值进行加1操作")]),s._v("\nincr k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#放弃执行事务块的所有命名")]),s._v("\ndiscard\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有键值")]),s._v("\nkeys *\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126111445.png",alt:"image-20211126111444560"}})]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("全体连坐")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有键值")]),s._v("\nMULTL\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置name值为xiaobai")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name xiaobai\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看name的值")]),s._v("\nget name \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对k1的值进行加1操作")]),s._v("\nincr k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看k1的值")]),s._v("\nget k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置email值，故意不传参")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" email \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行事务块中所有命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有键值")]),s._v("\nkeys *\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126112209.png",alt:"image-20211126112208784"}})]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("冤头债主")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有键值")]),s._v("\nMULTL\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置name值为xiaobai")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name xiaobai\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置age值为18")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置email值为xiaobai@qq.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" email xiaobai@qq.com\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#故意对email的值进行加1操作")]),s._v("\nincr k1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看age的值")]),s._v("\nget age\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行事务块中所有命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126114033.png",alt:"image-20211126114033253"}})]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("WATCH 监控")])])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("悲观锁、乐观锁、CAS")])]),s._v(" "),n("p",[s._v("悲观锁：每次拿数据时都认为别人会修改，所以每次拿数据时都上锁。传统关系型数据库中的行锁、表锁，读锁、写锁都是在做操作之前先上锁")]),s._v(" "),n("p",[s._v("乐观锁：每次拿数据时都认为别人不会修改，所以不会上锁，但在更新时会判一下在此期间别人有没有更新这个数据，可以使用版本号等机制。乐观锁适用于多读应用，以提高吞吐量。")])]),s._v(" "),n("p",[n("strong",[s._v("案例")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##初始化信用卡可用余额和欠额")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" debt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmulti\ndecrby balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nincrby debt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126115340.png",alt:"image-20211126115340578"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##无加塞篡改，先监控在开启multi，保证两笔金额变动在同一事务内")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" balance\nmulti\ndecrby balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nincrby debt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126115955.png",alt:"image-20211126115955296"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##有加塞篡改，监控key，如果key被修改了，后面的一个事务的执行失效")]),s._v("\nWATCH balance\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance \nmulti\ndecrby balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\nincrby debt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\nexexc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126120613.png",alt:"image-20211126120613053"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#unwatch,一旦执行了exec之前加的监控锁都会被取消")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" balance\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("350")]),s._v("\nunwatch\nmulti\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" debt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\nget balance\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126123116.png",alt:"image-20211126123115828"}})]),s._v(" "),n("h3",{attrs:{id:"_3-阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-阶段"}},[s._v("#")]),s._v(" 3 阶段")]),s._v(" "),n("p",[s._v("开启：以 MULTI 开始一个事务")]),s._v(" "),n("p",[s._v("入队：将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的队列里边")]),s._v(" "),n("p",[s._v("执行：有 EXEC 命令触发事务")]),s._v(" "),n("h3",{attrs:{id:"_3-特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-特性"}},[s._v("#")]),s._v(" 3 特性")]),s._v(" "),n("ul",[n("li",[s._v("单独的隔离操作：事务中的所有命令都会序列化，按顺序地执行。事务在执行过程中，不会被其他客户端发送来的命令请求所打断。")]),s._v(" "),n("li",[s._v("没有隔离级别的概念：队列中的命令没有提交之前都不会实际的被执行，因为事务提交之前任务指令多不会被实际执行，也就不存在”事务内的查询要看到事务里的更新，在事务外查询不能看到“这个让人万分头疼的问题。")]),s._v(" "),n("li",[s._v("不保证原子性：Redis 同一个事务中如果有一条命令执行失败，其后的命令仍然会被执行，没有回滚。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);