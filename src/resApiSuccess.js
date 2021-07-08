/**
 * 返回成功的数据快捷方式.
 *
 * @param {[Object]}  data 返回的数据.
 * @param {[String]}msg 返回的提示信息.
 * @param {[Object]}  otherSet 自定义设置, 可以自定义状态码 eg: `{code: 401}`
 * @see { API }
 */
export const resApiSuccess = (data = {}, msg = '', otherSet = {}) => {
	const SUCCESS = 0
	const { code, customData } = otherSet
	if (customData) {
		return {
			code: code || SUCCESS,
			data: data,
			customData,
			msg: msg,
			status: true,
		}
	}
	return {
		code: SUCCESS,
		data: data,
		msg: msg,
		status: true,
	}
}

export default resApiSuccess
