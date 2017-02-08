var snc = require('snc');
var tools = require('./tools');
var type = require('./type');
var array = require('./array');
var object = require('./object');
var string = require('./string');
var number = require('./number');
var boolean = require('./boolean');
var generic = require('./generic');

module.exports = function (data) {
  if (type.isEmpty(data)) throw new Error('Chain function not contains values.');
  else {
    this.data = data;

    //TOOLS
    this.ifElse = function (func_true, func_false) {
      this.data = tools.ifElse(this.data, func_true, func_false)
      return this;
    }

    this.function = function (callback) {
      this.data = tools.function(this.data, callback)
      return this;
    }

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
    }

    this.json = function () {
      this.data = string.json(this.data);
      return this;
    }

    this.split = function (separator, limit) {
      this.data = string.split(this.data, separator, limit);
      return this;
    }

    this.toLowerCase = function () {
      this.data = string.toLowerCase(this.data);
      return this;
    }

    this.toUpperCase = function () {
      this.data = string.toUpperCase(this.data);
      return this;
    }

    //NUMBER
    this.duplicate = function () {
      this.data = number.duplicate(this.data);
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
    }

    this.repeatify = function (num) {
      this.data = generic.repeatify(this.data, num);
      return this;
    }

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

    this.map = function (callback) {
      this.data = array.map(this.data, callback);
      return this;
    }

    this.reduce = function (callback) {
      this.data = array.reduce(this.data, callback);
      return this;
    }

    this.forEach = function (callback) {
      array.forEach(this.data, callback);
    }

    //OBJECT
    this.extend = function (object) {
      this.data = object.extend(this.data, object);
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
    }

    //BOOLEAN
    this.isTrue = function () {
      this.data = boolean.isTrue(this.data);
      return this.data;
    }

    this.isFalse = function () {
      this.data = boolean.isFalse(this.data);
      return this.data;
    }

    //ASYNCRONOUS SNC LIBRARY
    this.each = function (callback, response) {
      snc.each(this.data, callback, response)
    }

    this.epl = function (limit, callback, response) {
      snc.epl(this.data, limit, callback, response)
    }

    //RETURN VALUE
    this.value = this.return = function () {
      return this.data
    }

    return this
  }
}
