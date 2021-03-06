/**
 * 是否为函数
 *
 * @param {Function|any} fn 需要判断的对象
 * @return {Boolean}
 */
export function isFunction(fn) {
	return typeof fn === 'function' ? true : false
}

export default isFunction
