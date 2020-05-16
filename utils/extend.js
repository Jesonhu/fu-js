/**
 * 将一个对象的属性合并到另一个对象上. 
 * Merge the properties of one object into another.
 * 
 * @param {Object} target
 * @description
 * Object.assign({}, {person: {name: 1, age: 16}}, {person: {name:1}})
 * 使用 Object.assign 需要处理多层数据前台的问题，这里就自行封装了.
 */
export function extend(target) {
  for (let i = 0; i < arguments.length; i++) {
    target = _mergeProperties(target, arguments[i])
  }
  return target
}

/**
 * @private
 */
function _mergeProperties(target, source) {
  for (let property in source) {
    if (source.hasOwnProperty(property)) {
      if (source[property] instanceof Array) {
        const value = target[property] instanceof Array ? target[property] : []
        target[property] = source[property].concat(value)
      } else if (
        source[property] != null &&
        typeof source[property] === 'object' &&
        source[property].constructor === Object) {
        target[property] = this._mergeProperties(target[property] || {}, source[property])
      } else {
        target[property] = source[property]
      }
    }
  }

  return target;
}

export default extend

