/**
 * 给对象中添加基础域.
 */
export const addAssetsBaseUrlFromObject = (source, key, baseUrl) => {
  
  const oldUrl = source[key];
  source[key] = `${baseUrl}${oldUrl}`
  return source
}

// const obj1 = { src: '/a.jpg' }
// const s = addAssetsBaseUrlFromObject(obj1, 'src', 'http://test.com')

export default addAssetsBaseUrlFromObject
