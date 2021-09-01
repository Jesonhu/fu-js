import clone from './clone'

/**
 * 对象深拷贝，支持对象和数组
 * @param {*} obj 
 * @returns 
 * @see clone
 */
function cloneDeep(obj) {
  return clone(obj, true)
}

export default cloneDeep