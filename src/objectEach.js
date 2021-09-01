import hasOwnProp from './hasOwnProp'

/**
 * 对象迭代
 * @param {Object} obj 需要迭代的对象 
 * @param {Function} iterate 迭代器
 * @param {Object} context 上下文
 */
export function objectEach(obj, iterate, context) {
  if (obj) {
    for (let key in obj) {
      if (hasOwnProp(obj, key)) iterate.call(context, obj[key], key, obj)
    }
  }
}

export default objectEach