(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,n,s){"use strict";s.r(n);var t=s(0),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"nexttick-原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-原理分析"}},[e._v("#")]),e._v(" NextTick 原理分析")]),e._v(" "),s("p",[e._v("nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。\n在 Vue 2.4 之前都是使用的 microtasks，但是 microtasks 的优先级过高，在某些情况下可能会出现比事件冒泡更快的情况，但如果都使用 macrotasks 又可能会出现渲染的性能问题。所以在新版本中，会默认使用 microtasks，但在特殊情况下会使用 macrotasks，比如 v-on。")]),e._v(" "),s("p",[e._v("对于实现 macrotasks ，会先判断是否能使用 setImmediate(只有ie和node支持，宏任务执行后的callback) ，不能的话降级为 MessageChannel（管道，异步） ，以上都不行的话就使用 setTimeout")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  macroTimerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else if (\n  typeof MessageChannel !== 'undefined' &&\n  (isNative(MessageChannel) ||\n    // PhantomJS\n    MessageChannel.toString() === '[object MessageChannelConstructor]')\n) {\n  const channel = new MessageChannel()\n  const port = channel.port2\n  channel.port1.onmessage = flushCallbacks\n  macroTimerFunc = () => {\n    port.postMessage(1)\n  }\n} else {\n  macroTimerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);