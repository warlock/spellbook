var snc = require('snc');
var tools = require('./tools');
var type = require('./type');
var array = require('./array');
var object = require('./object');
var string = require('./string');
var number = require('./number');
var generic = require('./generic')

module.exports = function (data) {
    this.data = data;

    //STRING TOOLS
    this.toInt = function () {
      this.data = string.toInt(this.data);
      return this;
    };

    this.excerpt = function () {
      this.data = string.excerpt(this.data);
      return this;
    };

    //GENERIC TOOLS
    this.toString = function () {
      this.data = generic.toString(this.data);
      return this;
    };

    //NUMBER TOOLS
    this.duplicate = function () {
      this.data = number.duplicate(this.data);
      return this;
    };

    //TYPE TOOLS
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

    //ARRAY TOOLS
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
      this.data = array.remove(this.data, object)
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

    this.contains = function (object) {
      this.data = array.inArray(this.data, object);
      return this;
    };

    this.unq = function (object) {
      this.data = array.uniq(this.data, object);
      return this;
    };

    this.uniq = function (object) {
      this.data = array.uniq(this.data, object);
      return this;
    };

    this.filter = function (object) {
      this.data = array.filter(this.data, object);
      return this;
    };

    //OBJECT TOOLS
    this.extend = function (object) {
      this.data = object.extend(this.data, object);
      return this;
    };

    this.get =  function (get) {
      this.data = object.get(this.data, get);
      return this;
    };

    this.size = function () {
      this.data = object.size(this.data);
      return this;
    };

    this.keys = function () {
      this.data = object.keys(this.data);
      return this;
    };

    this.getKeys = function () {
      this.data = object.getKeys(this.data);
      return this;
    }

    this.toJSON = function () {
      this.data = string.toJSON(this.data);
      return this;
    }

    this.json = function () {
      this.data = string.toJSON(this.data);
      return this;
    }

    // METHOD MAIN
    this.value = function () {
      return this.data
    }

    this.each = function (callback, response) {
      snc.each(this.data, callback, response)
    }

    this.epl = this.eachpl = this.eachParallelLimit = function (limit, callback, response) {
      snc.epl(this.data, limit, callback, response)
    }

    return this
}
