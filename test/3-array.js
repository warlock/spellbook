var chai = require('chai')
var sb = require('../spellbook')
var object = { a : 1, b : 2 }

describe('Array', function () {

	describe('sb.shuffle()', function () {
		var array = [1,2,3,4,5]
		it('Check if numbers array returns array', function () {
			var res = sb.shuffle(array)
			chai.assert.isArray(res)
		})

		it('Check if numbers array returns array of numbers', function () {
			for (var i = 0;i < array.length; i++) {
				chai.assert.isNumber(array[i])
			}
		})

		it('Check if numbers array have a same length', function () {
			var res = sb.shuffle(array)
			chai.assert.lengthOf(res, array.length)
		})
	});


	describe('sb.last()', function () {
		var array = ['a','b','c']
		it('Check if last element is correct', function () {
			var res = sb.last(array)
			chai.assert.isString(res)
			chai.assert.equal(res, 'c')
		})
	});

	describe('sb.first()', function () {
		var array = ['a','b','c']
		it('Check first element is correct', function () {
			var res = sb.first(array)
			chai.assert.isString(res)
			chai.assert.equal(res, 'a')
		})
	});

	describe('sb.size()', function () {
		var obj = { a : 1, b : 2 }
		var res = sb.size(obj)
		it('Returns a number', function () {
			chai.assert.isNumber(res)
		});

		it('Object is a fusion', function () {
			chai.assert.equal(res, 2)
		});
	});

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

		describe('sb.filter()', function () {
			var array = [{ a : 1, b : 1 }, { a : 1, b : 2 }, { a : 2, b : 3 }]
			it('Check it return\'s array', function () {
				var res = sb.filter(array, { a : 1 })
				chai.assert.isArray(res)
			})

			it('Return correct number of values', function () {
				var res = sb.filter(array, { a : 1 })
				res.forEach(function (e) {
					chai.assert.equal(e.a, 1, "Not correct values")
				})
				chai.assert.lengthOf(res, 2)
			})

			it('Return correct number of values', function () {
				var res = sb.filter(array, { a : 2 })
				res.forEach(function (e) {
					chai.assert.equal(e.a, 2, "Not correct values")
				})
				chai.assert.lengthOf(res, 1)
			})

			it('Return correct number of values', function () {
				var res = sb.filter(array, { a : 3 })
				res.forEach(function (e) {
					chai.assert.equal(e.a, 3, "Not correct values")
				})

				chai.assert.lengthOf(res, 0)
			})

			it('Return correct number of values', function () {
				var res = sb.filter(array, { a : 1, b : 3 })
				res.forEach(function (e) {
					chai.assert.equal(e.a, 1, "Not correct values")
				})

				res.forEach(function (e) {
					chai.assert.equal(e.b, 3, "Not correct values")
				})
				chai.assert.lengthOf(res, 0)
			})
		})
})
