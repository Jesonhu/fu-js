# Dom 相关的功能函数

## 是否为IE

> 判断是否为 IE 浏览器，通过 `window.navigator.userAgent` 判断

+ 函数名: `isIE`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/isIE.js)

## 是否为Mac

> 通过 `navigator.platform` 判断是否为 Mac

+ 函数名: `isMac`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/isMac.js)

## addClass

> 原生实现的给元素添加类名功能

+ 函数名: `addClass`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/addClass.js)

## removeClass

> 原生实现的移除元素拥有的某个类名

+ 函数名: removeClass
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/addClass.js)

## toggleClass

> 原生实现元素类名切换

+ 函数名: toggleClass
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/toggleClass.js)

## rem

> 使用 rem 时需要给 document.body 设置 fontSize, 当前函数完成了这个功能。`1:100` 还是 `1:10` 完全可以通过参数控制

+ 函数名: `setRem`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dom/setRem.js)


## selector<sup>待补充</sup>

> 是否习惯了 jQuery 的 `$()` 方式选择 dom 元素? 这里提供了一个替代方案

+ 函数名: `selector`
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