import fu = require('../index')

declare module "../index" {
  interface FuStatic {
    /**
     * 判断一个对象是否未定义
     * @params [any] checkObj 判断的对象.
     * @return boolean
     */
    isUndefined(source: any): boolean
  };
  version: String;
}