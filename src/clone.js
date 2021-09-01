import { objectToString } from './static'

import isArray from './isArray'
import isPlainObject from './isPlainObject'

import objectMap from './objectMap'

import map from './map'

/**
 * 处理对象和数组拷贝
 * @param {*} func 
 * @param {*} obj 
 * @param {*} deep 
 */
function handleObjectAndArrayClone(func, obj, deep) {
  return func(obj, deep ? function(val) {
    return copyValue(val, deep)
  } : function(val) {
    return val
  })
}

/**
 * 处理值拷贝
 * @param {*} val 
 * @param {*} deep 
 */
function handleValueClone(val, deep) {
  if (deep && val) {
    const Ctor = val.constructor
    switch(objectToString.call(val)) {
      case '[object Date]':
      case '[object RegExp]':
        return new Ctor(val.valueOf())
      case '[object Set]':
        const set = new Ctor()
        val.forEach(function(v) {
          set.add(v)
        })
        return set
      case '[object Map]':
        const map = new Ctor()
        val.forEach(function(v, k) {
          map.set(k, v)
        })
        return map
    }
  }
  return val
}

function copyValue(val, deep) {
  if (isPlainObject(val)) {
    return handleObjectAndArrayClone(objectMap, val, deep)
  } else if (isArray(val)) {
    return handleObjectAndArrayClone(map, val, deep)
  }
  return handleValueClone(val, deep)
}

/**
 * 对象深/浅拷贝，支持对象和数组
 * @param {Object} obj 
 * @param {[Boolean]} deep 
 * @returns 
 * 
 * @example
 * obj = {a: {x:11}, b: {x:22}, c: {x:33}}
 * newObj = clone(obj, true)
 * obj.a.x = 111
 * 
 * console.log(obj)
 * // => {a: {x:111}, b: {x:22}, c: {x:33}}
 * console.log(newObj)
 * // => {a: {x:11}, b: {x:22}, c: {x:33}}
 * 
 * @example
 * obj = {a: {x:11}, b: {x:22}, c: {x:33}}
 * newObj = clone(obj)
 * obj.a.x = 111
 * 
 * console.log(obj)
 * // => {a: {x:111}, b: {x:22}, c: {x:33}}
 * console.log(newObj)
 * // => {a: {x:111}, b: {x:22}, c: {x:33}}
 * 
 * @example
 * const arr = [{x: 1}, {x: 2}, {x: 3}]
 * const newArr = utils.clone(arr)
 * arr[0].x = 111
 * console.log(arr)
 * // => [{x: 111}, {x: 2}, {x: 3}]
 * console.log(newArr)
 * // => [{x: 111}, {x: 2}, {x: 3}]
 * 
 * @example
 * const arr = [{x: 1}, {x: 2}, {x: 3}]
 * const newArr = utils.clone(arr, true)
 * arr[0].x = 111
 * console.log(arr)
 * // => [{x: 111}, {x: 2}, {x: 3}]
 * console.log(newArr)
 * // => [{x: 1}, {x: 2}, {x: 3}]
 */
export function clone(obj, deep) {
  return obj ? copyValue(obj, deep) : obj
}

export default clone