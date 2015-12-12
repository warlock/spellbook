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
>Existing methods has been ignored:

Array.remove(obj);

```javascript
var list = ['a', 'b', 'c'];
list.remove('b');
```
-> ['a', 'c']

```javascript
var date = new Date();
var list = ['a', 'b', 1, '2', date];
list.remove(['b', 1, date]);
```
-> ['a', '2']


Array.clear();
```javascript
var list = ['a', 'b', 'c'];
list.clear();
```
-> []

Object.get("key");
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.get("fire");
```
-> {"fire": 5}

Object.get(["key1","key2"]);
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.get("fire", "ice");
```
-> {"fire": 5, "ice": 4}


Object.extend(obj);
```javascript
var spells = {"fire": 5, "ice": 4};
var newspells = {"electro": 6, "wind": 7};
spells.extend(newspells);
```
-> {"fire": 5, "ice": 4, "electro": 6, "wind": 7}

Object.remove("key");
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove("fire");
```
-> {"ice": 4, "electro": 6, "wind": 7}


Object.remove(["key1", "key2"]);
```javascript
var spells = {"fire": 5, "ice": 4, "electro": 6, "wind": 7};
spells.remove(["fire", "ice"]);
```
-> {"electro": 6, "wind": 7}

## TOOLS:

Range:
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

Clone Object in javascript ES5 width ES6 style:
```javascript
var NewObject = sb.assing(obj);
var NewObject = sb.clone(obj);
```
Remove object from Array:
```javascript
sb.remove(array, obj);
```

Clear all values from Array:
```javascript
sb.clear(array);
```

Iterators:
```javascript
sb.times(10, function () {
	console.log("Abracadabra!");
});
```

Random number:
```javascript
console.log(sb.random(5,10);
```

Class check:
```javascript
sb.isFunction(obj);
sb.isArray(obj);
sb.isObject(obj);
sb.isNumber(obj);
sb.isString(obj);
sb.isBoolean(obj);
```
