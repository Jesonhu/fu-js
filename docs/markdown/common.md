# 通用函数

## addAssetsBaseUrl

> 资源补充地址, 该函数常用于给资源(图片资源等)添加缺失的域

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/addAssetsBaseUrl.js)

### 示例 1

<details>
<summary>点击展开</summary>

```js
const str1 =
  '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />'
addAssetsBaseUrl(str1, false, 'http://www.baidu.com')
// => <img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />
```

</details>

这里是处理富文本格式的字符串, 支持全部 img 标签资源地址修改

### 示例 2

<details>
<summary>点击展开</summary>

```js
const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
addAssetsBaseUrl(arr1, false, 'http://hello.com')
// => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
```

</details>

对地址构成的数组进行处理

### 示例 3

<details>
<summary>点击展开</summary>

```js
const arr1 = [{ src: '/a.jpg' }, { src: '/b.jpg' }, { src: '/c.jpg' }]
addAssetsBaseUrl(arr1, 'src', 'http://hello.com')
// => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
```

</details>

某些请求情况下接口会返回一个对象数组，其中 `src` 为图片地址对应的键, 注意可以根据实际数据调整键

### 示例 4

<details>
<summary>点击展开</summary>

```js
const obj1 = { src: '/a.jpg' }
const s = addAssetsBaseUrl(obj1, 'src', 'http://test.com')
//=> { src: 'http://test.com/a.jpg' }
```

</details>

数据源也可以是单个对象，像当前数据资源地址对应的键为 `src`

## CustomEventEmitter

> 事件监听派发, 可用于事件监听派发基类使用

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/CustomEventEmitter.js)

## chTimeHello

> 每天不同小时段返回自定义文字

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/chTimeHello.js)

## welcomeFromArr

> 随机返回指定的数组中的字符串.

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/welcomeFromArr.js)

### 示例 1

<details>
<summary>点击展开</summary>

```js
const arr = ['休息一会儿吧', '准备吃什么呢?', '我猜你可能累了']
welcomeFromArr(arr)
// => 随机数组中的内容
```

</details>

## parseTime

> 非常简单的日期格式化处理，更好的选择可考虑 `day.js` 与 `moment.js`

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/parseTime.js)

## deepClone

> JSON.stringify 与 JSON.parse 实现的深拷贝

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/deepClone.js)

## JS 代码码解析与执行 <sup>demo</sup>

- [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/executejs.js)

## extend

> 参数处理，可用于默认参数与调用参数的合并处理

`Object.assign()` 通常用来默认对象参数的处理，但是有一些问题例如: 多层嵌套数据丢失

```js
Object.assign(
  {},
  { person: { name: 1, age: 16 }, test: { name: 'test' } },
  { person: { name: 2 } }
)
// => { person: {name: 2}, test: {name: "test"} }
```

`person.age` 的数据丢失了

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/extend.js)

### 案例 1

<details>
<summary>点击展开</summary>

```js

```

</details>

## getNumberPercent

> 两数字计算百分比, 传递两个数字，计算百分比格式

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getNumberPercent.js)

## getPaginationPageCount

> 通过总数与每页最多显示数计算最大页码

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getPaginationPageCount.js)

## getQueryParameters

> 可以获取 url 的参数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getQueryParameters.js)

## hideSourceName

> 对象指定属性删除, 某些情况下需要删除对象的某个属性，这时就需要该函数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/hideSourceName.js)

## isEmpty

> 判断对象是否为空，可以判断字符串与数组

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isEmpty.js)

## isFunction

> 判断是否为函数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isFunction.js)

## isUndefined

> 判断是否为 Undefined

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isUndefined.js)

## obj2Arr

> 将 JSON 格式的对象的值转换为数组.

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/obj2Arr.js)

## toInt

> parseInt() 只能转换数字字符串，转换其他格式时会报错，而此函数可以处理和数字和数字字符串

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/toInt.js)

## randomIntegerNumFromRange

> 获取指定区间随机整数

### 示例 1

<details>
<summary>点击展开</summary>

```js
randomIntegerNumFromRange(2, 3)
// => 2~3 直接的整数，包含 2 与 3
```

</details>

### 示例 2

<details>
<summary>点击展开</summary>

```js
randomIntegerNumFromRange(2.1, 3.1)
// => 2~3 之间的整数，包含 2 与 3
```

</details>

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomIntegerNumFromRange.js)

## randomNumFromRange

> 随机获取指定区间的数字，包括小数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomNumFromRange.js)

## resApiSuccess

> 返回正常格式的接口模板 resApiSuccess

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiSuccess.js)

## resApiFail

> 返回异常格式的接口模板 resApiFail

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiFail.js)

## sourceNameConversion

> 对象键值转换，某些情况下接口返回的键与前端需要的有冲突，如果前端转换就可能需要这个功能

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/sourceNameConversion.js)
