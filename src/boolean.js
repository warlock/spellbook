module.exports = {

  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return true if value is true.
   */
  'isTrue': function (bool) {
    return bool === true;
  },

  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return true if value is false.
   */
  'isFalse': function (bool) {
    return bool === false;
  },

  /**
   * @param {Any} value : Get any value.
   * @param {Any} check : Get any value.
   * @returns {Boolean} : Return result of comparision.
   */
  'isEqual': function (value, check) {
    return JSON.stringify(value) === JSON.stringify(check);
  },

  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return negative value.
   */
  'Not': function (bool) {
    return bool === false;
  },
  'and': function (bool, data) {
    if (bool && data) return true;
    else return false;
  }
};
