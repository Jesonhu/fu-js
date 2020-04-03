/**
 * 对象 key value 互换.
 * @param {object} obj 需要 key value 互换的对象.
 * @return {object} 互换后的对象.
 */
const nameValueConversion = (obj) => {
  if (!!obj) return {};

  const cloneObj = JSON.parse(JSON.stringify(obj));
  for (let key in cloneObj) {
    const newKey = cloneObj[key];
    cloneObj[newKey] = key;
    delete cloneObj[key];
  }

  return cloneObj;
}

/**
 * 字段转换.
 * @param {object|array} sourceObj 源对象.
 * @param {object} translateMap 转换规则.
 * @param {[string]} type 是否翻转转换规则. type = 'reverse' 使用反转.
 * 
 * @example
 * // returns1 
 * source = { name: 'Jeson', desc: 'Colder' }, 
 * translateMap = { name: 'nickName', desc: 'description' }
 * sourceNameConversion(srouce, translateMap)
 * => { nickName: 'Jeson', description: 'Colder' }
 */
const sourceNameConversion = (sourceObj, translateMap, type = '') => {
  const cloneSourceObj = JSON.parse(JSON.stringify(sourceObj));

  // translateMap = {} handle.
  if (!translateMap) {
    return cloneSourceObj;
  }

  // sourceObj type is array.
  if (Array.isArray(cloneSourceObj)) {
    const resArr = [];
    for (let i = 0, len = cloneSourceObj.length; i < len; i++) {
      const translatedObj = sourceNameConversion(cloneSourceObj[i], translateMap, type);
      resArr.push(translatedObj);
    }
    return resArr;
  }

  // reverse translate map.
  if (type === 'reverse') {
    translateMap = nameValueConversion(translateMap);
  }

  // key translate And key delete.
  for (let key in cloneSourceObj) {
    if (translateMap.hasOwnProperty(key)) {
      const newKey = translateMap[key];
      cloneSourceObj[newKey] = JSON.parse(JSON.stringify(cloneSourceObj[key]));
      delete cloneSourceObj[key];
    }
  }

  return cloneSourceObj;
}