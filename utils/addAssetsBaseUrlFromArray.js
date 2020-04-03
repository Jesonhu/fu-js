/**
 * 资源数组添加基础域.
 * @param {Array<string>|Array<T>} source 资源数组
 * @param {Boolean|String} key 字符串: name, false: 没有key
 * @param {String} baseUrl 基础域
 * @return {Array<string>|Array<T>}
 * @example
 * const arr1 = ['/a.jpg', '/b.jpg', '/c.jpg']
 * addAssetsBaseUrlFromArray(arr1, false, 'http://hello.com')
 * // => ['http://hello.com/a.jpg', 'http://hello.com/b.jpg', 'http://hello.com/c.jpg']
 * @example
 * const arr1 = [{src: '/a.jpg'}, {src: '/b.jpg'}, {src: '/c.jpg'}]
 * addAssetsBaseUrlFromArray(arr1, 'src', 'http://hello.com')
 * // => [{src: 'http://hello.com/a.jpg'}, {src: 'http://hello.com/b.jpg'}, {src: 'http://hello.com/c.jpg'}]
 */
// Overload:
// function addAssetsBaseUrlFromArray(source: Array<string>, key: boolean, baseUrl: string): Array<string>
// function addAssetsBaseUrlFromArray(source: Array<T>, key: string, baseUrl: string): Array<T>

const addAssetsBaseUrlFromArray = (source, key, baseUrl) => {
  // 无数据.
  if (source.length === 0) {
    return source;
  };

  if ((typeof key) === 'boolean') {
    source.forEach((i, idx) => source[idx] = `${baseUrl}${i}`)
    return source
  }

  source.forEach((item) => {
    item[key] = `${baseUrl}${item[key]}`
  });
  return source
}