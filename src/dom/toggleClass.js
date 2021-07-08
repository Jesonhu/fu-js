/**
 * 元素样式切换.
 *
 * @param [Element] el dom 元素.
 * @param [string] className 类名
 */
export function toggleClass(el, className) {
	if (typeof el !== 'object') return
	const isExist = el.classList.contains(className)
	if (isExist) {
		el.classList.remove(className)
	} else {
		el.classList.add(className)
	}
}

export default toggleClass
