/**
 * 前置补零.
 *
 * @author Jeson
 * @create 2020/09/23
 *
 * @param {Number} num 补零的数.
 * @param {Number} length 补零后的总长度.
 * @return 补零后的字符串.
 *
 * @example
 * addZero(3, 2)
 * // => '03'
 *
 * @example
 * addZero(100, 5)
 * // => '00100'
 */

function addZero(num, length) {
  // const arr = new Array(length).fill('0')
  // const arrStr = arr.join('')
  // const midStr = arrStr + num
  // return midStr.substr(-length)

  return (Array(length).join("0") + num).slice(-length);
}

export default addZero;
