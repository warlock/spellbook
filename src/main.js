// http://www.spellbook.io
var snc = require('snc');
var tools = require('./tools');
var type = require('./type');
var array = require('./array');
var object = require('./object');
var string = require('./string');
var number = require('./number');
var boolean = require('./boolean');
var generic = require('./generic');
var events = require('./events');
var Chain = require('./chain');

module.exports ={
  "range": tools.range,
  "random": tools.random,
  "ifElse": tools.ifElse,
  "function": tools.function,

  //STRING
  "toInt": string.toInt,
  "excerpt": string.excerpt,
  "capitalize": string.capitalize,
  "toJSON": string.toJSON,
  "json": string.json,
  "dos2unix": string.dos2unix,
  "split": string.split,
  "toUpperCase": string.toUpperCase,
  "toLowerCase": string.toLowerCase,
  "trim": string.trim,
  "replace": string.replace,
  "pad": string.pad,

  //NUMBER
  "duplicate": number.duplicate,
  "sum": number.sum,
  "min": number.min,
  "max": number.max,
  "divide": number.divide,
  "mult": number.mult,
  "ceil": number.ceil,
  "round": number.round,
  "floor": number.floor,
  "trunc": number.trunc,

  //GENERIC
  "toString": generic.toString,
  "size": generic.size,
  "contains": generic.contains,
  "reverse": generic.reverse,
  "repeatify": generic.repeatify,
  "concat": generic.concat,
  "return": generic.return,

  //TYPE
  "isFunction": type.isFunction,
  "isArray": type.isArray,
  "isObject": type.isObject,
  "isNumber": type.isNumber,
  "isString": type.isString,
  "isBoolean": type.isBoolean,
  "isInteger": type.isInteger,
  "isEmpty": type.isEmpty,
  "empty": type.isEmpty,
  "isNull": type.isNull,
  "isNaN": type.isNaN,
  "isUndefined": type.isUndefined,
  "e": function (obj, keys) {
    return type.isEmpty(object.get(obj, keys));
  },

  //ARRAY
  "shuffle": array.shuffle,
  "first": array.first,
  "last": array.last,
  "remove": array.remove,
  "clear": array.clear,
  "inArray": array.inArray,
  "unq": array.uniq,
  "uniq": array.uniq,
  "uniqBy": array.uniqBy,
  "filter": array.filter,
  "filterBy": array.filterBy,
  "map": array.map,
  "reduce": array.reduce,
  "sort": array.sort,
  "forEach": array.forEach,

  //OBJECT
  "extend": object.extend,
  "assign": object.assign,
  "clone": object.assign,
  "get": object.get,
  "keys": object.keys,
  "getKeys": object.getKeys,
  "merge": object.merge,

  //boolean
  "isTrue": boolean.isTrue,
  "isFalse": boolean.isFalse,
  "isEqual": boolean.isEqual,
  "eq": boolean.isEqual,
  "Not": boolean.Not,

  //EVENT
  "on": events.on,
  "emit": events.emit,
  "delete": events.delete,

  //ASYNCRONOUS SNC LIBRARY
  "each": snc.each,
  "waterfall": snc.waterfall,
  "wf": snc.waterfall,
  "forever": snc.forever,
  "fe": snc.forever,
  "parallel": snc.parallel,
  "par": snc.parallel,
  "parallelLimit": snc.parallelLimit,
  "pl": snc.parallelLimit,
  "epl": snc.epl,
  "eachpl": snc.eachpl,
  "eachParallelLimit": snc.eachParallelLimit,
  "for": snc.forSync,
  "forSync": snc.forSync,
  "times": snc.times,

  //CHAIN
  "chain": function (data) {
    return new Chain(data);
  },

  "c": function (data) {
    return new Chain(data);
  }
};
