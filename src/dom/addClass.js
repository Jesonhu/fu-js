/**
 * 元素样式增加.
 * @param {Element} el dom元素
 * @param {String} className 类名
 * @module {DOM}
 * @see {dom}
 */
export function addClass(el, className) {
	if (typeof el !== 'object') return
	const isExist = el.classList.contains(className)
	if (!isExist) {
		el.classList.add(className)
	}
}

export default addClass
