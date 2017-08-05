var snc = require('snc');
var tools = require('./tools');
var type = require('tck');
var array = require('./array');
var object = require('./object');
var string = require('./string');
var number = require('./number');
var boolean = require('./boolean');
var events = require('./events');
var generic = require('./generic');

module.exports = function (data) {
  if (type.isEmpty(data)) throw new Error('Chain function not contains values.');
  else {
    this.data = data;

    //TOOLS
    this.ifElse = function (funcTrue, funcFalse) {
      this.data = tools.ifElse(this.data, funcTrue, funcFalse);
      return this;
    };

    this.function = function (callback) {
      this.data = tools.function(this.data, callback);
      return this;
    };

    //STRING
    this.toInt = function () {
      this.data = string.toInt(this.data);
      return this;
    };

    this.excerpt = function () {
      this.data = string.excerpt(this.data);
      return this;
    };

    this.dos2unix = function () {
      this.data = string.dos2unix(this.data);
      return this;
    };

    this.capitalize = function () {
      this.data = string.capitalize(this.data);
      return this;
    };

    this.toJSON = function () {
      this.data = string.toJSON(this.data);
      return this;
    };

    this.json = function () {
      this.data = string.json(this.data);
      return this;
    };

    this.split = function (separator, limit) {
      this.data = string.split(this.data, separator, limit);
      return this;
    };

    this.toLowerCase = function () {
      this.data = string.toLowerCase(this.data);
      return this;
    };

    this.toUpperCase = function () {
      this.data = string.toUpperCase(this.data);
      return this;
    };

    this.trim = function () {
      this.data = string.trim(this.data);
      return this;
    };

    this.replace = function (oldstr, newstr) {
      this.data = string.replace(this.data, oldstr, newstr);
      return this;
    };

    this.pad = function (target, pad) {
      this.data = string.pad(this.data, target, pad);
      return this;
    };

    //NUMBER
    this.duplicate = function () {
      this.data = number.duplicate(this.data);
      return this;
    };

    this.min = function () {
      this.data = number.min(this.data);
      return this;
    };

    this.max = function () {
      this.data = number.max(this.data);
      return this;
    };

    this.sum = function (value) {
      this.data = number.sum(this.data, value);
      return this;
    };

    this.mult = function (value) {
      this.data = number.mult(this.data, value);
      return this;
    };

    this.divide = function (value) {
      this.data = number.divide(this.data, value);
      return this;
    };

    this.numerator = function (value) {
      this.data = number.divide(value, this.data);
      return this;
    };

    this.ceil = function () {
      this.data = number.ceil(this.data);
      return this;
    };

    this.round = function () {
      this.data = number.round(this.data);
      return this;
    };

    this.floor = function () {
      this.data = number.floor(this.data);
      return this;
    };

    this.trunc = function () {
      this.data = number.trunc(this.data);
      return this;
    };

    //GENERIC
    this.toString = function () {
      this.data = generic.toString(this.data);
      return this;
    };

    this.size = function () {
      this.data = generic.size(this.data);
      return this;
    };

    this.contains = function (value) {
      this.data = generic.contains(this.data, value);
      return this;
    };

    this.reverse = function () {
      this.data = generic.reverse(this.data);
      return this;
    };

    this.repeatify = function (num) {
      this.data = generic.repeatify(this.data, num);
      return this;
    };

    this.concat = function (val) {
      this.data = generic.concat(this.data, val);
      return this;
    };

    //TYPE
    this.isFunction = function () {
      this.data = type.isFunction(this.data);
      return this;
    };

    this.isArray = function () {
      this.data = type.isArray(this.data);
      return this;
    };

    this.isObject = function () {
      this.data = type.isObject(this.data);
      return this;
    };

    this.isNumber = function () {
      this.data = type.isNumber(this.data);
      return this;
    };

    this.isString = function () {
      this.data = type.isString(this.data);
      return this;
    };

    this.isBoolean = function () {
      this.data = type.isBoolean(this.data);
      return this;
    };

    this.isInteger = function () {
      this.data = type.isInteger(this.data);
      return this;
    };

    this.isEmpty = function () {
      this.data = type.isEmpty(this.data);
      return this;
    };

    this.empty = function () {
      this.data = type.isEmpty(this.data);
      return this;
    };

    this.isNull = function () {
      this.data = type.isNull(this.data);
      return this;
    };

    this.isNaN = function () {
      this.data = type.isNaN(this.data);
      return this;
    };

    this.isUndefined = function () {
      this.data = type.isUndefined(this.data);
      return this;
    };

    //ARRAY
    this.shuffle = function () {
      this.data = array.shuffle(this.data);
      return this;
    };

    this.first = function () {
      this.data = array.first(this.data);
      return this;
    };

    this.last = function () {
      this.data = array.last(this.data);
      return this;
    };

    this.remove = function (object) {
      this.data = array.remove(this.data, object);
      return this;
    };

    this.clear = function () {
      this.data = array.clear(this.data);
      return this;
    };

    this.inArray = function (object) {
      this.data = array.inArray(this.data, object);
      return this;
    };

    this.unq = this.uniq = function () {
      this.data = array.uniq(this.data);
      return this;
    };

    this.uniqBy = function (object) {
      this.data = array.uniq(this.data, object);
      return this;
    };

    this.filter = function (func) {
      this.data = array.filter(this.data, func);
      return this;
    };

    this.filterBy = function (object) {
      this.data = array.filterBy(this.data, object);
      return this;
    };

    this.map = function (callback) {
      this.data = array.map(this.data, callback);
      return this;
    };

    this.reduce = function (callback) {
      this.data = array.reduce(this.data, callback);
      return this;
    };

    this.sort = function (callback) {
      this.data = array.sort(this.data, callback);
      return this;
    };

    this.forEach = function (callback) {
      array.forEach(this.data, callback);
    };

    //OBJECT
    this.extend = function (obj) {
      this.data = object.extend(this.data, obj);
      return this;
    };

    this.get =  function (route) {
      this.data = object.get(this.data, route);
      return this;
    };

    this.keys = function () {
      this.data = object.keys(this.data);
      return this;
    };

    this.getKeys = function () {
      this.data = object.getKeys(this.data);
      return this;
    };

    this.merge = function (obj) {
      this.data = object.merge(this.data, obj);
      return this;
    };

    //BOOLEAN
    this.isTrue = function () {
      this.data = boolean.isTrue(this.data);
      return this;
    };

    this.isFalse = function () {
      this.data = boolean.isFalse(this.data);
      return this;
    };

    this.isEqual = function (value) {
      this.data = boolean.isEqual(this.data, value);
      return this;
    };

    this.eq = function (value) {
      this.data = boolean.isEqual(this.data, value);
      return this;
    };

    this.Not = function () {
      this.data = boolean.not(this.data);
      return this;
    };

    this.not = function () {
      this.data = boolean.not(this.data);
      return this;
    };

    //EVENT
    this.on = function (ev, callback) {
      events.on(ev, callback);
      return this;
    };

    this.emit = function (ev) {
      events.emit(ev, this.data);
      return this;
    };

    this.delete = function (ev) {
      events.delete(ev);
      return this;
    };

    //ASYNCRONOUS SNC LIBRARY
    this.each = function (callback, response) {
      snc.each(this.data, callback, response);
    };

    this.epl = function (limit, callback, response) {
      snc.epl(this.data, limit, callback, response);
    };

    this.and = function (data) {
      if (this.data) {
        this.data = data;
        return this;
      } else return false;

    };

    //RETURN VALUE
    this.value = this.v = this.return = this.r = function () {
      return this.data;
    };

    this.noReturn = this.end = function () {
      return null;
    };

    return this;
  }
};
