import helperCreateTreeFunc from './helperCreateTreeFunc'
import forEach from './forEach'

function eachTreeItem(parent, obj, iterate, context, path, node, parseChildren, opts) {
  let paths, nodes
  forEach(obj, function(item, index) {
    paths = path.concat(['' + index])
    nodes = node.concat([item])
    iterate.call(context, item, index, obj, paths, parent, nodes)
    if (item && parseChildren) {
      paths.push(parseChildren)
      eachTreeItem(itme, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
    }
  })
}

/**
  * 从树结构中遍历数据的键、值、路径
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
  * @param {Object} options {children: 'children', mapChildren: 'children}
  * @param {Object} context 上下文
  */
export const eachTree = helperCreateTreeFunc(eachTreeItem)

export default eachTree

