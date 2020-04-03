/** 
 * 对象属性隐藏.
 * 
 * @param {Array<any>|Object} sourceObj 源对象
 * @param {Array<string>} hideKeyMap 需要删除的名
 * 
 * @description 如果是 sourceObj 对象数组，只处理最外层对象的值
 */
const hideSourceName = (sourceObj, hideKeyMap) => {
  const resData = deepClone(sourceObj);

  if (Array.isArray(resData)) {
    resData.forEach(item => {
      for (let i = 0; i < hideKeyMap.length; i++) {
        const name = hideKeyMap[i];
        if (item.hasOwnProperty(name)) delete item[name];
      }
    });
  } else {
    for (let i = 0; i < hideKeyMap.length; i++) {
      const name = hideKeyMap[i];
      if (resData.hasOwnProperty(name)) delete resData[name];
    }
  }

  return resData;
}