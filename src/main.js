const type = require('tck')
const events = require('eem')
const tools = require('./tools')
const array = require('./array')
const object = require('./object')
const string = require('./string')
const number = require('./number')
const boolean = require('./boolean')
const generic = require('./generic')
const Chain = require('./chain')

module.exports = {
  range: tools.range,
  random: tools.random,
  ifElse: tools.ifElse,
  function: tools.function,

  //STRING
  toInt: string.toInt,
  excerpt: string.excerpt,
  capitalize: string.capitalize,
  toJSON: string.toJSON,
  json: string.json,
  dos2unix: string.dos2unix,
  split: string.split,
  toUpperCase: string.toUpperCase,
  toLowerCase: string.toLowerCase,
  trim: string.trim,
  replace: string.replace,
  pad: string.pad,

  //NUMBER
  duplicate: number.duplicate,
  sum: number.sum,
  min: number.min,
  max: number.max,
  divide: number.divide,
  mult: number.mult,
  ceil: number.ceil,
  round: number.round,
  floor: number.floor,
  trunc: number.trunc,

  //GENERIC
  toString: generic.toString,
  size: generic.size,
  contains: generic.contains,
  reverse: generic.reverse,
  repeatify: generic.repeatify,
  concat: generic.concat,
  return: generic.return,

  //TYPE
  isFunction: type.isFunction,
  isArray: type.isArray,
  isObject: type.isObject,
  isNumber: type.isNumber,
  isString: type.isString,
  isBoolean: type.isBoolean,
  isInteger: type.isInteger,
  isEmpty: type.isEmpty,
  isSet: type.isSet,
  empty: type.isEmpty,
  isNull: type.isNull,
  isNaN: type.isNaN,
  isUndefined: type.isUndefined,
  e: (obj, keys) => {
    return type.isEmpty(object.get(obj, keys))
  },

  //ARRAY
  shuffle: array.shuffle,
  first: array.first,
  last: array.last,
  remove: array.remove,
  clear: array.clear,
  inArray: array.inArray,
  unq: array.uniq,
  uniq: array.uniq,
  uniqBy: array.uniqBy,
  filter: array.filter,
  filterBy: array.filterBy,
  map: array.map,
  reduce: array.reduce,
  sort: array.sort,
  forEach: array.forEach,
  chunk: array.chunk,

  //OBJECT
  extend: object.extend,
  assign: object.assign,
  clone: object.assign,
  get: object.get,
  keys: object.keys,
  getKeys: object.getKeys,
  merge: object.merge,

  //boolean
  isTrue: boolean.isTrue,
  isFalse: boolean.isFalse,
  isEqual: boolean.isEqual,
  eq: boolean.isEqual,
  Not: boolean.Not,

  //EVENT
  on: events.on,
  emit: events.emit,
  delete: events.delete,

  //CHAIN
  chain: data => {
    return new Chain(data)
  },

  c: data => {
    return new Chain(data)
  }
}
