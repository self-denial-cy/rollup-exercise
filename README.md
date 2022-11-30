# rollup-exercise

- [exercise1](./exercise1)    Js类库打包配置示例（引入非全局 polyfill，不污染全局环境）
  - umd 包：第三方依赖和 polyfill、babel 的辅助函数都直接 bundled 了，缺点是包比较大
  - cjs 和 es 包：第三方依赖和 polyfill、babel 的辅助函数都抽离出来了，搭配上 webpack、rollup 等工具 very good
- [exercise2](./exercise2)    Vue 组件库打包配置示例
  - element-plus、antd、iview 基本上都不提供 polyfill，将 polyfill 交给宿主环境来实现，使用文档写清楚如何使用、浏览器兼容列表、必要的 polyfill 即可
  - 样式文件也可以构建出来，有两种方案：1.在单独样式文件中维护；2.在 SFC 的 style 块进行维护( iview 的方案是在单独样式文件中维护，且最后通过 gulp 单独处理 )