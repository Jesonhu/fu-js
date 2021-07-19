import extend from './extend'

/**
 * 防抖函数,
 * 
 * @tips 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * @author YSong
 * @see fu.throttle
 * @link https://segmentfault.com/a/1190000018428170/
 * @example
 * function sayHi() { console.log('防抖处理中) }
 * const inp = document.getElementById('inp');
 * inp.addEventListener('input', debounce(sayHi))
 * // => 500ms 触发一次sayHi
 * 
 */
export function debounce(fnc, wait = 500, options= {}) {
  let timer = null
  const defaultOptions = {
    leading: false, // 指定在延迟开始前调用
    maxWait: 100, // func 允许被延迟的最大值。
    trailing: true // 指定在延迟结束后调用
  }
  options = extend({}, defaultOptions, options)
  console.log('options', options)
  return function() {
    // 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {  
      fnc.apply(this, arguments)
    }, wait)
  }
}

export default debounce