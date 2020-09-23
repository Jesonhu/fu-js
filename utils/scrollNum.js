/**
 * 获取元素滚动中对应变化值.
 *
 * @author Jesonhu
 * @create 2020/09/23
 *
 * @param {Number} a 元素开始变化的滚动开始高度
 * @param {Number} r 元素开始变化的滚动结束高度
 * @param {Number} e 当前滚动高度
 * @param {Number} l 元素开始变化值
 * @param {Number} o 元素结束变化值
 * @return {Number} 元素滚动中对应的值.
 *
 * @example
 * scrollNum(100, 200, 150, 0, 1)
 * // => 0.5
 *
 * @example
 * scrollNum(100, 200, 150, 0, 700)
 * // => 350
 */
function scrollNum(a, r, e, l, o) {
  return l + ((e - a) / (r - a)) * (o - l);
}

export default scrollNum;
