var chai = require('chai')
var sb = require('../spellbook')

describe('Tools: Check Type', () => {
	describe('#isFunction()', () => {
		it('Check is function', () => {
			chai.assert.isTrue(sb.isFunction(() => {}), "Is function")
		})

		it('Check empty is not true', () => {
			chai.assert.isNotTrue(sb.isFunction(), "Is empty")
		})

		it('Check array is not true', () => {
			chai.assert.isNotTrue(sb.isFunction([]), "Is array")
		})

		it('Check string is not true', () => {
			chai.assert.isNotTrue(sb.isFunction(""), "Is string")
		})

		it('Check number is not true', () => {
			chai.assert.isNotTrue(sb.isFunction(1), "Is number")
		})

		it('Check object is not true', () => {
			chai.assert.isNotTrue(sb.isFunction({}), "Is object")
		})
	})

	describe('#isArray()', () => {
		it('Check is array', () => {
			chai.assert.isTrue(sb.isArray([]), "Is array")
		})

		it('Check function is not true', () => {
			chai.assert.isNotTrue(sb.isArray(() => {}), "Is function")
		})

		it('Check empty is not true', () => {
			chai.assert.isNotTrue(sb.isArray(), "Is empty")
		})

		it('Check string is not true', () => {
			chai.assert.isNotTrue(sb.isArray(""), "Is string")
		})

		it('Check number is not true', () => {
			chai.assert.isNotTrue(sb.isArray(1), "Is number")
		})

		it('Check object is not true', () => {
			chai.assert.isNotTrue(sb.isArray({}), "Is object")
		})
	})

	describe('#isObject()', () => {
		it('Check is object', () => {
			chai.assert.isTrue(sb.isObject({}), "Is object")
		})

		it('Check is array', () => {
			chai.assert.isNotTrue(sb.isObject([]), "Is array")
		})

		it('Check function is not true', () => {
			chai.assert.isNotTrue(sb.isObject(() => {}), "Is function")
		})

		it('Check empty is not true', () => {
			chai.assert.isNotTrue(sb.isObject(), "Is empty")
		})

		it('Check string is not true', () => {
			chai.assert.isNotTrue(sb.isObject(""), "Is string")
		})

		it('Check number is not true', () => {
			chai.assert.isNotTrue(sb.isObject(1), "Is number")
		})
	})
})