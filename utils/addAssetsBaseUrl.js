/**
 * 资源添加基础域.
 * @param {String|Array<string>|Array<T>} source 资源数组
 * @param {Boolean|String} key 字符串: name, false: 没有key
 * @param {String} baseUrl 基础域
 * @return {String|Array<string>|Array<T>}
 * @example
 * const str1 = '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />';
 * addAssetsBaseUrl(str1, false, 'http://www.baidu.com');
 * // => <img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />
 *
 * @example
 * const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
 * addAssetsBaseUrl(arr1, false, 'http://hello.com')
 * // => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
 * 
 * @example
 * const arr1 = [{src: '/a.jpg'}, {src: '/b.jpg'}, {src: '/c.jpg'}]
 * addAssetsBaseUrl(arr1, 'src', 'http://hello.com')
 * // => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
 * 
 * @example
 * const obj1 = { src: '/a.jpg' }
 * const s = addAssetsBaseUrl(obj1, 'src', 'http://test.com')
 * => { src: 'http://test.com/a.jpg' }
 */
// Overload:
// function addAssetsBaseUrl(source: string, key: boolean, baseUrl: string): string
// function addAssetsBaseUrl(source: Object, key: string, baseUrl: string): Object
// function addAssetsBaseUrl(source: Array<string>, key: boolean, baseUrl: string): Array<string>
// function addAssetsBaseUrl(source: Array<T>, key: string, baseUrl: string): Array<T>

const addAssetsBaseUrl = (source, key, baseUrl) => {
  if (typeof source === 'string') {
    return source.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, `<img src="${baseUrl}$1" />`);
  }

  if (Array.isArray(source)) {
    // 无数据.
    if (source.length === 0) {
      return source
    }

    if ((typeof key) === 'boolean') {
      source.forEach((i, idx) => source[idx] = `${baseUrl}${i}`)
      return source
    }

    source.forEach((item) => item[key] = `${baseUrl}${item[key]}`)
    return source
  }

  const oldUrl = source[key];
  source[key] = `${baseUrl}${oldUrl}`
  return source
}
