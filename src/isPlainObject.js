/**
 * 是否为简单的对象
 * @param {Any} obj 
 * @return {Boolean}
 */
export function isPlainObject(obj) {
  return obj ? obj.constructor === Object : false
}

export default isPlainObject