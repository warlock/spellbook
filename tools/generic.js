var type = require('./type');

module.exports = {
  toString : function (value) {
    if (type.isEmpty(value)) throw new Error('Function not contains value to parse.');
    else return JSON.stringify(value);
  }
}
