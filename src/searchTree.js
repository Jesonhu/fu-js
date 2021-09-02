import helperCreateTreeFunc from "./helperCreateTreeFunc"
import arrayEach from "./arrayEach"
import extend from './extend'

function searchTreeItem(parentAllow, parent, obj, iterate, context, path, node, parseChildren, opts) {
  let paths, nodes, rest, isAllow, hasChild
  let rests = []
  let hasOriginal = opts.original
  let sourceData = opts.data
  let mapChildren = opts.mapChildren || parseChildren
  arrayEach(obj, function (item, index) {
    paths = path.concat(['' + index])
    nodes = node.concat([item])
    isAllow = parentAllow || iterate.call(context, item, index, obj, paths, parent, nodes)
    hasChild = parseChildren && item[parseChildren]
    if (isAllow || hasChild) {
      if (hasOriginal) {
        rest = item
      } else {
        rest = extend({}, item)
        if (sourceData) {
          rest[sourceData] = item
        }
      }
      rest[mapChildren] = searchTreeItem(isAllow, item, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
      if (isAllow || rest[mapChildren].length) {
        rests.push(rest)
      }
    } else if (isAllow) {
      rests.push(rest)
    }
  })
  return rests
}

/**
  * 从树结构中根据回调查找数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Array}
  * 
  * @example
  * list = [{label:"Base",value:"base",expand:true,children:[{name:"isNaN",args:"val",title:"判断是否非数值，如果 value 是一个 NaN，那么返回 true，否则返回 false",desc:"",params:[],codes:[`isNaN(undefined)XEUtils.isNaN(undefined)XEUtils.isNaN(NaN)`,],},],}]
  * filterName = ''
  * formatList = searchTree(
      list,
      (item) =>
        (item.name || "").toLowerCase().indexOf(filterName) > -1 ||
        (item.title || "").toLowerCase().indexOf(filterName) > -1,
      { children: "children" }
    )
    console.log(formatList)
    // => 
  */
export const searchTree = helperCreateTreeFunc(function (parent, obj, iterate, context, path, nodes, parseChildren, opts) {
  return searchTreeItem(0, parent, obj, iterate, context, path, nodes, parseChildren, opts)
})

export default searchTree

