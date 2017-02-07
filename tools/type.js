module.exports = {
  isFunction: function (fn) {
    return typeof fn === 'function';
  },
  isArray: function (obj) {
    return typeof obj === "object" && obj instanceof Array;
  },
  isObject: function (obj) {
    return typeof obj === "object" && (this.isArray(obj) === false);
  },
  isNumber: function (obj) {
    return typeof obj === "number" || obj instanceof Number;
  },
  isString: function (obj ) {
    return typeof obj === "string" || obj instanceof String;
  },
  isBoolean: function (obj) {
    return typeof obj === "boolean";
  },
  isInteger: function (obj) {
    if (this.isNumber(obj)) return obj % 1 === 0;
    else return false;
  },
  isEmpty : function (data) {
    return (data === null || data === "" || data === undefined);
  }
}
