const type = require('tck')

module.exports = {
  /**
   * @param {Number} value  : numer to process.
   * @returns {Number} : Return value duplicated.
   */
  duplicate: value => {
    if (type.isNumber(value)) return value * 2
    else throw new Error('Duplicate function needs a number.')
  },
  min: value => {
    if (type.isArray(value)) {
      var checknum = true
      value.forEach(num => {
        if (checknum && !type.isNumber(num)) checknum = false
      })
      if (checknum) return Math.min.apply(Math, value)
      else throw new Error('Min funciton needs an array of numbers.')
    }
    throw new Error('Min funciton needs an array.')
  },
  max: value => {
    if (type.isArray(value)) {
      var checknum = true
      value.forEach(num => {
        if (checknum && !type.isNumber(num)) checknum = false
      })
      if (checknum) return Math.max.apply(Math, value)
      else throw new Error('Min funciton needs an array of numbers.')
    }
    throw new Error('Min funciton needs an array.')
  },
  sum: (value, number) => {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value + number
    }
    throw new Error('Sum function only can operate with numbers.')
  },
  divide: (value, number) => {
    if (type.isNumber(value) && type.isNumber(number)) {
      return value / number
    }
    throw new Error('Divide function only can operate with numbers.')
  },
  mult: (value, number) => {
    if (type.isNumber(value) && type.isNumber(number)) {
      return number * value
    }
    throw new Error('Mult function only can operate with numbers.')
  },
  ceil: value => {
    if (type.isNumber(value)) {
      return Math.ceil(value)
    }
    throw new Error('ceil function only can operate with numbers.')
  },
  round: value => {
    if (type.isNumber(value)) {
      return Math.round(value)
    }
    throw new Error('round function only can operate with numbers.')
  },
  floor: value => {
    if (type.isNumber(value)) {
      return Math.floor(value)
    }
    throw new Error('floor function only can operate with numbers.')
  },
  trunc: value => {
    if (type.isNumber(value)) {
      return Math.trunc(value)
    }
    throw new Error('floor function only can operate with numbers.')
  }
}
