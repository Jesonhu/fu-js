/**
 * 函数，加法函数，用来得到精确的加法结果
 * 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 * 参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数）
 * 调用：Calc.Add(arg1,arg2,d)
 * 返回值：两数相加的结果
*/ 
export function accAdd(arg1, arg2, pN) {
  if (!arg1) arg1 = 0
  if (!arg2) arg2 = 0
  arg1 = arg1.toString()
  arg2 = arg2.toString()
  var arg1Arr = arg1.split('.')
  var arg2Arr = arg2.split('.')
  var d1 = arg1Arr.length === 2 ? arg1Arr[1] : ''
  var d2 = arg2Arr.length === 2 ? arg2Arr[1] : ''
  var maxLen = Math.max(d1.length, d2.length)
  var m = Math.pow(10, maxLen)
  var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen))
  var d = pN
  return typeof d === 'number' ? Number(result.toFixed(d)) : result
}