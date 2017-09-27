/*global describe it*/

const chai = require('chai')
const sb = require('../src/main')

describe('Object', () => {
  var object = {
    "a": 1,
    "b": 2
  }

  describe('sb.assing()', () => {
    var objCopy = sb.assign(object)
    it('Return object', () => {
      chai.assert.isObject(objCopy)
    })

    it('The same object', () => {
      chai.assert.notEqual(objCopy, object)
    })

    it('The same data', () => {
      chai.assert.notStrictEqual(objCopy, object, "The same values")
    })
  })

  describe('sb.clone()', () => {
    var objCopy = sb.clone(object)
    it('Return object', () => {
      chai.assert.isObject(objCopy)
    })

    it('The same object', () => {
      chai.assert.notEqual(objCopy, object)
    })

    it('The same data', () => {
      chai.assert.notStrictEqual(objCopy, object, "The same values")
    })
  })

  describe('sb.get()', () => {
    var a = {"a": {"b": ["c", "d"]}}
    it('Check get a string', () => {
      const res = sb.get(a, "a.b.0")
      chai.assert.isString(res)
    })

    it('Check get "c" string', () => {
      const res = sb.get(a, "a.b.0")
      chai.assert.equal(res, "c")
    })

    it('Check get a array', () => {
      const res = sb.get(a, "a.b")
      chai.assert.isArray(res)
    })

    it('Check get a object', () => {
      const res = sb.get(a, "a")
      chai.assert.isObject(res)
    })
  })

  describe('sb.extend()', () => {
    var obj = {"a": 1}
    var obj2 = {"b": 2}
    var objtest = {
      "a": 1,
      "b": 2
    }

    const res = sb.extend(obj, obj2)
    it('Returns object', () => {
      chai.assert.isObject(res)
    })

    it('Object is a fusion', () => {
      chai.assert.notStrictEqual(res, objtest)
    })

    it('Attribute \'a\' is equal', () => {
      chai.assert.equal(res.a, objtest.a)
    })

    it('Attribute \'b\' is equal', () => {
      chai.assert.equal(res.b, objtest.b)
    })
  })

  describe('sb.keys()', () => {
    var obj = {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4
    }
    //chai.assert.strictEqual(sb.keys(obj), Object.keys(obj), 'Correct result')
    chai.assert.isArray(sb.keys(obj), 'is Array')
    chai.assert.lengthOf(sb.keys(obj), 4, 'Same length')
  })

  describe('sb.getKeys()', () => {
    var obj = {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4
    }
    const res = sb.getKeys(obj, 'a')
    const res2 = sb.getKeys(obj, ['b','d'])

    it('Returns object', () => {
      chai.assert.isObject(res)
    })

    it('Object length', () => {
      chai.assert.lengthOf(Object.keys(res), 1)
    })

    it('Validate value', () => {
      chai.assert.equal(res.a, 1)
    })

    it('Returns object', () => {
      chai.assert.isObject(res2)
    })

    it('Object length', () => {
      chai.assert.lengthOf(Object.keys(res2), 2)
    })

    it('Validate values', () => {
      chai.assert.equal(res2.b, 2)
      chai.assert.equal(res2.d, 4)
    })
  })

  describe('sb.merge()', () => {
    var obj = {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4
    }
    const res = sb.merge(object, obj)
    chai.assert.lengthOf(Object.keys(res), 4)
  })
})
