# F(unctional) u(tils) JavaScript Library

> JavaScript 函数式工具集合

Tips:

- 部分功能整理收集而来

## Usage(用法)

### Npm or Yarn

安装

```cmd
npm i @ysorg/fu --save
//or
yarn add @ysorg/fu
```

ESM

```js
import fu from '@ysorg/fu'
const { version } = fu

console.log(version)
// => '0.3.0-Beta.1'
```

CJS
```js
const fu = require('@ysorg/fu').default
console.log(fu)
// => { version: '0.3.0-Beta.1', ... }

const { version } = require('@ysorg/fu').default
console.log(version)
// => '0.3.0-Beta.1'
```

### [Browser](https://codepen.io/Jesonhu/pen/MWmyEaN)

```html
<script src="https://unpkg.com/@ysorg/fu{@version}/dist/fu.js"></script>

<script>
  console.log(window.fu.default)
</script>
```


## Features

- [x] 浏览器环境支持 window.fu 方式使用
- [x] 模块方式支持 `@ysorg/fu` 方式访问

## 规划

- 全部以函数方式组织代码
- `src/*.js` 为通用函数
- `src/dom/*.js` 为 DOM 专用函数
- `src/node/*.js` 为 NODE 专用函数

## links

- [fehelper](https://github.com/Jesonhu/js-utils-helper)
- [Rollup-配置参考]
  - [dayjs](https://github.com/iamkun/dayjs/blob/dev/build/rollup.config.js)
