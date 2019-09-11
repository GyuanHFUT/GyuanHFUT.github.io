(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{158:function(t,s,n){"use strict";n.r(s);var a=n(20),p=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前端多语言方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端多语言方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端多语言方案")]),t._v(" "),n("h2",{attrs:{id:"_1多语言实现流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1多语言实现流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 1\t多语言实现流程")]),t._v(" "),n("h2",{attrs:{id:"_2-语言包结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-语言包结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.语言包结构")]),t._v(" "),n("h2",{attrs:{id:"_3-语言包加载流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-语言包加载流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.语言包加载流程")]),t._v(" "),n("p",[t._v("在路由文件里设置钩子函数beforeEach,开发状态时使用i18n下的语言包进行视图渲染,处于部署打包态时通过请求想后台请求数据,这里有二个可选项,")]),t._v(" "),n("ul",[n("li",[t._v("多语言ID可以向后台请求,也可以通过模板语言直接放入html;")]),t._v(" "),n("li",[t._v("多语言文件可以分文件也可以单文件")])]),t._v(" "),n("h3",{attrs:{id:"router部分代码见下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#router部分代码见下","aria-hidden":"true"}},[t._v("#")]),t._v(" router部分代码见下")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里可以做一些获取当前用户信息,token,sg,皮肤等信息的方案")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取语言标识的plan A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLanguage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("language "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLanguage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取语言标识的plan B")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//通过<meta name="language" content="${(language)!}"/> 标签获取到当前语言,')]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("language "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meta"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"language"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLanguage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//出错后设置默认语言")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLanguage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh_CN"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//plan A获取语言类型的方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getLanguage")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" language "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx/language.do"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("language"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" language"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh_CN"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置预研类型")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setLanguage")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nowLanguage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node_ENV "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取语言包plan A 所有模块在一个json文件里")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lang "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("xxx/i18n/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("nowLanguage"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/index.json")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取语言包plan B 每个模块在一个json文件里")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lang "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("xxx/i18n/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("nowLanguage"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("moduleName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(".json")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    i18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocalMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nowLanguage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  i18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nowLanguage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"_4-翻译工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-翻译工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.翻译工具")]),t._v(" "),n("p",[t._v("开发态的中文语言包需要翻译成其他支持的语言类型的语言包，这时需要将前端开发人员执行"),n("code",[t._v("i18n:jstoexcel")]),t._v("将static\\i18n\\zh_CN目录下的json文件转化成含有Key和中文Value的Excel文件，翻译人员只需要在Excel中填入对应中文Value值的其他语言值，并由前端开发人员执行"),n("code",[t._v("i18n:exceltojson")]),t._v("转换为静态语言包。")]),t._v(" "),n("p",[t._v("前端通过"),n("code",[t._v("npm run i18n:jstojson")]),t._v("获取开发态的语言文件，构建静态多语言文件并拷贝到"),n("code",[t._v("dist\\static\\i18n")]),t._v("目录下，调用"),n("code",[t._v("npm run build")]),t._v("构建项目静态资源时该命令会被自动执行一遍。")]),t._v(" "),n("h2",{attrs:{id:"_5-夏令时带来的难点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-夏令时带来的难点","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.夏令时带来的难点")]),t._v(" "),n("p",[t._v("美国和加拿大原本于每年10月的最后一个星期日凌晨2时起实施冬令时间；4月的第一个星期日凌晨2时起，恢复夏令时间。\n因此前端不能直接展示后台传过来的时间值,他山之石可以攻玉,我们可以引用moment里的二个方法")]),t._v(" "),n("ol",[n("li",[t._v("是否夏令时\n"),n("code",[t._v("moment().isDST();")]),t._v("这个方法是用来判断是否是夏令时,example如下\n"),n("code",[t._v("moment([2011, 2, 12]).isDST(); // false, March 12 2011 is not DST")]),t._v(" "),n("code",[t._v("moment([2011, 2, 14]).isDST(); // true, March 14 2011 is DST")])]),t._v(" "),n("li",[t._v("是否被夏令时转换\n"),n("code",[t._v("moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').isDSTShifted()")]),t._v("\n在夏时令地区会输出\n"),n("code",[t._v("moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').format(); //=> '2013-03-10T01:30:00-05:00'")]),t._v("\n这是因为夏令时将时间从2:00移动到3:00，所以2:30不是实时的。产生的时间取决于浏览器，可以向前或向后调整时间。")])]),t._v(" "),n("h2",{attrs:{id:"_6-语言id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-语言id","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 语言id")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    丹麦语\tda\t立陶宛语\tlt\n    保加利亚语\tbg\t依地语\tji\n    加泰罗尼亚语\tca\t朝鲜语\tko\n    南非荷兰语\taf\t芬兰语\tfi\n    巴斯克语\teu\t祖鲁语\tzu\n    希腊语\tel\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("荷兰语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("比利时"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tnl_BE\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("德语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("列支敦士登"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tde_LI\t马耳他语\tmt\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("德语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("卢森堡"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tde_LU\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("荷兰语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("标准"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tnl\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("德语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("奥地利"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tde_AT\t"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FYRO")]),t._v("\tmk\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("德语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("标准"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tde\t拉脱维亚语\tlv\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("德语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("瑞士"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tde_CH\t马来西亚语\tms\n    捷克语\tcs\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("朝鲜语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("韩国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tko\n    波斯语\tfa\t　\t　\n    爱沙尼亚语\tet\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("中文")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("中国台湾"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tzh_TW\n    英语\ten\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("挪威语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("博克马尔"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tno\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("伯利兹"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_BZ\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("葡萄牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("葡萄牙"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tpt\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("加勒比"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("挪威语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("尼诺斯克"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tno\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("加拿大"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_CA\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("葡萄牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("巴西"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tpt_BR\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("南非"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_ZA\t斯洛伐克语\tsk\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新西兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_NZ\t俄语\tru\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("澳大利亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_AU\t波兰语\tpl\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("爱尔兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_IE\t罗马尼亚语\tro\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("牙买加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_JM\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("罗马尼亚语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("摩尔达维亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tro_MO\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("特立尼达"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_TT\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("俄语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("摩尔达维亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tru_MO\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("美国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_US\t索布语\tsb\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("英语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("英国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ten_GB\t拉丁语系\trm\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("乌拉圭"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_UY\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("中文")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("中国香港特别行政区"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tzh_HK\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("危地马拉"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_GT\t瓦纳语\ttn\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("厄瓜多尔"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_EC\t泰语\tth\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("哥伦比亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_CO\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("瑞典语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("芬兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tsv_FI\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("哥斯达黎加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_CR\t苏图语\tsx\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("墨西哥"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_MX\t汤加语\tts\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("多米尼加共和国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_DO\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("萨摩斯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("拉普兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tsz\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("委内瑞拉"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_VE\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("中文")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新加坡"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tzh_SG\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("尼加拉瓜"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_NI\t乌克兰语\tuk\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("巴拉圭"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_PY\t科萨语\txh\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("巴拿马"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_PA\t乌尔都语\tur\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("智利"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_CL\t瑞典语\tsv\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("波多黎各"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_PR\t越南语\tvi\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("洪都拉斯"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_HN\t土耳其语\ttr\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("玻利维亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_BO\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("塞尔维亚语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("西里尔"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tsr\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("秘鲁"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_PE\t文达语\tve\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("萨尔瓦多"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_SV\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("中文")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("中华人民共和国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tzh_CN\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("西班牙传统"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes\t斯洛文尼亚语\tsl\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("西班牙现代"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes\t阿尔巴尼亚语\tsq\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("西班牙语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("阿根廷"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tes_AR\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("塞尔维亚语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("拉丁"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tsr\n    贝劳语\tbe\t日语\tja\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("也门"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_YE\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("意大利语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("瑞士"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tit_CH\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("伊拉克"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_IQ\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("法语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("瑞士"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tfr_CH\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("利比亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_LY\t希伯来语\the\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("卡塔尔"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_QA\t匈牙利语\thu\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("叙利亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_SY\t冰岛语\tis\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("埃及"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_EG\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("法语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("加拿大"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tfr_CA\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("巴林"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_BH\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("法语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("标准"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tfr\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("摩洛哥"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_MA\t北印度语\thi\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("沙特阿拉伯"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_SA\t印度尼西亚语\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("科威特"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_KW\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("盖尔语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("苏格兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tgd\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("突尼斯"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_TN\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("意大利语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("标准"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tit\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("约旦"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_JO\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("法语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("卢森堡"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tfr_LU\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("阿尔及利亚"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_DZ\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("法语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("比利时"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tfr_BE\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("阿拉伯联合酋长国"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_AE\t法罗语\tfo\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("阿曼"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_OM\t克罗地亚语\thr\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("阿拉伯语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("黎巴嫩"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tar_LB\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("盖尔语")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("爱尔兰"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\tgd_IE\n    　"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("`\n")])])])])},[],!1,null,null,null);s.default=p.exports}}]);