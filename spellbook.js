// http://www.spellbook.io
var snc = require('snc');
var tools = require('./tools/tools');
var type = require('./tools/type');
var array = require('./tools/array');
var object = require('./tools/object');
var string = require('./tools/string');
var number = require('./tools/number');
var boolean = require('./tools/boolean');
var generic = require('./tools/generic');
var events = require('./tools/events');
var Chain = require('./tools/chain');

var Spellbook = function () {

  //TOOLS
  this.range = tools.range;
  this.random = tools.random;
  this.ifElse = tools.ifElse;
  this.function = tools.function;

  //STRING
  this.toInt = string.toInt;
  this.excerpt = string.excerpt;
  this.capitalize = string.capitalize;
  this.toJSON = string.toJSON;
  this.json = string.json;
  this.dos2unix = string.dos2unix;
  this.split = string.split;
  this.toUpperCase = string.toUpperCase;
  this.toLowerCase = string.toLowerCase;
  this.trim = string.trim;
  this.replace = string.replace;

  //NUMBER
  this.duplicate = number.duplicate;
  this.sum = number.sum;
  this.min = number.min;
  this.max = number.max;
  this.divide = number.divide;
  this.mult = number.mult;
  this.ceil = number.ceil;
  this.round = number.round;
  this.floor = number.floor;
  this.trunc = number.trunc;

  //GENERIC
  this.toString = generic.toString;
  this.size = generic.size;
  this.contains = generic.contains;
  this.reverse = generic.reverse;
  this.repeatify = generic.repeatify;
  this.concat = generic.concat;
  this.return = generic.return;

  //TYPE
  this.isFunction = type.isFunction;
  this.isArray = type.isArray;
  this.isObject = type.isObject;
  this.isNumber = type.isNumber;
  this.isString = type.isString;
  this.isBoolean = type.isBoolean;
  this.isInteger = type.isInteger;
  this.isEmpty = type.isEmpty;
  this.empty = type.isEmpty;
  this.isNull = type.isNull;
  this.isNaN = type.isNaN;
  this.isUndefined = type.isUndefined;

  //ARRAY
  this.shuffle = array.shuffle;
  this.first = array.first;
  this.last = array.last;
  this.remove = array.remove;
  this.clear = array.clear;
  this.inArray = array.inArray;
  this.unq = this.uniq = array.uniq;
  this.uniqBy = array.uniqBy;
  this.filter = array.filter;
  this.map = array.map;
  this.reduce = array.reduce;
  this.sort = array.sort;
  this.forEach = array.forEach;

  //OBJECT
  this.extend = object.extend;
  this.assign = object.assign;
  this.clone = object.assign;
  this.get =  object.get;
  this.keys = object.keys;
  this.getKeys = object.getKeys;

  //boolean
  this.isTrue = boolean.isTrue;
  this.isFalse = boolean.isFalse;
  this.isEqual = boolean.isEqual;
  this.eq = boolean.isEqual;
  this.Not = boolean.Not;

  //EVENT
  this.on = events.on;
  this.emit = events.emit;
  this.delete = events.delete;

  //ASYNCRONOUS SNC LIBRARY
  this.each = snc.each;
  this.waterfall = snc.waterfall;
  this.wf = snc.waterfall;
  this.forever = snc.forever;
  this.fe = snc.forever;
  this.parallel = snc.parallel;
  this.par = snc.parallel;
  this.parallelLimit = snc.parallelLimit;
  this.pl = snc.parallelLimit;
  this.epl = snc.epl;
  this.eachpl = snc.eachpl;
  this.eachParallelLimit = snc.eachParallelLimit;
  this.for = snc.forSync;
  this.forSync =  snc.forSync;
  this.times = snc.times;

  //CHAIN
  this.chain = function (data) {
    return new Chain(data);
  };
};

module.exports = new Spellbook();
