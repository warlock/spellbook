/*global describe it*/

var chai = require('chai');
var sb = require('../spellbook');

describe('String', function () {
  describe('sb.toInt()', function () {
    it('Return number', function () {
      chai.assert.typeOf(sb.toInt('123'), 'number');
    });
  });

  describe('sb.capitalize()', function () {
    var string = 'abc';
    var res = sb.capitalize(string);
    it('Returns a string with same length', function () {
      chai.assert.lengthOf(res, string.length);
    });

    it('Returns the same string', function () {
      chai.assert.equal(res, 'Abc');
    });
  });

/*
  describe('sb.dos2unix()', function () {
    var stringDos = 'hi';
    var stringUnix = "hi";
    //Need test
  });
*/
  describe('sb.excerpt()', function () {
    //Need test
  });

  describe('sb.json()', function () {
    chai.assert.isObject(sb.json("{'a': '5'}"), 'Is an object');
  });
});
