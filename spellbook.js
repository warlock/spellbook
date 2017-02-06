// http://www.spellbook.io
var snc = require('snc');
var tools = require('./tools/tools');
var type = require('./tools/type');
var array = require('./tools/array');
var object = require('./tools/object');
var string = require('./tools/string');
var number = require('./tools/number');
var chain = require('./tools/chain');

var Spellbook = function () {
	//TOOLS
	this.range = tools.range;
	this.random = tools.random;
	this.repeatify = tools.repeatify;
	this.dos2unix = tools.dos2unix;
	this.empty = tools.empty;
	this.isEmpty = tools.empty;
	this.capitalize = tools.capitalize;
	this.chain = chain;

	//STRING TOOLS
	this.toInt = string.toInt;
	this.excerpt = string.excerpt;

	//NUMBER TOOLS
	this.toString = number.toString;
	this.duplicate = number.duplicate;

	//TYPE TOOLS
	this.isFunction = type.isFunction;
	this.isArray = type.isArray;
	this.isObject = type.isObject;
	this.isNumber = type.isNumber;
	this.isString = type.isString;
	this.isBoolean = type.isBoolean;
	this.isInteger = type.isInteger;

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
	this.epl = this.eachParallelLimit;
	this.eachpl = this.eachParallelLimit;
	this.eachParallelLimit = this.eachParallelLimit;
	this.for = snc.forSync;
	this.forSync =  snc.forSync;
	this.times = snc.times;
};

if (typeof process === 'object') module.exports = new Spellbook();
else {
	var sb = new Spellbook();
	if (sb === undefined) throw new Error('No Spellbook loaded');
}
