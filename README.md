# rollup-exercise

- [exercise1](./exercise1)	Js类库打包配置示例（引入非全局 polyfill）
- [exercise2](./exercise2)    Vue 组件库打包配置示例
  - element-plus、antd、iview 基本上都不提供 polyfill
  - 将 polyfill 交给宿主环境来实现
  - 使用文档写清楚如何使用、兼容列表、必要的 polyfill 即可