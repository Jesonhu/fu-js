/**
 * 判断指定对象是否为空.
 * 可以判断字符串和数组.
 * @param {any[]|string} data
 * @returns {boolean}
 */
export function isEmpty (data) {
  return data.length == 0 ? true : false;
}

export default isEmpty