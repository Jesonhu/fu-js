/**
 * 格式为`百分比方式`.
 *
 * @param {number} now 当前值.
 * @param {number} total 总值.
 * @return {string} 百分比后的字符串.
 *
 * @example
 * getPercentNumber(2, 5)
 * // => '40'
 */
export function getPercent(now, total) {
	const percentStr = String((now / total) * 100)
	const integerNum = parseInt(percentStr)

	return `${integerNum}`
}

export default getPercent
