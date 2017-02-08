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
      else throw new Error('Min funciton needs a array of numbers.');
    } else throw new Error('Min funciton needs a array.');
  },
  'max': function (value) {
    if (type.isArray(value)) {
      var checknum = true;
      value.forEach(function (num) {
        if (checknum && !type.isNumber(num)) checknum = false;
      });
      if (checknum) return Math.max.apply(Math, value);
      else throw new Error('Min funciton needs a array of numbers.');
    } else throw new Error('Min funciton needs a array.');
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
  }
};
