/**
 * typeof 帮助函数
 * 
 * @param {String} type 类型
 * @return {Function}
 * 
 * @example
 * ```
 * // 一般使用
 * typeof obj === 'function'
 * typeof obj === 'undefined'
 * typeof obj === 'number'
 * 
 * // 现在
 * helperCreateInTypeof('function')
 * helperCreateInTypeof('undefined')
 * helperCreateInTypeof('number')
 * ```
 */
export function helperCreateInTypeof (type) {
  return function(obj) {
    return typeof obj === type
  }
}

export default helperCreateInTypeof