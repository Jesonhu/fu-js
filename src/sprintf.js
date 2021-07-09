/**
 * 字符串格式化命令
 *
 * @inspire C的printtf()
 * @desc 格式化统配符:
 * 1. `%s` - 字符串; 
 * 2. `%%` - 返回百分号本身
 * 3. %b - 二进制数字
 * %c - ASCII对应的字符
 * %d - 整数
 * %f - 浮点数
 * %o - 八进制数字
 * %x - 16进制数字 (小写字母形式)
 * %X - 16进制数字 (大写字母形式)
 * 
 * 在 % 号和通配字符之间可用的选项包括 (比如 %.2f)：
  1.+      (强制在数字前面显示 + 和 - 符号作为正负数标记。缺省情况下只有负数才显示 - 符号)
  2.-      (变量左对齐)
  3.0      (使用0作为右对齐的填充字符)
  4.[0-9]  (设置变量的最小宽度)
  5..[0-9] (设置浮点数精度或字符串的长度)
 * @link https://www.npmjs.com/package/sprintf-js
 * @link https://baike.baidu.com/item/sprintf
 * @link http://demon.tw/programming/javascript-sprintf.html
 * @link https://www.jb51.net/article/60398.htm
 */
export function sprintf() {
	var i = 0,
		a,
		f = arguments[i++],
		o = [],
		m,
		p,
		c,
		x,
		s = ''
	while (f) {
		if ((m = /^[^\x25]+/.exec(f))) {
			o.push(m[0])
		} else if ((m = /^\x25{2}/.exec(f))) {
			o.push('%')
		} else if (
			(m =
				/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(
					f
				))
		) {
			if ((a = arguments[m[1] || i++]) == null || a == undefined) {
				throw 'Too few arguments.'
			}
			if (/[^s]/.test(m[7]) && typeof a != 'number') {
				throw 'Expecting number but found ' + typeof a
			}
			switch (m[7]) {
				case 'b':
					a = a.toString(2)
					break
				case 'c':
					a = String.fromCharCode(a)
					break
				case 'd':
					a = parseInt(a)
					break
				case 'e':
					a = m[6] ? a.toExponential(m[6]) : a.toExponential()
					break
				case 'f':
					a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a)
					break
				case 'o':
					a = a.toString(8)
					break
				case 's':
					a = (a = String(a)) && m[6] ? a.substring(0, m[6]) : a
					break
				case 'u':
					a = Math.abs(a)
					break
				case 'x':
					a = a.toString(16)
					break
				case 'X':
					a = a.toString(16).toUpperCase()
					break
			}
			a = /[def]/.test(m[7]) && m[2] && a >= 0 ? '+' + a : a
			c = m[3] ? (m[3] == '0' ? '0' : m[3].charAt(1)) : ' '
			x = m[5] - String(a).length - s.length
			p = m[5] ? str_repeat(c, x) : ''
			o.push(s + (m[4] ? a + p : p + a))
		} else {
			throw 'Huh ?!'
		}
		f = f.substring(m[0].length)
	}
	return o.join('')
}

function str_repeat(i, m) {
	for (var o = []; m > 0; o[--m] = i);
	return o.join('')
}

export default sprintf
