var type = require('./type');

module.exports = {
  'toInt': function (value) {
    if (type.isEmpty(value)) throw new Error('To int needs an string value.');
    else if (type.isString(value)) return parseInt(value,10);
    else throw new Error('toInt function has incompatible value.');
  },
  'dos2unix': function (value) {
    if (type.isEmpty(value)) throw new Error('Dos2unix function needs an string value.');
    else if (type.isString(value)) return value.replace(/\r\n/g, '\n');
    else throw new Error('Dos2unix function has incompatible value.');
  },
  'capitalize': function (value) {
    if (type.isEmpty(value)) throw new Error('Capitalize function needs an string value.');
    else if (type.isString(value)) return value.slice(0,1).toUpperCase() + value.slice(1);
    else throw new Error('Capitalize function has incompatible value.');
  },
  'excerpt': function (data, nwords) {
    var words = data.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ');
  },
  'toJSON': function (value) {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.');
    else if (type.isString(value)) return JSON.parse(value);
    else throw new Error('toJSON function has incompatible value.');
  },
  'json': function (value) {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.');
    else if (type.isString(value)) return JSON.parse(value);
    else throw new Error('toJSON function has incompatible value.');
  },
  'split': function (value, separator, limit) {
    if (type.isEmpty(value)) throw new Error('Split function needs an string value.');
    else if (type.isString(value)) return value.split(separator, limit);
    else throw new Error('Split function has incompatible value.');
  },
  'toLowerCase': function (value) {
    if (type.isEmpty(value)) throw new Error('toLowerCase function needs an string value.');
    else if (type.isString(value)) return value.toLowerCase();
    else throw new Error('toLowerCase function has incompatible value.');

  },
  'toUpperCase': function (value) {
    if (type.isEmpty(value)) throw new Error('toUpperCase function needs an string value.');
    else if (type.isString(value)) return value.toUpperCase();
    else throw new Error('toUpperCase function has incompatible value.');
  },
  'trim': function (value) {
    if (type.isEmpty(value)) throw new Error('trim function needs an string value.');
    else if (type.isString(value)) return value.trim();
    else throw new Error('trim function has incompatible value.');
  },
  'replace': function (value, oldstr, newstr) {
    if ((type.isEmpty(value) || type.isEmpty(oldstr)) && type.isEmpty(oldstr)) throw new Error('replace function needs an string value.');
    else if ((type.isString(value) || type.isString(oldstr)) && type.isString(oldstr)) return value.replace(oldstr, newstr);
    else throw new Error('replace function has incompatible value.');
  }
};
