/**
 * 判断输入是否为数字
 *
 * @param {any} num 校验的内容
 * @param {Number} min 最大值
 * @param {Number} max 最小值
 * @param {Number} decLen 小数位
 * @return {Number|String} 返回数字类型可以正常使用，返回字符串可以输出错误提示
 * @example
 * checkNumber('', 0.01, 999999, 2)
 * // => '请输入0.01-999999之间的数值'
 *
 * checkNumber(null, 0.01, 999999, 2)
 * // => '请输入0.01-999999之间的数值'
 *
 * checkNumber(undefined, 0.01, 999999, 2)
 * // => 0.01
 *
 * const r = checkNumber(999999999, 0.01, 999999, 2)
 * // => '请输入0.01-999999之间的数值'
 *
 * checkNumber(1.13131313, 0.01, 999999, 2)
 * // => 1.13
 *
 * checkNumber(0.0001, 0.01, 999999, 2)
 * // => '请输入0.01-999999之间的数值'
 */
export function checkNumber(num, min, max, decLen) {
	let pNum = num - 0
	const reg = /^-?(0|[1-9]\d*)(\.\d+)?$/
	if (!reg.test(pNum)) {
		pNum = min
	}
	if (!min && min !== 0) {
		if (decLen === 1) {
			min = 0.1
		} else if (decLen === 2) {
			min = 0.01
		} else if (decLen === 3) {
			min = 0.001
		} else if (decLen === 4) {
			min = 0.0001
		} else {
			min = 1
		}
	}

	if (pNum > max || pNum < min) {
		return `请输入${min}-${max}之间的数值`
	}

	const numReg = /^[0-9]+.?[0-9]*$/

	if (numReg.test(min) && numReg.test(max)) {
		if (pNum < min) {
			if (decLen === 0) {
				pNum = parseInt(min)
			} else {
				pNum = min
			}
		}
		if (pNum > max) {
			if (decLen === 0) {
				pNum = parseInt(max)
			} else {
				pNum = max
			}
		}
	}
	pNum = pNum + ''
	pNum = pNum.replace(/[^\d.]/g, '') // 清除"数字"和"."以外的字符
	pNum = pNum.replace(/^\./g, '') // 验证第一个字符是数字
	pNum = pNum.replace(/\.{2,}/g, '.') // 只保留第一个, 清除多余的
	pNum = pNum.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
	if (decLen === 0) {
		const dNum = pNum.indexOf('.')
		if (dNum !== -1) {
			pNum = pNum.slice(0, dNum)
		} else {
			pNum = pNum.replace(/^0(0+)|[^\d]+/g, '') // 只能整数
		}
	}
	if (decLen === 1) {
		pNum = pNum.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3') // 只能输入1个小数
	}
	if (decLen === 2) {
		pNum = pNum.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 只能输入2个小数
	}
	if (decLen === 3) {
		pNum = pNum.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3') // 只能输入3个小数
	}
	if (decLen === 4) {
		pNum = pNum.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3') // 只能输入4个小数
	}
	if (pNum.indexOf('.') < 0 && pNum !== '') {
		// 此处控制的是以上如果没有小数点，首位不能为类似于 01、02的数值
		pNum = parseFloat(pNum)
	}
	pNum = isNaN(pNum) ? 0 : pNum // 不让显示NAN
	return Number(pNum)
}

export default checkNumber
