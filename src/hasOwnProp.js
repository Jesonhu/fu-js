/**
 * 判断属性是否为对象自身的属性
 * @param {Object} obj 对象
 * @param {String} key 属性名
 * @return {Boolean}
 */
export function hasOwnProp(obj, key) {
  return obj && obj.hasOwnProperty ? obj.hasOwnProperty(key) : false
}

export default hasOwnProp