// http://www.spellbook.io
var snc = require('snc');
var tools = require('./tools/tools');
var type = require('./tools/type');
var array = require('./tools/array');
var object = require('./tools/object');
var string = require('./tools/string');
var number = require('./tools/number');
var generic = require('./tools/generic');
var Chain = require('./tools/chain');

var Spellbook = function () {
	//TOOLS
	this.range = tools.range;
	this.random = tools.random;

	//STRING
	this.toInt = string.toInt;
	this.excerpt = string.excerpt;
	this.capitalize = string.capitalize;
	this.toJSON = string.toJSON;
	this.json = string.json;
	this.dos2unix = string.dos2unix;
	this.split = string.split;

	//NUMBER
	this.duplicate = number.duplicate;

	//GENERIC
	this.toString = generic.toString;
	this.size = generic.size;
	this.contains = generic.contains;
	this.reverse = generic.reverse;
	this.repeatify = generic.repeatify;

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

	//ARRAY
	this.shuffle = array.shuffle;
	this.first = array.first;
	this.last = array.last;
	this.remove = array.remove;
	this.clear = array.clear;
	this.inArray = array.inArray;
	this.unq = array.uniq;
	this.uniq = array.uniq;
	this.filter = array.filter;
	this.map = array.map;

	//OBJECT
	this.extend = object.extend;
	this.assign = object.assign;
	this.clone = object.assign;
	this.get =  object.get;
	this.keys = object.keys;
	this.getKeys = object.getKeys;

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
