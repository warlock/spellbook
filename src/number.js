var type = require('./type');

module.exports = {
  'duplicate': function (value) {
    if (type.isNumber(value)) return value * 2;
    else throw new Error('Duplicate function needs a number.');
  },
  'min': function (value) {
    if (type.isArray(value)) {
      var checknum = true;
      value.forEach(function (num) {
        if (checknum && !type.isNumber(num)) checknum = false;
      });
      if (checknum) return Math.min.apply(Math, value);
      else throw new Error('Min funciton needs an array of numbers.');
    } else throw new Error('Min funciton needs an array.');
  },
  'max': function (value) {
    if (type.isArray(value)) {
      var checknum = true;
      value.forEach(function (num) {
        if (checknum && !type.isNumber(num)) checknum = false;
      });
      if (checknum) return Math.max.apply(Math, value);
      else throw new Error('Min funciton needs an array of numbers.');
    } else throw new Error('Min funciton needs an array.');
  },
  'sum': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value + number;
    } else throw new Error('Sum function only can operate with numbers.');
  },
  'divide': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value / number;
    } else throw new Error('Divide function only can operate with numbers.');
  },
  'mult': function (value, number) {
    if (type.isNumber(value) && type.isNumber(number)) {
      return number * value;
    } else throw new Error('Mult function only can operate with numbers.');
  },
  'ceil': function (value) {
    if (type.isNumber(value)) {
      return Math.ceil(value);
    } else throw new Error('ceil function only can operate with numbers.');
  },
  'round': function (value) {
    if (type.isNumber(value)) {
      return Math.round(value);
    } else throw new Error('round function only can operate with numbers.');
  },
  'floor': function (value) {
    if (type.isNumber(value)) {
      return Math.floor(value);
    } else throw new Error('floor function only can operate with numbers.');
  },
  'trunc': function (value) {
    if (type.isNumber(value)) {
      return Math.trunc(value);
    } else throw new Error('floor function only can operate with numbers.');
  }
};
