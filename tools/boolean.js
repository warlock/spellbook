module.exports = {
  'isTrue': function (data) {
    return data === true;
  },
  'isFalse': function (value) {
    return value === false;
  },
  'isEqual': function (value, check) {
    return value === check;
  },
  'Not': function (value) {
    return !value;
  }
};
