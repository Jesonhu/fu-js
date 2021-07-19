import extend from './extend'
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
export function throttle(fnc, wait = 0, options = {}) {
  // 是否可以运行标记，不能运行直接返回
  let valid = true
  const defaultOptions = {
    leading: true,  // 指定调用在节流开始前
    trailing: true  // 指定调用在节流结束后
  }
  options = extend({}, defaultOptions, options)
  return function() {
    if (!valid) return
    valid = false
    setTimeout(() => {
      fnc.apply(this, arguments)
      valid = true
    }, wait)
  }
}

export default throttle