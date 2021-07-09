/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
export function list2Tree(data, idKey, parentIdKey, childrenKey, rootId) {
	const id = idKey || 'id'
	const parentId = parentIdKey || 'parentId'
	const children = childrenKey || 'children'
	rootId = rootId || 0
	// 对源数据深度克隆
	const cloneData = JSON.parse(JSON.stringify(data))
	// 循环所有项
	const treeData = cloneData.filter((father) => {
		const branchArr = cloneData.filter((child) => {
			// 返回每一项的子级数组
			return father[id] === child[parentId]
		})
		// 子项放在父项中
		branchArr.length > 0 ? (father[children] = branchArr) : ''
		// 返回第一层
		return father[parentId] === rootId
	})
	// 可以格式化返回格式化后的数据否则返回源数据
	return treeData !== '' ? treeData : data
}

export default list2Tree
