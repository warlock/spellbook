var type = require('./type');

module.exports = {
  'extend': function (obj, obj2) {
    for (var i in obj2) {
      if (obj2.hasOwnProperty(i)) obj[i] = obj2[i];
    }
    return obj;
  },
  'assign': function (obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) return obj;

    var temp = obj.constructor();
    for(var key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        obj.isActiveClone = null;
        temp[key] = obj[key];
        delete obj.isActiveClone;
      }
    }
    return temp;
  },
  'get': function (obj, route) {
    if (obj !== undefined && typeof route === "string") {
      route = route.split(".");
      if (route.length === 1 ) return obj[route[0]];
      else {
        for (var i = 0; i < route.length; i++) {
          if (obj[route[i]] !== undefined) obj = obj[route[i]];
          else return undefined;
        }
        return obj;
      }
    } else return undefined;
  },
  'keys': function (obj) {
    return Object.keys(obj);
  },
  'getKeys': function (obj, keys) {
    var nobj = {};
    if (type.isArray(keys)) {
      keys.forEach(function (key) {
        nobj[key] = obj[key];
      });
    } else nobj[keys] = obj[keys];
    return nobj;
  },
  'merge': function (obj, obj2) {
    var nobj = {};
    if (type.isObject(obj) && type.isObject(obj2)) {
      Object.keys(obj).forEach(function (key) {
        nobj[key] = obj[key];
      });
      Object.keys(obj2).forEach(function (key) {
        nobj[key] = obj2[key];
      });
      return nobj;
    } else throw new Error('Merge option need two objects for work');
  }
};
