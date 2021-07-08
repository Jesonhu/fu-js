/**
 * 判断是否为函数.
 *
 * @param {String} platform 浏览器头
 */
export function isMac(platform) {
	return /Mac/.test(navigator.platform)
}

export default isMac
