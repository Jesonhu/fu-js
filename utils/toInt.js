/**
 * 将字符串转化为整形.
 * 
 * @param {Number|String} str 需要转换的字符串.
 * @return {Number}
 */
const toInt = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str) || 0;
}