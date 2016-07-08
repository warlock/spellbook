//var assert = require('chai').assert
var chai = require('chai')
var sb = require('../spellbook')

describe('Tools', () => {
	describe('#range()', () => {
		it('Return array', () => {
			chai.assert.typeOf(sb.range(), 'array')
			chai.assert.lengthOf(sb.range(), 0)
		})

		it('Return array of numbers: 0, 1000', () => {
			var res = sb.range(0,1000)
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 1001)
			for (let i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'number')
		})

		it('Return array of leters: a, z', () => {
			var res = sb.range('a','z')
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 26)
			for (let i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'string')
		})

		it('Return array of leters: A, Z', () => {
			var res = sb.range('A','Z')
			chai.assert.typeOf(res, 'array')
			chai.assert.lengthOf(res, 26)
			for (let i = 0;i<res.length; i++) chai.assert.typeOf(res[i], 'string')
		})
/*
		it('Testing combinations: 1, Z', () => {
			var res = sb.range(1,'Z')
			assert.typeOf(res, 'array')
			assert.lengthOf(res, 26)
			for (let i = 0;i<res.length; i++) assert.typeOf(res[i], 'string')
		})
*/
	})
})