var type = require('./type');

module.exports = {
  toInt : function (value) {
    if (type.isEmpty(value)) throw new Error('To int needs a string value.');
    if (type.isString(value)) return parseInt(value)
    else throw new Error('toInt function has incompatible value.');
  },
  dos2unix : function (data) {
    if (type.isEmpty(value)) throw new Error('Dos2unix function needs a string value.');
    if (type.isString(value)) return data.replace(/\r\n/g, '\n');
    else throw new Error('Dos2unix function has incompatible value.');
  },
  capitalize : function (data) {
    if (type.isEmpty(value)) throw new Error('Capitalize function needs a string value.');
    if (type.isString(value)) return data.slice(0,1).toUpperCase() + data.slice(1);
    else throw new Error('Capitalize function has incompatible value.');
  },
  excerpt : function (str, nwords) {
    var words = str.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ');
  },
  toJSON : function (str) {
    return JSON.parse(str);
  },
  json : function (str) {
    return JSON.parse(str);
  }
}
