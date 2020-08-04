module.exports = {
  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return true if value is true.
   */
  isTrue: bool => bool === true,
  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return true if value is false.
   */
  isFalse: bool => bool === false,
  /**
   * @param {Any} value : Get any value.
   * @param {Any} check : Get any value.
   * @returns {Boolean} : Return result of comparision.
   */
  isEqual: (value, check) => JSON.stringify(value) === JSON.stringify(check),
  /**
   * @param {Boolean} bool : Get de boolean value.
   * @returns {Boolean} : Return reverse boolean.
   */
  not: bool => bool === false,
  /**
   * @param {Boolean} bool : Get de boolean value.
   * @param {Boolean} bool2 : Get de boolean value.
   * @returns {Boolean} : Return comparation boolean.
   */
  and: (bool, bool2) => {
    if (bool && bool2) return true
    return false
  }
}
