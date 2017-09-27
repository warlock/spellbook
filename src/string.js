const type = require('tck')

module.exports = {
  toInt: value => {
    if (type.isEmpty(value)) throw new Error('To int needs an string value.')
    else if (type.isString(value)) return parseInt(value,10)
    else throw new Error('toInt function has incompatible value.')
  },
  dos2unix: value => {
    if (type.isEmpty(value)) throw new Error('Dos2unix function needs an string value.')
    else if (type.isString(value)) return value.replace(/\r\n/g, '\n')
    else throw new Error('Dos2unix function has incompatible value.')
  },
  capitalize: value => {
    if (type.isEmpty(value)) throw new Error('Capitalize function needs an string value.')
    else if (type.isString(value)) return value.slice(0,1).toUpperCase() + value.slice(1)
    else throw new Error('Capitalize function has incompatible value.')
  },
  excerpt: (data, nwords) => {
    var words = data.split(' ')
    words.splice(nwords, words.length-1)
    return words.join(' ')
  },
  toJSON: value => {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.')
    else if (type.isString(value)) return JSON.parse(value)
    else throw new Error('toJSON function has incompatible value.')
  },
  json: value => {
    if (type.isEmpty(value)) throw new Error('toJSON function needs an string value.')
    else if (type.isString(value)) return JSON.parse(value)
    else throw new Error('toJSON function has incompatible value.')
  },
  split: (value, separator, limit) => {
    if (type.isEmpty(value)) throw new Error('Split function needs an string value.')
    else if (type.isString(value)) return value.split(separator, limit)
    else throw new Error('Split function has incompatible value.')
  },
  toLowerCase: value => {
    if (type.isEmpty(value)) throw new Error('toLowerCase function needs an string value.')
    else if (type.isString(value)) return value.toLowerCase()
    else throw new Error('toLowerCase function has incompatible value.')

  },
  toUpperCase: value => {
    if (type.isEmpty(value)) throw new Error('toUpperCase function needs an string value.')
    else if (type.isString(value)) return value.toUpperCase()
    else throw new Error('toUpperCase function has incompatible value.')
  },
  trim: value => {
    if (type.isEmpty(value)) throw new Error('trim function needs an string value.')
    else if (type.isString(value)) return value.trim()
    else throw new Error('trim function has incompatible value.')
  },
  replace: (value, oldregex, newstr) => {
    if (type.isEmpty(value) && type.isEmpty(newstr)) throw new Error('replace function needs an string value.')
    else if (type.isString(value) && type.isString(newstr)) return value.replace(oldregex, newstr)
    else throw new Error('replace function has incompatible value.')
  },
  pad: (chain, targetLength,padString) => {
    targetLength = targetLength>>0
    padString = String(padString || ' ')
    if (chain.length > targetLength) {
      return String(chain)
    } else {
      targetLength = targetLength-chain.length
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length)
      }
      return padString.slice(0,targetLength) + String(chain)
    }
  }
}
