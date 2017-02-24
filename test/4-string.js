//var assert = require('chai').assert
var chai = require('chai')
var sb = require('../spellbook')
var object = { a : 1, b : 2 }

describe('String', function () {
	describe('sb.toInt()', function () {
		it('Return number', function () {
			chai.assert.typeOf(sb.toInt('123'), 'number')
		})
	})

	describe('sb.capitalize()', function () {
		var string = 'abc'
		var res = sb.capitalize(string)
		it('Returns a string with same length', function () {
			chai.assert.lengthOf(res, string.length)
		});

		it('Returns the same string', function () {
			chai.assert.equal(res, 'Abc')
		});
	});

	describe('sb.dos2unix()', function () {
		var string_dos = 'hi'
		var string_unix = "hi"
		//Need test
	})

	describe('sb.excerpt()', function () {
		//Need test
	})

	describe('Parse JSON', function () {
		chai.assert.isObject(sb.json(sb.toString({ a : '5' })), 'Is an object');
	})
})