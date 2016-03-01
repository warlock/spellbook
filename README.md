SpellBook
===
> Library for extend the javascript habilities.

http://warlock.github.io/spellbook

http://npmjs.com/package/spellbook

## INSTALL/DOWNLOAD
```sh
npm install spellbook
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
-> ['a', 'c']

```javascript
var list = ['a', 2, 'c', 2];
list.remove([2,'a']);
```
-> ['c']

```javascript
var date = new Date();
var list = ['a', 'b', 1, '2', date];
list.remove(['b', 1, date]);
```
-> ['a', '2']

**Array.clear();**
```javascript
var list = ['a', 'b', 'c'];
list.clear();
```
-> []

**Array.random();**
```javascript
var list = ['a', 'b', 'c'];
list.random();
```
-> 'b'

**Array.shuffle();**
```javascript
var list = ['a', 'b', 'c'];
list.shuffle();
```
-> ['c', 'a', 'b']

**Array.first();**
```javascript
var list = ['a', 'b', 'c'];
list.first();
```
-> 'a'

**Array.last();**
```javascript
var list = ['a', 'b', 'c'];
list.last();
```
-> 'c'

**Array.inArray();**
```javascript
var list = ['a', 'b', 'c'];
list.inArray('b');
```
-> true

**Array.contains();**
```javascript
var list = ['a', 'b', 'c'];
list.contains('b');
```
-> true

**Array.isArray();**
```javascript
var list = ['a', 'b', 'c'];
list.isArray();
```
-> true

**Array.each();**
```javascript
var list = ['a', 'b', 'c'];
list.each(function (res) {
    console.log("res: " + res );
});
```
-> a
-> b
-> c

**Array.each(); With end function**
```javascript
var list = ['a', 'b', 'c'];
list.each(function (res) {
    console.log("res: " + res );
}, function () {
    console.log("End");
});
```
-> a
-> b
-> c
-> End

**Array.each(); Iteration with time interval and end function**
```javascript
var list = ['a', 'b', 'c'];
list.each(5000, function (res) {
    console.log("res: " + res );
}, function () {
    console.log("End");
});
```
-> a // Wait 5 seconds
-> b // Wait 5 seconds
-> c
-> End

**Object.getKeys("key");**
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.getKeys("fire");
```
-> {"fire": 5}

```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.getKeys(["fire", "ice"]);
```
-> {"fire": 5, "ice": 4}

**Object.extend(obj);**
```javascript
var spells = {"fire": 5, "ice": 4};
var newspells = {"electro": 6, "wind": 7};
spells.extend(newspells);
```
-> {"fire": 5, "ice": 4, "electro": 6, "wind": 7}

**Object.remove("key");**
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove("fire");
```
-> {"ice": 4, "electro": 6, "wind": 7}

```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove(["fire", "ice"]);
```
-> {"electro": 6, "wind": 7}

**Object.isObject();**
```javascript
var list = ['a', 'b', 'c'];
list.isObject();
```
-> true

**Boolean.isBoolean();**
```javascript
var boh = false;
boh.isBoolean();
```
-> true

**Function.isFunction();**
```javascript
var fun = function () { return "hi"; };
fun.isFunction();
```
-> true

**String.isString();**
```javascript
var talk = "hi!";
talk.isString();
```
-> true

**String.repeatify(num);**
```javascript
"hi".reatify(5);
```
-> ['hi','hi','hi','hi','hi']

**Number.times();**
```javascript
(3).times(function () {
	console.log("hi!");
});
```
-> hi!
-> hi!
-> hi!

**Number.isNumber();**
```javascript
var num = 5.2;
num.isNumber();
```
-> true

**Number.isInteger();**
```javascript
var num = 5;
num.isInteger();
```
-> true

## TOOLS:

**Range:**
```javascript
sb.range(0,10);
```
-> [0,1,2,3,4,5,6,7,8,9,10]

```javascript
sb.range(-100,100,20);
```
-> [-100,-80,-60,-40,-20,0,20,40,60,80,100]

```javascript
sb.range('A','F');
```
-> ['A','B','C','D','E','F')

```javascript
sb.range('m','r');
```
-> ['m','n','o','p','q','r']

**Clone Object in javascript ES5 with ES6 style:**
```javascript
var NewObject = sb.assing(obj);
var NewObject = sb.clone(obj);
```

**Remove Objects from Array:**
```javascript
sb.remove(array, obj);
```

```javascript
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

**Array iteration with end function**
```javascript
var list = ['a', 'b', 'c'];
sb.each(list, function (res) {
    console.log("res: " + res );
}, function () {
    console.log("End");
});
```
-> a // Wait 5 seconds
-> b // Wait 5 seconds
-> c
-> End

**Array iteration with time interval and end function**
```javascript
var list = ['a', 'b', 'c'];
sb.each(list, 5000, function (res) {
    console.log("res: " + res );
}, function () {
    console.log("End");
});
```
-> a // Wait 5 seconds
-> b // Wait 5 seconds
-> c
-> End

**Iterators:**
```javascript
sb.times(10, function () {
        console.log("Abracadabra!");
});
```

**Random number:**
```javascript
sb.random(5,10);
```
-> 6

**Real date validator:**
```javascript
sb.checkDate('dd-mm-yyyy', '30/02/2015');
```
-> false

**Limit of words:**
```javascript
sb.excerpt('One, two, Freddy\'s coming for you', 3);
```
-> 'One, two, Freddy's'

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
