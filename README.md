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

## CLASS EXTENSION:

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
```
sb.times(10, function () {
	console.log("Abracadabra!");
});
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
