# 通用函数

## 资源补充地址

> 该函数常用于给资源(图片资源等)添加缺失的域

+ 函数名: `addAssetsBaseUrl`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/addAssetsBaseUrl.js)

### 示例1

<details>
<summary>点击展开</summary>

```js
const str1 = '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />';
addAssetsBaseUrl(str1, false, 'http://www.baidu.com');
// => <img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />
```
</details>

这里是处理富文本格式的字符串, 支持全部 img 标签资源地址修改

### 示例2

<details>
<summary>点击展开</summary>

```js
const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
addAssetsBaseUrl(arr1, false, 'http://hello.com')
// => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
```
</details>

对地址构成的数组进行处理

### 示例3

<details>
<summary>点击展开</summary>

```js
const arr1 = [{src: '/a.jpg'}, {src: '/b.jpg'}, {src: '/c.jpg'}]
addAssetsBaseUrl(arr1, 'src', 'http://hello.com')
// => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
```
</details>

某些请求情况下接口会返回一个对象数组，其中 `src` 为图片地址对应的键, 注意可以根据实际数据调整键

### 示例4

<details>
<summary>点击展开</summary>

```js
const obj1 = { src: '/a.jpg' }
const s = addAssetsBaseUrl(obj1, 'src', 'http://test.com')
//=> { src: 'http://test.com/a.jpg' }
```
</details>

数据源也可以是单个对象，像当前数据资源地址对应的键为 `src`

## 事件监听派发

> 可用于事件监听派发基类使用

+ 函数名: `CustomEventEmitter`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/CustomEventEmitter.js)


## 随每天时间段变化的文字

> 每天不同小时段返回中文欢迎语

+ 函数名: `chTimeHello`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/chTimeHello.js)

## 随机数组中的字符串

> 随机返回指定的数组中的字符串.

+ 函数名: `welcomeFromArr`
+ [源码](https:/github.com/Jesonhu/fu-js/blob/master/utils/welcomeFromArr.js)

### 示例1

<details>
<summary>点击展开</summary>

```js
const arr = ['休息一会儿吧', '准备吃什么呢?', '我猜你可能累了']
welcomeFromArr(arr)
// => 随机数组中的内容
```

</details>


## 日期格式化

> 非常简单的日期格式化处理，更好的选择可考虑 `day.js` 与 `moment.js`

+ 函数名: `dateFormat`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dateFormat.js)

## JSON 深拷贝

> JSON.stringify 与 JSON.parse 实现的深拷贝

+ 函数名: `deepClone`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/deepClone.js)


## JS 代码码解析与执行 <sup>demo</sup>

+ 函数名: `executejs`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/executejs.js)

## 参数处理

> 可用于默认参数与调用参数的合并处理

+ 函数名: `extend`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/extend.js)

### 案例1

<details>
<summary>点击展开</summary>

```js

```

</details>


## 两数字计算百分比

> 传递两个数字，计算百分比格式

+ 函数名: `getNumberPercent`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getNumberPercent.js)


## 计算最大页码

> 通过总数与每页最多显示数计算最大页码

+ 函数名: `getPaginationPageCount`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getPaginationPageCount.js)


## Url 参数获取

> 可以获取 url 的参数

+ 函数名: `getQueryParameters`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getQueryParameters.js)


## 对象指定属性删除

> 某些情况下需要删除对象的某个属性，这时就需要该函数

+ 函数名: `hideSourceName`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/hideSourceName.js)

## 对象是否为空

> 判断对象是否为空，可以判断字符串与数组

+ 函数名: `isEmpty`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isEmpty.js)

## 是否为函数

> 判断是否为函数

+ 函数名: `isFunction`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isFunction.js)

## 是否为 Undefined

> 判断是否为 Undefined

+ 函数名: `isUndefined`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isUndefined.js)

## 对象转换为数组

> 将 JSON 格式的对象的值转换为数组.

+ 函数名: `obj2Arr`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/obj2Arr.js)

## 转换为数字

> parseInt() 只能转换数字字符串，转换其他格式时会报错，而此函数可以处理和数字和数字字符串

+ 函数名: `toInt`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/toInt.js)

## 获取指定区间随机整数

> 获取指定区间随机整数

+ 函数名: `randomIntegerNumFromRange`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomIntegerNumFromRange.js)

### 示例1

<details>
<summary>点击展开</summary>

```js
randomIntegerNumFromRange(2, 3)
// => 2~3 直接的整数，包含 2 与 3
```

</details>

### 示例2

<details>
<summary>点击展开</summary>

```js
randomIntegerNumFromRange(2.1, 3.1)
// => 2~3 直接的整数，包含 2 与 3
```

</details>


## 随机获取指定区间的数字

> 随机获取指定区间的数字，包括小数

+ 函数名: `randomNumFromRange`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomNumFromRange.js)

## 正常接口

> 返回正常格式的接口模板

+ 函数名: `resApiSuccess`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiSuccess.js)


## 异常接口

> 返回异常格式的接口模板

+ 函数名: `resApiFail`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiFail.js)


## 对象键值转换

> 对象键值转换，某些情况下接口返回的键与前端需要的有冲突，如果前端转换就可能需要这个功能

+ 函数名: `sourceNameConversion`
+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/sourceNameConversion.js)

## 补零函数<sup>待补充</sup>

> 前置补零的需求还是很常见的，简单的方式: 是通过判断数字字符串的长度前面拼接 `0` 的方式实现，但是这种方式不够高效。于是这里提供了一个更高效的实现方式

+ 函数名: `addZero`

+ 源码

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

+ 示例

```js
const r = addZero(13, 5)
// => '00013'


const r = addZero(13, 3)
// => '013'
```

## 判断数组中某项是否重复 <sup>待补充</sup>

+ 源码

```js
/**
 * 判断数组中是否存在重复项.
 * 
 * @param {Array<string>} arr 判断数组.
 * @return {Boolean} true: 存在重复项。false: 不存在.
 */
function isRepeat(arr) {
  const hash = {}
  for (let i in arr) {
    if (hash[arr[i]]) {
      return true
    }
    // 每项都标记为true
    hash[arr[i]] = true
  }
  return false
}
```

+ 实例
```js
const arr1 = ['1', '2', '3', '4']
const arr2 = ['1', '2', '3', '4', '1']

isRepeat(arr1)
// => false

isRepeat(arr2)
// => true
```

## 判断两点间方向数值 <sup>待补充</sup>

知道滑动开始点与滑动结束点坐标, 获取滑动方向表示数值(1, 2, 3, 4)。使用查看 《双面人》

+ 源码

```
/**
 * 判断滑动的方向
 * @param {*} a 开始触碰点 X 坐标
 * @param {*} r 开始触碰点 Y 坐标
 * @param {*} e 离开触碰点 X 坐标
 * @param {*} l 离开触碰点 Y 坐标
 * @return {Number} s 1: 向上, 2: 向下, 3:向左, 4:向右
 */
function getScrollDirectionNum(a, r, e, l) {
    /** 垂直位移距离 */
    var o = r - l
        /** 水平位移距离 */
        , t = e - a
        , s = 0;
    if (Math.abs(t) < 2 && Math.abs(o) < 2) return s;
    
    var i = function (a, r) {
        return 180 * Math.atan2(r, a) / Math.PI
    }(t, o);

    i >= -45 && i < 45 ? s = 4 : i >= 45 && i < 135 ? s = 1 : i >= -135 && i < -45 ? s = 2 : (i >= 135 && i <= 180 || i >= -180 && i < -135) && (s = 3)

    return s
}
```

## 滚动中元素属性变化值 <sup>待补充</sup>

案例中有这样一个效果，当滚动(向上，向下)时，动画(前进和后退)效果。要实现这种效果，需要元素变化属性和滚动高度相关联。每滚动一定的高度，元素的属性随着变化对应的值。 主要通过下面功能函数实现关联:

```js
/** 
 * 获取元素滚动中对应变化值
 * 
 * @param {Number} a 元素开始变化的滚动开始高度
 * @param {Number} r 元素开始变化的滚动结束高度
 * @param {Number} e 当前滚动高度
 * @param {Number} l 元素开始变化值
 * @param {Number} o 元素结束变化值
 * @return {Number} 元素滚动中对应的值.
 */
function scrollNum(a, r, e, l, o) {
    return l + (e - a) / (r - a) * (o - l)
}
```
原理是: 通过滚动高度获取当前滚动高度在滚动范围中的 比例。通过此 比例 算出当前元素每滚动 1px 对应的属性值。使用可查看案例 `《双面人》`。这里滚动也可以横向滚动的滚动宽度。



