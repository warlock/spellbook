/*eslint no-unused-vars: 0*/
/*global describe it*/

var chai = require('chai');
var sb = require('../spellbook');
var object = {
	"a": 1,
	"b": 2
};

describe('Tools', function () {
	describe('sb.range()', function () {
		it('Return array', function () {
			chai.assert.typeOf(sb.range(), 'array');
			chai.assert.lengthOf(sb.range(), 0);
		});

		it('Return array of numbers: 0, 1000', function () {
			var res = sb.range(0,1000);
			chai.assert.typeOf(res, 'array');
			chai.assert.lengthOf(res, 1001);
			for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'number');
		});

		it('Return array of varers: a, z', function () {
			var res = sb.range('a','z');
			chai.assert.typeOf(res, 'array');
			chai.assert.lengthOf(res, 26);
			for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'string');
		});

		it('Return array of varers: A, Z', function () {
			var res = sb.range('A','Z');
			chai.assert.typeOf(res, 'array');
			chai.assert.lengthOf(res, 26);
			for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'string');
		});

		/*
		it('Testing combinations: 1, Z', function () {
			var res = sb.range(1,'Z')
			assert.typeOf(res, 'array')
			assert.lengthOf(res, 26)
			for (var i = 0;i<res.length; i++) assert.typeOf(res[i], 'string')
		})
		*/
	});

	describe('sb.random()', function () {
		it('Check if return a number', function () {
			for (var i = 0; i < 1000; i++) {
				var res = sb.random(1,i);
				chai.assert.isNumber(res);
				res = sb.random(res-1,i);
				chai.assert.isNumber(res);
			}
		});

		it('Check if array return a number', function () {
			var arr = [];
			for (var i = 0; i < 1000; i++) {
				arr.push(i);
				var res = sb.random(arr);
				chai.assert.isNumber(res);
			}
		});
	});
});
