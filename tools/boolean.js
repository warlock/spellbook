module.exports = {
  'isTrue': function (data) {
    return data === true;
  },
  'isFalse': function (value) {
    return value === false;
  },
  'isEqual': function (value, check) {
    return JSON.stringify(value) === JSON.stringify(check);
  },
  'Not': function (value) {
    return !value;
  }
};
