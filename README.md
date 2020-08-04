Spellbook
===
> Functional and asynchronous conjurations for Javascript

### [http://spellbook.js.gl](http://spellbook.js.gl)

[![npm version](https://badge.fury.io/js/spellbook.svg)](https://badge.fury.io/js/spellbook) [![GitHub version](https://badge.fury.io/gh/warlock%2Fspellbook.svg)](https://badge.fury.io/gh/warlock%2Fspellbook) [![Build Status](https://travis-ci.org/warlock/spellbook.svg?branch=master)](https://travis-ci.org/warlock/spellbook) [![Known Vulnerabilities](https://snyk.io/test/github/warlock/spellbook/badge.svg)](https://snyk.io/test/github/warlock/spellbook)

## INSTALL/DOWNLOAD
```sh
npm install spellbook -S
```

## MINIFIED CDN
```
https://cdn.jsdelivr.net/npm/spellbook@latest/spellbook.js
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
const res = sb.chain([{ a: 'hi', b: 3 }, { a: "hello", b: 3 }, { a: "bye", b: 2 }])
.filter({ b : 3 })
.first()
.get('a')
.toUpperCase()
.return()

console.log(res)
</script>
```


## License
The MIT License (MIT)
Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
