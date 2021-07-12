/*
  函数：乘法函数，用来得到精确的乘法结果
  说明：函数返回较为精确的乘法结果。
  参数：arg1：第一个乘数；arg2第二个乘数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
  调用：Calc.Mul(arg1,arg2)
  返回值：两数相乘的结果
*/
export function accMul(arg1, arg2, decLen, pType) {
	if (!arg1) {
		arg1 = 0
	}
	if (!arg2) {
		arg2 = 0
	}
	var r1 = arg1.toString()
	var r2 = arg2.toString()
	var m
	var resultVal
	var d = decLen || arguments[2]
	m =
		(r1.split('.')[1] ? r1.split('.')[1].length : 0) +
		(r2.split('.')[1] ? r2.split('.')[1].length : 0)
	resultVal =
		(Number(r1.replace('.', '')) * Number(r2.replace('.', ''))) /
		Math.pow(10, m)
	if (pType === 'money') {
		resultVal = Math.ceil(resultVal * 100) / 100
	}
	return typeof d !== 'number'
		? Number(resultVal)
		: Number(resultVal.toFixed(parseInt(d)))
}

export default accMul
