/**
 * 富文本图片添加基础域.
 * @param {string} str 操作的字符串
 * @param {string} baseUrl 基础域
 * @example
 * const str1 = '<img src="/aa.png" /><span>1</span><img src="/aa.png" /><span>1</span><img src="/aa.png" />';
 * addAssetsBaseUrlFromRichText(str1, 'http://www.baidu.com');
 * // => <img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" /><span>1</span><img src="http://www.baidu.com/aa.png" />
 */
const addAssetsBaseUrlFromRichText = (str, baseUrl) => {
  return str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, `<img src="${baseUrl}$1" />`);
}