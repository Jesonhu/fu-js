/*
  函数：除法函数，用来得到精确的除法结果
  说明：函数返回较为精确的除法结果。
  参数：arg1：除数；arg2被除数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
  调用：Calc.Div(arg1,arg2)
  返回值：arg1除于arg2的结果
*/
export function accDiv(arg1, arg2, decLen) {
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
		(r2.split('.')[1] ? r2.split('.')[1].length : 0) -
		(r1.split('.')[1] ? r1.split('.')[1].length : 0)
	resultVal =
		(Number(r1.replace('.', '')) / Number(r2.replace('.', ''))) *
		Math.pow(10, m)
	return typeof d !== 'number'
		? Number(resultVal)
		: Number(resultVal.toFixed(parseInt(d)))
}

export default accDiv
