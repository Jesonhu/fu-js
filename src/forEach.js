import isArray from './isArray'
import arryEach from './arrayEach'
import objectEach from './objectEach'

/**
 * 迭代器
 * @param {Object} obj 
 * @param {Function} iterate 
 * @param {[Object]} context 
 * @example
 * ```
 * each({a: 1, b: 2, c: 3}, (item, key) => {
 *  console.log(item)
 * })
 * ``` 
 */
export function forEach (obj, iterate, context) {
  if (obj) {
    return (isArray(obj) ? arryEach : objectEach)(obj, iterate, context)
  }
  return obj
}

export default forEach