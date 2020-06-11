# 通用函数

## 资源补充地址 <sup>(通用)</sup>

> 该函数常用于给资源(图片资源等)添加缺失的域

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/addAssetsBaseUrl.js)

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

## 事件监听派发 <sup>(通用)</sup>

> 可用于事件监听派发基类使用

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/CustomEventEmitter.js)


## 随每天时间段变化的文字

> 每天不同小时段返回中文欢迎语

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/chTimeHello.js)

## 随机数组中的字符串

> 随机返回指定的数组中的字符串.

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/welcomeFromArr.js)

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

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/dateFormat.js)


## JSON 深拷贝

> JSON.stringify 与 JSON.parse 实现的深拷贝

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/deepClone.js)


## JS 代码码解析与执行 <sup>demo</sup>

+ [源码](https://github.com/Jesonhu/fu-js/blob/master/utils/executejs.js)

## 参数处理

> 可用于默认参数与调用参数的合并处理

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/extend.js)

### 案例1

<details>
<summary>点击展开</summary>

```js

```

</details>


## 两数字计算百分比

> 传递两个数字，计算百分比格式

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getNumberPercent.js)


## 计算最大页码

> 通过总数与每页最多显示数计算最大页码

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getPaginationPageCount.js)


## Url 参数获取

> 可以获取 url 的参数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/getQueryParameters.js)


## 对象指定属性删除

> 某些情况下需要删除对象的某个属性，这时就需要该函数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/hideSourceName.js)

## 对象是否为空

> 判断对象是否为空，可以判断字符串与数组

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isEmpty.js)

## 是否为函数

> 判断是否为函数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isFunction.js)

## 是否为 Undefined

> 判断是否为 Undefined

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/isUndefined.js)

## 对象转换为数组

> 将 JSON 格式的对象的值转换为数组.

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/obj2Arr.js)

## 转换为数字

> parseInt() 只能转换数字字符串，转换其他格式时会报错，而此函数可以处理和数字和数字字符串

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/toInt.js)

## 获取指定区间随机整数

> 获取指定区间随机整数

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

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomIntegerNumFromRange.js)


## 随机获取指定区间的数字

> 随机获取指定区间的数字，包括小数

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/randomNumFromRange.js)

## 正常接口

> 返回正常格式的接口模板 resApiSuccess

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiSuccess.js)

## 异常接口

> 返回异常格式的接口模板 resApiFail

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/resApiFail.js)

## 对象键值转换

> 对象键值转换，某些情况下接口返回的键与前端需要的有冲突，如果前端转换就可能需要这个功能

[源码](https://github.com/Jesonhu/fu-js/blob/master/utils/sourceNameConversion.js)