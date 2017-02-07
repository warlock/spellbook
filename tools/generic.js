var type = require('./type');

module.exports = {
  toString : function (value) {
    if (type.isEmpty(value)) throw new Error('Function not contains value to parse.');
    else return JSON.stringify(value);
  },
  size : function (value) {
    if (type.isEmpty(value)) throw new Error('Size function not contains values.');
    else {
      if (type.isArray(value) || type.isString(value)) return value.length
      else if (type.isObject(value)) return Object.keys(value).length
      else throw new Error('Size function not contains compatible values.');
    }
  },
  contains : function (data, value) {
    if (type.isArray(data) || type.isString(data)) return !!~data.indexOf(value);
    else if (type.isObject(data)) return !!~Object.keys(data).indexOf(value);
    else throw new Error('inArray function not contains array.');
  }
}
