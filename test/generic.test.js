/*global describe it*/

const chai = require('chai')
const sb = require('../src/main')

describe('Generic', () => {
  var object = {
    "a": 1,
    "b": 2
  }

  var array = [1, 2, 3, 4]

  describe('sb.chain()', () => {
    it('Returns a object', () => {
      chai.assert.typeOf(sb.chain('test'), 'object')
    })
  })

  describe('sb.toString()', () => {
    it('Return string from object', () => {
      chai.assert.typeOf(sb.toString(object), 'string')
    })

    it('Return string from number', () => {
      chai.assert.typeOf(sb.toString(array), 'string')
    })

    it('Return string from array', () => {
      chai.assert.typeOf(sb.toString(5), 'string')
    })

    it('Return string from string', () => {
      chai.assert.typeOf(sb.toString("STRING"), 'string')
    })
  })

  describe('sb.size()', () => {
    it('Returns a number', () => {
      chai.assert.isNumber(sb.size(object))
    })

    it('Returns a number', () => {
      chai.assert.isNumber(sb.size(array))
    })

    it('Returns a number', () => {
      chai.assert.isNumber(sb.size("string"))
    })
  })
})
