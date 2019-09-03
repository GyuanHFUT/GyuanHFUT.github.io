# 🎲 项目实战ss

## HUI-VUE-PRO

你可能也会对 HUI-VUE-PRO 感兴趣，这是一套基于 HUI-VUE 之上的企业级中后台前端/设计解决方案。

文档地址：[http://emptycup.hikvision.com.cn/hui-pro](http://emptycup.hikvision.com.cn/hui-pro)

HUI-Pro 包含**布局控件**、**共性业务控件**和**工具方法**

- **布局控件**：通过布局控件可以构建出各典型页面，典型页面规范也可以参考[http://iris.hikvision.com.cn/huidesign/bscs/issues/188](http://iris.hikvision.com.cn/huidesign/bscs/issues/188)。

- **共性业务控件**：包含了各个事业部提供的共性控件，大部分控件都有对应的设计规范。

- **工具方法**：一个JavaScript的公共工具库，除了基础的Dom、Event等，还有夏令时等工具方法。

## 海豚脚手架

如果有一定 vue 开发经验的你可能会对 [vue-cli](https://cli.vuejs.org/zh/guide/) 脚手架有耳闻；在真实项目中，我们也根据新技术体系，引入了我们的海豚脚手架解决方案，其中包含了一系列适用于新技术体系下的全家桶系列；这里有我们的最佳实践，推荐你再项目中使用；

文档地址：[http://emptycup.hikvision.com.cn/template/](http://emptycup.hikvision.com.cn/template/)

海豚脚手架 2.x 是基于 Vue Cli 3 的一套海豚项目代码生成工具, 其在剥离业务功能之后，保留了 路由、菜单、面包屑、权限、多语言、换肤等解决方案, 用于快速搭建海豚体系项目的基本结构.

得益于 Vue Cli 3 的插件架构, 在搭建项目的基本结构之后, 还可以利用海豚脚手架提供的插件, 给项目按需添加一些增强特性(EasyTool, EasyMock 等).

::: tip 提示

如果你对脚手架开发感兴趣，并尝试做一些扩展，也可以参与我们 [vue-cli-plugin](http://iris.hikvision.com.cn/vue-cli-plugin) 的虚拟开发团队，针对特定项目开发出自己的脚手架插件。

:::

## Lego

Lego 是一套基于 HUI-Pro 布局控件和海豚脚手架的布局应用方案。

文档地址：[http://emptycup.hikvision.com.cn/lego/home](http://emptycup.hikvision.com.cn/lego/home)

Lego 体系分为**脚手架**、**基础组件库**、**布局组件库**、**布局**和**插件**等，你可以参与共建Lego，也可以为Lego贡献体系设计。

- **脚手架**：Lego目前只支持海豚脚手架，后续我们也希望Lego可以支持更多的脚手架。

- **基础组件库和布局组件库**：Lego目前没有自己的组件库设计，我们推荐你基于HUI和HUI_Pro进行Lego体系设计。

- **布局**：通过对产品常用的页面场景进行分类、对比和抽象，基于基础组件库(HUI、HUI_Pro等)和布局组件库(HUI_Pro等)组合而成，可以通过UI客户端进行快速下载布局到当前开发产品，减少重复的开发，提升效率。

- **插件**：如果产品的脚手架是基于Vue CLI 3.x进行设计的，那么Lego将会推荐一些优秀的VUE CLI3插件供开发者进行安装使用，如果你不满足于简单的使用插件，你也可以自行设计一些优秀的插件，我们建议你将插件放入vue-cli-plugin组进行维护，这样Lego即可展示你设计的插件。
