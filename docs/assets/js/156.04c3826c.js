(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{465:function(t,s,e){"use strict";e.r(s);var i=e(6),r=Object(i.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"redis单线程的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis单线程的问题"}},[this._v("#")]),this._v(" redis单线程的问题")]),this._v(" "),t("p",[this._v("正常情况下使用del指令可以很快的删除数据，\n而当被删除的 key 是一个非常大的对象时，\n例如时包含了成千上万个元素的 hash 集合时，\n那么 del 指令就会造成 Redis 主线程卡顿。")]),this._v(" "),t("p",[this._v("在高并发下面，redis的表现就是其他客户端请求无响应。")])])}),[],!1,null,null,null);s.default=r.exports}}]);