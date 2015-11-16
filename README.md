# SpellBook
Warning: Development version.

## Import module:
```javascript
var sp = require("spellbook");
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


Domain extractor:
```javascript
sp.getDomain("http://www.dondominio.com");

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
