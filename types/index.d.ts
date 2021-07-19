// Type definitions for fujs

export as namespace fu
declare const fu: fu.FuStatic

// ----------------------------------------
// addAssetsBaseUrl
declare namespace fu {
	interface addAssetsBaseUrlSource {
		src: string
		[x: string]: any
	}

	interface FuStatic {
		/**
		 * 资源添加基础域.
		 * @param {String|Array<string>|Array<T>} source 资源数组
		 * @param {Boolean|String} key 字符串: name, false: 没有key
		 * @param {String} baseUrl 基础域
		 * @return {String|Array<string>|Array<T>}
		 * @see fu.addAssetsBaseUrl
		 * @example
		 * // Example1
		 * const str1 = '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />';
		 * addAssetsBaseUrl(str1, false, 'http://www.baidu.com');
		 * // => <img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />
		 *
		 * @example
		 * const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
		 * addAssetsBaseUrl(arr1, false, 'http://hello.com')
		 * // => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
		 *
		 * @example
		 * const arr1 = [{src: '/a.jpg'}, {src: '/b.jpg'}, {src: '/c.jpg'}]
		 * addAssetsBaseUrl(arr1, 'src', 'http://hello.com')
		 * // => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
		 *
		 * @example
		 * const obj1 = { src: '/a.jpg' }
		 * const s = addAssetsBaseUrl(obj1, 'src', 'http://test.com')
		 * => { src: 'http://test.com/a.jpg' }
		 */
		addAssetsBaseUrl(source: string, key: boolean, baseUrl: string): string

		/**
		 *
		 * @param source
		 * @param key
		 * @param baseUrl
		 * @see fu.addAssetsBaseUrl
		 * @example
		 * const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
		 * addAssetsBaseUrl(arr1, false, 'http://hello.com')
		 * // => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
		 */
		addAssetsBaseUrl(
			source: Array<string>,
			key: boolean,
			baseUrl: string
		): Array<string>

		/**
		 * @param key source 中的对象地址所属的name
		 * @see fu.addAssetsBaseUrl
		 * @example
		 * const arr1 = [{src: '/a.jpg'}, {src: '/b.jpg'}, {src: '/c.jpg'}]
		 * addAssetsBaseUrl(arr1, 'src', 'http://hello.com')
		 * // => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
		 */
		addAssetsBaseUrl<T extends addAssetsBaseUrlSource>(
			source: Array<T>,
			key: string,
			baseUrl: string
		): Array<T>

		/**
		 *
		 * @param source
		 * @param key
		 * @param baseUrl
		 * @see fu.addAssetsBaseUrl
		 * @example
		 * const obj1 = { src: '/a.jpg' }
		 * const s = addAssetsBaseUrl(obj1, 'src', 'http://test.com')
		 * => { src: 'http://test.com/a.jpg' }
		 */
		addAssetsBaseUrl<T extends addAssetsBaseUrlSource>(
			source: T,
			key: string,
			baseUrl: string
		): T
	}
}

// addAssetsBaseUrlFromArray
declare namespace fu {
	interface FuStatic {
		/**
		 *
		 * @deprecated 请使用 fu.addAssetsBaseUrl
		 * @param source
		 * @see fu.addAssetsBaseUrl
		 */
		addAssetsBaseUrlFromArray(source, key, baseUrl): any
	}
}

// addAssetsBaseUrlFromObject
declare namespace fu {
	interface FuStatic {
		/**
		 *
		 * @deprecated 请使用 fu.addAssetsBaseUrl
		 * @param source
		 * @see fu.addAssetsBaseUrl
		 */
		addAssetsBaseUrlFromObject(source, key, baseUrl): any
	}
}

// addAssetsBaseUrlFromRichText
declare namespace fu {
	interface FuStatic {
		/**
		 *
		 * @deprecated 请使用 fu.addAssetsBaseUrl
		 * @param source
		 * @see fu.addAssetsBaseUrl
		 */
		addAssetsBaseUrlFromRichText(str, baseUrl): any
	}
}

// addZero
declare namespace fu {
	interface FuStatic {
		/**
		 * 前置补零.
		 *
		 * @author Jeson
		 * @create 2020/09/23
		 *
		 * @param {Number} num 补零的数.
		 * @param {Number} length 补零后的总长度.
		 * @return 补零后的字符串.
		 * @see fu.addZero
		 * @example
		 * addZero(3, 2)
		 * // => '03'
		 *
		 * @example
		 * addZero(100, 5)
		 * // => '00100'
		 */
		addZero(num: number, length: number): string
	}
}

// basic/accAdd
declare namespace fu {
	interface FuStatic {
		/**
		 * 精确加法运算
		 */
		accAdd(arg1: number, arg2: number, pN?: number): number
	}
}

// basic/accSubtr
declare namespace fu {
	interface FuStatic {
		/**
		 * 精确减法运算
		 */
		accSubtr(arg1: number, arg2: number): number
	}
}

// basic/accMul
declare namespace fu {
	interface FuStatic {
		/**
		 * 精确乘法运算
		 */
		accMul(arg1: number, arg2: number, decLen?: number, pType?: string): number
	}
}

// basic/accDiv
declare namespace fu {
	interface FuStatic {
		/**
		 * 精确除法运算
		 */
		accDiv(arg1: number, arg2: number, decLen?: number): number
	}
}

// chTimeHello
declare namespace fu {
	/**
	 * 每天不同小时段返回中文欢迎语.
	 * [9, 11, 13, 20] => ['早上好', '上午好', '下午好', '晚上好']
	 * @see fu.chTimeHello
	 */
	interface FuStatic {
		chTimeHello(): string
	}
}

declare namespace fu {
	interface FuStatic {
		/**
		 * 判断输入的是否为数字且返回需要的格式的数字；
		 * 正确返回数字格式的数字，不满足返回字符串
		 * @Tips: 如果输入小数位，将采取舍入的方式格式化为小数位数格式 eg.(2位小数) 1.02323232 => 1.02; 1.09999 => 1.09
		 *
		 * @param {Any} num 需要判断的数字
		 * @param {[Number]} min 数字所在区间的最小值
		 * @param {[Number]} max 数字所在区间的最大值
		 * @param {[Number]} decLen 小数位数
		 * @return Number|String
		 */
		checkNumber(num: any, min?: number, max?: number, decLen): number | string
	}
}

// CustomEventEmitter
declare namespace fu {
	interface FuStatic {
		/**
		 * 简版事件处理类.
		 *
		 * @author Jesonhu<github: Jesonhu>
		 * @update 2020-5-16 11:08:23
		 *
		 * @Tips
		 * # listeners 数据结构
		 * $_listeners = [
		 *  {
		 *   'hello': [{ _callback: fn1, _scope: null }, { _callback: fn2, _scope: context }]
		 *  }
		 * ]
		 * _callback: 为绑定的事件处理函数
		 * _scope: 是可能为 null 的对象，如果监听时绑定了 this, _scope 则指向绑定的对象
		 *
		 * @Tips
		 * # JS 函数调用 this 指向情况分析
		 * 1. 一般函数方式调用，this 指向全局对象，浏览器中为 Window 对象
		 * 2. 作为对象的方法调用，this 指向这个对象
		 * 3. call() 和 apply() 方式调用 this 指向指定的对象(第一个参数绑定的对象)
		 * 4. new 命令调用, this 指向实例化的对象
		 *
		 * @example
		 * # 测试 this 指向问题
		 *
		 * @example
		 * # 测试函数事件绑定与监听问题
		 * class Hello extends CustomEventEmitter {}
		 * const hello = new Hello()
		 * function test1_1() { console.log('test-1') }
		 * function test1_2() { console.log('test-2') }
		 * hello.on('test', test1_1)
		 * hello.on('test', test1_2)
		 * hello.trigger('test')
		 * // => 'test-1'
		 * // => 'test-2'
		 * hello.off('test', test1_1)
		 * hello.trigger('test')
		 * // => 'test-2'
		 *
		 * 上面 off() 是移除某个事件监听，这里移除了 test1_1
		 * 所以未移除前两个函数都执行，移除后，只执行 'test-2'
		 *
		 * @example
		 * # 对象的方法中 this 指向
		 * const a = { x: '1', y: '2', fn1: function() { console.log('a.fn1', this) } }
		 * a.fn1()
		 * // => a.fn1, {x: "1", y: "2", fn1: ƒ}
		 *
		 * @example
		 * # this 指向问题
		 * class Hello extends CustomEventEmitter {}
		 * const hello = new Hello()
		 * function test1_1() { console.log('test-1', this) }
		 * function test1_2() { console.log(this.x) }
		 * const a = { x: '1', y: '2', fn1: function() { console.log('a.fn1', this) } }
		 *
		 * hello.on('test', test1_1)
		 * hello.on('test', test1_2, a)
		 * hello.on('test', a.fn1)
		 * hello.on('test', a.fn1, a)
		 * hello.trigger('test')
		 * // => Window
		 * // => '1'
		 * // => 'a.fn1', Window
		 * // => 'a.fn1', {x: "1", y: "2", fn1: ƒ}
		 *
		 * test1_1 为普通函数定义，且执行也为传递上下文，所以为 this 为 Window
		 * test1_2 虽然为普通函数定义，但是监听时传递了上下文，所以 this 为 a
		 * a.fn1 为对象的方法，有两种监听方式
		 * 第一种监听时没有传递上下文，所以 this 为 Window
		 * 第二种监听时传递了上下文，所以 this 为 a
		 * 第二种方式传递了 a 才实现了上面例子的效果
		 *
		 * @example
		 * # 参数传递
		 * class Hello extends CustomEventEmitter {}
		 * const hello = new Hello()
		 * function test1_1(e) { console.log('data', e) }
		 * hello.on('test', test1_1)
		 * hello.trigger('test', '参数')
		 * // => 'data', {data: "参数"}
		 * hello.trigger('test')
		 * // => 'data', undefined
		 *
		 * 这个事件监听派发器是支持参数传递的，触发的时候如果传递了参数， e.data 中就会出现传递的参数
		 * 需要注意的是这里的形参 e 不是传统事件处理中的 event, 而是简单处理的对象，后续可能会添加更多事件属性支持
		 * 但是本事件处理器并不是为了替代原生 EventTarget, 所以当需要非常多的属性时可以考虑 EventTarget 与 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)
		 */
		CustomEventEmitter: constructor
	}
}

// basic/deepClone
declare namespace fu {
	interface FuStatic {
		/**
		 * 对象深度克隆.
		 *
		 * @param {object} sourceObj 需要克隆的对象.
		 * @notice 最常规的方法，弊端是继承的原型链的属性和方法没有了
		 */
		deepClone<T>(sourceObj: T): T
	}
}

// basic/debounce
declare namespace fu {

	interface debounceOption {
    leading?: boolean, // 指定在延迟开始前调用
    maxWait?: number, // func 允许被延迟的最大值。
    trailing?: boolean // 指定在延迟结束后调用
	}

	interface FuStatic {
		/**
		 * 防抖函数
		 * 
		 * @author YSong
		 * @see fu.throttle
		 * @example
		 * function sayHi() { console.log('防抖处理中) }
		 * const inp = document.getElementById('inp');
		 * inp.addEventListener('input', debounce(sayHi))
		 * // => 500ms 触发一次sayHi
		 * 
		 */
		debounce(fn: Function, wait?: number, options?: debounceOption): Function
	}
}

// basic/extend
// @core
declare namespace fu {
	interface FuStatic {
		/**
		 * 将一个对象的属性合并到另一个对象上.
		 * Merge the properties of one object into another.
		 *
		 * @param {Object} target
		 * @description
		 * Object.assign({}, {person: {name: 1, age: 16}}, {person: {name:1}})
		 * 使用 Object.assign 需要处理多层数据前台的问题，这里就自行封装了.
		 *
		 * @example
		 * const r1 = extAssign({}, {person: {name: 1, age: 16}, test: { name: 'test' }}, {person: {name:2}})
		 * const r2 = Object.assign({}, {person: {name: 1, age: 16}, test: { name: 'test' }}, {person: {name:2}})
		 * // => r1: { person: {name: 2, age: 16}, test: {name: "test"} }
		 * // => r2: { person: {name: 2}, test: {name: "test"} }
		 */
		extend<T extends object>(target: T, ...args: T[]): T
	}
}

// getNumberPercent
declare namespace fu {
	interface FuStatic {
		/**
		 * 格式为`百分比方式`.
		 *
		 * @param {number} now 当前值.
		 * @param {number} total 总值.
		 * @return {string} 百分比后的字符串.
		 *
		 * @example
		 * getPercentNumber(2, 5)
		 * // => '40'
		 */
		getNumberPercent(now: number, total: number): string
	}
}

// getQueryParameters
declare namespace fu {
	interface FuStatic {
		/**
		 * 获取地址参数.
		 *
		 * @params {String} url 地址
		 * @example
		 * const url = '#/list?pageNo=1&pageSize=10'
		 * getQueryParameters(url);
		 * // => { pageNo: '1', pageSize: '10' }
		 */
		getQueryParameters(url: string): object
	}
}

// hideSourceName
declare namespace fu {
	interface FuStatic {
		/**
		 * 对象属性隐藏.
		 *
		 * @param {Array<any>|Object} sourceObj 源对象
		 * @param {Array<string>} hideKeyMap 需要删除的名
		 *
		 * @description 如果是 sourceObj 对象数组，只处理最外层对象的值
		 *
		 * @dependencies
		 * [ `fu.deepClone` ]
		 */
		hideSourceName<T extends object | Array<object>, K extends object>(
			sourceObj: T,
			hideKeyMap: K
		): T
	}
}

// isEmpty
declare namespace fu {
	interface FuStatic {
		/**
		 * 判断指定对象是否为空.
		 * 可以判断字符串和数组.
		 * @param {any[]|string} data
		 * @returns {boolean}
		 */
		isEmpty<T extends Array<any> | string>(data: T): boolean
	}
}

// isFunction
declare namespace fu {
	interface FuStatic {
		/**
		 * 是否为函数
		 *
		 * @param {Function|any} fn 需要判断的对象
		 * @return {Boolean}
		 */
		isFunction(fn: Function | any): boolean
	}
}

// isUndefined
declare namespace fu {
	interface FuStatic {
		/**
		 * is Undefined
		 * @params [any] checkObj 判断的对象.
		 */
		isUndefined(checkObj: any): boolean
	}
}

// list2Tree
declare namespace fu {
	interface FuStatic {
		/**
		 * 列表格式化为树型结构数据
		 * @param {*} data 数据源
		 * @param {*} id id字段 默认 'id'
		 * @param {*} parentId 父节点字段 默认 'parentId'
		 * @param {*} children 孩子节点字段 默认 'children'
		 * @param {*} rootId 根Id 默认 0
		 */
		list2Tree<T extends object>(
			data: T[],
			idKey?: string,
			parentIdKey?: string,
			childrenKey?: string,
			rootId?: number
		): T[]
	}
}

// numPrecision
declare namespace fu {
	interface FuStatic {
		/** 数字计算
		 *
		 * @Tips 需要实现功能
		 * @see precision https://blog.csdn.net/baidu_29701003/article/details/88103436
		 */

		numPrecision(): any
	}
}

// obj2Arr
declare namespace fu {
	interface FuStatic {
		/**
		 * 对象转为数组.
		 *
		 * @param {Object} obj 需要转换的对象.
		 */
		obj2Arr<T extends object | any>(obj: T): T[]
	}
}

// obj2UrlQuery
declare namespace fu {
	interface FuStatic {
		/**
		 * 对象转换为 url 参数.
		 * @param {Object} param 将要转为URL参数字符串的对象
		 * @param {String} key URL参数字符串的前缀
		 * @param {Boolean} encode 是否进行URL编码,默认为true
		 * @return {String} URL参数字符串
		 *
		 * @see https://blog.csdn.net/shawyeok/article/details/41749045
		 *
		 * @example
		 * obj={name:'tom','class':{className:'class1'},classMates:[{name:'lily'}]};
		 * obj2Url(obj)
		 * // => 'name=tom&class.className=class1&classMates[0].name=lily'
		 *
		 * @example
		 * obj={name:'tom','class':{className:'class1'},classMates:[{name:'lily'}]};
		 * obj2Url(obj,'stu')
		 * => 'stu.name=tom&stu.class.className=class1&stu.classMates[0].name=lily'
		 */
		obj2UrlQuery<T extends object>(
			param: T,
			key?: string,
			encode?: boolean
		): string
	}
}

// parseTime
declare namespace fu {
	interface FuStatic {
		/**
		 * 将时间格式化为需要的格式.
		 *
		 * @param {Date} date `Date`对象
		 * @param {string} fmt `需要的格式`
		 * @return {string} 格式化后的时间
		 *
		 * @example
		 * ```
		 * parseTime(new Date());
		 * // => '2018-07-27 14:24:11'
		 *
		 * parseTime(new Date(), 'yyyy');
		 * // => '2018'
		 *
		 * parseTime(new Date(), 'dd-MM-yyy hh:mm:ss');
		 * // => "27-07-018 14:26:54"
		 * ```
		 */
		parseTime<T extends Date>(time: T, pattern: string): string
	}
}

// randomIntegerNumFromRange
declare namespace fu {
	interface FuStatic {
		/**
		 * 随机获取指定区间的数字(整数).
		 *
		 * @param {Number} start 开始数
		 * @param {Number} end   结束数
		 * @return {Number}      start 与 end 区间的整数
		 * @example
		 * randomIntegerNumFromRange(2, 3)
		 * // => 2~3 直接的整数，包含 2 与 3
		 *
		 * @example
		 * randomIntegerNumFromRange(2.1, 3.1)
		 * // => 2~3 直接的整数，包含 2 与 3
		 */
		randomIntegerNumFromRange(start: number, end: number): number
	}
}

// randomNumFromRange
declare namespace fu {
	interface FuStatic {
		/**
		 * 随机获取指定区间的数字(小数).
		 *
		 * @param {Number} start 开始数
		 * @param {Number} end   结束数
		 * @return {Number} 区间的小数
		 *
		 * @example
		 * randomNumFromRange(2, 3)
		 * // => 2.222
		 */
		randomNumFromRange(start: number, end: number): number
	}
}

// sourceNameConversion
declare namespace fu {
	enum sourceNameConversionKey {
		reverse = 'reverse',
	}
	interface FuStatic {
		/**
		 * 字段转换.
		 * @param {object|array} sourceObj 源对象.
		 * @param {object} translateMap 转换规则.
		 * @param {[string]} type 是否翻转转换规则. type = 'reverse' 使用反转.
		 *
		 * @example
		 * // returns1
		 * source = { name: 'Jeson', desc: 'Colder' },
		 * translateMap = { name: 'nickName', desc: 'description' }
		 * sourceNameConversion(srouce, translateMap)
		 * => { nickName: 'Jeson', description: 'Colder' }
		 */
		sourceNameConversion<T extends object, K extends object>(
			sourceObj: T,
			translateMap: K,
			type?: sourceNameConversionKey
		): T
	}
}

// splitToGroup
declare namespace fu {
	interface FuStatic {
		/**
		 * 拆分成组.
		 *
		 * @author Jeson
		 * @create 2020/09/23
		 * @param {Number} grouptLen 组每项最大值.
		 * @param {any[]} sourceArr 需要拆分的数组.
		 * @return any[]
		 * @inspire lodash.split
		 * @example
		 * const arr = [1, 2, 3, 4, 5, 6, 7]
		 * splitToGroup(3, arr)
		 * // => [
		 *   [1, 2, 3],
		 *   [4, 5, 6],
		 *   [7]
		 * ]
		 *
		 * @example
		 * const arr = [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}, {x: 6}, {x: 7}, {x: 8}]
		 * splitToGroup(2, arr)
		 * // => [
		 *   [{x: 1}, {x: 2}],
		 *   [{x: 3}, {x: 4}],
		 *   [{x: 5}, {x: 6}],
		 *   [{x: 7}, {x: 8}]
		 * ]
		 */
		splitToGroup<T extends object>(grouptLen: number, sourceArr: T[]): T[]
	}
}

// toInt
declare namespace fu {
	interface FuStatic {
		/**
		 * 将数字字符串转化为数字.
		 *
		 * @param {Number|String} str 需要转换的字符串.
		 * @return {Number}
		 */
		toInt(str: number | string): number
	}
}

// basic/throttle
declare namespace fu {
	interface throttleOptions {
		leading: boolean,  // 指定调用在节流开始前
    trailing: boolean  // 指定调用在节流结束后
	}

	interface FuStatic {
		/**
		 * 节流
		 * 
		 * 防抖有这样一个场景，当用户一直触发某个操作不停止，理论上回调函数将永远不会触发，
		 * 为了解决这个问题可以使用节流处理，即使操作不停止，某段时间后也要触发回调
		 * @link https://segmentfault.com/a/1190000018428170/
		 * @see fu.debounce
		 * @example
		 * function sayHi() { console.log('防抖处理中) }
		 * const inp = document.getElementById('inp');
		 * inp.addEventListener('input', debounce(sayHi))
		 * // => 500ms 触发一次sayHi
		 */
		throttle(func: Function, wait?: number, options?: throttleOptions): Function
	}
}

// welcomeFromArr
declare namespace fu {
	interface FuStatic {
		/**
		 * 随机返回指定的数组中的字符串.
		 *
		 * @param {Array<string>} welcomArr 指定的数组
		 * @example
		 * arr = ['休息一会儿吧', '准备吃什么呢?', '我猜你可能累了']
		 * welcomeFromArr(arr)
		 * // => 随机的内容
		 */
		welcomeFromArr(welcomArr: string[]): string
	}
}

// dom/addClass
declare namespace fu {
	interface FuStatic {
		/**
		 * 元素样式增加.
		 * @param {Element} el dom元素
		 * @param {String} className 类名
		 * @module {DOM}
		 * @see {dom}
		 */
		addClass(el: Element, className: string): Element
	}
}

// dom/elementScrollToBottom
declare namespace fu {
	interface FuStatic {
		/**
		 * 将元素滚动到底部.
		 *
		 * @module {DOM}
		 * @example
		 * selector = '.test'
		 * elementScrollToBottom(selector)
		 * 如果当前元素满足滚动到底部条件(内容超出自身高度出现了滚动条)则会滚动到底部.
		 *
		 */
		elementScrollToBottom(selector: string): void
	}
}

// dom/h
declare namespace fu {
	interface FuStatic {
		/**
		 * render 函数
		 *
		 *
		 * @param {*} tag
		 * @param {*} attrs
		 * @param {*} children
		 * @returns Element
		 * @module {DOM}
		 *
		 * @example
		 * h('span', {
		 *  class: '.test'
		 *  text: '131313'
		 * })
		 */
		h(tag: string, attrs?: any, children?: any): Element
	}
}

// dom/isIE
declare namespace fu {
	interface FuStatic {
		/**
		 * 判断是否为IE浏览器
		 */
		isIE(): boolean
	}
}

// dom/isMac
declare namespace fu {
	interface FuStatic {
		/**
		 * 判断是否为Mac浏览器
		 */
		isMac(): boolean
	}
}

// dom/removeClass
declare namespace fu {
	interface FuStatic {
		/**
		 * 元素样式删除.
		 * @param {Element} el dom 元素
		 * @param {String} className 类名
		 * @see {dom}
		 */
		removeClass(el: Element, className: string): void
	}
}

// dom/setRem
declare namespace fu {
	interface FuStatic {
		/**
		 * `rem` 单位设置.
		 *
		 * `window.html` 设置 `font-size` 的大小
		 *
		 * @desc 设置 html.body 的 fontSize,常用来使用 rem 前设置 fontSize.
		 *
		 * @param {number} designWidth UI设计图片的宽度，默认值为 750
		 * @param {number} unit 单位，默认值为 100
		 *
		 * @link Document
		 * @desc setRem(640) => `width:640px` `font-size:50px;`
		 * @desc setRem(750) => `width:750px` `font-size:50px;`
		 *
		 */
		setRem(designWidth?: number, unit?: number): void
	}
}

// version
declare namespace fu {
	interface FuStatic {
		/** 版本号 */
		version: string
	}
}

// fu.basic
declare namespace fu {
	interface FuStatic {
		basic: FuStatic
	}
}

// fu.dom
declare namespace fu {
	interface FuStatic {
		dom: FuStatic
	}
}

// fu.node
declare namespace fu {
	interface FuStatic {
		node: FuStatic
	}
}

export default fu
