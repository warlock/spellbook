Spellbook
===
> Functional and asynchronous conjurations for Javascript

http://www.spellbook.io

[![npm version](https://badge.fury.io/js/spellbook.svg)](https://badge.fury.io/js/spellbook) [![GitHub version](https://badge.fury.io/gh/warlock%2Fspellbook.svg)](https://badge.fury.io/gh/warlock%2Fspellbook) [![Build Status](https://travis-ci.org/warlock/spellbook.svg?branch=master)](https://travis-ci.org/warlock/spellbook) [![Known Vulnerabilities](https://snyk.io/test/github/warlock/spellbook/badge.svg)](https://snyk.io/test/github/warlock/spellbook)

## INSTALL/DOWNLOAD
```sh
npm install spellbook -S
```

## MINIFIED CDN
```
http://cdn.spellbook.io/spellbook.js
```

### NPM URL
```
http://npmjs.com/package/spellbook
```

### GIT URL
```
https://github.com/warlock/spellbook
```

## Node.Js : Import module:
```javascript
const sb = require("spellbook")
```

## Web : Import module:
```html
<script src="spellbook/spellbook.js"></script>
<script>
let a = sb.chain([{ a : 'hi', b : 3 }, { a : "hello", b : 3 }, { a : "bye", b : 2 }])
.filter({ b : 3 })
.first()
.get('a')
.toUpperCase()
.return()

console.log(a)
</script>
```

# Generic tools
**Range:**
```javascript
sb.range(0,10)
```
```
-> [0,1,2,3,4,5,6,7,8,9,10]
```

```javascript
sb.range(-100,100,20)
```
```
-> [-100,-80,-60,-40,-20,0,20,40,60,80,100]
```

```javascript
sb.range('A','F')
```
```
-> ['A','B','C','D','E','F')
```

```javascript
sb.range('m','r')
```
```
-> ['m','n','o','p','q','r']
```

**Random:**
```javascript
sb.random(0,10)
```
```
-> 3
```

```javascript
sb.random(['a','b','c'])
```
```
-> a
```

**sb.shuffle(array)**
```javascript
sb.shuffle(['a', 'b', 'c'])
```
```
-> ['c', 'a', 'b']
```

**sb.first(array)**
```javascript
sb.first(['a', 'b', 'c'])
```
```
-> a
```

**sb.last(array)**
```javascript
sb.last(['a', 'b', 'c'])
```
```
-> c
```

**sb.extend(obj, obj2)**
```javascript
const spells = {"fire": 5, "ice": 4}
const newspells = {"electro": 6, "wind": 7}
sb.extend(spells, newspells)
```
```
-> {"fire": 5, "ice": 4, "electro": 6, "wind": 7}
```

**Clone Object in javascript ES5 with ES6 style:**
```javascript
const NewObject = sb.assing(obj)
const NewObject2 = sb.clone(NewObject)
```

**Remove Objects from Array:**
```javascript
sb.remove(array, obj)
```
Can remove multiple objects.
```javascript
sb.remove(array, [obj, obj2])
```

**Clear all values from Array:**
```javascript
sb.clear(array)
```

**Find value in Array:**
```javascript
sb.contains(array, item)
sb.inArray(array, item)
```

**Get the element from the object "obj":**
```javascript
const a = {
    a : {
        b : ["c", "d"]
    }
}
sb.get(a, "a.b.1")
```
```
-> d
```

**Check empty values (null, '', [], undefined)**
```javascript
const a = ''
if (sb.isEmpty(a)) return true
```
```
-> true
```

sb.empty && sb.get combination:
```javascript
const a = { a : [{ a : [1, 2, 3]}], b : 4 }
sb.empty(sb.get(a, 'a.0.a.1'))
```
```
-> false
```

sb.empty && sb.get CHAIN combination:
```javascript
const a = { a : [{ a : [1, 2, 3]}], b : 4 }
sb.chain(a).get('a.0.a.1').isEmpty().value()
```
```
-> false
```

sb.empty && sb.get SHORT combination:
```javascript
const a = { a : [{ a : [1, 2, 3]}], b : 4 }
sb.e(a, 'a.0.a.1')
```
```
-> false
```

**Get specific key from array of objects**

Alternative name: unq.
```javascript
const spells = [{ name : "fire", damage : 5 },{ name : "ice", damage : 4 }]
sb.uniq(spells, 'name')
```
```
-> [ 'fire', 'ice' ]
```

**Filter specific values from array of objects**

```javascript
const spells = [{ name : "fire", damage : 5 },{ name : "ice", damage : 4 }, { name : "water", damage : 5 }]
sb.filter(spells,{ damage : 5 })
```
```
-> [{ name : "fire", damage : 5 },{ name : "water", damage : 5 }]
```

```javascript
const spells = [{ name : "fire", damage : 5 },{ name : "ice", damage : 4 }, { name : "water", damage : 5 }]
sb.filter(spells,{ name : "fire", name : "ice" })
```
```
-> [{ name : "fire", damage : 5 },{ name : "ice", damage : 4 }]
```

**Get object size**
```javascript
const obj = { name : "fire", damage : 5}
sb.size(obj)
```
```
-> 2
```

**sb.getKeys(object, keys)**
```javascript
const spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7}
sb.getKeys(spells, "fire")
```
```
-> {"fire": 5}
```

```javascript
const spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7}
sb.getKeys(spells, ["fire", "wind"])
```
```
-> {"fire": 5, "wind" : 7}
```

**sb.repeatify(value, num)**
```
sb.reatify("hi", 5)
```
```
-> ['hi','hi','hi','hi','hi']
```

**sb.capitalize()**
```javascript
sb.capitalize("abracadabra")
```
```
-> Abracadabra
```

**sb.dos2unix(string)**
Replace dos endline

```javascript
sb.dos2unix(string)
```

**Type check:**
```javascript
sb.isFunction(obj)
sb.isArray(obj)
sb.isObject(obj)
sb.isNumber(obj)
sb.isInteger(obj)
sb.isString(obj)
sb.isBoolean(obj)
sb.isEmpty(obj)
sb.isUndefined(obj)
sb.isNull(obj)
sb.isNaN(obj)
```


# Asyncronous Iterators

**sb.each(array, callback_loop(item, index, next_method, end_method), callback_end)**

Runs next function when "next" method is executed.
```javascript
const list = ['a', 'b', 'c']

sb.each(list, (item, index, next, end) => {
  console.log(`item: ${item}`)
  setTimeout(next, 3000)
}, () => {
  console.log(`End`)
})
```
```
-> item: a // Wait 3 seconds
-> item: b // Wait 3 seconds
-> item: c // Wait 3 seconds
-> End
```

Call "end" method for break the loop.
```javascript
const list = ['a', 'b', 'c']

sb.each(list, (item, index, next, end) => {
  console.log(`item: ${item}`)
  setTimeout(() => {
    if (index === 1) end(`Bye!`)
    else next()
  }, 3000)
}, (data) => {
  if (data) console.log(`End: ${data}`)
  else console.log(`End`)
})
```
```
-> item: a // Wait 3 seconds
-> item: b // Wait 3 seconds
-> End: Bye!
```

**sb.eachParallelLimit(array, number_limit, callback_loop(item, index, next_method), callback_end)**

Runs in parallel limit and next loop when "next" method is executed. Alternative names: eachpl, epl.
```javascript
const list = ['a', 'b', 'c', 'd']
sb.epl(list, 2, (item, index, next) => {
  console.log(`item: ${item}`)
  setTimeout(next, 2000)
}, () => {
  console.log(`End`)
})
```
```
-> item: a
-> item: b
-> item: c // Next to start when next method executed
-> item: d // Next to start when next method executed
-> End
```

**sb.waterfall(array_functions(done, data), callback_end)**

Runs next function when "done" method is executed.
Alternative name: wf.
```javascript
sb.waterfall([
  done => {
    console.log(`fire`)
    done(5)
  },
  (done, data) => {
    console.log(`ice: ${data}`)
    done(`win`)
  }
], data => {
  console.log(`End: ${data}`)
})
```
```
-> fire
-> ice: 5
-> End: win
```

Break the waterfall with "true".
```javascript
sb.wf([
  done => {
    console.log(`fire`)
    done(true, 5)
  },
  (done, data) => {
    console.log(`ice: ${data}`)
    done(`win`)
  }
], data => {
  console.log(`End: ${data}`)
})
```
```
-> fire
-> End: 5
```


**sb.parallel(array_functions(done), callback_end(data))**

Run functions in parallel and then execute "callback_end".
```javascript
sb.parallel([
  done => {
    setTimeout(() => {
      console.log(`hi 3!`)
      done(`a`)
    }, 3000)
  },
  done => {
    setTimeout(() => {
      console.log(`hi 2!`)
      done(`b`)
    }, 2000)
  },
  done => {
    setTimeout(() => {
      console.log(`hi 1!`)
      done(`c`)
    }, 1000)
  }
],data => {
  console.log(`End: ${JSON.stringify(data)}`)
})
```
```
//Wait 1 second
-> hi 1! //Wait 1 second
-> hi 2! //Wait 1 second
-> hi 3!
-> End: ["a","b","c"]
```

**sb.parallelLimit(number, array_functions(done), callback_end(data))**

Run limit of functions in parallel and then execute "callback_end". Alternative name : pl
```javascript
sb.pl(2, [
  done => {
    setTimeout(() => {
      console.log("go 1!")
      done("a")
    }, 1000)
  },
  done => {
    setTimeout(() => {
      console.log("go 2!")
      done("b")
    }, 3000)
  },
  done => {
    setTimeout(() => {
      console.log("go 3!")
      done("c")
    }, 1000)
  },
  done => {
    setTimeout(() => {
      console.log("go 4!")
      done("a2")
    }, 3000)
  },
  done => {
    setTimeout(() => {
      console.log("go 5!")
      done("b2")
    }, 1000)
  },
  done => {
    setTimeout(() => {
      console.log("go 6!")
      done("c2")
   }, 3000)
  },
  done => {
    setTimeout(() => {
      console.log("go 7!")
      done("a3")
    }, 1000)
  },
  done => {
    setTimeout(() => {
      console.log("go 8!")
      done("b3")
    }, 3000)
  },
  done => {
    setTimeout(() => {
       console.log("go 9!")
       done("c3")
    }, 1000)
  }
],data => {
  console.log(`we: ${JSON.stringify(data)}`)
})
```
```
-> go 1!
-> go 3!
-> go 2!
-> go 5!
-> go 4!
-> go 7!
-> go 6!
-> go 9!
-> go 8!
-> we: ["a","b","c","a2","b2","c2","a3","b3","c3"]
```

**sb.forever(callback(repeat, end), callback_end)**

Loops syncronous forever.
Alternative name: fe.

```javascript
sb.forever((repeat, end) => {
  console.log(`Hi!`)
  setTimeout(repeat, 3000)
})
```
```
-> Hi! // Wait 3 seconds
-> Hi! // Wait 3 seconds
-> ...
```

Breaking forever loop.
```javascript
var i = 0
sb.fe((repeat, end) => {
  console.log(`loop: ${i}`)
  if (i>=3) end(`Now Break!!!`)
  i++
  setTimeout(repeat, 3000)
}, data => {
  console.log(`Response: ${data}`)
})
```
```
-> loop: 0 // Wait 3 seconds
-> loop: 1 // Wait 3 seconds
-> loop: 2 // Wait 3 seconds
-> loop: 3 // Wait 3 seconds
-> Response: Now Break!!
```

**sb.times(number, callback(index, next, end), end)**

Iterates function "number" times.
```javascript
sb.times(5, (index, next, end) => {
  console.log(`Iterator: ${index}`)
  if (index === 3) end()
  else next()
}, () => {
  console.log(`End!`)
})
```
```
-> Iterator 0
-> Iterator 1
-> Iterator 2
-> Iterator 3
-> End!
```

```javascript
sb.times(5, (index, next, end) => {
  console.log(`Iterator ${index}`)
  next()
})
```
```
-> Iterator 0
-> Iterator 1
-> Iterator 2
-> Iterator 3
-> Iterator 4
-> Iterator 5
```

**sb.for(initial, final, increment, callback(index, next, end), callback_end(data))**

Syncronous "for" iterator.
Alternative name: forSync.

```javascript
sb.for(0, 10, 1, (index, next, end) => {
  console.log(index)
  next(5)
}, data => {
  console.log(data)
})
```
```
-> 0
-> 1
-> 2
-> 3
-> 4
-> 5
-> 6
-> 7
-> 8
-> 9
-> 10
-> [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
```

```javascript
sb.for(1, 10, 2, (index, next, end) => {
  console.log(index)
  next(index)
}, data => {
  console.log(data)
})
```
```
-> 1
-> 3
-> 5
-> 7
-> 9
-> 11
-> [ 1, 3, 5, 7, 9, 11 ]
```

# Events and much more... http://www.spellbook.io


## License
The MIT License (MIT)
Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
