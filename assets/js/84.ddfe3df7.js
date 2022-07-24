(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{635:function(a,t,s){"use strict";s.r(t);var r=s(17),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"总体介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总体介绍"}},[a._v("#")]),a._v(" 总体介绍")]),a._v(" "),s("p",[a._v("贴图官网介绍，详见 "),s("a",{attrs:{href:"http://www.redis.cn/topics/persistence.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126145008.png",alt:"image-20211126145008394"}})]),a._v(" "),s("h2",{attrs:{id:"rdb-redis-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-redis-database"}},[a._v("#")]),a._v(" RDB ( Redis DataBase )")]),a._v(" "),s("h3",{attrs:{id:"官网介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网介绍"}},[a._v("#")]),a._v(" 官网介绍")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126145149.png",alt:"image-20211126145149080"}})]),a._v(" "),s("h3",{attrs:{id:"what"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[a._v("#")]),a._v(" WHAT")]),a._v(" "),s("p",[a._v("RDB 在指定的时间间隔内中的数据集快照写入磁盘，也就是行话讲的 Snapshot 快照，它恢复时是将快照文件直接读到内存里。")]),a._v(" "),s("p",[a._v("Redis 会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程中都结束后，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程不进行任何 IO 操作，这就确保了极高的性能。")]),a._v(" "),s("p",[a._v("如果需要进行大规模的数据恢复，且对于数据恢复的完整性不是非常敏感。那 RDB 方式要比 AOF 方式更加高效。RDB 的缺点是最后一次持久化后的数据库可能丢失。")]),a._v(" "),s("h3",{attrs:{id:"fork"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[a._v("#")]),a._v(" Fork")]),a._v(" "),s("p",[a._v("Fork 的作用是复制一个与当前进程中一样的进程。新进程的所有数据（变量、环境变量、程序计数器等）数值和原进程一致，但是一个全新的进程，并作为原进程的子进程。")]),a._v(" "),s("h3",{attrs:{id:"rdb-快照文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-快照文件"}},[a._v("#")]),a._v(" RDB 快照文件")]),a._v(" "),s("p",[a._v("RDB 保存的快照文件为 dump.rdb 文件")]),a._v(" "),s("h3",{attrs:{id:"rdb-配置位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-配置位置"}},[a._v("#")]),a._v(" RDB 配置位置")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126152338.png",alt:"image-20211126152337976"}})]),a._v(" "),s("h3",{attrs:{id:"rdb-触发快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-触发快照"}},[a._v("#")]),a._v(" RDB 触发快照")]),a._v(" "),s("p",[a._v("根据配置文件中的默认快照配置的触发条件，当修改次数到达配置的 次数时，RDB 会在后台自动生成 dump.rdb 文件。为了防止快照文件意外损坏，我们习惯性将备份文件拷贝至另一台服务器中。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126160413.png",alt:"image-20211126160413398"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126164233.png",alt:"image-20211126164233209"}})]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使用配置文件启动Redis")]),a._v("\nredis-server /opt/redis-6.2.6/redis.conf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126161012.png",alt:"image-20211126161012190"}})]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看/usr/local/bin目录下的所有文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#连接Redis客户端")]),a._v("\nredis-cli -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#120s内对数据库进行10次操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" k1 v1\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看/usr/local/bin目录下的所有文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126164841.png",alt:"image-20211126164840818"}})]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#进行容灾备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" dump.rdb dump_bak.rdb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("strong",[a._v("命令save 和 bgsava")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("save：只管保存，执行 save 时其他操作会全部阻塞")])]),a._v(" "),s("li",[s("p",[a._v("bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求。可以通过 lastsave 命令获取最后一次成功执行快照的时间。")])])]),a._v(" "),s("p",[a._v("当执行 flush 命令时，RDB 也会产生 dump.rdb 文件，但里面是空的，无意义。")]),a._v(" "),s("h3",{attrs:{id:"rdb-快照恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-快照恢复"}},[a._v("#")]),a._v(" RDB 快照恢复")]),a._v(" "),s("p",[s("strong",[a._v("恢复前")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126174750.png",alt:"image-20211126174749915"}})]),a._v(" "),s("p",[s("strong",[a._v("恢复后")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126174723.png",alt:"image-20211126174723392"}})]),a._v(" "),s("h3",{attrs:{id:"rdb-优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-优势"}},[a._v("#")]),a._v(" RDB 优势")]),a._v(" "),s("ul",[s("li",[a._v("适合大规模数据恢复；")]),a._v(" "),s("li",[a._v("对数据完整性和一致性要求不高。")])]),a._v(" "),s("h3",{attrs:{id:"rdb-劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-劣势"}},[a._v("#")]),a._v(" RDB 劣势")]),a._v(" "),s("ul",[s("li",[a._v("在一定间隔时间做一次备份，所以如果 Redis 意外宕机，就会丢失最后一次快照后的所有修改；")]),a._v(" "),s("li",[a._v("Fork 时，内存数据被复制，需要考虑 2 倍内存的膨胀问题。")])]),a._v(" "),s("h3",{attrs:{id:"reb-停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reb-停止"}},[a._v("#")]),a._v(" REB 停止")]),a._v(" "),s("p",[a._v('动态停止所有 RDB 保存规则的方法：redis-cli config set save ""')]),a._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126181228.png",alt:"image-20211126181227993"}})]),a._v(" "),s("h2",{attrs:{id:"aof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[a._v("#")]),a._v(" AOF")]),a._v(" "),s("h3",{attrs:{id:"官网介绍-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网介绍-2"}},[a._v("#")]),a._v(" 官网介绍")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126181435.png",alt:"image-20211126181434886"}})]),a._v(" "),s("h3",{attrs:{id:"wath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wath"}},[a._v("#")]),a._v(" WATH")]),a._v(" "),s("ul",[s("li",[a._v("AOF 以日志的形式来记录每一个操作，将 Redis 执行过的所有写指令记录下来（读操作不记录），只许追加文件但不可以改写文件，Redis 启动之初会读取该文件重新构建数据。换而言之，redis 重启后会根据日志文件内容将写指令从前到后执行一次以完成数据的恢复工作。")])]),a._v(" "),s("h3",{attrs:{id:"aof-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-文件"}},[a._v("#")]),a._v(" AOF 文件")]),a._v(" "),s("p",[a._v("AOF 保存的文件是 appendonly.aof 文件")]),a._v(" "),s("h3",{attrs:{id:"配置位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置位置"}},[a._v("#")]),a._v(" 配置位置")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126182509.png",alt:"image-20211126182509355"}})]),a._v(" "),s("h3",{attrs:{id:"aof-启动、修复和恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-启动、修复和恢复"}},[a._v("#")]),a._v(" AOF 启动、修复和恢复")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("正常启动")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("启动：修改配置文件，将默认的 appendonly no 改为 appendonly yes")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211127120036.png",alt:"image-20211127120036080"}})])]),a._v(" "),s("li",[s("p",[a._v("备份：将有数据的 aof 文件复制一份保存到对应的目录（config get dir）")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211127122337.png",alt:"image-20211127122336504"}})])]),a._v(" "),s("li",[s("p",[a._v("恢复：重启 redis 然后重新加载")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211127124028.png",alt:"image-20211127124028233"}})])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("异常启动")])]),a._v(" "),s("ol",[s("li",[a._v("启动：修改配置文件，将默认的 appendonly no 改为 appendonly yes")]),a._v(" "),s("li",[a._v("备份：备份被写坏的文件")]),a._v(" "),s("li",[a._v("修复：执行 Redis-check-aof --fix 进行修复")]),a._v(" "),s("li",[a._v("恢复：重启 Redis 然后重新加载")])])])]),a._v(" "),s("h3",{attrs:{id:"rewrite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rewrite"}},[a._v("#")]),a._v(" Rewrite")]),a._v(" "),s("p",[s("strong",[a._v("简介")])]),a._v(" "),s("p",[a._v("AOF 采用文件追加方式，文件会越来越大。为避免这种情况，新增了重写机制，当 AOF 文件的大小超过所设定的阈值时，Redis 会启动 AOF 文件的内容压缩，只保留可以恢复的最小指令，可以使用命令 bgrewriteaof。")]),a._v(" "),s("p",[s("strong",[a._v("原理")])]),a._v(" "),s("p",[a._v("AOF 文件持增长而过大是，会 fork 出一条新进程来将文件重写（也是先写临时文件最后再rename），遍历新进程的内存中数据，每条记录有一条 set 语句。重写文件 aof 文件的操作，并没有读取旧的 aof 文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的 aof 文件，这点和快照有点类似。")]),a._v(" "),s("p",[s("strong",[a._v("触发机制")])]),a._v(" "),s("p",[a._v("Redis 会记录上次重写是的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的一倍且文件大于 64M 时触发。")]),a._v(" "),s("h3",{attrs:{id:"aof-优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-优势"}},[a._v("#")]),a._v(" AOF 优势")]),a._v(" "),s("ul",[s("li",[a._v("每修改同步：appendfsync always 同步持久化，每次发生数据变更会被立即记录到磁盘，性能较差但数据完整性比较好")]),a._v(" "),s("li",[a._v("每秒同步：appendfsync everysec 异步操作，每秒记录，如果一秒内宕机，有数据丢失")]),a._v(" "),s("li",[a._v("不同步：appendfsync no 从不同步")])]),a._v(" "),s("h3",{attrs:{id:"aof劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof劣势"}},[a._v("#")]),a._v(" AOF劣势")]),a._v(" "),s("ul",[s("li",[a._v("相同数据集的数据而言，AOF文件要远小于 RDB文件，恢复速度慢于 RDB")]),a._v(" "),s("li",[a._v("AOF效率要慢于 RDB，每秒同步策略效率较好，不同效率和 RDB 相同")])]),a._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("h3",{attrs:{id:"官网建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官网建议"}},[a._v("#")]),a._v(" 官网建议")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211126201809.png",alt:"image-20211126201808849"}})]),a._v(" "),s("h2",{attrs:{id:"rdb-和-aof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof"}},[a._v("#")]),a._v(" RDB 和 AOF")]),a._v(" "),s("p",[s("strong",[a._v("RDB")]),a._v(" 持久化方式能够在指定的时间间隔对你的数据进行快照存储。")]),a._v(" "),s("p",[s("strong",[a._v("AOF")]),a._v(" 持久化方式记录每次对服务器写的操作，当服务器重启后会重新执行这些命令来恢复原始的数据，AOF 命令以 Redis 协议追加保存每次写的操作到文件末尾。 Redis 还能对 AOF 文件进行后台重写，使得 AOF 文件的体积不至于过大。")]),a._v(" "),s("p",[s("strong",[a._v("只做缓存：")]),a._v(" 如果你只希望你的数据在服务器运行时存在，你可以不使用任何持久化方式。")]),a._v(" "),s("p",[s("strong",[a._v("同时开启两种持久化方式：")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("当 redis 重启时会优先载入 AOF 文件来恢复原始数据，因为通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集完成。")])]),a._v(" "),s("li",[s("p",[a._v("RDB 的数据不实时，同时使用两者时服务器重启只会找 AOF 文件。但官方不建议只使用 AOF 文件，因为 RDB 更加适合用于备份数据库（AOF 在不断变化不好备份）、快速重启，而且不会有 AOF 可能潜在的 bug，留着作为以防万一的手段。")])])]),a._v(" "),s("p",[s("strong",[a._v("性能建议：")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("RDB作为后备用用途，建议在 slave 上持久化 RDB 文件，而且只要 15 分钟备份异常就够了，只保留 save 900 1 这一条规则。")])]),a._v(" "),s("li",[s("p",[a._v("如果 Enable AOF，好处是在最恶劣的情况下只会丢失超过两秒的数据，启动脚本叫简单只 load 自己的 AOF 文件就可以了。代价一是带来了持续的 IO；二是 AOF rewrite 的最后将 rewrite 过程中产生的新数据写到新文件造成的阻塞几乎是避免不了的。只需要硬盘许可，应该尽量减少 AOF rewrite 的频率。AOF 重新的基础大小默认 64M 太小，可以设到 5G 以上。默认超过原大小 100% 大小时，重写可以改到适当的数值。")])]),a._v(" "),s("li",[s("p",[a._v("如果不 Enable AOF，仅靠 Master-Slave Replication 实现高可用性也可以，能省掉一大笔 IO 也减少了 rewrite 时带来的系统波动。代价是如果 Master-Slave 同时倒掉，会丢失十几分钟的数据，启动脚本也要比较两个 Master/ Slave 中的 RDB 文件，载入较新的那个。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);