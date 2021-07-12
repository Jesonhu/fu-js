// /**
//  * 判断一个数是否为对象格式
//  * @param {*} value
//  * @returns
//  * @inspire lodash.isObjectLike
//  * @example
//  *
//  * _.isObjectLike({});
//  * // => true
//  *
//  * _.isObjectLike([1, 2, 3]);
//  * // => true
//  *
//  * _.isObjectLike(_.noop);
//  * // => false
//  *
//  * _.isObjectLike(null);
//  * // => false
//  */
//  function isObjectLike(value) {
//   return value != null && typeof value == 'object'
// }

// /** Detect free variable `global` from Node.js. */
// var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

// /** Detect free variable `self`. */
// var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

// /** Used as a reference to the global object. */
// var root = freeGlobal || freeSelf || Function('return this')();

// const Symbol = root.Symbol

// /** `Object#toString` result references. */
// var nullTag = '[object Null]',
//     undefinedTag = '[object Undefined]';

// /** Built-in value references. */
// var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

// /** Used for built-in method references. */
// var objectProto = Object.prototype;

// /** Used to check objects for own properties. */
// var hasOwnProperty = objectProto.hasOwnProperty;

// /**
//  * Used to resolve the
//  * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
//  * of values.
//  */
// var nativeObjectToString = objectProto.toString;

// /** Built-in value references. */
// var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

// /**
//  * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
//  *
//  * @private
//  * @param {*} value The value to query.
//  * @returns {string} Returns the raw `toStringTag`.
//  */
// function getRawTag(value) {
//   var isOwn = hasOwnProperty.call(value, symToStringTag),
//       tag = value[symToStringTag];

//   try {
//     value[symToStringTag] = undefined;
//     var unmasked = true;
//   } catch (e) {}

//   var result = nativeObjectToString.call(value);
//   if (unmasked) {
//     if (isOwn) {
//       value[symToStringTag] = tag;
//     } else {
//       delete value[symToStringTag];
//     }
//   }
//   return result;
// }

// /**
//  * Converts `value` to a string using `Object.prototype.toString`.
//  *
//  * @private
//  * @param {*} value The value to convert.
//  * @returns {string} Returns the converted string.
//  */
//  function objectToString(value) {
//   return nativeObjectToString.call(value);
// }

// /**
//  * The base implementation of `getTag` without fallbacks for buggy environments.
//  *
//  * @private
//  * @param {*} value The value to query.
//  * @returns {string} Returns the `toStringTag`.
//  * @inspire lodash.baseGetTag()
//  */
// function baseGetTag(value) {
//   if (value == null) {
//     return value === undefined ? undefinedTag : nullTag;
//   }
//   return (symToStringTag && symToStringTag in Object(value))
//     ? getRawTag(value)
//     : objectToString(value);
// }

// /** `Object#toString` result references. */
// var boolTag = '[object Boolean]';
// /**
//  * 是否为布尔值
//  *
//  * @inspire loadash.isBoolean
//  */
// function isBoolean(val) {
//   return value === true || value === false || (isObjectLike(value) && baseGetTag(value) == boolTag);
// }

// /** `Object#toString` result references. */
// var numberTag = '[object Number]';

// /**
//  * Checks if `value` is classified as a `Number` primitive or object.
//  *
//  * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
//  * classified as numbers, use the `_.isFinite` method.
//  *
//  * @static
//  * @memberOf _
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a number, else `false`.
//  * @example
//  *
//  * _.isNumber(3);
//  * // => true
//  *
//  * _.isNumber(Number.MIN_VALUE);
//  * // => true
//  *
//  * _.isNumber(Infinity);
//  * // => true
//  *
//  * _.isNumber('3');
//  * // => false
//  */
// function isNumber(value) {
//   return typeof value == 'number' ||
//     (isObjectLike(value) && baseGetTag(value) == numberTag);
// }

// /**
//  * Checks if `value` is `null`.
//  *
//  * @static
//  * @memberOf _
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
//  * @example
//  *
//  * _.isNull(null);
//  * // => true
//  *
//  * _.isNull(void 0);
//  * // => false
//  */
//  function isNull(value) {
//   return value === null;
// }

// /**
//  * Checks if `value` is `undefined`.
//  *
//  * @static
//  * @since 0.1.0
//  * @memberOf _
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
//  * @example
//  *
//  * _.isUndefined(void 0);
//  * // => true
//  *
//  * _.isUndefined(null);
//  * // => false
//  */
//  function isUndefined(value) {
//   return value === undefined;
// }

// /** `Object#toString` result references. */
// var dateTag = '[object Date]';

// /**
//  * The base implementation of `_.isDate` without Node.js optimizations.
//  *
//  * @private
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
//  */
// function baseIsDate(value) {
//   return isObjectLike(value) && baseGetTag(value) == dateTag;
// }

// /**
//  * The base implementation of `_.unary` without support for storing metadata.
//  *
//  * @private
//  * @param {Function} func The function to cap arguments for.
//  * @returns {Function} Returns the new capped function.
//  */
//  function baseUnary(func) {
//   return function(value) {
//     return func(value);
//   };
// }

// /** Detect free variable `exports`. */
// var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

// /** Detect free variable `module`. */
// var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

// /** Detect the popular CommonJS extension `module.exports`. */
// var moduleExports = freeModule && freeModule.exports === freeExports;

// /** Detect free variable `process` from Node.js. */
// var freeProcess = moduleExports && freeGlobal.process;

// /** Used to access faster Node.js helpers. */
// var nodeUtil = (function() {
//   try {
//     // Use `util.types` for Node.js 10+.
//     var types = freeModule && freeModule.require && freeModule.require('util').types;

//     if (types) {
//       return types;
//     }

//     // Legacy `process.binding('util')` for Node.js < 10.
//     return freeProcess && freeProcess.binding && freeProcess.binding('util');
//   } catch (e) {}
// }());

// /* Node.js helper references. */
// var nodeIsDate = nodeUtil && nodeUtil.isDate;

// /**
//  * Checks if `value` is classified as a `Date` object.
//  *
//  * @static
//  * @memberOf _
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
//  * @example
//  *
//  * _.isDate(new Date);
//  * // => true
//  *
//  * _.isDate('Mon April 23 2012');
//  * // => false
//  */
// var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

// /** `Object#toString` result references. */
// var mapTag = '[object Map]',
//     setTag = '[object Set]';

// /** Used for built-in method references. */
// var objectProto = Object.prototype;

// /** Used to check objects for own properties. */
// var hasOwnProperty = objectProto.hasOwnProperty;

// /**
//  * Checks if `value` is an empty object, collection, map, or set.
//  *
//  * Objects are considered empty if they have no own enumerable string keyed
//  * properties.
//  *
//  * Array-like values such as `arguments` objects, arrays, buffers, strings, or
//  * jQuery-like collections are considered empty if they have a `length` of `0`.
//  * Similarly, maps and sets are considered empty if they have a `size` of `0`.
//  *
//  * @static
//  * @memberOf _
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is empty, else `false`.
//  * @example
//  *
//  * _.isEmpty(null);
//  * // => true
//  *
//  * _.isEmpty(true);
//  * // => true
//  *
//  * _.isEmpty(1);
//  * // => true
//  *
//  * _.isEmpty([1, 2, 3]);
//  * // => false
//  *
//  * _.isEmpty({ 'a': 1 });
//  * // => false
//  */
//  function isEmpty(value) {
//   if (value == null) {
//     return true;
//   }
//   if (isArrayLike(value) &&
//       (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
//         isBuffer(value) || isTypedArray(value) || isArguments(value))) {
//     return !value.length;
//   }
//   var tag = getTag(value);
//   if (tag == mapTag || tag == setTag) {
//     return !value.size;
//   }
//   if (isPrototype(value)) {
//     return !baseKeys(value).length;
//   }
//   for (var key in value) {
//     if (hasOwnProperty.call(value, key)) {
//       return false;
//     }
//   }
//   return true;
// }

// const _ = {
//   isBoolean: isBoolean,
//   isNumber: isNumber,
//   isNull: isNull,
//   isUndefined: isUndefined,
//   isDate: isDate,
// }
// /**
//  * 判断值是否为真
//  */
//  function hasValue(pValue) {
//   if (_.isBoolean(pValue)) {
//     return true
//   } else if (_.isNumber(pValue)) {
//     return true
//   } else if (_.isNull(pValue)) {
//     return false
//   } else if (_.isDate(pValue)) {
//     return true
//   } else if (_.isUndefined(pValue)) {
//     return false
//   } else {
//     return !_.isEmpty(pValue)
//   }
// }
