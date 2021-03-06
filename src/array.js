const type = require('tck')
const object = require('./object')

module.exports = {
  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Return shuffled array
   */
  shuffle: array => {
    if (type.isArray(array)) {
      const newarray = Object.assign([], array)
      return newarray.sort((a, b) => 0.5 - Math.random())
    }
    throw new Error('Shuffle function not contains array.')
  },

  /**
   * @param {Array} array  : Array to process.
   * @returns {Any} : Return first array element.
   */
  first: array => {
    if (type.isArray(array)) return array[0]
    throw new Error('first function not contains array.')
  },

  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Return last array element.
   */
  last: array => {
    if (type.isArray(array)) return array[array.length - 1]
    throw new Error('Last function not contains array.')
  },

  /**
   * @param {Array} array : Array to process.
   * @param {Any} obj : any to remove of array.
   * @returns {Array} : Return array without element.
   */
  remove: (array, obj) => {
    var newarr = object.assign(array)
    const filter = (newarr, obj) => {
      return newarr.filter(e => {
        if (JSON.stringify(e) !== JSON.stringify(obj)) return e
      })
    }
    if (type.isArray(obj)) {
      obj.forEach(e => (newarr = filter(newarr, e)))
      return newarr
    }
    return filter(newarr, obj)
  },

  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Returns a empty array.
   */
  clear: array => {
    const newarr = object.assign(array)
    if (type.isArray(newarr)) return newarr.splice(newarr.length, 0)
    throw new Error('clear function not contains array.')
  },

  /**
   * @param {Array} array : Array to process.
   * @param {Any} value : Any to find in array.
   * @returns {Boolean} : Returns true or false if contains value.
   */
  inArray: (array, value) => {
    if (type.isArray(array)) return !!~array.indexOf(value)
    throw new Error('inArray function not contains array.')
  },

  /**
   * @param {Array} array  : Array to process.
   * @param {String|Number} key  : Key operator for filter data.
   * @returns {Array} : Return procesed array.
   */
  uniqBy: (array, key) => {
    if (type.isArray(array)) {
      var narray = []
      var keys = {}
      for (let i = 0; i < array.length; i++) {
        if (keys[array[i][key]] === undefined && array[i][key] !== undefined) {
          narray.push(array[i][key])
          keys[array[i][key]] = 1
        }
      }
      return narray
    }
    throw new Error('uniq function not contains array.')
  },

  /**
   * @param {Array} array  : array to process.
   * @returns {Array} : Return no duplicated values.
   */
  uniq: array => {
    var newarr = []
    const contains = (array, value) => {
      for (let i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) === JSON.stringify(value)) return true
      }
      return false
    }

    for (let i = 0; i < array.length; i++) {
      if (!contains(newarr, array[i])) newarr.push(array[i])
    }
    return newarr
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} func : function to filter array.
   * @returns {Array} : Return filtered values.
   */
  filter: (array, func) => {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.')
    else if (type.isEmpty(func) || !type.isFunction(func)) throw new Error('Find in array need a function.')
    return array.filter(func)
  },

  /**
   * @param {Array} array : array to process.
   * @param {Object} obj : object to filter array.
   * @returns {Array} : Return filtered values.
   */
  filterBy: (array, obj) => {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.')
    else if (type.isEmpty(obj) && typeof obj !== 'object') throw new Error('Find in array need a object.')
    const keys = Object.keys(obj)
    return array.filter(e => {
      var chck = true
      keys.forEach(k => {
        if (typeof e[k] === 'string') {
          if (e[k].indexOf(obj[k]) < 0) chck = false
        } else {
          if (e[k] !== obj[k]) chck = false
        }
      })
      return chck
    })
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback : function to map array.
   * @returns {Array} : Return altered array.
   */
  map: (array, callback) => {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) return array.map(callback)
      throw new Error('map function not contains callback function.')
    }
    throw new Error('map function not contains array.')
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback : function to reduce array.
   * @returns {Array} : Return array from operation result.
   */
  reduce: (array, callback) => {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) return array.reduce(callback)
      throw new Error('map function not contains callback function.')
    }
    throw new Error('reduce function not contains array.')
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback : function to forEach array.
   * @returns {undefined}
   */
  forEach: (array, callback) => {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) array.forEach(callback)
      throw new Error('forEach function not contains callback function.')
    }
    throw new Error('forEach function not contains array.')
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback  : function condition for sort.
   * @returns {Array} : Return array sorted by condition.
   */
  sort: (array, callback) => {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) return array.sort(callback)
      return array.sort()
    }
    throw new Error('sort function not contains array.')
  },

  /**
   * @param {Array} array : array to process.
   * @param {Number} size : Chunk size
   * @returns {Array} : Return new array
   */
  chunk: (array, size) => {
    var newArray = []
    for (var i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size))
    }
    return newArray
  }
}
