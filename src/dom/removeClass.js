/**
 * 元素样式删除.
 * @param {Element} el dom 元素
 * @param {String} className 类名
 * @see {dom}
 */
export function removeClass(el, className) {
	if (typeof el !== 'object') return
	const isExist = el.classList.contains(className)
	if (isExist) {
		el.classList.remove(className)
	}
}

export default removeClass
