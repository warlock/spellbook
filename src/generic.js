var type = require('./type');

module.exports = {

   /**
   * @param {Any} data : Data for stringify.
   * @returns {String} : Return stringify from Any.
   */
  'toString': function (data) {
    if (type.isEmpty(data)) throw new Error('toString function not contains value to parse.');
    else return JSON.stringify(data);
  },

   /**
   * @param {Array|String|Object} data : Data for check length.
   * @returns {Number} : Return data length.
   */
  'size': function (data) {
    if (type.isEmpty(data)) throw new Error('size function not contains values.');
    else {
      if (type.isArray(data) || type.isString(data)) return data.length;
      else if (type.isObject(data)) return Object.keys(data).length;
      else throw new Error('size function not contains compatible values.');
    }
  },
  'contains': function (data, value) {
    if (type.isArray(data) || type.isString(data)) return !!~data.indexOf(value);
    else if (type.isObject(data)) return !!~Object.keys(data).indexOf(value);
    else throw new Error('contains function not contains values.');
  },
  'reverse': function (data) {
    if (type.isArray(data)) return data.reverse();
    else if (type.isString(data)) return data.split('').reverse().join('');
    else throw new Error('Reverse function not contains array or string.');
  },
  'repeatify': function (value, num) {
    if (type.isEmpty(value)) throw new Error('repeatify function not have values.');
    else {
      var strArray = [];
      for (var i = 0; i < num; i++) strArray.push(value);
      return strArray;
    }
  },
  'concat': function (val, val1) {
    if (type.isEmpty(val) || type.isEmpty(val1)) throw new Error('concat function not have values.');
    else {
      if (type.isString(val) && type.isString(val)) return val + val1;
      else if (type.isArray(val) && type.isArray(val)) return val.concat(val1);
      else throw new Error('concat function not contains same values.');
    }
  },
  'return': function (x) {
    return x;
  }
};
