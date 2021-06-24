/**
 * 随机获取指定区间的数字(小数).
 * 
 * @param {Number} start 开始数
 * @param {Number} end   结束数
 * @return {Number} 区间的小数
 * 
 * @example
 * randomNumFromRange(2, 3)
 */
const randomNumFromRange = (start, end) => {
  return Math.random() * (end - start) + start
}