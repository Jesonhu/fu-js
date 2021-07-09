/**
 * 数字切割
 * 
 * @example
 * numSplit(11111)
 * // => '11,111'
 * @example
 * numSplit(11111, 3, '-')
 * // => '11-111'
 */
function numSplit(num, len = 3, splitStr = ',') {
  const numArray = num.toString().split('.')
  const regExpMap = {
    2: /(\d{1,2})(?=(\d{2})+(?:$|\.))/g,
    3: /(\d{1,3})(?=(\d{3})+(?:$|\.))/g,
    4: /(\d{1,4})(?=(\d{4})+(?:$|\.))/g,
    5: /(\d{1,5})(?=(\d{5})+(?:$|\.))/g,
  }
  const useRegExp = regExpMap[len]
  if (numArray[1]) {
    return (
      (numArray[0] + '').replace(useRegExp, `$1${splitStr}`) +
      '.' +
      numArray[1]
    )
  } else {
    return (numArray[0] + '').replace(useRegExp, `$1${splitStr}`)
  } 
}