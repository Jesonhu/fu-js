/**
 * 将元素滚动到底部.
 * 
 * @module {DOM}
 * @example
 * selector = '.test'
 * elementScrollToBottom(selector)
 * 如果当前元素满足滚动到底部条件(内容超出自身高度出现了滚动条)则会滚动到底部.
 * 
 */
export function elementScrollToBottom(selector) {
  const oEl = document.querySelector(selector)
  oEl.scrollTop = oEl.scrollHeight
}

export default elementScrollToBottom