/**
 * 对象转换为 url 参数.
 * @param {Object} param 将要转为URL参数字符串的对象
 * @param {String} key URL参数字符串的前缀
 * @param {Boolean} encode 是否进行URL编码,默认为true
 * @return {String} URL参数字符串
 *
 * @see https://blog.csdn.net/shawyeok/article/details/41749045
 *
 * @example1
 * obj={name:'tom','class':{className:'class1'},classMates:[{name:'lily'}]};
 * obj2Url(obj)
 * // => 'name=tom&class.className=class1&classMates[0].name=lily'
 *
 * @example2
 * obj={name:'tom','class':{className:'class1'},classMates:[{name:'lily'}]};
 * obj2Url(obj,'stu')
 * => 'stu.name=tom&stu.class.className=class1&stu.classMates[0].name=lily'
 */
export function obj2UrlQuery(param, key, encode) {
  var urlEncode = function (param, key, encode) {
    if (param == null) return ''
    var paramStr = ''
    var t = typeof param
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param)
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += urlEncode(param[i], k, encode)
      }
    }
    return paramStr
  }
  // 去掉首位的&
  return urlEncode(param, key, encode).slice(1)
}

export default obj2UrlQuery
