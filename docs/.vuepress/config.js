module.exports = {
    base: '/',
    port: '9999',
    title: '源于生活',
    description: 'write something！',
    themeConfig: {
        // nav: [
        // ],
        sidebar: [
            {
                "title": "关于code",
                "collapsable": true,
                "children": [
                    "/Article/code/地图学习",
                    "/Article/code/数据双向绑定的分析和简单实现",
                    "/Article/code/多语言",
                ]
            },
            {
                "title": "关于生活",
                "collapsable": false,
                "children": [
                    "/Article/life/车"
                ]
            }
        ]
    }
}