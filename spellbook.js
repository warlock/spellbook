!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.sb=n():t.sb=n()}(this,function(){return function(t){function n(r){if(i[r])return i[r].exports;var e=i[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var i={};return n.m=t,n.c=i,n.d=function(t,i,r){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=10)}([function(t,n){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"object"==typeof t&&t instanceof Array},isObject:function(t){return"object"==typeof t&&!(t instanceof Array)&&null!==t},isNumber:function(t){return"number"==typeof t||t instanceof Number},isInteger:function(t){return!!this.isNumber(t)&&t%1==0},isString:function(t){return"string"==typeof t||t instanceof String},isBoolean:function(t){return"boolean"==typeof t},isEmpty:function(t){return null===t||""===t||void 0===t},isNull:function(t){return null===t},isNaN:function(t){return isNaN(t)},isUndefined:function(t){return void 0===t}}},function(t,n,i){var r=i(0);t.exports={extend:function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return t},assign:function(t){if(null===t||"object"!=typeof t||"isActiveClone"in t)return t;var n=t.constructor();for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(t.isActiveClone=null,n[i]=t[i],delete t.isActiveClone);return n},get:function(t,n){if(void 0!==t&&"string"==typeof n){if(n=n.split("."),1===n.length)return t[n[0]];for(var i=0;i<n.length;i++){if(void 0===t[n[i]])return;t=t[n[i]]}return t}},keys:function(t){return Object.keys(t)},getKeys:function(t,n){var i={};return r.isArray(n)?n.forEach(function(n){i[n]=t[n]}):i[n]=t[n],i},merge:function(t,n){var i={};if(r.isObject(t)&&r.isObject(n))return Object.keys(t).forEach(function(n){i[n]=t[n]}),Object.keys(n).forEach(function(t){i[t]=n[t]}),i;throw new Error("Merge option need two objects for work")}}},function(t,n,i){(function(n){var i={each:function(t,n,i){var r=0,e=[],o=function(s){if(null!==s&&void 0!==s&&(e[r]=s),r<t.length){var u=r;r++,n(t[u],u,o,a)}else"function"==typeof i&&i(e)},a=function(t){"function"==typeof i&&i(t)};r<t.length?o():"function"==typeof i&&i(e)},waterfall:function(t,n){var i=0,r=function(e,o){i<t.length-1?(i++,null!==e&&void 0!==e?!0===e?"function"==typeof n&&n(o):t[i](r,e):t[i](r)):"function"==typeof n&&(null!==e&&void 0!==e?n(!0===e?o:e):n())};t instanceof Array&&t[i](r)},forever:function(t,n){var i=function(t){"function"==typeof n&&n(t)},r=function(){t(r,i)};t(r,i)},parallelLimit:function(t,n,i){var r=0,e=n.length,o=[],a=function(t){var s=function(s){e--,null!==s&&void 0!==s&&(o[t]=s),r!==n.length?(a(r),r++):0===e&&"function"==typeof i&&i(o)};n[t](s)};if(n instanceof Array)for(var s=0;s<t;s++)a(s),r++},forSync:function(t,n,i,r,e){var o=[],a=function(s){null!==s&&void 0!==s&&o.push(s),t<n?(t+=i,r(t,a,e)):"function"==typeof e&&e(o)};r(t,a,e)},eachParallelLimit:function(t,n,i,r){var e=0,o=t.length,a=[],s=function(n,u){i(n,u,function(n){o--,null!==n&&void 0!==n&&(a[u]=n),e!==t.length?(s(t[e],e),e++):0===o&&"function"==typeof r&&r(a)},function(t){"function"==typeof r&&r(t)})};if(t instanceof Array&&t.length>0){n>t.length&&(n=t.length);for(var u=0;u<n;u++)s(t[u],u),e++}else"function"==typeof r&&r(a)},times:function(t,n,r){i.forSync(0,t-1,1,n,r)},parallel:function(t,n){var i=0,r=[];if(t instanceof Array)for(var e=0;e<t.length;e++)!function(e){var o=function(o){null!==o&&void 0!==o&&(r[e]=o),i<t.length-1?i++:"function"==typeof n&&n(r)};t[e](o)}(e)}};i.eachpl=i.eachParallelLimit,i.epl=i.eachParallelLimit,i.wf=i.waterfall,i.pl=i.parallelLimit,i.fe=i.forever,i.for=i.forSync,"object"==typeof n&&(t.exports=i)}).call(n,i(11))},function(t,n,i){var r=i(0);t.exports={range:function(t,n,i){var e=[];if(r.isEmpty(t)||r.isEmpty(n))return[];if(typeof t!=typeof n)return[];if(r.isNumber(t))for(e[0]=t,i=i||1;t+i<=n;)e[e.length]=t+=i;else{var o="abcdefghijklmnopqrstuvwxyz";t===t.toUpperCase()&&(n=n.toUpperCase(),o=o.toUpperCase()),o=o.substring(o.indexOf(t),o.indexOf(n)+1),e=o.split("")}return e},random:function(t,n){if(r.isNumber(t)&&r.isNumber(n))return Math.floor(Math.random()*(n-t))+t;if(r.isArray(t)){return t[Math.floor(Math.random()*t.length)]}return 0},ifElse:function(t,n,i){return t?n():i()},function:function(t,n){return n(t)}}},function(t,n,i){var r=i(0),e=i(1);t.exports={shuffle:function(t){if(r.isArray(t)){for(var n=e.assign(t),i=n.length-1;i>=0;i--){var o=Math.floor(Math.random()*(i+1)),a=n[o];n[o]=n[i],n[i]=a}return n}throw new Error("Shuffle function not contains array.")},first:function(t){if(r.isArray(t))return t[0];throw new Error("first function not contains array.")},last:function(t){if(r.isArray(t))return t[t.length-1];throw new Error("Last function not contains array.")},remove:function(t,n){function i(t,n){return t.filter(function(t){if(JSON.stringify(t)!==JSON.stringify(n))return t})}var o=e.assign(t);return r.isArray(n)?(n.forEach(function(t){o=i(o,t)}),o):i(o,n)},clear:function(t){var n=e.assign(t);if(r.isArray(n))return n.splice(n.length,0);throw new Error("clear function not contains array.")},inArray:function(t,n){if(r.isArray(t))return!!~t.indexOf(n);throw new Error("inArray function not contains array.")},uniqBy:function(t,n){if(r.isArray(t)){for(var i=[],e={},o=0;o<t.length;o++)void 0===e[t[o][n]]&&void 0!==t[o][n]&&(i.push(t[o][n]),e[t[o][n]]=1);return i}throw new Error("uniq function not contains array.")},uniq:function(t){for(var n=[],i=0;i<t.length;i++)(function(t,n){for(var i=0;i<t.length;i++)if(JSON.stringify(t[i])===JSON.stringify(n))return!0;return!1})(n,t[i])||n.push(t[i]);return n},filter:function(t,n){if(r.isEmpty(t))throw new Error("filter function not contains array.");if(r.isEmpty(n)&&"function"!=typeof obj)throw new Error("Find in array need a object.");return t.filter(n)},filterBy:function(t,n){if(r.isEmpty(t))throw new Error("filter function not contains array.");if(r.isEmpty(n)&&"object"!=typeof n)throw new Error("Find in array need a object.");var i=Object.keys(n);return t.filter(function(t){var r=!0;return i.forEach(function(i){"string"==typeof t[i]?t[i].indexOf(n[i])<0&&(r=!1):t[i]!==n[i]&&(r=!1)}),r})},map:function(t,n){if(r.isArray(t)){if(r.isFunction(n))return t.map(n);throw new Error("map function not contains callback.")}throw new Error("map function not contains array.")},reduce:function(t,n){if(r.isArray(t))return r.isFunction(n)?t.reduce(n):t.sort(t);throw new Error("reduce function not contains array.")},forEach:function(t,n){if(!r.isArray(t))throw new Error("forEach function not contains array.");if(!r.isFunction(n))return t.sort(t);t.forEach(n)},sort:function(t,n){if(r.isArray(t))return r.isFunction(n)?t.sort(n):t.sort(t);throw new Error("sort function not contains array.")}}},function(t,n,i){var r=i(0);t.exports={toInt:function(t){if(r.isEmpty(t))throw new Error("To int needs an string value.");if(r.isString(t))return parseInt(t,10);throw new Error("toInt function has incompatible value.")},dos2unix:function(t){if(r.isEmpty(t))throw new Error("Dos2unix function needs an string value.");if(r.isString(t))return t.replace(/\r\n/g,"\n");throw new Error("Dos2unix function has incompatible value.")},capitalize:function(t){if(r.isEmpty(t))throw new Error("Capitalize function needs an string value.");if(r.isString(t))return t.slice(0,1).toUpperCase()+t.slice(1);throw new Error("Capitalize function has incompatible value.")},excerpt:function(t,n){var i=t.split(" ");return i.splice(n,i.length-1),i.join(" ")},toJSON:function(t){if(r.isEmpty(t))throw new Error("toJSON function needs an string value.");if(r.isString(t))return JSON.parse(t);throw new Error("toJSON function has incompatible value.")},json:function(t){if(r.isEmpty(t))throw new Error("toJSON function needs an string value.");if(r.isString(t))return JSON.parse(t);throw new Error("toJSON function has incompatible value.")},split:function(t,n,i){if(r.isEmpty(t))throw new Error("Split function needs an string value.");if(r.isString(t))return t.split(n,i);throw new Error("Split function has incompatible value.")},toLowerCase:function(t){if(r.isEmpty(t))throw new Error("toLowerCase function needs an string value.");if(r.isString(t))return t.toLowerCase();throw new Error("toLowerCase function has incompatible value.")},toUpperCase:function(t){if(r.isEmpty(t))throw new Error("toUpperCase function needs an string value.");if(r.isString(t))return t.toUpperCase();throw new Error("toUpperCase function has incompatible value.")},trim:function(t){if(r.isEmpty(t))throw new Error("trim function needs an string value.");if(r.isString(t))return t.trim();throw new Error("trim function has incompatible value.")},replace:function(t,n,i){if(r.isEmpty(t)&&r.isEmpty(i))throw new Error("replace function needs an string value.");if(r.isString(t)&&r.isString(i))return t.replace(n,i);throw new Error("replace function has incompatible value.")},pad:function(t,n,i){return n>>=0,i=String(i||" "),t.length>n?String(t):(n-=t.length,n>i.length&&(i+=i.repeat(n/i.length)),i.slice(0,n)+String(t))}}},function(t,n,i){var r=i(0);t.exports={duplicate:function(t){if(r.isNumber(t))return 2*t;throw new Error("Duplicate function needs a number.")},min:function(t){if(r.isArray(t)){var n=!0;if(t.forEach(function(t){n&&!r.isNumber(t)&&(n=!1)}),n)return Math.min.apply(Math,t);throw new Error("Min funciton needs an array of numbers.")}throw new Error("Min funciton needs an array.")},max:function(t){if(r.isArray(t)){var n=!0;if(t.forEach(function(t){n&&!r.isNumber(t)&&(n=!1)}),n)return Math.max.apply(Math,t);throw new Error("Min funciton needs an array of numbers.")}throw new Error("Min funciton needs an array.")},sum:function(t,n){if(r.isNumber(t)&&r.isNumber(n))return t+n;throw new Error("Sum function only can operate with numbers.")},divide:function(t,n){if(r.isNumber(t)&&r.isNumber(n))return t/n;throw new Error("Divide function only can operate with numbers.")},mult:function(t,n){if(r.isNumber(t)&&r.isNumber(n))return n*t;throw new Error("Mult function only can operate with numbers.")},ceil:function(t){if(r.isNumber(t))return Math.ceil(t);throw new Error("ceil function only can operate with numbers.")},round:function(t){if(r.isNumber(t))return Math.round(t);throw new Error("round function only can operate with numbers.")},floor:function(t){if(r.isNumber(t))return Math.floor(t);throw new Error("floor function only can operate with numbers.")},trunc:function(t){if(r.isNumber(t))return Math.trunc(t);throw new Error("floor function only can operate with numbers.")}}},function(t,n){t.exports={isTrue:function(t){return!0===t},isFalse:function(t){return!1===t},isEqual:function(t,n){return JSON.stringify(t)===JSON.stringify(n)},not:function(t){return!1===t},and:function(t,n){return!(!t||!n)}}},function(t,n,i){var r=i(0);t.exports={toString:function(t){if(r.isEmpty(t))throw new Error("toString function not contains value to parse.");return JSON.stringify(t)},size:function(t){if(r.isEmpty(t))throw new Error("size function not contains values.");if(r.isArray(t)||r.isString(t))return t.length;if(r.isObject(t))return Object.keys(t).length;throw new Error("size function not contains compatible values.")},contains:function(t,n){if(r.isArray(t)||r.isString(t))return!!~t.indexOf(n);if(r.isObject(t))return!!~Object.keys(t).indexOf(n);throw new Error("contains function not contains values.")},reverse:function(t){if(r.isArray(t))return t.reverse();if(r.isString(t))return t.split("").reverse().join("");throw new Error("Reverse function not contains array or string.")},repeatify:function(t,n){if(r.isEmpty(t))throw new Error("repeatify function not have data for repeat.");if(r.isEmpty(n)||r.isNumber(n))throw new Error("repeatify function not have a number for repeat.");for(var i=[],e=0;e<n;e++)i.push(t);return i},concat:function(t,n){if(r.isEmpty(t)||r.isEmpty(n))throw new Error("concat function not have values.");if(r.isString(t)&&r.isString(t))return t+n;if(r.isArray(t)&&r.isArray(t))return t.concat(n);throw new Error("concat function not contains same values.")},return:function(t){return t}}},function(t,n,i){var r=i(0),e={eventstack:{},on:function(t,n){if(r.isEmpty(t))throw new Error("on function need event");if(r.isArray(t))for(var i=0;i<t.length;i++){if(!r.isFunction(n))throw Error("Event need function");e.eventstack[t[i]]=n}else{if(!r.isFunction(n))throw Error("Event need function");e.eventstack[t]=n}},emit:function(t,n){if(r.isEmpty(t))throw new Error("No event selected.");if(r.isArray(t))for(var i=0;i<t.length;i++)r.isFunction(e.eventstack[t[i]])&&e.eventstack[t[i]](n,this.data);else r.isFunction(e.eventstack[t])&&e.eventstack[t](n,this.data)},delete:function(t){if(r.isEmpty(t))throw new Error("No event selected.");if(r.isEmpty(e.eventstack[t]))throw Error("This event not exist");delete e.eventstack[t]}};t.exports=e},function(t,n,i){var r=i(2),e=i(3),o=i(0),a=i(4),s=i(1),u=i(5),f=i(6),c=i(7),h=i(8),l=i(9),d=i(12);t.exports={range:e.range,random:e.random,ifElse:e.ifElse,function:e.function,toInt:u.toInt,excerpt:u.excerpt,capitalize:u.capitalize,toJSON:u.toJSON,json:u.json,dos2unix:u.dos2unix,split:u.split,toUpperCase:u.toUpperCase,toLowerCase:u.toLowerCase,trim:u.trim,replace:u.replace,pad:u.pad,duplicate:f.duplicate,sum:f.sum,min:f.min,max:f.max,divide:f.divide,mult:f.mult,ceil:f.ceil,round:f.round,floor:f.floor,trunc:f.trunc,toString:h.toString,size:h.size,contains:h.contains,reverse:h.reverse,repeatify:h.repeatify,concat:h.concat,return:h.return,isFunction:o.isFunction,isArray:o.isArray,isObject:o.isObject,isNumber:o.isNumber,isString:o.isString,isBoolean:o.isBoolean,isInteger:o.isInteger,isEmpty:o.isEmpty,empty:o.isEmpty,isNull:o.isNull,isNaN:o.isNaN,isUndefined:o.isUndefined,e:function(t,n){return o.isEmpty(s.get(t,n))},shuffle:a.shuffle,first:a.first,last:a.last,remove:a.remove,clear:a.clear,inArray:a.inArray,unq:a.uniq,uniq:a.uniq,uniqBy:a.uniqBy,filter:a.filter,filterBy:a.filterBy,map:a.map,reduce:a.reduce,sort:a.sort,forEach:a.forEach,extend:s.extend,assign:s.assign,clone:s.assign,get:s.get,keys:s.keys,getKeys:s.getKeys,merge:s.merge,isTrue:c.isTrue,isFalse:c.isFalse,isEqual:c.isEqual,eq:c.isEqual,Not:c.Not,on:l.on,emit:l.emit,delete:l.delete,each:r.each,waterfall:r.waterfall,wf:r.waterfall,forever:r.forever,fe:r.forever,parallel:r.parallel,par:r.parallel,parallelLimit:r.parallelLimit,pl:r.parallelLimit,epl:r.epl,eachpl:r.eachpl,eachParallelLimit:r.eachParallelLimit,for:r.forSync,forSync:r.forSync,times:r.times,chain:function(t){return new d(t)},c:function(t){return new d(t)}}},function(t,n){function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function e(t){if(c===setTimeout)return setTimeout(t,0);if((c===i||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(n){try{return c.call(null,t,0)}catch(n){return c.call(this,t,0)}}}function o(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(n){try{return h.call(null,t)}catch(n){return h.call(this,t)}}}function a(){y&&d&&(y=!1,d.length?p=d.concat(p):m=-1,p.length&&s())}function s(){if(!y){var t=e(a);y=!0;for(var n=p.length;n;){for(d=p,p=[];++m<n;)d&&d[m].run();m=-1,n=p.length}d=null,y=!1,o(t)}}function u(t,n){this.fun=t,this.array=n}function f(){}var c,h,l=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:i}catch(t){c=i}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var d,p=[],y=!1,m=-1;l.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)n[i-1]=arguments[i];p.push(new u(t,n)),1!==p.length||y||e(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=f,l.addListener=f,l.once=f,l.off=f,l.removeListener=f,l.removeAllListeners=f,l.emit=f,l.prependListener=f,l.prependOnceListener=f,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,n,i){var r=i(2),e=i(3),o=i(0),a=i(4),s=i(1),u=i(5),f=i(6),c=i(7),h=i(9),l=i(8);t.exports=function(t){if(o.isEmpty(t))throw new Error("Chain function not contains values.");return this.data=t,this.ifElse=function(t,n){return this.data=e.ifElse(this.data,t,n),this},this.function=function(t){return this.data=e.function(this.data,t),this},this.toInt=function(){return this.data=u.toInt(this.data),this},this.excerpt=function(){return this.data=u.excerpt(this.data),this},this.dos2unix=function(){return this.data=u.dos2unix(this.data),this},this.capitalize=function(){return this.data=u.capitalize(this.data),this},this.toJSON=function(){return this.data=u.toJSON(this.data),this},this.json=function(){return this.data=u.json(this.data),this},this.split=function(t,n){return this.data=u.split(this.data,t,n),this},this.toLowerCase=function(){return this.data=u.toLowerCase(this.data),this},this.toUpperCase=function(){return this.data=u.toUpperCase(this.data),this},this.trim=function(){return this.data=u.trim(this.data),this},this.replace=function(t,n){return this.data=u.replace(this.data,t,n),this},this.pad=function(t,n){return this.data=u.pad(this.data,t,n),this},this.duplicate=function(){return this.data=f.duplicate(this.data),this},this.min=function(){return this.data=f.min(this.data),this},this.max=function(){return this.data=f.max(this.data),this},this.sum=function(t){return this.data=f.sum(this.data,t),this},this.mult=function(t){return this.data=f.mult(this.data,t),this},this.divide=function(t){return this.data=f.divide(this.data,t),this},this.numerator=function(t){return this.data=f.divide(t,this.data),this},this.ceil=function(){return this.data=f.ceil(this.data),this},this.round=function(){return this.data=f.round(this.data),this},this.floor=function(){return this.data=f.floor(this.data),this},this.trunc=function(){return this.data=f.trunc(this.data),this},this.toString=function(){return this.data=l.toString(this.data),this},this.size=function(){return this.data=l.size(this.data),this},this.contains=function(t){return this.data=l.contains(this.data,t),this},this.reverse=function(){return this.data=l.reverse(this.data),this},this.repeatify=function(t){return this.data=l.repeatify(this.data,t),this},this.concat=function(t){return this.data=l.concat(this.data,t),this},this.isFunction=function(){return this.data=o.isFunction(this.data),this},this.isArray=function(){return this.data=o.isArray(this.data),this},this.isObject=function(){return this.data=o.isObject(this.data),this},this.isNumber=function(){return this.data=o.isNumber(this.data),this},this.isString=function(){return this.data=o.isString(this.data),this},this.isBoolean=function(){return this.data=o.isBoolean(this.data),this},this.isInteger=function(){return this.data=o.isInteger(this.data),this},this.isEmpty=function(){return this.data=o.isEmpty(this.data),this},this.empty=function(){return this.data=o.isEmpty(this.data),this},this.isNull=function(){return this.data=o.isNull(this.data),this},this.isNaN=function(){return this.data=o.isNaN(this.data),this},this.isUndefined=function(){return this.data=o.isUndefined(this.data),this},this.shuffle=function(){return this.data=a.shuffle(this.data),this},this.first=function(){return this.data=a.first(this.data),this},this.last=function(){return this.data=a.last(this.data),this},this.remove=function(t){return this.data=a.remove(this.data,t),this},this.clear=function(){return this.data=a.clear(this.data),this},this.inArray=function(t){return this.data=a.inArray(this.data,t),this},this.unq=this.uniq=function(){return this.data=a.uniq(this.data),this},this.uniqBy=function(t){return this.data=a.uniq(this.data,t),this},this.filter=function(t){return this.data=a.filter(this.data,t),this},this.filterBy=function(t){return this.data=a.filterBy(this.data,t),this},this.map=function(t){return this.data=a.map(this.data,t),this},this.reduce=function(t){return this.data=a.reduce(this.data,t),this},this.sort=function(t){return this.data=a.sort(this.data,t),this},this.forEach=function(t){a.forEach(this.data,t)},this.extend=function(t){return this.data=s.extend(this.data,t),this},this.get=function(t){return this.data=s.get(this.data,t),this},this.keys=function(){return this.data=s.keys(this.data),this},this.getKeys=function(){return this.data=s.getKeys(this.data),this},this.merge=function(t){return this.data=s.merge(this.data,t),this},this.isTrue=function(){return this.data=c.isTrue(this.data),this},this.isFalse=function(){return this.data=c.isFalse(this.data),this},this.isEqual=function(t){return this.data=c.isEqual(this.data,t),this},this.eq=function(t){return this.data=c.isEqual(this.data,t),this},this.Not=function(){return this.data=c.not(this.data),this},this.not=function(){return this.data=c.not(this.data),this},this.on=function(t,n){return h.on(t,n),this},this.emit=function(t){return h.emit(t,this.data),this},this.delete=function(t){return h.delete(t),this},this.each=function(t,n){r.each(this.data,t,n)},this.epl=function(t,n,i){r.epl(this.data,t,n,i)},this.and=function(t){return!!this.data&&(this.data=t,this)},this.value=this.v=this.return=this.r=function(){return this.data},this.noReturn=this.end=function(){return null},this}}])});