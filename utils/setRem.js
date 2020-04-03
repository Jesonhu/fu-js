/**
 * `rem` 单位设置.
 * 
 * `window.html` 设置 `font-size` 的大小
 *  
 * @param {number} designWidth UI设计图片的宽度
 * @param {number} unit 单位
 * 
 * @link Document
 * @desc setRem(640) => `width:640px` `font-size:50px;`
 * @desc setRem(750) => `width:750px` `font-size:50px;`
 * 
 */
export function setRem(designWidth = 750, unit = 100) {
  (function (doc, win, dWid = 750, unit) {
    const docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) {
          return false;
        } else if (clientWidth > designWidth) {
          clientWidth = dWid;
        }
        docEl.style.fontSize = unit * (clientWidth / dWid) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window, designWidth, unit);
}