(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{596:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"抽象类和接口的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口的区别"}},[t._v("#")]),t._v(" 抽象类和接口的区别")]),t._v(" "),a("p",[t._v("含有abstract修饰符的class即为抽象类，"),a("strong",[t._v("abstract 类不能创建实例对象")]),t._v("。含有abstract方法的类必须定义为abstract class，abstract class类中的方法不必是抽象的。"),a("strong",[t._v("abstract class类中定义抽象方法必须在具体(Concrete)子类中实现")]),t._v("，所以，不能有抽象构造方法或抽象静态方法。"),a("strong",[t._v("如果子类没有实现抽象父类中的所有抽象方法，那么子类也必须定义为abstract类型。")])]),t._v(" "),a("p",[t._v("接口（interface）可以说成是抽象类的一种特例，接口中的所有方法都必须是抽象的。"),a("strong",[t._v("接口中的方法定义默认为public abstract类型")]),t._v("，接口中的成员变量类型默认为public static final。")]),t._v(" "),a("p",[t._v("下面比较一下两者的"),a("strong",[t._v("语法区别")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("抽象类可以有构造方法，接口中不能有构造方法。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类中可以有普通成员变量，接口中没有普通成员变量。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类中可以包含非抽象的普通方法，接口中的所有方法必须都是抽象的，不能有非抽象的普通方法。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类中的抽象方法的访问类型可以是public，protected和（默认类型,虽然eclipse下不报错，但应该也不行），但接口中的抽象方法只能是public类型的，并且默认即为public abstract类型。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类中可以包含静态方法，接口中不能包含静态方法（Java1.8之前）。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类和接口中都可以包含静态成员变量，抽象类中的静态成员变量的访问类型可以任意，但接口中定义的变量只能是public static final类型，并且默认即为public static final类型。")])]),t._v(" "),a("li",[a("p",[t._v("一个类可以实现多个接口，但只能继承一个抽象类。")])])]),t._v(" "),a("p",[t._v("接着再说说两者在"),a("strong",[t._v("应用上的区别")]),t._v("：")]),t._v(" "),a("p",[t._v("接口更多的是在系统架构设计方法发挥作用，"),a("strong",[t._v("主要用于定义模块之间的通信契约")]),t._v("。而抽象类在代码实现方面发挥作用，可以"),a("strong",[t._v("实现代码的重用")]),t._v("，例如，"),a("strong",[t._v("模板方法设计模式是抽象类的一个典型应用")]),t._v("，假设某个项目的所有 Servlet 类都要用相同的方式进行权限判断、记录访问日志和处理异常，那么就可以定义一个抽象的基类，让所有的Servlet都继承这个抽象基类，在抽象基类的 service 方法中完成权限判断、记录访问日志和处理异常的代码，在各个子类中只是完成各自的业务逻辑代码，伪代码如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseServlet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServlet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" \t\t "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOExcetion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        记录访问日志\n        进行权限判断\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("具有权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Excetpion")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 记录异常信息\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOExcetion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意访问权限定义成protected，显得既专业，又严谨，因为它是专门给子类用的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyServlet1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseServlet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOExcetion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            本"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet")]),t._v("只处理的具体业务逻辑代码\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("p",[t._v("父类方法中间的某段代码不确定，留给子类干，就用模板方法设计模式。")]),t._v(" "),a("p",[t._v("备注：这道题的思路是先从总体解释抽象类和接口的基本概念，然后再比较两者的语法细节，最后再说两者的应用区别。比较两者语法细节区别的条理是：先从一个类中的构造方法、普通成员变量和方法（包括抽象方法），静态变量和方法，继承性等6个方面逐一去比较回答，接着从第三者继承的角度的回答，特别是最后用了一个典型的例子来展现自己深厚的技术功底。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"抽象类和普通类的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和普通类的区别"}},[t._v("#")]),t._v(" 抽象类和普通类的区别")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("抽象类不能被实例化。")])]),t._v(" "),a("li",[a("p",[t._v("抽象类可以有构造函数，被继承时子类必须继承父类一个构造方法，抽象方法不能被声明为静态。")])]),t._v(" "),a("li",[a("p",[t._v("抽象方法只需申明，而无需实现，抽象类中可以允许普通方法有主体")])]),t._v(" "),a("li",[a("p",[t._v("含有抽象方法的类必须申明为抽象类")])]),t._v(" "),a("li",[a("p",[t._v("抽象的子类必须实现抽象类中所有抽象方法，否则这个子类也是抽象类。")])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("h5",{attrs:{id:"抽象类和接口的区别-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口的区别-2"}},[t._v("#")]),t._v(" 抽象类和接口的区别")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("抽象类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("接口")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("有构造函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无构造函数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("和普通类一样可以有自己的成员变量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("成员变量只可以public static final修饰")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("除了抽象方法还可以有普通方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只有抽象方法（Java1.8之前）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("一个类只能继承一个类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个类可以实现多个接口")])])])]),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"抽象类和普通类的区别-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和普通类的区别-2"}},[t._v("#")]),t._v(" 抽象类和普通类的区别")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("抽象类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("普通类")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("不能实例化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可以实例化")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("抽象类中的抽象方法只有方法声明，没有方法实现")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("普通类中不能只声明方法,方法必须实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("抽象类中不一定有抽象方法，但有抽象方法的类一定是抽象类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("普通类中不可能有抽象方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("子类继承抽象类之后，必须覆盖父类当中所有的抽象方法，否则子类还是抽象类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子类继承父类方法可以重写也可以不重写")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);