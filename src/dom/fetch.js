/**
 * 一个简单的 ajax 请求
 * @param {} options
 * @return Promise<any>
 * @example
 * fetch({
 *  url: 'yourApiUrl',
 *  type: 'get' // 请求的方式，可选值 get|post
 *  data: {} // 参数，可选
 * })
 */
export function fetch(options) {
	var xhr = null
	var params = formsParams(options.data)

	if (typeof options.async === 'undefined') options.async = true
	if (typeof options.data === 'undefined') options.data = {}

	//创建对象
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest()
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP')
	}

	function formsParams(data) {
		var arr = []
		for (var prop in data) {
			arr.push(prop + '=' + data[prop])
		}
		return arr.join('&')
	}

	return new Promise((resolve, reject) => {
		// 连接
		if (options.type.toUpperCase() == 'GET') {
			xhr.open(
				options.type.toUpperCase(),
				options.url + '?' + params,
				options.async
			)
			xhr.send(null)
		} else if (options.type.toUpperCase() == 'POST') {
			xhr.open(options.type.toUpperCase(), options.url, options.async)
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			xhr.send(params)
		}

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				const response =
					typeof xhr.responseText === 'string'
						? JSON.parse(xhr.responseText)
						: xhr.responseText
				resolve(response)
			} else {
				if (xhr.readyState === 4) {
					reject(xhr.responseText)
				}
			}
		}
	})
}

export default fetch
