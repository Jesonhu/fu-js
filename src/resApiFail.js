/** 
 * 接口返回的错误的信息快捷方式.
 */
export const resApiFail = (msg = '', code = 1) => {
  return {
    code,
    data: [],
    msg: msg,
    status: false
  }
}

export default resApiFail