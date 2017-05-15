(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sb"] = factory();
	else
		root["sb"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  'isFunction': function (fn) {
    return typeof fn === 'function';
  },
  'isArray': function (obj) {
    return typeof obj === "object" && obj instanceof Array;
  },
  'isObject': function (obj) {
    return (typeof obj === "object") && !(obj instanceof Array) && !(obj === null);
  },
  'isNumber': function (obj) {
    return typeof obj === "number" || obj instanceof Number;
  },
  'isString': function (obj ) {
    return typeof obj === "string" || obj instanceof String;
  },
  'isBoolean': function (obj) {
    return typeof obj === "boolean";
  },
  'isInteger': function (obj) {
    if (this.isNumber(obj)) return obj % 1 === 0;
    else return false;
  },
  'isEmpty': function (data) {
    return (data === null || data === "" || data === undefined);
  },
  'isNull': function (data) {
    return data === null;
  },
  'isNaN': function (data) {
    return isNaN(data);
  },
  'isUndefined': function (data) {
    return data === undefined;
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*eslint no-unused-vars: 0*/
var snc = {
  "each": function (array, callback, response) {
    var i = 0;
    var store = [];
    var done = function (data) {
      if (data) store[i] = data;
      if (i < array.length) {
        var y = i;
        i++;
        callback(array[y], y, done, end);
      } else if (typeof response === 'function') response(store);
    };

    var end = function (data) {
      if (typeof response === 'function') response(data);
    };

    if (i < array.length) done();
    else if (typeof response === 'function') response(store);
  },
  "waterfall": function (callbacks, response) {
    var i = 0;
    var done = function (data, respdata) {
      if (i < callbacks.length-1) {
        i++;
        if (data) {
          if (data === true) {
            if (typeof response === 'function') response(respdata);
          } else callbacks[i](done, data);
        } else callbacks[i](done);
      } else {
        if (typeof response === 'function') {
          if (data) {
            if (data === true) response(respdata);
            else response(data);
          } else response();
        }
      }
    };
    if (callbacks instanceof Array) callbacks[i](done);
  },
  "forever": function (callback, response) {
    var end = function (data) {
      if (typeof response === 'function') response(data);
    };
    var next = function () {
      callback(next, end);
    };
    callback(next, end);
  },
  "parallelLimit": function (limit, callbacks, response) {
    var it = 0;
    var to = callbacks.length;
    var store = [];
    var async = function (ix) {
      var done = function (data) {
        to--;
        if (data) store[ix] = data;
        if (it !== callbacks.length) {
          async(it);
          it++;
        } else if (to === 0 && typeof response === 'function') {
          response(store);
        }
      };
      callbacks[ix](done);
    };

    if (callbacks instanceof Array) {
      for (var i = 0; i < limit; i++) {
        async(i);
        it++;
      }
    }
  },
  "forSync": function (ini, fin, inc, callback, end) {
    var store = [];
    var done = function (data) {
      if (data) store[ini] = data;
      if (ini < fin-1) {
        ini = ini + inc;
        callback(ini, done, end);
      } else if (typeof end === 'function') end(store);
    };
    callback(ini, done, end);
  },
  "eachParallelLimit": function (array, limit, callback, response) {
    var it = 0;
    var to = array.length;
    var store = [];
    var async = function (item, index) {
      var done = function (data) {
        to--;
        if (data) store[index] = data;
        if (it !== array.length) {
          async(array[it], it);
          it++;
        } else if (to === 0 && typeof response === 'function') response(store);
      };
      callback(item, index, done);
    };

    if (array instanceof Array && array.length > 0) {
      if (limit > array.length) limit =  array.length;
      for (var i = 0; i < limit; i++) {
        async(array[i], i);
        it++;
      }
    } else if ( typeof response === 'function') response(store);
  },
  "times": function (fin, callback, end) {
    this.for(0, fin, 1, callback, end);
  },
  "parallel": function (callbacks, response) {
    var it = 0;
    var store = [];
    var async = function (ix) {
      var done = function (data) {
        if (data) store[ix] = data;
        if (it < callbacks.length -1) it++;
        else {
          if (typeof response === 'function') response(store);
        }
      };
      callbacks[ix](done);
    };

    if (callbacks instanceof Array) {
      for (var i = 0; i < callbacks.length; i++) async(i);
    }
  }
};

snc.eachpl = snc.eachParallelLimit;
snc.epl = snc.eachParallelLimit;
snc.wf = snc.waterfall;
snc.pl = snc.parallelLimit;
snc.fe = snc.forever;
snc.for = snc.forSync;

if (typeof process === 'object') module.exports = snc;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'shuffle': function (array) {
    if (type.isArray(array)) {
      for (var i = array.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = itemAtIndex;
      }
      return array;
    } else throw new Error('Shuffle function not contains array.');
  },
  'first': function (array) {
    if (type.isArray(array)) return array[0];
    else throw new Error('first function not contains array.');
  },
  'last': function (array) {
    if (type.isArray(array)) return array[array.length - 1];
    else throw new Error('Last function not contains array.');
  },
  'remove': function (array, obj) {
    function filter(array, obj) {
      return array.filter(function (e) {
        if (JSON.stringify(e) !== JSON.stringify(obj)) return e;
      });
    }
    if (type.isArray(obj)) {
      obj.forEach(function (e) {
        array = filter(array, e);
      });
      return array;
    } else return filter(array, obj);

  },
  'clear': function (array) {
    if (type.isArray(array)) return array.splice(array.length,0);
    else throw new Error('clear function not contains array.');
  },
  'inArray': function (array, value) {
    if (type.isArray(array)) return !!~array.indexOf(value);
    else throw new Error('inArray function not contains array.');
  },
  'uniqBy': function (array, key) {
    if (type.isArray(array)) {
      var narray = [];
      var keys = {};
      for (var i = 0; i < array.length; i++) {
        if(keys[array[i][key]] === undefined && array[i][key] !== undefined) {
          narray.push(array[i][key]);
          keys[array[i][key]] = 1;
        }
      }
      return narray;
    } else throw new Error('uniq function not contains array.');
  },
  'uniq': function (array, data) {
    var arr = [];
    var contains = function(array, value) {
      for(var i = 0; i < array.length; i++) {
        if(JSON.stringify(array[i]) === JSON.stringify(value)) return true;
      }
      return false;
    };

    for(var i = 0; i < array.length; i++) {
      if(!contains(arr, data[i])) arr.push(data[i]);
    }
    return arr;
  },
  'filter': function (array, obj) {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.');
    else if (type.isEmpty(obj) && typeof obj !== 'object') throw new Error('Find in array need a object.');
    else {
      var keys = Object.keys(obj);
      return array.filter(function (e) {
        var chck = true;
        keys.forEach(function (k) {
          if (typeof e[k] === 'string') {
            if(e[k].indexOf(obj[k]) < 0) chck = false;
          } else {
            if(e[k] !== obj[k]) chck = false;
          }
        });
        return chck;
      });
    }
  },
  'map': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.map(callback);
      } else throw new Error('map function not contains callback.');
    } else throw new Error('map function not contains array.');
  },
  'reduce': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.reduce(callback);
      } else return array.sort(array);
    } else throw new Error('reduce function not contains array.');
  },
  'forEach': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        array.forEach(callback);
      } else return array.sort(array);
    } else throw new Error('forEach function not contains array.');
  },
  'sort': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.sort(callback);
      } else return array.sort(array);
    } else throw new Error('sort function not contains array.');
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  'isTrue': function (data) {
    return data === true;
  },
  'isFalse': function (value) {
    return value === false;
  },
  'isEqual': function (value, check) {
    return JSON.stringify(value) === JSON.stringify(check);
  },
  'Not': function (value) {
    return !value;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

var events = {
  'eventstack': {},
  'on': function (ev, callback) {
    if (type.isEmpty(ev)) throw new Error('on function need event');
    else if (type.isArray(ev)) {
      for (var y = 0; y < ev.length; y++) {
        if (type.isFunction(callback)) events.eventstack[ev[y]] = callback;
        else throw Error('Event need function');
      }
    } else if (type.isFunction(callback)) events.eventstack[ev] = callback;
    else throw Error('Event need function');
  },
  'emit': function (ev, data) {
    if (type.isEmpty(ev)) throw new Error('No event selected.');
    else if (type.isArray(ev)) {
      for (var i = 0; i < ev.length; i++) {
        if (type.isFunction(events.eventstack[ev[i]])) events.eventstack[ev[i]](data, this.data);
      }
    } else if (type.isFunction(events.eventstack[ev])) events.eventstack[ev](data, this.data);
  },
  'delete': function (ev) {
    if (type.isEmpty(ev)) throw new Error('No event selected.');
    else if (type.isEmpty(events.eventstack[ev])) throw Error('This event not exist');
    else delete events.eventstack[ev];
  }
};

module.exports = events;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'toString': function (value) {
    if (type.isEmpty(value)) throw new Error('toString function not contains value to parse.');
    else return JSON.stringify(value);
  },
  'size': function (value) {
    if (type.isEmpty(value)) throw new Error('size function not contains values.');
    else {
      if (type.isArray(value) || type.isString(value)) return value.length;
      else if (type.isObject(value)) return Object.keys(value).length;
      else throw new Error('size function not contains compatible values.');
    }
  },
  'contains': function (data, value) {
    if (type.isArray(data) || type.isString(data)) return !!~data.indexOf(value);
    else if (type.isObject(data)) return !!~Object.keys(data).indexOf(value);
    else throw new Error('contains function not contains values.');
  },
  'reverse': function (data) {
    if (type.isArray(data)) return data.reverse();
    else if (type.isString(data)) return data.split('').reverse().join('');
    else throw new Error('Reverse function not contains array or string.');
  },
  'repeatify': function (value, num) {
    if (type.isEmpty(value)) throw new Error('repeatify function not have values.');
    else {
      var strArray = [];
      for (var i = 0; i < num; i++) strArray.push(value);
      return strArray;
    }
  },
  'concat': function (val, val1) {
    if (type.isEmpty(val) || type.isEmpty(val1)) throw new Error('concat function not have values.');
    else {
      if (type.isString(val) && type.isString(val)) return val + val1;
      else if (type.isArray(val) && type.isArray(val)) return val.concat(val1);
      else throw new Error('concat function not contains same values.');
    }
  },
  'return': function (x) {
    return x;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'duplicate': function (value) {
    if (type.isNumber(value)) return value * 2;
    else throw new Error('Duplicate function needs a number.');
  },
  'min': function (value) {
    if (type.isArray(value)) {
      var checknum = true;
      value.forEach(function (num) {
        if (checknum && !type.isNumber(num)) checknum = false;
      });
      if (checknum) return Math.min.apply(Math, value);
      else throw new Error('Min funciton needs an array of numbers.');
    } else throw new Error('Min funciton needs an array.');
  },
  'max': function (value) {
    if (type.isArray(value)) {
      var checknum = true;
      value.forEach(function (num) {
        if (checknum && !type.isNumber(num)) checknum = false;
      });
      if (checknum) return Math.max.apply(Math, value);
      else throw new Error('Min funciton needs an array of numbers.');
    } else throw new Error('Min funciton needs an array.');
  },
  'sum': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value + number;
    } else throw new Error('Sum function only can operate with numbers.');
  },
  'divide': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value / number;
    } else throw new Error('Divide function only can operate with numbers.');
  },
  'mult': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return number * value;
    } else throw new Error('Mult function only can operate with numbers.');
  },
  'ceil': function (value) {
    if (type.isNumber(value)) {
      return Math.ceil(value);
    } else throw new Error('ceil function only can operate with numbers.');
  },
  'round': function (value) {
    if (type.isNumber(value)) {
      return Math.round(value);
    } else throw new Error('round function only can operate with numbers.');
  },
  'floor': function (value) {
    if (type.isNumber(value)) {
      return Math.floor(value);
    } else throw new Error('floor function only can operate with numbers.');
  },
  'trunc': function (value) {
    if (type.isNumber(value)) {
      return Math.trunc(value);
    } else throw new Error('floor function only can operate with numbers.');
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'extend': function (obj, obj2) {
    for (var i in obj2) {
      if (obj2.hasOwnProperty(i)) obj[i] = obj2[i];
    }
    return obj;
  },
  'assign': function (obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) return obj;

    var temp = obj.constructor();
    for(var key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        obj.isActiveClone = null;
        temp[key] = obj[key];
        delete obj.isActiveClone;
      }
    }
    return temp;
  },
  'clone': function (obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) return obj;

    var temp = obj.constructor();
    for (var key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        obj.isActiveClone = null;
        temp[key] = obj[key];
        delete obj.isActiveClone;
      }
    }
    return temp;
  },
  'get': function (obj, route) {
    if (obj !== undefined && typeof route === "string") {
      route = route.split(".");
      if (route.length === 1 ) return obj[route[0]];
      else {
        for (var i = 0; i < route.length; i++) {
          if (obj[route[i]] !== undefined) obj = obj[route[i]];
          else return undefined;
        }
        return obj;
      }
    } else return undefined;
  },
  'keys': function (obj) {
    return Object.keys(obj);
  },
  'getKeys': function(obj, keys) {
    var nobj = {};
    if (type.isArray(keys)) {
      keys.forEach(function (key) {
        nobj[key] = obj[key];
      });
    } else nobj[keys] = obj[keys];
    return nobj;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'toInt': function (value) {
    if (type.isEmpty(value)) throw new Error('To int needs an string value.');
    else if (type.isString(value)) return parseInt(value,10);
    else throw new Error('toInt function has incompatible value.');
  },
  'dos2unix': function (value) {
    if (type.isEmpty(value)) throw new Error('Dos2unix function needs an string value.');
    else if (type.isString(value)) return value.replace(/\r\n/g, '\n');
    else throw new Error('Dos2unix function has incompatible value.');
  },
  'capitalize': function (value) {
    if (type.isEmpty(value)) throw new Error('Capitalize function needs an string value.');
    else if (type.isString(value)) return value.slice(0,1).toUpperCase() + value.slice(1);
    else throw new Error('Capitalize function has incompatible value.');
  },
  'excerpt': function (data, nwords) {
    var words = data.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ');
  },
  'toJSON': function (value) {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.');
    else if (type.isString(value)) return JSON.parse(value);
    else throw new Error('toJSON function has incompatible value.');
  },
  'json': function (value) {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.');
    else if (type.isString(value)) return JSON.parse(value);
    else throw new Error('toJSON function has incompatible value.');
  },
  'split': function (value, separator, limit) {
    if (type.isEmpty(value)) throw new Error('Split function needs an string value.');
    else if (type.isString(value)) return value.split(separator, limit);
    else throw new Error('Split function has incompatible value.');
  },
  'toLowerCase': function (value) {
    if (type.isEmpty(value)) throw new Error('toLowerCase function needs an string value.');
    else if (type.isString(value)) return value.toLowerCase();
    else throw new Error('toLowerCase function has incompatible value.');

  },
  'toUpperCase': function (value) {
    if (type.isEmpty(value)) throw new Error('toUpperCase function needs an string value.');
    else if (type.isString(value)) return value.toUpperCase();
    else throw new Error('toUpperCase function has incompatible value.');
  },
  'trim': function (value) {
    if (type.isEmpty(value)) throw new Error('trim function needs an string value.');
    else if (type.isString(value)) return value.trim();
    else throw new Error('trim function has incompatible value.');
  },
  'replace': function (value, oldregex, newstr) {
    if (type.isEmpty(value) && type.isEmpty(newstr)) throw new Error('replace function needs an string value.');
    else if (type.isString(value) && type.isString(newstr)) return value.replace(oldregex, newstr);
    else throw new Error('replace function has incompatible value.');
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(0);

module.exports = {
  'range': function (a, b, step) {
    var A = [];
    if (type.isEmpty(a) || type.isEmpty(b)) return A;
    if (typeof a == 'number') {
      A[0] = a;
      step = step || 1;
      while (a+step<= b) A[A.length] = a += step;
    } else {
      var s = 'abcdefghijklmnopqrstuvwxyz';
      if (a === a.toUpperCase()) {
        b = b.toUpperCase();
        s = s.toUpperCase();
      }
      s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
      A = s.split('');
    }
    return A;
  },
  'random': function (min, max) {
    if (typeof min === "number" && typeof max === "number") return Math.floor(Math.random() * (max - min)) + min;
    else {
      if(!type.isArray(min)) return 0;
      else {
        var index = Math.floor(Math.random() * (min.length));
        return min[index];
      }
    }
  },
  'ifElse': function (condition, funcTrue, funcFalse) {
    if (condition) return funcTrue();
    else return funcFalse();
  },
  'function': function (data, callback) {
    return callback(data);
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var snc = __webpack_require__(1);
var tools = __webpack_require__(9);
var type = __webpack_require__(0);
var array = __webpack_require__(2);
var object = __webpack_require__(7);
var string = __webpack_require__(8);
var number = __webpack_require__(6);
var boolean = __webpack_require__(3);
var events = __webpack_require__(4);
var generic = __webpack_require__(5);

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

    this.filter = function (object) {
      this.data = array.filter(this.data, object);
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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// http://www.spellbook.io
var snc = __webpack_require__(1);
var tools = __webpack_require__(9);
var type = __webpack_require__(0);
var array = __webpack_require__(2);
var object = __webpack_require__(7);
var string = __webpack_require__(8);
var number = __webpack_require__(6);
var boolean = __webpack_require__(3);
var generic = __webpack_require__(5);
var events = __webpack_require__(4);
var Chain = __webpack_require__(10);

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
  }
};


/***/ })
/******/ ]);
});