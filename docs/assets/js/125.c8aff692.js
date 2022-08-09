(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{429:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("双指针主要用于遍历数组或者链表，两个指针指向不同的元素，从而协同完成任务。")]),t._v(" "),s("p",[t._v("但是双指针并不隶属于某一种数据结构，无论是数组、链表、字符串等元素都会运用到双指针，而且双指针的提醒在面对中小型的公司，也是笔试的常客。")]),t._v(" "),s("p",[t._v("双指针主要分为两大类: 左右指针和快慢指针。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("左右指针:")]),t._v(" "),s("p",[t._v("两个指针相向而行 ->   <-")])]),t._v(" "),s("li",[s("p",[t._v("快慢指针:")]),t._v(" "),s("p",[t._v("两个指针同向而行，一快一慢  ->   ->>")])])]),t._v(" "),s("p",[s("strong",[t._v("快慢指针")]),t._v("也是双指针，但是两个指针从同一侧开始遍历数组，将这两个指针分别定义为"),s("code",[t._v("快指针（fast）")]),t._v("和"),s("code",[t._v("慢指针（slow）")]),t._v("，两个指针以不同的策略移动，直到两个指针的值相等（或其他特殊条件）为止，如fast每次增长两个，slow每次增长一个。")]),t._v(" "),s("p",[t._v("伪代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    fas\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("a",{attrs:{href:"26.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9"}},[t._v("26.删除有序数组的重复项")])]),t._v(" "),s("li",[s("a",{attrs:{href:"80.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B92"}},[t._v("80.删除有序数组中的重复项 II")])]),t._v(" "),s("li",[s("a",{attrs:{href:"27.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0"}},[t._v("27.移除元素")])]),t._v(" "),s("li",[s("a",{attrs:{href:"283.%E7%A7%BB%E5%8A%A8%E9%9B%B6"}},[t._v("283.移动零")])])]),t._v(" "),s("p",[s("strong",[t._v("左右指针")]),t._v("是指在有序数组中，将指向最左侧的索引定义为"),s("code",[t._v("左指针(left)")]),t._v("，最右侧的定义为"),s("code",[t._v("右指针(right)")]),t._v("，然后从两头向中间进行数组遍历。")]),t._v(" "),s("blockquote",[s("p",[t._v("左右对撞适用于有序数组，也就是说当你遇到题目给定有序数组时，应该第一时间想到用左右指针解题")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历数组")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些条件判断 和处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("a",{attrs:{href:"167.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%20II%20-%20%E8%BE%93%E5%85%A5%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84"}},[t._v("167.两数之和 II - 输入有序数组")])]),t._v(" "),s("li",[s("a",{attrs:{href:"344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[t._v("344.反转字符串")])]),t._v(" "),s("li",[s("a",{attrs:{href:"125.%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2"}},[t._v("125.验证回文串")])]),t._v(" "),s("li",[s("a",{attrs:{href:"345.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%85%83%E9%9F%B3%E5%AD%97%E6%AF%8D"}},[t._v("345.反转字符串中的元音字母")])]),t._v(" "),s("li",[s("a",{attrs:{href:"11.%E7%9B%9B%E6%9C%80%E5%A4%9A%E6%B0%B4%E7%9A%84%E5%AE%B9%E5%99%A8"}},[t._v("11.盛最多水的容器")])])]),t._v(" "),s("p")])}),[],!1,null,null,null);s.default=r.exports}}]);