/*global describe it*/

var chai = require('chai');
var sb = require('../src/main');

describe('Tools', function () {
  describe('sb.range()', function () {
    it('Return array', function () {
      chai.assert.typeOf(sb.range(), 'array');
      chai.assert.lengthOf(sb.range(), 0);
    });

    it('Return array of numbers: 0, 1000', function () {
      var res = sb.range(0,1000);
      chai.assert.typeOf(res, 'array');
      chai.assert.lengthOf(res, 1001);
      for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'number');
    });

    it('Return array of varers: a, z', function () {
      var res = sb.range('a','z');
      chai.assert.typeOf(res, 'array');
      chai.assert.lengthOf(res, 26);
      for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'string');
    });

    it('Return array of varers: A, Z', function () {
      var res = sb.range('A','Z');
      chai.assert.typeOf(res, 'array');
      chai.assert.lengthOf(res, 26);
      for (var i = 0; i<res.length; i++) chai.assert.typeOf(res[i], 'string');
    });

    it('Testing combinations: 1, Z', function () {
      var res = sb.range(1,'Z');
      chai.assert.typeOf(res, 'array');
      chai.assert.lengthOf(res, 0);
    });

    it('Testing combinations: Z, 1', function () {
      var res = sb.range('Z',1);
      chai.assert.typeOf(res, 'array');
      chai.assert.lengthOf(res, 0);
    });
  });

  describe('sb.random()', function () {
    it('Check if return a number', function () {
      for (var i = 0; i < 1000; i++) {
        var res = sb.random(1,i);
        chai.assert.isNumber(res);
        res = sb.random(res-1,i);
        chai.assert.isNumber(res);
      }
    });

    it('Check if array return a number', function () {
      var arr = [];
      for (var i = 0; i < 1000; i++) {
        arr.push(i);
        var res = sb.random(arr);
        chai.assert.isNumber(res);
      }
    });

    it('Check invalid parameters', function () {
      var res = sb.random('a');
      chai.assert.equal(res, 0, 'When fail returns 0');
      chai.assert.isNumber(res);
    });
  });

  describe('sb.ifElse()', function () {
    it('Check if true returns a true a function', function () {
      var valtrue = sb.ifElse(true, function () {
        return true;
      },
      function () {
        return false;
      });

      chai.assert.isTrue(valtrue);
    });

    it('Check if false returns a false a function', function () {
      var valfalse = sb.ifElse(false, function () {
        return true;
      },
      function () {
        return false;
      });

      chai.assert.isFalse(valfalse);
    });

    it('Check if false returns a false a function', function () {
      var valfunc = sb.function("hello", function (data) {
        return data + " test";
      });

      chai.assert.isString(valfunc);
      chai.assert.equal(valfunc, "hello test");
    });
  });
});
