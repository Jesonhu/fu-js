/**
 * forEach
 * @param {Array} list 需要迭代的数据
 * @param {Function} iterate 迭代器
 * @param {Object} context 上下文
 * @module core
 * @type 
 */
export function arrayEach(list, iterate, context) {
  if (list) {
    if (list.forEach) {
      list.forEach(iterate, context)
    } else {
      for (let index = 0, len = list.length; index < len; index++) {
        iterate.call(context, list[index], index, list)
      }
    }
  }
}

export default arrayEach