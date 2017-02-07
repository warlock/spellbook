var type = require('./type');

module.exports = {
  toInt : function (value) {
    if (type.isEmpty(value)) throw new Error('To int needs a string value.');
    if (type.isString(value)) return parseInt(value)
    else throw new Error('toInt function has incompatible value.');
  },
  dos2unix : function (value) {
    if (type.isEmpty(value)) throw new Error('Dos2unix function needs a string value.');
    if (type.isString(value)) return value.replace(/\r\n/g, '\n');
    else throw new Error('Dos2unix function has incompatible value.');
  },
  capitalize : function (value) {
    if (type.isEmpty(value)) throw new Error('Capitalize function needs a string value.');
    if (type.isString(value)) return value.slice(0,1).toUpperCase() + value.slice(1);
    else throw new Error('Capitalize function has incompatible value.');
  },
  excerpt : function (value, nwords) {
    var words = value.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ');
  },
  toJSON : function (value) {
    return JSON.parse(value);
  },
  json : function (value) {
    return JSON.parse(value);
  },
  split : function (value, separator, limit) {
    return value.split(separator, limit)
  }
}
