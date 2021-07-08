/**
 * 随机返回指定的数组中的字符串.
 *
 * @param {Array<string>} welcomArr 指定的数组
 * @example
 * arr = ['休息一会儿吧', '准备吃什么呢?', '我猜你可能累了']
 * welcomeFromArr(arr)
 * // => 随机的内容
 */
export const welcomeFromArr = (welcomArr) => {
	const index = Math.floor(Math.random() * welcomArr.length)
	return welcomArr[index]
}

export default welcomeFromArr
