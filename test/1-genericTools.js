//var assert = require('chai').assert
var chai = require('chai')
var sb = require('../spellbook')
var object = { a : 1, b : 2 }

describe('Generic Tools', function () {
	describe('sb.range()', function () {
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

	describe('sb.assing()', function () {
		var obj_copy = sb.assign(object)
		it('Return object', function () {
			chai.assert.isObject(obj_copy)
		})

		it('The same object', function () {
			chai.assert.notEqual(obj_copy, object)
		})

		it('The same data', function () {
			chai.assert.notStrictEqual(obj_copy, object, "The same values")
		})
	})

	describe('sb.clone()', function () {
		var obj_copy = sb.clone(object)
		it('Return object', function () {
			chai.assert.isObject(obj_copy)
		})

		it('The same object', function () {
			chai.assert.notEqual(obj_copy, object)
		})

		it('The same data', function () {
			chai.assert.notStrictEqual(obj_copy, object, "The same values")
		})
	})

	describe('sb.remove()', function () {
		var obj_array = [{ a : 1}, { a : 2}, { b : 3}]
		var number_array = [1, 2, 6]
		var string_array = ["1", "2", "6"]
/*
		it('Test in empty value', function () {
			var res = sb.remove(number_array, )
			chai.assert.isArray(res)
		})
*/
		it('Delete a number', function () {
			var res = sb.remove(number_array, 2)
			chai.assert.lengthOf(res, 2)
			chai.assert.isArray(res)
		})

		it('Delete a multiple numbe', function () {
			var res = sb.remove(number_array, [2,6])
			chai.assert.lengthOf(res, 1)
			chai.assert.isArray(res)
		})

		it('Delete a object', function () {
			var res = sb.remove(obj_array, { b : 3 })
			chai.assert.lengthOf(res, 2)
			chai.assert.isArray(res)
		})
		it('Delete multiple objects', function () {
			var res = sb.remove(obj_array, [{ b : 3 }, { a : 1}])
			chai.assert.lengthOf(res, 1)
			chai.assert.isArray(res)
		})

		it('Delete string', function () {
			var res = sb.remove(string_array, "2")
			chai.assert.lengthOf(res, 2)
			chai.assert.isArray(res)
		})

		it('Delete multiple string', function () {
			var res = sb.remove(string_array, ["6", "2"])
			chai.assert.lengthOf(res, 1)
			chai.assert.isArray(res)
		})
	})

	describe('sb.clear()', function () {
		var array = [1,2,3]
		it('Check is a array', function () {
			var res = sb.clear(array)
			chai.assert.isArray(res)
		})
		it('Check length is 0', function () {
			var res = sb.clear(array)
			chai.assert.lengthOf(res, 0)
		})
	})

	describe('sb.contains()', function () {
		var number_array = [1, 2, 3]
		var string_array = ['1', '2', '3']

		it('Check if contains number return true', function () {
			var res = sb.contains(number_array, 2)
			chai.assert.isTrue(res)
		})

		it('Check if not contains number return false', function () {
			var res = sb.contains(number_array, 5)
			chai.assert.isFalse(res)
		})

		it('Check if contains string return true', function () {
			var res = sb.contains(string_array, '2')
			chai.assert.isTrue(res)
		})

		it('Check if not contains string return false', function () {
			var res = sb.contains(string_array, '5')
			chai.assert.isFalse(res)
		})
	})

	describe('sb.inArray()', function () {
		var number_array = [1, 2, 3]
		var string_array = ['1', '2', '3']

		it('Check if contains number return true', function () {
			var res = sb.inArray(number_array, 2)
			chai.assert.isTrue(res)
		})

		it('Check if not contains number return false', function () {
			var res = sb.inArray(number_array, 5)
			chai.assert.isFalse(res)
		})

		it('Check if contains string return true', function () {
			var res = sb.inArray(string_array, '2')
			chai.assert.isTrue(res)
		})

		it('Check if not contains string return false', function () {
			var res = sb.inArray(string_array, '5')
			chai.assert.isFalse(res)
		})
	})

	describe('sb.uniq()', function () {
		var obj_array = [{a : 1}, {a : 2}, {a : 3}]
		it('Check is array', function () {
			var res = sb.uniq(obj_array, "a")
			chai.assert.isArray(res)
		})

		it('Check length is 3', function () {
			var res = sb.uniq(obj_array, "a")
			chai.assert.lengthOf(res, 3)
		})

		it('Check if all elements is a numbers', function () {
			var res = sb.uniq(obj_array, "a")
			for (var i = 0; i < res.length; i++) {
				chai.assert.isNumber(res[i])
			}
		})
	})

	describe('sb.get()', function () {
		var a = { a : {	b : ["c", "d"] } }
		it('Check get a string', function () {
			var res = sb.get(a, "a.b.0")
			chai.assert.isString(res)
		})

		it('Check get "c" string', function () {
			var res = sb.get(a, "a.b.0")
			chai.assert.equal(res, "c")
		})

		it('Check get a array', function () {
			var res = sb.get(a, "a.b")
			chai.assert.isArray(res)
		})

		it('Check get a object', function () {
			var res = sb.get(a, "a")
			chai.assert.isObject(res)
		})
	})

	describe('sb.random()', function () {
		it('Check if return a number', function () {
			for (var i = 0;i < 1000; i++) {
				var res = sb.random(1,i)
				chai.assert.isNumber(res)
				var res = sb.random(res-1,i)
				chai.assert.isNumber(res)
			}
		})

		it('Check if array return a number', function () {
			var arr = []
			for (var i = 0;i < 1000; i++) {
				arr.push(i)
				var res = sb.random(arr)
				chai.assert.isNumber(res)
			}
		})
	});
})
