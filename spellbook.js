// http://www.spellbook.io
var snc = require('snc');
var tools = require('./tools/tools');
var type = require('./tools/type');
var array = require('./tools/array');
var object = require('./tools/object');
var string = require('./tools/string');
var number = require('./tools/number');
var generic = require('./tools/generic');
var chain = require('./tools/chain');

var Spellbook = function () {
	//TOOLS
	this.range = tools.range;
	this.random = tools.random;
	this.repeatify = tools.repeatify;

	//STRING TOOLS
	this.toInt = string.toInt;
	this.excerpt = string.excerpt;
	this.capitalize = string.capitalize;
	this.toJSON = string.toJSON;
	this.json = string.toJSON;
	this.dos2unix = string.dos2unix;

	//NUMBER TOOLS
	this.duplicate = number.duplicate;

	//GENERIC TOOLS
	this.toString = generic.toString;

	//TYPE TOOLS
	this.isFunction = type.isFunction;
	this.isArray = type.isArray;
	this.isObject = type.isObject;
	this.isNumber = type.isNumber;
	this.isString = type.isString;
	this.isBoolean = type.isBoolean;
	this.isInteger = type.isInteger;
	this.isEmpty = type.isEmpty;
	this.empty = type.empty;

	//ARRAY TOOLS
	this.shuffle = array.shuffle;
	this.first = array.first;
	this.last = array.last;
	this.remove = array.remove;
	this.clear = array.clear;
	this.inArray = array.inArray;
	this.contains = array.inArray;
	this.unq = array.uniq;
	this.uniq = array.uniq;
	this.filter = array.filter;

	//OBJECT TOOLS
	this.extend = object.extend;
	this.assign = object.assign;
	this.clone = object.assign;
	this.get =  object.get;
	this.size = object.size;
	this.keys = object.keys;
	this.getKeys = object.getKeys;

	//ASYNCRONOUS COLECTION SNC LIBRARY
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

	//CHAIN TOOL
	this.chain = chain;
};

module.exports = new Spellbook();
