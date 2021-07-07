/**
 * 对象深度克隆.
 * 
 * @param {object} sourceObj 需要克隆的对象.
 * @notice 最常规的方法，弊端是继承的原型链的属性和方法没有了
 */
export const deepClone = (sourceObj) => {
  return JSON.parse(JSON.stringify(sourceObj));
}

export default deepClone