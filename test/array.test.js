/*global describe it*/

const chai = require('chai')
const sb = require('../src/main')

describe('Array', () => {

  var arraytest = [{
    "a": 1,
    "b": 1
  }, {
    "a": 1,
    "b": 2
  }, {
    "a": 2,
    "b": 3
  }]

  describe('sb.shuffle()', () => {
    it('Check if numbers array returns array', () => {
      const array = [1,2,3,4,5]
      const res = sb.shuffle(array)
      chai.assert.isArray(res)
    })

    it('Check if numbers array returns array of numbers', () => {
      const array = [1,2,3,4,5]
      const res = sb.shuffle(array)
      for (let i = 0; i < res.length; i++) {
        chai.assert.isNumber(res[i])
      }
    })

    it('Check if numbers array have a same length', () => {
      const array = [1,2,3,4,5]
      const res = sb.shuffle(array)
      chai.assert.lengthOf(res, array.length)
    })

    it('Check if contains the same values', () => {
      const array = [1,2,3,4,5]
      const res = sb.shuffle(array)
      array.forEach(value => {
        chai.expect(res).to.include(value)
      })
    })

    it('Check the array is not the same order', () => {
      const array = [1,2,3,4,5]
      const res = sb.shuffle(array)
      chai.assert.notStrictEqual(array, res, 'These array values are not strictly equal')
    })
  })


  describe('sb.first()', () => {
    it('Check first element is correct', () => {
      const array = ['a','b','c']
      const res = sb.first(array)
      chai.assert.isString(res)
      chai.assert.equal(res, 'a')
    })
  })

  describe('sb.last()', () => {
    it('Check if last element is correct', () => {
      const array = ['a','b','c']
      const res = sb.last(array)
      chai.assert.isString(res)
      chai.assert.equal(res, 'c')
    })
  })

  describe('sb.remove()', () => {
    var objArray = [{"a": 1}, {"a": 2}, {"b": 3}]
    var numberArray = [1, 2, 6]
    var stringArray = ["1", "2", "6"]

    it('Delete a number', () => {
      const res = sb.remove(numberArray, 2)
      chai.assert.lengthOf(res, 2)
      chai.assert.isArray(res)
    })

    it('Delete a multiple numbers', () => {
      const res = sb.remove(numberArray, [2,6])
      chai.assert.lengthOf(res, 1)
      chai.assert.isArray(res)
    })

    it('Delete a object', () => {
      const res = sb.remove(objArray, {"b": 3})
      chai.assert.lengthOf(res, 2)
      chai.assert.isArray(res)
    })

    it('Delete multiple objects', () => {
      const res = sb.remove(objArray, [{"b": 3}, {"a": 1}])
      chai.assert.lengthOf(res, 1)
      chai.assert.isArray(res)
    })

    it('Delete string', () => {
      const res = sb.remove(stringArray, "2")
      chai.assert.lengthOf(res, 2)
      chai.assert.isArray(res)
    })

    it('Delete multiple string', () => {
      const res = sb.remove(stringArray, ["6", "2"])
      chai.assert.lengthOf(res, 1)
      chai.assert.isArray(res)
    })
  })

  describe('sb.clear()', () => {
    it('Check is a array', () => {
      var array = [1,2,3]
      const res = sb.clear(array)
      chai.assert.isArray(res)
    })

    it('Check length is 0', () => {
      var array = [1,2,3]
      const res = sb.clear(array)
      chai.assert.lengthOf(res, 0)
    })
  })

  describe('sb.inArray()', () => {
    var numberArray = [1, 2, 3]
    var stringArray = ['1', '2', '3']

    it('Check if contains number return true', () => {
      const res = sb.inArray(numberArray, 2)
      chai.assert.isTrue(res)
    })

    it('Check if not contains number return false', () => {
      const res = sb.inArray(numberArray, 5)
      chai.assert.isFalse(res)
    })

    it('Check if contains string return true', () => {
      const res = sb.inArray(stringArray, '2')
      chai.assert.isTrue(res)
    })

    it('Check if not contains string return false', () => {
      const res = sb.inArray(stringArray, '5')
      chai.assert.isFalse(res)
    })
  })

  describe('sb.uniqBy()', () => {
    var objArray = [{"a": 1}, {"a": 2}, {"a": 3}]
    it('Check is array', () => {
      const res = sb.uniqBy(objArray, "a")
      chai.assert.isArray(res)
    })

    it('Check length is 3', () => {
      const res = sb.uniqBy(objArray, "a")
      chai.assert.lengthOf(res, 3)
    })

    it('Check if all elements is a numbers', () => {
      const res = sb.uniqBy(objArray, "a")
      for (let i = 0; i < res.length; i++) {
        chai.assert.isNumber(res[i])
      }
    })
  })

  describe('sb.uniq()', () => {
    var objArray = [{"a": 1}, {"a": 2}, {"a": 2}, {"a": 3}]
    it('Check is array', () => {
      const res = sb.uniq(objArray)
      chai.assert.isArray(res)
    })

    it('Check length is 3', () => {
      const res = sb.uniq(objArray)
      chai.assert.lengthOf(res, 3)
    })

    it('Check if all elements is a numbers', () => {
      const res = sb.uniq(objArray, "a")
      for (let i = 0; i < res.length; i++) {
        chai.assert.isObject(res[i])
      }
    })
  })

  describe('sb.filter()', () => {
    var array = sb.assign(arraytest)

    it('Check length is 3', () => {
      const res = sb.filter(array, x => {
        return x.a > 1
      })
      chai.assert.lengthOf(res, 1)
    })
  })

  describe('sb.filterBy()', () => {
    var array = sb.assign(arraytest)

    it('Check it return\'s array', () => {
      const res = sb.filterBy(array, {"a": 1})
      chai.assert.isArray(res)
    })

    it('Return correct number of values', () => {
      const res = sb.filterBy(array, {"a": 1})
      res.forEach(e => {
        chai.assert.equal(e.a, 1, "Not correct values")
      })
      chai.assert.lengthOf(res, 2)
    })

    it('Return correct number of values', () => {
      const res = sb.filterBy(array, {"a": 2})
      res.forEach(e => {
        chai.assert.equal(e.a, 2, "Not correct values")
      })
      chai.assert.lengthOf(res, 1)
    })

    it('Return correct number of values', () => {
      const res = sb.filterBy(array, {"a": 3})
      res.forEach(e => {
        chai.assert.equal(e.a, 3, "Not correct values")
      })

      chai.assert.lengthOf(res, 0)
    })

    it('Return correct number of values', () => {
      const res = sb.filterBy(array, {
        "a": 1,
        "b": 3
      })

      res.forEach(e => {
        chai.assert.equal(e.a, 1, "Not correct values")
      })

      res.forEach(e => {
        chai.assert.equal(e.b, 3, "Not correct values")
      })

      chai.assert.lengthOf(res, 0)
    })
  })

  describe('sb.chunk', () => {
    const newRange = Array.from(Array(10).keys())
    it('Make 3 elements pack', () => {
      const res = sb.chunk(newRange, 3)
      chai.assert.lengthOf(res, 4)
    })

    it('Make 2 elements pack', () => {
      const res = sb.chunk(newRange, 2)
      chai.assert.lengthOf(res, 5)
    })

    it('Make 5 elements pack', () => {
      const res = sb.chunk(newRange, 5)
      chai.assert.lengthOf(res, 2)
    })
  })
})
