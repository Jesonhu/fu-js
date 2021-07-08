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
export class CustomEventEmitter {
	constructor() {
		this.$_listeners = []
	}

	on(name, callback, scope = null) {
		this.$_listeners[name] = this.$_listeners[name] || []
		const item = {}
		item['_callback'] = callback
		item['_scope'] = scope
		this.$_listeners[name].push(item)
	}

	off(name, callback) {
		const listeners = this.$_listeners[name]
		if (Array.isArray(listeners)) {
			const index = listeners.findIndex((i) => i['_callback'] === callback)
			if (index >= 0) listeners.splice(index, 1)
		}
	}

	trigger(name, data = null) {
		const listeners = this.$_listeners[name]
		if (Array.isArray(listeners)) {
			listeners.map((i, index) => {
				const matchItem = listeners[index]
				const callback = matchItem['_callback']
				if (!(callback instanceof Function)) return
				if (matchItem && matchItem['_scope']) {
					data
						? callback.call(matchItem['_scope'], { data })
						: callback.call(matchItem['_scope'])
				} else {
					data ? callback({ data }) : callback()
				}
			})
		}
	}
}

export default CustomEventEmitter
