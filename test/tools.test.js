/*global describe it*/

const chai = require('chai')
const sb = require('../src/main')

describe('Tools', () => {
  describe('sb.range()', () => {
    it('Return array', () => {
      chai.assert.typeOf(sb.range(), 'array')
      chai.assert.lengthOf(sb.range(), 0)
    })

    it('Return array of numbers: 0, 1000', () => {
      const res = sb.range(0,1000)
      chai.assert.typeOf(res, 'array')
      chai.assert.lengthOf(res, 1001)
      for (let i = 0; i < res.length; i++) chai.assert.typeOf(res[i], 'number')
    })

    it('Return array of varers: a, z', () => {
      const res = sb.range('a','z')
      chai.assert.typeOf(res, 'array')
      chai.assert.lengthOf(res, 26)
      for (let i = 0; i < res.length; i++) chai.assert.typeOf(res[i], 'string')
    })

    it('Return array of varers: A, Z', () => {
      const res = sb.range('A','Z')
      chai.assert.typeOf(res, 'array')
      chai.assert.lengthOf(res, 26)
      for (let i = 0; i < res.length; i++) chai.assert.typeOf(res[i], 'string')
    })

    it('Testing combinations: 1, Z', () => {
      const res = sb.range(1,'Z')
      chai.assert.typeOf(res, 'array')
      chai.assert.lengthOf(res, 0)
    })

    it('Testing combinations: Z, 1', () => {
      const res = sb.range('Z',1)
      chai.assert.typeOf(res, 'array')
      chai.assert.lengthOf(res, 0)
    })
  })

  describe('sb.random()', () => {
    it('Check if return a number', () => {
      for (let i = 0; i < 1000; i++) {
        var res = sb.random(1,i)
        chai.assert.isNumber(res)
        res = sb.random(res-1,i)
        chai.assert.isNumber(res)
      }
    })

    it('Check if array return a number', () => {
      var arr = []
      for (let i = 0; i < 1000; i++) {
        arr.push(i)
        const res = sb.random(arr)
        chai.assert.isNumber(res)
      }
    })

    it('Check invalid parameters', () => {
      const res = sb.random('a')
      chai.assert.equal(res, 0, 'When fail returns 0')
      chai.assert.isNumber(res)
    })
  })

  describe('sb.ifElse()', () => {
    it('Check if true returns a true a function', () => {
      const valtrue = sb.ifElse(true, () => {
        return true
      },
      () => {
        return false
      })

      chai.assert.isTrue(valtrue)
    })

    it('Check if false returns a false a function', () => {
      const valfalse = sb.ifElse(false, () => {
        return true
      },
      () => {
        return false
      })

      chai.assert.isFalse(valfalse)
    })

    it('Check if false returns a false a function', () => {
      const valfunc = sb.function("hello", function (data) {
        return data + " test"
      })

      chai.assert.isString(valfunc)
      chai.assert.equal(valfunc, "hello test")
    })
  })
})
