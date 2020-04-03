/**
 * 对象转为数组.
 * 
 * @param {Object} obj 需要转换的对象. 
 */
function obj2Arr(obj) {
  if (typeof obj !== 'object') return;
  if (Array.isArray(obj)) return;

  const arr = [];
  const keyArr = Object.getOwnPropertyNames(obj);
  if (keyArr.length > 0) {
    let value;
    keyArr.forEach(item => {
      value = obj[item];
      arr.push(value);
    });
  }
  return arr;
}