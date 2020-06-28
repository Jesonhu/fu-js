# Dom 相关的功能函数

## 是否为IE

> 判断是否为 IE 浏览器，通过 `window.navigator.userAgent` 判断

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/isIE.js)

## 是否为Mac

> 通过 `navigator.platform` 判断是否为 Mac

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/isMac.js)

## addClass

> 原生实现的给元素添加类名功能

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/addClass.js)

## removeClass

> 原生实现的移除元素拥有的某个类名

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/addClass.js)

## toggleClass

> 原生实现元素类名切换

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/toggleClass.js)

## rem

> 使用 rem 时需要给 document.body 设置 fontSize, 当前函数完成了这个功能。`1:100` 还是 `1:10` 完全可以通过参数控制

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/setRem.js)


## addZero<sup>待补充</sup>

> 前置补零的需求还是很常见的，简单的方式: 是通过判断数字字符串的长度前面拼接 `0` 的方式实现，但是这种方式不够高效。于是这里提供了一个更高效的实现方式

### 源码

```js
/**
 * 前置补零函数.
 * 
 * @param {Number|String} num 输入值
 * @param {Number} length 补零后的总位数
 * @return {String} 补零后的字符串
 */
function addZero(num, length) {
  // const arr = new Array(length).fill('0')
  // const arrStr = arr.join('')
  // const midStr = arrStr + num
  // return midStr.substr(-length)

  return (Array(length).join('0') + num).slice(-length)
}
```

+ 使用

```js
const r = addZero(13, 5)
// => '00013'


const r = addZero(13, 3)
// => '013'
```

## selector<sup>待补充</sup>

> 是否习惯了 jQuery 的 `$()` 方式选择 dom 元素? 这里提供了一个替代方案

+ 源码

```js
const selector = (selector = '') => {
  return document.querySelector(selector) || null
}
```

+ 使用

```js
const oObj1 = selector('.obj1')
```