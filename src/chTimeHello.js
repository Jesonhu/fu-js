/**
 * 每天不同小时段返回中文欢迎语.
 */
export const chTimeHello = () => {
	const hour = new Date().getHours()
	let helloStr = ''
	if (hour < 9) {
		helloStr = '早上好'
	} else if (hour >= 9 && hour <= 11) {
		helloStr = '上午好'
	} else if (hour > 11 && hour <= 13) {
		helloStr = '中午好'
	} else if (hour > 13 && hour <= 20) {
		helloStr = '下午好'
	} else {
		helloStr = '晚上好'
	}

	return helloStr
}

export default chTimeHello
