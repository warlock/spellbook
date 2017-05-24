var type = require('./type');

module.exports = {
  'range': function (a, b, step) {
    var A = [];
    if (type.isEmpty(a) || type.isEmpty(b)) return [];
    if (typeof a !== typeof b) return [];
    else {
      if (type.isNumber(a)) {
        A[0] = a;
        step = step || 1;
        while (a+step<= b) A[A.length] = a += step;
      } else {
        var s = 'abcdefghijklmnopqrstuvwxyz';
        if (a === a.toUpperCase()) {
          b = b.toUpperCase();
          s = s.toUpperCase();
        }
        s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A = s.split('');
      }
      return A;
    }
  },
  'random': function (min, max) {
    if (type.isNumber(min) && type.isNumber(max)) return Math.floor(Math.random() * (max - min)) + min;
    else {
      if(!type.isArray(min)) return 0;
      else {
        var index = Math.floor(Math.random() * (min.length));
        return min[index];
      }
    }
  },
  'ifElse': function (condition, funcTrue, funcFalse) {
    if (condition) return funcTrue();
    else return funcFalse();
  },
  'function': function (data, callback) {
    return callback(data);
  }
};
