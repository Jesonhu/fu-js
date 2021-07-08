/**
 * 随机获取指定区间的数字(整数).
 *
 * @param {Number} start 开始数
 * @param {Number} end   结束数
 * @return {Number}      start 与 end 区间的整数
 * @example
 * randomIntegerNumFromRange(2, 3)
 * // => 2~3 直接的整数，包含 2 与 3
 *
 * @example
 * randomIntegerNumFromRange(2.1, 3.1)
 * // => 2~3 直接的整数，包含 2 与 3
 */
export const randomIntegerNumFromRange = (start, end) => {
	return Math.round(Math.random() * (end - start) + start)
}

export default randomIntegerNumFromRange
