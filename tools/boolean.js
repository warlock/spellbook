module.exports = {
  'isTrue': function (data) {
    return value === true;
  },
  'isFalse': function (value) {
    return value === false;
  },
  'eq' : function (value, check) {
    return value === check;
  },
  'isEqual' : function (value, check) {
    return value === check;
  }
};
