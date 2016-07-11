//var assert = require('chai').assert
var chai = require('chai')
var sb = require('../spellbook')

describe('Tools', function () {
	describe('#range()', function () {
		it('Return array', function () {
			chai.assert.typeOf(sb.range(), 'array')
			chai.assert.lengthOf(sb.range(), 0)
		})

		it('Return array of numbers: 0, 1000', function () {
			var res = sb.range(0,1000)
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 1001)
			for (var i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'number')
		})

		it('Return array of varers: a, z', function () {
			var res = sb.range('a','z')
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 26)
			for (var i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'string')
		})

		it('Return array of varers: A, Z', function () {
			var res = sb.range('A','Z')
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 26)
			for (var i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'string')
		})
/*
		it('Testing combinations: 1, Z', function () {
			var res = sb.range(1,'Z')
			assert.typeOf(res, 'array')
			assert.lengthOf(res, 26)
			for (var i = 0;i<res.length; i++) assert.typeOf(res[i], 'string')
		})
*/
	})
})