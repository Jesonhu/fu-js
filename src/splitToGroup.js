/**
 * 拆分成组.
 *
 * @author Jeson
 * @create 2020/09/23
 * @param {Number} grouptLen 组每项最大值.
 * @param {any[]} sourceArr 需要拆分的数组.
 * @return any[]
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7]
 * splitToGroup(3, arr)
 * // => [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7]
 * ]
 *
 * @example
 * const arr = [{x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}, {x: 6}, {x: 7}, {x: 8}]
 * splitToGroup(2, arr)
 * // => [
 *   [{x: 1}, {x: 2}],
 *   [{x: 3}, {x: 4}],
 *   [{x: 5}, {x: 6}],
 *   [{x: 7}, {x: 8}]
 * ]
 */
export const splitToGroup = (grouptLen, sourceArr) => {
  if (sourceArr.length === 0) return sourceArr;

  const groupItemCount = Math.ceil(sourceArr.length / grouptLen);
  const instertArr = [];
  for (let i = 0; i < groupItemCount; i++) {
    let arr = [];
    instertArr.push(arr);
  }

  sourceArr.map((i, idx) => {
    const gIdx = Math.floor(idx / grouptLen);
    instertArr[gIdx].push(i);
    return "";
  });

  return instertArr;
};

export default splitToGroup;
