/*global describe it*/

var chai = require('chai');
var sb = require('../src/main');

describe('Array', function () {

  var arraytest = [{
    "a": 1,
    "b": 1
  }, {
    "a": 1,
    "b": 2
  }, {
    "a": 2,
    "b": 3
  }];

  describe('sb.shuffle()', function () {
    var array = [1,2,3,4,5];
    it('Check if numbers array returns array', function () {
      var res = sb.shuffle(array);
      chai.assert.isArray(res);
    });

    it('Check if numbers array returns array of numbers', function () {
      for (var i = 0; i < array.length; i++) {
        chai.assert.isNumber(array[i]);
      }
    });

    it('Check if numbers array have a same length', function () {
      var res = sb.shuffle(array);
      chai.assert.lengthOf(res, array.length);
    });

    it('Check if contains the same values', function () {
      var res = sb.shuffle(array);
      array.forEach(function (value) {
        chai.expect(res).to.include(value);
      });
    });

    it('Check the array is no\'t the same order', function () {
      var res = sb.shuffle(array);
      chai.assert.notStrictEqual(array, res, 'These array values are not strictly equal');
    });
  });


  describe('sb.first()', function () {
    var array = ['a','b','c'];
    it('Check first element is correct', function () {
      var res = sb.first(array);
      chai.assert.isString(res);
      chai.assert.equal(res, 'a');
    });
  });

  describe('sb.last()', function () {
    var array = ['a','b','c'];
    it('Check if last element is correct', function () {
      var res = sb.last(array);
      chai.assert.isString(res);
      chai.assert.equal(res, 'c');
    });
  });

  describe('sb.remove()', function () {
    var objArray = [{"a": 1}, {"a": 2}, {"b": 3}];
    var numberArray = [1, 2, 6];
    var stringArray = ["1", "2", "6"];

    it('Delete a number', function () {
      var res = sb.remove(numberArray, 2);
      chai.assert.lengthOf(res, 2);
      chai.assert.isArray(res);
    });

    it('Delete a multiple numbers', function () {
      var res = sb.remove(numberArray, [2,6]);
      chai.assert.lengthOf(res, 1);
      chai.assert.isArray(res);
    });

    it('Delete a object', function () {
      var res = sb.remove(objArray, {"b": 3});
      chai.assert.lengthOf(res, 2);
      chai.assert.isArray(res);
    });

    it('Delete multiple objects', function () {
      var res = sb.remove(objArray, [{"b": 3}, {"a": 1}]);
      chai.assert.lengthOf(res, 1);
      chai.assert.isArray(res);
    });

    it('Delete string', function () {
      var res = sb.remove(stringArray, "2");
      chai.assert.lengthOf(res, 2);
      chai.assert.isArray(res);
    });

    it('Delete multiple string', function () {
      var res = sb.remove(stringArray, ["6", "2"]);
      chai.assert.lengthOf(res, 1);
      chai.assert.isArray(res);
    });
  });

  describe('sb.clear()', function () {
    var array = [1,2,3];
    it('Check is a array', function () {
      var res = sb.clear(array);
      chai.assert.isArray(res);
    });

    it('Check length is 0', function () {
      var res = sb.clear(array);
      chai.assert.lengthOf(res, 0);
    });
  });

  describe('sb.inArray()', function () {
    var numberArray = [1, 2, 3];
    var stringArray = ['1', '2', '3'];

    it('Check if contains number return true', function () {
      var res = sb.inArray(numberArray, 2);
      chai.assert.isTrue(res);
    });

    it('Check if not contains number return false', function () {
      var res = sb.inArray(numberArray, 5);
      chai.assert.isFalse(res);
    });

    it('Check if contains string return true', function () {
      var res = sb.inArray(stringArray, '2');
      chai.assert.isTrue(res);
    });

    it('Check if not contains string return false', function () {
      var res = sb.inArray(stringArray, '5');
      chai.assert.isFalse(res);
    });
  });

  describe('sb.uniqBy()', function () {
    var objArray = [{"a": 1}, {"a": 2}, {"a": 3}];
    it('Check is array', function () {
      var res = sb.uniqBy(objArray, "a");
      chai.assert.isArray(res);
    });

    it('Check length is 3', function () {
      var res = sb.uniqBy(objArray, "a");
      chai.assert.lengthOf(res, 3);
    });

    it('Check if all elements is a numbers', function () {
      var res = sb.uniqBy(objArray, "a");
      for (var i = 0; i < res.length; i++) {
        chai.assert.isNumber(res[i]);
      }
    });
  });

  describe('sb.uniq()', function () {
    var objArray = [{"a": 1}, {"a": 2}, {"a": 2}, {"a": 3}];
    it('Check is array', function () {
      var res = sb.uniq(objArray);
      chai.assert.isArray(res);
    });

    it('Check length is 3', function () {
      var res = sb.uniq(objArray);
      chai.assert.lengthOf(res, 3);
    });

    it('Check if all elements is a numbers', function () {
      var res = sb.uniq(objArray, "a");
      for (var i = 0; i < res.length; i++) {
        chai.assert.isObject(res[i]);
      }
    });
  });

  describe('sb.filter()', function () {
    var array = sb.assign(arraytest);

    it('Check length is 3', function () {
      var res = sb.filter(array, function (x) {
        return x.a > 1;
      });
      chai.assert.lengthOf(res, 1);
    });
  });

  describe('sb.filterBy()', function () {
    var array = sb.assign(arraytest);

    it('Check it return\'s array', function () {
      var res = sb.filterBy(array, {"a": 1});
      chai.assert.isArray(res);
    });

    it('Return correct number of values', function () {
      var res = sb.filterBy(array, {"a": 1});
      res.forEach(function (e) {
        chai.assert.equal(e.a, 1, "Not correct values");
      });
      chai.assert.lengthOf(res, 2);
    });

    it('Return correct number of values', function () {
      var res = sb.filterBy(array, {"a": 2});
      res.forEach(function (e) {
        chai.assert.equal(e.a, 2, "Not correct values");
      });
      chai.assert.lengthOf(res, 1);
    });

    it('Return correct number of values', function () {
      var res = sb.filterBy(array, {"a": 3});
      res.forEach(function (e) {
        chai.assert.equal(e.a, 3, "Not correct values");
      });

      chai.assert.lengthOf(res, 0);
    });

    it('Return correct number of values', function () {
      var res = sb.filterBy(array, {
        "a": 1,
        "b": 3
      });

      res.forEach(function (e) {
        chai.assert.equal(e.a, 1, "Not correct values");
      });

      res.forEach(function (e) {
        chai.assert.equal(e.b, 3, "Not correct values");
      });

      chai.assert.lengthOf(res, 0);
    });
  });
});
