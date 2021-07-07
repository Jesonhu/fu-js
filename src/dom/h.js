/**
 * render 函数
 * 
 * 
 * @param {*} tag 
 * @param {*} attrs 
 * @param {*} children 
 * @returns Element
 * @module {DOM}
 * 
 * @example
 * h('span', {
 *  class: '.test'
 *  text: '131313'
 * })
 */
export function h(tag, attrs, children) {
  const node = document.createElement(tag);
  attrs &&
    Object.keys(attrs).forEach(function (key) {
      if (!key.indexOf("data")) {
        var k = key.replace("data", "");
        node.dataset[k] = attrs[key];
      } else {
        node[key] = attrs[key];
      }
    });
  children &&
    children.forEach(function (_ref) {
      const tag = _ref.tag,
        attrs = _ref.attrs,
        children = _ref.children;
      node.appendChild(h(tag, attrs, children));
    });
  return node;
};

export default h