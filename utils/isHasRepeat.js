/**
 * 判断数组中是否存在重复项.
 *
 * @author Jesonhu
 * @createTime: 2020/09/23
 *
 * @param {Array<string>} arr 判断数组.
 * @return {Boolean} true: 存在重复项。false: 不存在.
 *
 * @example
 * arr = ['1', '2', '3', '4']
 * isHasRepeat(arr)
 * // => false
 *
 * @example
 * arr = ['1', '2', '3', '4', '1']
 * isHasRepeat(arr)
 * // => true
 */
function isHasRepeat(arr) {
  const hash = {};
  for (let i in arr) {
    if (hash[arr[i]]) {
      return true;
    }
    // 每项都标记为true
    hash[arr[i]] = true;
  }
  return false;
}

export default isHasRepeat;
