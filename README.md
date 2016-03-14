SpellBook
===
> Library for extend the javascript habilities.

http://www.spellbook.io

http://npmjs.com/package/spellbook

## INSTALL/DOWNLOAD
```sh
npm install spellbook
```

## MINIFIED CDN
```
http://cdn.spellbook.io/spellbook.js
https://cdnjs.cloudflare.com/ajax/libs/spellbook/0.0.44/spellbook.min.js
https://cdn.rawgit.com/warlock/spellbook/minified/spellbook-min.js
```

## Node.Js : Import module:
```javascript
var sb = require("spellbook");
```

## Web : Import module:
```html
<script src="spellbook/spellbook.js"></script>
<script>
  console.log(sb.range(5,10));
</script>
```

## CLASS EXTENSION
>Existing class methods will be ignored

**Array.remove(obj);**

```javascript
var list = ['a', 2, 'c', 2];
list.remove(2);
```
```
-> ['a', 'c']
```

```javascript 
var list = ['a', 2, 'c', 2];
list.remove([2,'a']);
```
```
-> ['c']
```

```javascript
var date = new Date();
var list = ['a', 'b', 1, '2', date];
list.remove(['b', 1, date]);
```
```
-> ['a', '2']
```

**Array.clear();**
```javascript
var list = ['a', 'b', 'c'];
list.clear();
```
```
-> []
```

**Array.random();**
```javascript
var list = ['a', 'b', 'c'];
list.random();
```
```
-> 'b'
```

**Array.shuffle();**
```javascript
var list = ['a', 'b', 'c'];
list.shuffle();
```
```
-> ['c', 'a', 'b']
```

**Array.first();**
```javascript
var list = ['a', 'b', 'c'];
list.first();
```
```
-> 'a'
```

**Array.last();**
```javascript
var list = ['a', 'b', 'c'];
list.last();
```
```
-> 'c'
```

**Array.inArray(item);**
```javascript
var list = ['a', 'b', 'c'];
list.inArray('b');
```
```
-> true
```

**Array.contains(item);**
```javascript
var list = ['a', 'b', 'c'];
list.contains('b');
```
```
-> true
```

**Array.isArray();**
```javascript
var list = ['a', 'b', 'c'];
list.isArray();
```
```
-> true
```

**Array.each(callback_loop(item, index, next_method, end_method), callback_end); Runs next loop when "next" method is executed.**
```javascript
var list = ['a', 'b', 'c'];
list.each(function (item, i, next, end) {
    console.log("item: " + item );
    setTimeout(function () {
        next();
    }, 3000);
}, function () {
    console.log("End");
});
```
```
-> item: a // Wait 3 seconds;
-> item: b // Wait 3 seconds;
-> item: c // Wait 3 seconds;
-> End
```

**Array.each(callback_loop(item, index, next_method, end_method), callback_end); Runs next loop when "next" method is executed. Call "end" method for break the loop.**
```javascript
var list = ['a', 'b', 'c'];
list.each(function (item, i, next, end) {
    console.log("item: " + item );
    setTimeout(function () {
        if (i === 1) {
            end("Bye!");
        } else {
            next();
        }
    }, 3000);
}, function (data) {
    if (data) {
        console.log("End: " + data);
    } else {
        console.log("End");
    }
});
```
```
-> item: a // Wait 3 seconds;
-> item: b // Wait 3 seconds;
-> End: Bye!
```

**Object.getKeys(keys);**
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.getKeys("fire");
```
```
-> {"fire": 5}
```

```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.getKeys(["fire", "ice"]);
```
```
-> {"fire": 5, "ice": 4}
```

**Object.extend(obj);**
```javascript
var spells = {"fire": 5, "ice": 4};
var newspells = {"electro": 6, "wind": 7};
spells.extend(newspells);
```
```
-> {"fire": 5, "ice": 4, "electro": 6, "wind": 7}
```

**Object.remove(keys);**
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove("fire");
```
```
-> {"ice": 4, "electro": 6, "wind": 7}
```

```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove(["fire", "ice"]);
```
```
-> {"electro": 6, "wind": 7}
```

**Object.isObject();**
```javascript
var list = ['a', 'b', 'c'];
list.isObject();
```
```
-> true
```

**Boolean.isBoolean();**
```javascript
var boh = false;
boh.isBoolean();
```
```
-> true
```

**Function.isFunction();**
```javascript
var fun = function () { return "hi"; };
fun.isFunction();
```
```
-> true
```

**String.isString();**
```javascript
var talk = "hi!";
talk.isString();
```
```
-> true
```

**String.repeatify(num);**
```javascript
"hi".reatify(5);
```
```
-> ['hi','hi','hi','hi','hi']
```

**(Number).times(callback(iteration)); Iterates function "number" times.**
```javascript
(3).times(function (i) {
	console.log("hi!");
});
```
```
-> hi!
-> hi!
-> hi!
```

**Number.isNumber();**
```javascript
var num = 5.2;
num.isNumber();
```
```
-> true
```

**Number.isInteger();**
```javascript
var num = 5;
num.isInteger();
```
```
-> true
```

## TOOLS:

**Range:**
```javascript
sb.range(0,10);
```
```
-> [0,1,2,3,4,5,6,7,8,9,10]
```

```javascript
sb.range(-100,100,20);
```
```
-> [-100,-80,-60,-40,-20,0,20,40,60,80,100]
```

```javascript
sb.range('A','F');
```
```
-> ['A','B','C','D','E','F')
```

```javascript
sb.range('m','r');
```
```
-> ['m','n','o','p','q','r']
```

**Clone Object in javascript ES5 with ES6 style:**
```javascript
var NewObject = sb.assing(obj);
var NewObject = sb.clone(obj);
```

**Remove Objects from Array:**
```javascript
sb.remove(array, obj);
sb.remove(array, [obj1, obj2]);
```

**Clear all values from Array:**
```javascript
sb.clear(array);
```

**Find Objects from Array:**
```javascript
sb.contains(array, obj);
sb.inArray(array, obj);
```

**Get the element from the object "obj":**
```javascript
var a = {
    a : {
        b : ["c", "d"]
    }
};

sb.get(a, "a.b.1");
```
```
-> d
```

**sb.each(array, callback_loop(item, index, next_method, end_method), callback_end); Runs next loop when "next" method is executed.**
```javascript
var list = ['a', 'b', 'c'];
sb.each(list, function (item, i, next, end) {
    console.log("item: " + item );
    setTimeout(function () {
        next();
    }, 3000);
}, function () {
    console.log("End");
});
```
```
-> item: a // Wait 3 seconds;
-> item: b // Wait 3 seconds;
-> item: c // Wait 3 seconds;
-> End
```

**sb.each(callback_loop(item, index, next_method, end_method), callback_end); Runs next loop when "next" method is executed. Call "end" method for break the loop.**
```javascript
var list = ['a', 'b', 'c'];
sb.each(list, function (item, i, next, end) {
    console.log("item: " + item );
    setTimeout(function () {
        if (i === 1) {
            end("Bye!");
        } else {
            next();
        }
    }, 3000);
}, function (data) {
    if (data) {
        console.log("End: " + data);
    } else {
        console.log("End");
    }
});
```
```
-> item: a // Wait 3 seconds;
-> item: b // Wait 3 seconds;
-> End: Bye!
```

**sb.waterfall(functions_array, callback_end); Runs next function when "done" method is executed.**
```javascript
sb.waterfall([
    function (done) {
        console.log("fire");
        done(5);
    },
    function (done, data) {
        console.log("ice: " + data);
        done("win");
    }
], function (data) {
    console.log("End: " + data);
});
```
```
-> fire
-> ice: 5
-> End: win
```

**sb.waterfall(array_functions(done, data), callback_end); Break the fall with "true".**
```javascript
sb.waterfall([
    function (done) {
        console.log("fire");
        done(true, 5);
    },
    function (done, data) {
        console.log("ice: " + data);
        done("win");
    }
], function (data) {
    console.log("End: " + data);
});
```
```
-> fire
-> End: 5
```


**sb.parallel(array_functions(done), callback_end(data)); Run functions in parallel and then execute "callback_end".**
```javascript
sb.parallel([
    function (done) {
        setTimeout(function () {
            console.log("hi 3!");
            done("a")
        }, 3000);
    },
    function (done) {
        setTimeout(function () {
            console.log("hi 2!");
            done("b");
        }, 2000);
    },
    function (done) {
        setTimeout(function () {
            console.log("hi 1!");
            done("c");
        }, 1000);
    }
],function (data) {
        console.log("End: " + JSON.stringify(data));
});
```
```
//Wait 1 second
-> hi 1! //Wait 1 second
-> hi 2! //Wait 1 second
-> hi 3!
-> End: ["a","b","c"]
```

**sb.forever(callback(next, end), callback_end); Loops forever.**
```javascript
sb.forever(function (next, end) {
    console.log("Hi!")
    setTimeout(function () {
        next();
    }, 3000);
});
```
```
-> Hi! // Wait 3 seconds;
-> Hi! // Wait 3 seconds;
-> ...
```

**sb.forever(callback(next, end), callback_end); Loops forever and break the loop.**
```javascript
var i = 0;
sb.forever(function (next, end) {
    console.log("loop: " + i);
    if (i>=3) {
        end("Now Break!!")
    }
    i++;
    setTimeout(function () {
        next();
    }, 3000);
}, function (data) {
    console.log("Response: " + data);
});
```
```
-> loop: 0 // Wait 3 seconds;
-> loop: 1 // Wait 3 seconds;
-> loop: 2 // Wait 3 seconds;
-> loop: 3 // Wait 3 seconds;
-> Response: Now Break!!
```

**sb.times(number, callback(iteration)); Iterates function "number" times.**
```javascript
sb.times(3, function (iteration) {
        console.log("Abracadabra!");
});
```
```
-> Abracadabra!
-> Abracadabra!
-> Abracadabra!
```

**Random number:**
```javascript
sb.random(5,10);
```
```
-> 6
```

**Real date validator:**
```javascript
sb.checkDate('dd-mm-yyyy', '30/02/2015');
```
```
-> false
```

**Limit of words:**
```javascript
sb.excerpt('One, two, Freddy\'s coming for you', 3);
```
```
-> 'One, two, Freddy's'
```

**Class boolean check:**
```javascript
sb.isFunction(obj);
sb.isArray(obj);
sb.isObject(obj);
sb.isNumber(obj);
sb.isInteger(obj);
sb.isString(obj);
sb.isBoolean(obj);
```


## License
All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

The MIT License (MIT)
Copyright (c) 2015 Josep Subils Rigau (josep@java.cat)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
