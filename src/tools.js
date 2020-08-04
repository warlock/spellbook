const type = require('tck')

module.exports = {
  range: (a, b, step) => {
    var A = []
    if (type.isEmpty(a) || type.isEmpty(b)) return []
    if (typeof a !== typeof b) return []
    else {
      if (type.isNumber(a)) {
        A[0] = a
        step = step || 1
        while (a + step <= b) A[A.length] = a += step
      } else {
        var s = 'abcdefghijklmnopqrstuvwxyz'
        if (a === a.toUpperCase()) {
          b = b.toUpperCase()
          s = s.toUpperCase()
        }
        s = s.substring(s.indexOf(a), s.indexOf(b) + 1)
        A = s.split('')
      }
      return A
    }
  },
  random: (min, max) => {
    if (type.isNumber(min) && type.isNumber(max)) return Math.floor(Math.random() * (max - min)) + min
    else {
      if (!type.isArray(min)) return 0
      const index = Math.floor(Math.random() * min.length)
      return min[index]
    }
  },
  ifElse: (condition, funcTrue, funcFalse) => {
    if (condition) return funcTrue()
    return funcFalse()
  },
  function: (data, callback) => callback(data)
}
