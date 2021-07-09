/*
  函数：减法函数，用来得到精确的减法结果
  说明：函数返回较为精确的减法结果。
  参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
  调用：Calc.Sub(arg1,arg2)
  返回值：两数相减的结果
  */
  export function accSubtr(arg1, arg2) {
    return accAdd(arg1, -Number(arg2), arguments[2])
  }