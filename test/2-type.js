/*eslint no-unused-vars: 0*/
/*global describe it*/
var chai = require('chai');
var sb = require('../spellbook');

var data = {
	"func": function () {
		return 'hi';
	},
	"num": 1.2,
	"int": 1,
	"string": 'hi',
	"obj": {"a": 'b'},
	"bool": true,
	"array": [1,2,3],
	"null": null,
	"undefined": undefined
};

describe('Type', function () {
	describe('sb.isFunction()', function () {
		it('Check is function', function () {
			for (var key in data) {
				if (key === 'func') chai.assert.isTrue(sb.isFunction(data[key]));
				else chai.assert.isNotTrue(sb.isFunction(data[key]));
			}
		});
	});

	describe('sb.isArray()', function () {
		it('Check is Array', function () {
			for (var key in data) {
				if (key === 'array') chai.assert.isTrue(sb.isArray(data[key]));
				else chai.assert.isNotTrue(sb.isArray(data[key]));
			}
		});
	});

	describe('sb.isNumber()', function () {
		it('Check float is number', function () {
			for (var key in data) {
				if (key === 'num') chai.assert.isTrue(sb.isNumber(data[key]));
				else if (key === 'int') chai.assert.isTrue(sb.isNumber(data[key]));
				else chai.assert.isNotTrue(sb.isNumber(data[key]));
			}
		});
	});

	describe('sb.isInteger()', function () {
		it('Check is integer', function () {
			for (var key in data) {
				if (key === 'int') chai.assert.isTrue(sb.isInteger(data[key]));
				else chai.assert.isNotTrue(sb.isInteger(data[key]));
			}
		});
	});

	describe('sb.isString()', function () {
		it('Check is string', function () {
			for (var key in data) {
				if (key === 'string') chai.assert.isTrue(sb.isString(data[key]));
				else chai.assert.isNotTrue(sb.isString(data[key]));
			}
		});
	});

	describe('sb.isObject()', function () {
		it('Check is object', function () {
			for (var key in data) {
				if (key === 'obj') chai.assert.isTrue(sb.isObject(data[key]));
				else chai.assert.isNotTrue(sb.isObject(data[key]));
			}
		});
	});

	describe('sb.isBoolean()', function () {
		it('Check is boolean', function () {
			for (var key in data) {
				if (key === 'bool') chai.assert.isTrue(sb.isBoolean(data[key]));
				else chai.assert.isNotTrue(sb.isBoolean(data[key]));
			}
		});
	});

	describe('sb.isNull', function () {
		it('Check value is null', function () {
			for (var key in data) {
				if (key === 'null') chai.assert.isTrue(sb.isNull(data[key]));
				else chai.assert.isNotTrue(sb.isNull(data[key]));
			}
		});
	});

/*
	describe('sb.isNaN', function () {
		it('Check value is not a number', function () {
			for (var key in data) {
				if (key === 'num' || key === 'int' || key === 'bool' || key === 'null') chai.assert.isFalse(sb.isNaN(data[key]));
				else chai.assert.isNotTrue(sb.isNaN(data[key]));
			}
		});
	});
*/

	describe('sb.isEmpty()', function () {
		it('Check is empty', function () {
			chai.assert.isNotTrue(sb.isEmpty('a'), 'is string');
			chai.assert.isNotTrue(sb.isEmpty(['a']), 'is array');
			chai.assert.isNotTrue(sb.isEmpty({'a': 'a'}), 'is object');
			chai.assert.isTrue(sb.isEmpty(null), 'is null');
			chai.assert.isTrue(sb.isEmpty(undefined), 'is null');
			//chai.assert.isTrue(sb.isEmpty([]), 'is empty array')
			chai.assert.isTrue(sb.isEmpty(""), 'is empty string');
		});
	});

	describe('sb.isUndefined()', function () {
		it('Check is undefined', function () {
			for (var key in data) {
				if (key === 'undefined') chai.assert.isTrue(sb.isUndefined(data[key]));
				else chai.assert.isNotTrue(sb.isUndefined(data[key]));
			}
		});
	});
});
