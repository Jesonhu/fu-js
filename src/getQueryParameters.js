/**
 * 获取地址参数.
 *
 * @params {String} url 地址
 * @example
 * const url = '#/list?pageNo=1&pageSize=10'
 * getQueryParameters(url);
 * // => { pageNo: '1', pageSize: '10' }
 */
export const getQueryParameters = (url) => {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
			decodeURIComponent(search)
				.replace(/"/g, '\\"')
				.replace(/&/g, '","')
				.replace(/=/g, '":"') +
			'"}'
	)
}

export default getQueryParameters
