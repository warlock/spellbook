var type = require('./type');

module.exports = {
  duplicate : function (value) {
      if (type.isNumber(value)) return value * 2;
      else throw new Error('Duplicate function needs a number.');
  }
}
