(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{621:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"rpm-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm-简介"}},[s._v("#")]),s._v(" RPM 简介")]),s._v(" "),a("p",[s._v("Redhat Package Manager 简称 RPM，是红帽公司为RHEL开发的专用包管理器。可以实现软件的查询、安装、卸载、升级和验证等功能。")]),s._v(" "),a("h3",{attrs:{id:"rpm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm-安装"}},[s._v("#")]),s._v(" RPM 安装")]),s._v(" "),a("p",[s._v("使用 yumdownloader 命令安装 RPM 命令。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装yu-utils软件")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用yu-utils软件提供的yumdownloader 安装rpm")]),s._v("\nyumdownloader "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"查询-rpm-软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询-rpm-软件包"}},[s._v("#")]),s._v(" 查询 RPM 软件包")]),s._v(" "),a("p",[a("strong",[s._v("-q")]),s._v(" 查询\t\t"),a("strong",[s._v("-a")]),s._v(" 显示所有已安装的软件列表\t\t"),a("strong",[s._v("-f")]),s._v("  显示所属软件包\t\t"),a("strong",[s._v("-l")]),s._v("  显示软件包详情\t\t"),a("strong",[s._v("-i")]),s._v("  显示概要信息")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("查询所有已经安装的软件包")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询所有已经安装的软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122193211.png",alt:"image-20211122193211379"}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("查询文件所属软件包")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看/usr/sbin目录下文件所属软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qf /usr/sbin/httpd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看/usr/bin目录下文件所属软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qf /user/bin/vim\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122192936.png",alt:"image-20211122192936317"}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("查询软件包所包含的文件列表")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看firewalld软件包信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql firewalld-filesystem-0.6.3-11.el7.noarch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122194047.png",alt:"image-20211122194047275"}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("查询软件包概要信息")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看firewalld软件包信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qi firewalld-filesystem-0.6.3-11.el7.noarch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122194352.png",alt:"image-20211122194352559"}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("查询指定软件包是否安装")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看httpd服务器软件包是否安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -q httpd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看tree软件是否安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -q tree\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122200906.png",alt:"image-20211122200906827"}})]),s._v(" "),a("h3",{attrs:{id:"rpm-软件包的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm-软件包的安装"}},[s._v("#")]),s._v(" RPM 软件包的安装")]),s._v(" "),a("p",[s._v("详细步骤如下")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("网络下载：")]),s._v(" 通过网络将文件下载到本地，然后进行安装。推荐下载地址："),a("a",{attrs:{href:"https://pkgs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pkgs.org/"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("光盘挂载：")]),s._v(" 安装使用的软件包存在在我们iso光盘的Package目录下，我们需要首先挂载光盘，获取到RPM软件\n包。")]),s._v(" "),a("ul",[a("li",[s._v("虚拟机设置挂载光盘，相当于我们插入光盘的操作")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122205328.png",alt:"image-20211122205327961"}})]),s._v(" "),a("ul",[a("li",[s._v("查找光盘的文件位置")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在/dev中查找光盘的文件位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" cdrom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://rdgmm6gnu.hn-bkt.clouddn.com/images/20211122205546.png",alt:"image-20211122205546458"}})]),s._v(" "),a("ul",[a("li",[s._v("挂载光盘到/media/cdrom目录下")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建挂载的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /media/cdrom\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#挂载光盘到/media/cdrom目录下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/cdrom /media/cdrom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);