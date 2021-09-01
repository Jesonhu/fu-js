import forEach from './forEach'

/**
 * 指定方法后的返回值组成的新数组
 * 
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {Object} context 上下文
 * @return {Array}
 */
export function map(obj, iterate, context) {
  let result = []
  if (obj && arguments.length > 1) {
    if (obj.map) {
      return obj.map(iterate, context)
    } else {
      forEach(obj, function() {
        result.push(iterate.apply(context, arguments))
      })
    }
  }
  return result
}

export default map