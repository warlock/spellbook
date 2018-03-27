const type = require('tck')
const events = require('eem')
const tools = require('./tools')
const array = require('./array')
const object = require('./object')
const string = require('./string')
const number = require('./number')
const boolean = require('./boolean')
const generic = require('./generic')

module.exports = class {
  constructor(data) {
    if (type.isEmpty(data)) throw new Error('Chain function not contains values.')
    else {
      this.data = data
    }
  }

  //TOOLS
  ifElse (funcTrue, funcFalse) {
    this.data = tools.ifElse(this.data, funcTrue, funcFalse)
    return this
  }

  function (callback) {
    this.data = tools.function(this.data, callback)
    return this
  }

  //STRING
  toInt () {
    this.data = string.toInt(this.data)
    return this
  }

  excerpt () {
    this.data = string.excerpt(this.data)
    return this
  }

  dos2unix () {
    this.data = string.dos2unix(this.data)
    return this
  }

  capitalize () {
    this.data = string.capitalize(this.data)
    return this
  }

  toJSON () {
    this.data = string.toJSON(this.data)
    return this
  }

  json () {
    this.data = string.json(this.data)
    return this
  }

  split (separator, limit) {
    this.data = string.split(this.data, separator, limit)
    return this
  }

  toLowerCase () {
    this.data = string.toLowerCase(this.data)
    return this
  }

  toUpperCase () {
    this.data = string.toUpperCase(this.data)
    return this
  }

  trim () {
    this.data = string.trim(this.data)
    return this
  }

  replace (oldstr, newstr) {
    this.data = string.replace(this.data, oldstr, newstr)
    return this
  }

  pad (target, pad) {
    this.data = string.pad(this.data, target, pad)
    return this
  }

  //NUMBER
  duplicate () {
    this.data = number.duplicate(this.data)
    return this
  }

  min () {
    this.data = number.min(this.data)
    return this
  }

  max () {
    this.data = number.max(this.data)
    return this
  }

  sum (value) {
    this.data = number.sum(this.data, value)
    return this
  }

  mult (value) {
    this.data = number.mult(this.data, value)
    return this
  }

  divide (value) {
    this.data = number.divide(this.data, value)
    return this
  }

  numerator (value) {
    this.data = number.divide(value, this.data)
    return this
  }

  ceil () {
    this.data = number.ceil(this.data)
    return this
  }

  round () {
    this.data = number.round(this.data)
    return this
  }

  floor () {
    this.data = number.floor(this.data)
    return this
  }

  trunc () {
    this.data = number.trunc(this.data)
    return this
  }

  //GENERIC
  toString () {
    this.data = generic.toString(this.data)
    return this
  }

  size () {
    this.data = generic.size(this.data)
    return this
  }

  contains (value) {
    this.data = generic.contains(this.data, value)
    return this
  }

  reverse () {
    this.data = generic.reverse(this.data)
    return this
  }

  repeatify (num) {
    this.data = generic.repeatify(this.data, num)
    return this
  }

  concat (val) {
    this.data = generic.concat(this.data, val)
    return this
  }

  //TYPE
  isFunction () {
    this.data = type.isFunction(this.data)
    return this
  }

  isArray () {
    this.data = type.isArray(this.data)
    return this
  }

  isObject () {
    this.data = type.isObject(this.data)
    return this
  }

  isNumber () {
    this.data = type.isNumber(this.data)
    return this
  }

  isString () {
    this.data = type.isString(this.data)
    return this
  }

  isBoolean () {
    this.data = type.isBoolean(this.data)
    return this
  }

  isInteger () {
    this.data = type.isInteger(this.data)
    return this
  }

  isEmpty () {
    this.data = type.isEmpty(this.data)
    return this
  }

  isSet () {
    this.data = type.isSet(this.data)
    return this
  }

  empty () {
    this.data = type.isEmpty(this.data)
    return this
  }

  isNull () {
    this.data = type.isNull(this.data)
    return this
  }

  isNaN () {
    this.data = type.isNaN(this.data)
    return this
  }

  isUndefined () {
    this.data = type.isUndefined(this.data)
    return this
  }

  //ARRAY
  shuffle () {
    this.data = array.shuffle(this.data)
    return this
  }

  first () {
    this.data = array.first(this.data)
    return this
  }

  last () {
    this.data = array.last(this.data)
    return this
  }

  remove (object) {
    this.data = array.remove(this.data, object)
    return this
  }

  clear () {
    this.data = array.clear(this.data)
    return this
  }

  inArray (object) {
    this.data = array.inArray(this.data, object)
    return this
  }

  unq () {
    this.data = array.uniq(this.data)
    return this
  }

  uniq () {
    this.data = array.uniq(this.data)
    return this
  }

  uniqBy (object) {
    this.data = array.uniq(this.data, object)
    return this
  }

  filter (func) {
    this.data = array.filter(this.data, func)
    return this
  }

  filterBy (object) {
    this.data = array.filterBy(this.data, object)
    return this
  }

  map (callback) {
    this.data = array.map(this.data, callback)
    return this
  }

  reduce (callback) {
    this.data = array.reduce(this.data, callback)
    return this
  }

  sort (callback) {
    this.data = array.sort(this.data, callback)
    return this
  }

  chunk (callback) {
    this.data = array.chunk(this.data, callback)
    return this
  }

  forEach (callback) {
    array.forEach(this.data, callback)
  }

  //OBJECT
  extend (obj) {
    this.data = object.extend(this.data, obj)
    return this
  }

  get (route) {
    this.data = object.get(this.data, route)
    return this
  }

  keys () {
    this.data = object.keys(this.data)
    return this
  }

  getKeys () {
    this.data = object.getKeys(this.data)
    return this
  }

  merge (obj) {
    this.data = object.merge(this.data, obj)
    return this
  }

  //BOOLEAN
  isTrue () {
    this.data = boolean.isTrue(this.data)
    return this
  }

  isFalse () {
    this.data = boolean.isFalse(this.data)
    return this
  }

  isEqual (value) {
    this.data = boolean.isEqual(this.data, value)
    return this
  }

  eq (value) {
    this.data = boolean.isEqual(this.data, value)
    return this
  }

  Not () {
    this.data = boolean.not(this.data)
    return this
  }

  not () {
    this.data = boolean.not(this.data)
    return this
  }

  and (data) {
    if (this.data) {
      this.data = data
      return this
    } else return false
  }

  //EVENT
  on (ev, callback) {
    events.on(ev, callback)
    return this
  }

  emit (ev) {
    events.emit(ev, this.data)
    return this
  }

  delete (ev) {
    events.delete(ev)
    return this
  }

  //RETURN VALUE
  r () {
    return this.data
  }

  return () {
    return this.data
  }

  v () {
    return this.data
  }

  value () {
    return this.data
  }

  end () {
    return null
  }
  
  noReturn () {
    return null
  }
}
