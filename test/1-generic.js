/*global describe it*/
var chai = require('chai');
var sb = require('../spellbook');
var object = {
	"a": 1,
	"b": 2
};

var array = [1, 2, 3, 4];

describe('Generic', function () {
	describe('sb.toString()', function () {
		it('Return string from object', function () {
			chai.assert.typeOf(sb.toString(object), 'string');
		});

		it('Return string from number', function () {
			chai.assert.typeOf(sb.toString(array), 'string');
		});

		it('Return string from array', function () {
			chai.assert.typeOf(sb.toString(5), 'string');
		});

		it('Return string from string', function () {
			chai.assert.typeOf(sb.toString("STRING"), 'string');
		});
	});

	describe('sb.size()', function () {
		it('Returns a number', function () {
			chai.assert.isNumber(sb.size(object));
		});

		it('Returns a number', function () {
			chai.assert.isNumber(sb.size(array));
		});

		it('Returns a number', function () {
			chai.assert.isNumber(sb.size("string"));
		});
	});
});
