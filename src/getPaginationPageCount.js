/**
 * 最大页码计算.
 * 
 * @param {number} total 数据总数.
 * @param {number} pageSize 每页最多显示数量.
 */
export const getPaginationPageCount = (total, pageSize) => {
  return Math.ceil(total / pageSize);
}

export default getPaginationPageCount