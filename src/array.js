var type = require('./type');

module.exports = {
  /**
   * @param array {Array} : array to process.
   *
   * @return {Array}
   */
  'shuffle': function (array) {
    if (type.isArray(array)) {
      for (var i = array.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = itemAtIndex;
      }
      return array;
    } else throw new Error('Shuffle function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   *
   * @return {Array}
   */
  'first': function (array) {
    if (type.isArray(array)) return array[0];
    else throw new Error('first function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   *
   * @return {Array}
   */
  'last': function (array) {
    if (type.isArray(array)) return array[array.length - 1];
    else throw new Error('Last function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param obj {Any} : any to remove of array.
   *
   * @return {Array}
   */
  'remove': function (array, obj) {
    function filter(array, obj) {
      return array.filter(function (e) {
        if (JSON.stringify(e) !== JSON.stringify(obj)) return e;
      });
    }
    if (type.isArray(obj)) {
      obj.forEach(function (e) {
        array = filter(array, e);
      });
      return array;
    } else return filter(array, obj);

  },
  /**
   * @param array {Array} : array to process.
   *
   * @return {Array}
   */
  'clear': function (array) {
    if (type.isArray(array)) return array.splice(array.length,0);
    else throw new Error('clear function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param key {Any} : any to find in array.
   *
   * @return {Array}
   */
  'inArray': function (array, value) {
    if (type.isArray(array)) return !!~array.indexOf(value);
    else throw new Error('inArray function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param key {String|Number} : .
   *
   * @return {Array}
   */
  'uniqBy': function (array, key) {
    if (type.isArray(array)) {
      var narray = [];
      var keys = {};
      for (var i = 0; i < array.length; i++) {
        if(keys[array[i][key]] === undefined && array[i][key] !== undefined) {
          narray.push(array[i][key]);
          keys[array[i][key]] = 1;
        }
      }
      return narray;
    } else throw new Error('uniq function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param data {Array|Object|String|Number} : .
   *
   * @return {Array}
   */
  'uniq': function (array, data) {
    var arr = [];
    var contains = function(array, value) {
      for(var i = 0; i < array.length; i++) {
        if(JSON.stringify(array[i]) === JSON.stringify(value)) return true;
      }
      return false;
    };

    for(var i = 0; i < array.length; i++) {
      if(!contains(arr, data[i])) arr.push(data[i]);
    }
    return arr;
  },
  /**
   * @param array {Array} : array to process.
   * @param func {Function} : function to filter array.
   *
   * @return {Array}
   */
  'filter': function (array, func) {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.');
    else if (type.isEmpty(func) && typeof obj !== 'function') throw new Error('Find in array need a object.');
    else return array.filter(func);
  },
  /**
   * @param array {Array} : array to process.
   * @param obj {Object} : object to filter array.
   *
   * @return {Array}
   */
  'filterBy': function (array, obj) {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.');
    else if (type.isEmpty(obj) && typeof obj !== 'object') throw new Error('Find in array need a object.');
    else {
      var keys = Object.keys(obj);
      return array.filter(function (e) {
        var chck = true;
        keys.forEach(function (k) {
          if (typeof e[k] === 'string') {
            if(e[k].indexOf(obj[k]) < 0) chck = false;
          } else {
            if(e[k] !== obj[k]) chck = false;
          }
        });
        return chck;
      });
    }
  },
  /**
   * @param array {Array} : array to process.
   * @param callback {Function} : function to map array.
   *
   * @return {Array}
   */
  'map': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.map(callback);
      } else throw new Error('map function not contains callback.');
    } else throw new Error('map function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param callback {Function} : function to reduce array.
   *
   * @return {Array}
   */
  'reduce': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.reduce(callback);
      } else return array.sort(array);
    } else throw new Error('reduce function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param callback {Function} : function to forEach array.
   *
   * @return {Array}
   */
  'forEach': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        array.forEach(callback);
      } else return array.sort(array);
    } else throw new Error('forEach function not contains array.');
  },
  /**
   * @param array {Array} : array to process.
   * @param callback {Function} : function with sort.
   *
   * @return {Array}
   */
  'sort': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.sort(callback);
      } else return array.sort(array);
    } else throw new Error('sort function not contains array.');
  }
};
