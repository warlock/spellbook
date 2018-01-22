const type = require('tck')

module.exports = {
  extend: (obj, obj2) => {
    for (let i in obj2) {
      if (obj2.hasOwnProperty(i)) obj[i] = obj2[i]
    }
    return obj
  },
  assign: obj => {
    if(type.isNull(obj) || !type.isObject(obj) || 'isActiveClone' in obj) return obj

    var temp = obj.constructor()
    for (let key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        obj.isActiveClone = null
        temp[key] = obj[key]
        delete obj.isActiveClone
      }
    }
    return temp
  },
  get: (obj, route) => {
    if (!type.isEmpty(obj) && type.isString(route)) {
      route = route.split(".")
      if (route.length === 1 ) return obj[route[0]]
      else {
        for (let i = 0; i < route.length; i++) {
          if (!type.isEmpty(obj[route[i]])) obj = obj[route[i]]
          else return undefined
        }
        return obj
      }
    } else return undefined
  },
  keys: obj => {
    return Object.keys(obj)
  },
  getKeys: (obj, keys) => {
    var nobj = {}
    if (type.isArray(keys)) {
      keys.forEach(key => {
        nobj[key] = obj[key]
      })
    } else nobj[keys] = obj[keys]
    return nobj
  },
  merge: (obj, obj2) => {
    var nobj = {}
    if (type.isObject(obj) && type.isObject(obj2)) {
      Object.keys(obj).forEach(key => {
        nobj[key] = obj[key]
      })
      Object.keys(obj2).forEach(key => {
        nobj[key] = obj2[key]
      })
      return nobj
    } else throw new Error('Merge option need two objects for work')
  }
}
