const type = require('tck')

module.exports = {

  /**
   * @param {Any} data : Data for stringify.
   * @returns {String} : Return stringify from Any.
   */
  toString: data => {
    if (type.isEmpty(data)) throw new Error('toString function not contains value to parse.')
    else return JSON.stringify(data)
  },

  /**
   * @param {Array|String|Object} data : Data for check length.
   * @returns {Number} : Return data length.
   */
  size: data => {
    if (type.isEmpty(data)) throw new Error('size function not contains values.')
    else {
      if (type.isArray(data) || type.isString(data)) return data.length
      else if (type.isObject(data)) return Object.keys(data).length
      else throw new Error('size function not contains compatible values.')
    }
  },

  /**
   * @param {Array|String|Object} data : Data container
   * @param {String} value : Value for search in data.
   * @returns {Boolean} : Return true or false if data contains a value.
   */
  contains: (data, value) => {
    if (type.isArray(data) || type.isString(data)) return !!~data.indexOf(value)
    else if (type.isObject(data)) return !!~Object.keys(data).indexOf(value)
    else throw new Error('contains function not contains values.')
  },

  /**
   * @param {Array|String} data : Array or String for process
   * @returns {Array|String} : Return data in reverse order.
   */
  reverse: data => {
    if (type.isArray(data)) return data.reverse()
    else if (type.isString(data)) return data.split('').reverse().join('')
    else throw new Error('Reverse function not contains array or string.')
  },

  /**
   * @param {Any} data : Data for process
   * @param {Number} num : Number of elements in array.
   * @returns {Array} : Return array with data repeated.
   */
  repeatify: (data, num) => {
    if (type.isEmpty(data)) throw new Error('repeatify function not have data for repeat.')
    else if (type.isEmpty(num) || !type.isNumber(num)) throw new Error('repeatify function not have a number for repeat.')
    else {
      var strArray = []
      for (let i = 0; i < num; i++) strArray.push(data)
      return strArray
    }
  },

  /**
   * @param {String|Array} val : Data for concatenate
   * @param {String|Array} val1 : Data for concatenate
   * @returns {String|Array} : Return concatenate data
   */
  concat: (val, val1) => {
    if (type.isEmpty(val) || type.isEmpty(val1)) throw new Error('concat function not have values.')
    else {
      if (type.isString(val) && type.isString(val)) return val + val1
      else if (type.isArray(val) && type.isArray(val)) return val.concat(val1)
      else throw new Error('concat function not contains same values.')
    }
  },

  /**
   * @param {Any} data : Date for return
   * @returns {Any} : Return any data passed for param.
   */
  return: data => {
    return data
  }
}
