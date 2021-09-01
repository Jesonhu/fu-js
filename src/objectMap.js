import forEach from './forEach'
import isFunction from './isFunction'
import property from './property'

/**
 * 指定方法后的返回值组成的新对象
 * 
 * @param {Object} obj 
 * @param {Function} iterate(item, index, obj) 回调
 * @param {Object} context 上下文
 * @return {Object}
 */
export function objectMap(obj, iterate, context) {
  const result = {}
  if (obj) {
    if (iterate) {
      if (!isFunction(iterate)) {
        iterate = property(iterate)
      }
      forEach(obj, function(val, index) {
        result[index] = iterate.call(context, val, index, obj)
      })
    } else {
      return obj
    }
  }
  return result
}

export default objectMap