var type = require('tck');
var object = require('./object');

module.exports = {

  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Return shuffled array
   */
  'shuffle': function (array) {
    if (type.isArray(array)) {
      var arrnew = object.assign(array);
      for (var i = arrnew.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = arrnew[randomIndex];
        arrnew[randomIndex] = arrnew[i];
        arrnew[i] = itemAtIndex;
      }
      return arrnew;
    } else throw new Error('Shuffle function not contains array.');
  },

  /**
   * @param {Array} array  : Array to process.
   * @returns {Any} : Return first array element.
   */
  'first': function (array) {
    if (type.isArray(array)) return array[0];
    else throw new Error('first function not contains array.');
  },

  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Return last array element.
   */
  'last': function (array) {
    if (type.isArray(array)) return array[array.length - 1];
    else throw new Error('Last function not contains array.');
  },

  /**
   * @param {Array} array : Array to process.
   * @param {Any} obj : any to remove of array.
   * @returns {Array} : Return array without element.
   */
  'remove': function (array, obj) {
    var newarr = object.assign(array);
    function filter(newarr, obj) {
      return newarr.filter(function (e) {
        if (JSON.stringify(e) !== JSON.stringify(obj)) return e;
      });
    }
    if (type.isArray(obj)) {
      obj.forEach(function (e) {
        newarr = filter(newarr, e);
      });
      return newarr;
    } else return filter(newarr, obj);
  },


  /**
   * @param {Array} array : Array to process.
   * @returns {Array} : Returns a empty array.
   */
  'clear': function (array) {
    var newarr = object.assign(array);
    if (type.isArray(newarr)) return newarr.splice(newarr.length,0);
    else throw new Error('clear function not contains array.');
  },

  /**
   * @param {Array} array : Array to process.
   * @param {Any} value : Any to find in array.
   * @returns {Boolean} : Returns true or false if contains value.
   */
  'inArray': function (array, value) {
    if (type.isArray(array)) return !!~array.indexOf(value);
    else throw new Error('inArray function not contains array.');
  },

  /**
   * @param {Array} array  : Array to process.
   * @param {String|Number} key  : Key operator for filter data.
   * @returns {Array} : Return procesed array.
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
   * @param {Array} array  : array to process.
   * @returns {Array} : Return no duplicated values.
   */
  'uniq': function (array) {
    var newarr = [];
    var contains = function(array, value) {
      for(var i = 0; i < array.length; i++) {
        if(JSON.stringify(array[i]) === JSON.stringify(value)) return true;
      }
      return false;
    };

    for(var i = 0; i < array.length; i++) {
      if(!contains(newarr, array[i])) newarr.push(array[i]);
    }
    return newarr;
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} func : function to filter array.
   * @returns {Array} : Return filtered values.
   */
  'filter': function (array, func) {
    if (type.isEmpty(array)) throw new Error('filter function not contains array.');
    else if (type.isEmpty(func) && typeof obj !== 'function') throw new Error('Find in array need a object.');
    else return array.filter(func);
  },

  /**
   * @param {Array} array : array to process.
   * @param {Object} obj : object to filter array.
   * @returns {Array} : Return filtered values.
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
   * @param {Array} array : array to process.
   * @param {Function} callback : function to map array.
   * @returns {Array} : Return altered array.
   */
  'map': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.map(callback);
      } else throw new Error('map function not contains callback.');
    } else throw new Error('map function not contains array.');
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback : function to reduce array.
   * @returns {Array} : Return array from operation result.
   */
  'reduce': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.reduce(callback);
      } else return array.sort(array);
    } else throw new Error('reduce function not contains array.');
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback : function to forEach array.
   * @returns {undefined}
   */
  'forEach': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        array.forEach(callback);
      } else return array.sort(array);
    } else throw new Error('forEach function not contains array.');
  },

  /**
   * @param {Array} array : array to process.
   * @param {Function} callback  : function condition for sort.
   * @returns {Array} : Return array sorted by condition.
   */
  'sort': function (array, callback) {
    if (type.isArray(array)) {
      if (type.isFunction(callback)) {
        return array.sort(callback);
      } else return array.sort(array);
    } else throw new Error('sort function not contains array.');
  }
};
