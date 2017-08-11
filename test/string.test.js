/*global describe it*/

const chai = require('chai')
const sb = require('../src/main')

describe('String', () => {
  describe('sb.toInt()', () => {
    it('Return number', () => {
      chai.assert.typeOf(sb.toInt('123'), 'number')
    })
  })

  describe('sb.capitalize()', () => {
    var string = 'abc'
    const res = sb.capitalize(string)
    it('Returns a string with same length', () => {
      chai.assert.lengthOf(res, string.length)
    })

    it('Returns the same string', () => {
      chai.assert.equal(res, 'Abc')
    })
  })

  describe('sb.dos2unix()', () => {
    //Need test
  })
  
  describe('sb.excerpt()', () => {
    //Need test
  })

  describe('sb.json()', () => {
    chai.assert.isObject(sb.json('{ "a" : "5" }'), 'Is an object')
  })
})
