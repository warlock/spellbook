
  // instrument by jscoverage, do not modifly this file
  (function(file, lines, conds, source) {
      var BASE;
      if (typeof global === "object") {
          BASE = global;
      } else if (typeof window === "object") {
          BASE = window;
      } else {
          throw new Error("[jscoverage] unknow ENV!");
      }
      if (BASE._$jscoverage) {
          BASE._$jscmd(file, "init", lines, conds, source);
          return;
      }
      var cov = {};
      /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
      function jscmd(file, type, line, express, start, offset) {
          var storage;
          switch (type) {
            case "init":
              if (cov[file]) {
                  storage = cov[file];
              } else {
                  storage = [];
                  for (var i = 0; i < line.length; i++) {
                      storage[line[i]] = 0;
                  }
                  var condition = express;
                  var source = start;
                  storage.condition = condition;
                  storage.source = source;
              }
              cov[file] = storage;
              break;

            case "line":
              storage = cov[file];
              storage[line]++;
              break;

            case "cond":
              storage = cov[file];
              storage.condition[line]++;
              return express;
          }
      }
      BASE._$jscoverage = cov;
      BASE._$jscmd = jscmd;
      jscmd(file, "init", lines, conds, source);
  })("spellbook.js", [2,3,22,26,30,34,38,42,46,51,63,73,77,81,88,102,116,120,124,128,140,146,150,154,158,176,198,208,222,226,236,244,266,293,321,334,339,4,19,7,8,11,16,17,13,14,23,27,31,35,39,43,56,57,70,65,66,67,68,74,78,85,91,99,94,95,96,104,109,112,110,117,121,125,129,130,137,133,134,141,142,143,147,151,155,159,160,168,162,163,164,177,178,180,199,202,205,203,210,217,223,227,233,229,230,237,241,239,245,246,247,248,252,249,267,268,269,270,271,275,272,276,279,280,287,288,294,295,296,297,298,302,299,303,306,307,315,316,322,323,330,324,326,327,335,340,342,343,348,349,354,355,360,361,366,367,372,373,378,379,384,385,390,391,396,397,402,403,408,409,414,415,420,421,426,427,432,433,438,439,440,446,447,452,453,458,459,464,465,470,471,478,492,479,480,481,482,483,486,489,484,487,494,500,526,532,536,540,542,552,580,495,496,505,509,512,513,517,520,522,527,528,533,537,543,544,545,549,553,571,572,573,574,575,555,562,559,566,567,568], {"5_6_30":0,"5_6_13":0,"5_23_13":0,"6_6_20":0,"8_10_4":0,"12_7_21":0,"27_9_23":0,"27_36_20":0,"31_10_23":0,"31_37_30":0,"35_9_23":0,"35_36_21":0,"39_9_23":0,"39_36_21":0,"47_6_18":0,"52_6_50":0,"52_6_23":0,"52_33_23":0,"54_6_18":0,"83_7_22":0,"89_5_66":0,"89_5_40":0,"89_49_22":0,"89_5_12":0,"89_21_24":0,"93_6_46":0,"105_8_41":0,"108_6_47":0,"108_6_23":0,"108_33_20":0,"132_6_64":0,"132_6_33":0,"132_43_27":0,"147_10_28":0,"147_42_18":0,"147_10_13":0,"147_27_11":0,"161_7_16":0,"165_14_30":0,"169_7_30":0,"172_6_16":0,"173_11_30":0,"179_7_22":0,"181_8_4":0,"182_9_13":0,"183_10_30":0,"187_8_30":0,"188_9_4":0,"189_10_13":0,"195_6_26":0,"200_7_30":0,"209_6_46":0,"209_6_17":0,"209_27_25":0,"211_7_18":0,"214_9_27":0,"228_6_18":0,"253_8_5":0,"254_8_24":0,"256_9_30":0,"261_6_26":0,"277_8_5":0,"278_8_23":0,"281_15_42":0,"281_15_8":0,"281_27_30":0,"285_6_26":0,"304_8_5":0,"305_8_19":0,"308_15_42":0,"308_15_8":0,"308_27_30":0,"312_6_42":0,"312_6_22":0,"312_32_16":0,"313_7_20":0,"318_14_30":0,"325_7_9":0,"328_14_25":0,"341_6_23":0,"347_6_22":0,"353_6_23":0,"359_6_24":0,"365_6_22":0,"371_6_21":0,"377_6_24":0,"383_6_25":0,"389_6_21":0,"395_6_24":0,"401_6_24":0,"407_6_25":0,"413_6_27":0,"419_6_23":0,"425_6_28":0,"431_6_26":0,"437_6_27":0,"445_6_24":0,"451_6_30":0,"457_6_26":0,"463_6_26":0,"469_6_28":0,"477_4_27":0,"508_7_44":0,"514_7_28":0,"521_7_44":0,"546_7_18":0,"557_8_27":0,"558_9_24":0,"565_6_28":0,"576_7_52":0,"576_7_18":0,"576_29_30":0,"577_12_18":0}, ["// http://www.spellbook.io","var Spellbook = function () {","\tthis.range = function (a, b, step) {","\t\tvar A = [];","\t\tif (this.empty(a) || this.empty(b)) return A;","\t\tif (typeof a == 'number') {","\t\t\tA[0] = a;","\t\t\tstep = step || 1;","\t\t\twhile (a+step<= b) A[A.length] = a += step;","\t\t} else {","\t\t\tvar s = 'abcdefghijklmnopqrstuvwxyz';","\t\t\tif (a === a.toUpperCase()) {","\t\t\t\tb = b.toUpperCase();","\t\t\t\ts = s.toUpperCase();","\t\t\t}","\t\t\ts = s.substring(s.indexOf(a), s.indexOf(b)+ 1);","\t\t\tA = s.split('');","\t\t}","\t\treturn A;","\t};","","\tthis.isFunction = function (fn) {","\t\treturn typeof fn === 'function';","\t};","","\tthis.isArray = function (obj) {","\t\treturn typeof obj === \"object\" && obj instanceof Array;","\t};","","\tthis.isObject = function (obj) {"," \t\treturn typeof obj === \"object\" && (this.isArray(obj) === false );","\t};","","\tthis.isNumber = function (obj) {","\t\treturn typeof obj === \"number\" || obj instanceof Number;","\t};","","\tthis.isString = function (obj ) {","\t\treturn typeof obj === \"string\" || obj instanceof String;","\t};","","\tthis.isBoolean = function (obj) {","\t\treturn typeof obj === \"boolean\";","\t};","","\tthis.isInteger = function (obj) {","\t\tif (this.isNumber(obj)) return obj % 1 === 0;","\t\telse return false;","\t};","","\tthis.random = function (min, max) {","\t\tif (typeof min === \"number\" && typeof max === \"number\") return Math.floor(Math.random() * (max - min)) + min;","\t\telse {","\t\t\tif(!this.isArray(min)) return 0;","\t\t\telse {","\t\t\t\tvar index = Math.floor(Math.random() * (min.length));","\t\t\t\treturn min[index];","\t\t\t}","\t\t}","\t};","","","\tthis.shuffle = function (array) {","\t\tfor (var i = array.length-1; i >=0; i--) {","\t\t\tvar randomIndex = Math.floor(Math.random()*(i+1));","\t\t\tvar itemAtIndex = array[randomIndex];","\t\t\tarray[randomIndex] = array[i];","\t\t\tarray[i] = itemAtIndex;","\t\t}","\t\treturn array;","\t};","","\tthis.first = function (array) {","\t\treturn array[0];","\t};","","\tthis.last = function (array) {","\t\treturn array[array.length - 1];","\t};","","\tthis.extend = function (obj, obj2) {","\t\tfor (var i in obj2) {","\t\t\tif (obj2.hasOwnProperty(i)) obj[i] = obj2[i];","\t\t}","\t\treturn obj;","\t};",""," \tthis.clone = this.assign = function (obj) {","\t\tif(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) return obj;","","\t\tvar temp = obj.constructor();","\t\tfor(var key in obj) {","\t\t\tif(Object.prototype.hasOwnProperty.call(obj, key)) {","\t\t\t\tobj.isActiveClone = null;","\t\t\t\ttemp[key] = obj[key];","\t\t\t\tdelete obj.isActiveClone;","\t\t\t}","\t\t}","\t\treturn temp;","\t};","","\tthis.remove = function (array, obj) {","\t\tfunction filter(array, obj) {","\t\t\treturn array.filter(function (e) {","\t\t\t\tif (JSON.stringify(e) !== JSON.stringify(obj)) return e;","\t\t\t});","\t\t}","\t\tif (typeof obj === 'object' && obj instanceof Array) {","\t\t\tobj.forEach(function (e) {","\t\t\t\tarray = filter(array, e);","\t\t\t});","\t\t\treturn array;","\t\t} else return filter(array, obj);","\t};","","\tthis.clear = function (array) {","\t\treturn array.splice(array.length,0);","\t};","","\tthis.inArray = function (a, b) {","\t\treturn !!~a.indexOf(b);","\t};","","\tthis.contains = function (a, b) {","\t\treturn !!~a.indexOf(b);","\t};","","\tthis.unq = this.uniq = function (array, key) {","\t\tvar narray = [];","\t\tvar keys = {};","\t\tfor (var i = 0; i < array.length; i++) {","\t\t\tif(keys[array[i][key]] === undefined && array[i][key] !== undefined) {","\t\t\t\tnarray.push(array[i][key]);","\t\t\t\tkeys[array[i][key]] = 1;","\t\t\t}","\t\t}","\t\treturn narray;","\t};","","\tthis.excerpt = function (str, nwords) {","\t\tvar words = str.split(' ');","\t\twords.splice(nwords, words.length-1);","\t\treturn words.join(' ');","\t};","","\tthis.isEmpty = this.empty = function (data) {","\t\treturn (data === null || data === \"\" || data === undefined);","\t};","","\tthis.capitalize = function (data) {","\t\treturn data.charAt(0).toUpperCase() + data.slice(1);","\t};","","\tthis.dos2unix = function (data) {","\t\treturn data.replace(/\\r\\n/g, '\\n');","\t};","","\tthis.each = function (array, callback, response) {","\t\tvar i = 0;","\t\tvar done = function () {","\t\t\tif (i < array.length) {","\t\t\t\ty = i;","\t\t\t\ti++;","\t\t\t\tcallback(array[y], y, done, end);","\t\t\t} else if (typeof response === 'function') response();","\t\t};","","\t\tvar end = function (data) {","\t\t\tif (typeof response === 'function') response(data);","\t\t};","","\t\tif (i < array.length) done();","\t\telse if (typeof response === 'function') response();","\t};","","\tthis.wf = this.waterfall = function (callbacks, response) {","\t\tvar i = 0;","\t\tvar done = function (data, respdata) {","\t\t\tif (i < callbacks.length-1) {","\t\t\t\ti++;","\t\t\t\tif (data) {","\t\t\t\t\tif (data === true) {","\t\t\t\t\t\tif (typeof response === 'function') response(respdata);","\t\t\t\t\t} else callbacks[i](done, data);","\t\t\t\t} else callbacks[i](done);","\t\t\t} else {","\t\t\t\tif (typeof response === 'function') {","\t\t\t\t\tif (data) {","\t\t\t\t\t\tif (data === true) response(respdata);","\t\t\t\t\t\telse response(data);","\t\t\t\t\t} else response();","\t\t\t\t}","\t\t\t}","\t\t};","\t\tif (callbacks instanceof Array) callbacks[i](done);","\t};","","\tthis.fe = this.forever = function (callback, response) {","\t\tvar end = function (data) {","\t\t\tif (typeof response === 'function') response(data);","\t\t};","\t\tvar next = function (data) {","\t\t\tcallback(next, end);","\t\t};","\t\tcallback(next, end);","\t};","","\tthis.get =  function (obj, route) {","\t\tif (obj !== undefined && typeof route === \"string\") {","\t\t\troute = route.split(\".\");","\t\t\tif (route.length === 1 ) return obj[route[0]];","\t\t\telse {","\t\t\t\tfor (var i = 0; i < route.length; i++) {","\t\t\t\t\tif (obj[route[i]] !== undefined) obj = obj[route[i]];","\t\t\t\t\telse return undefined;","\t\t\t\t}","\t\t\t\treturn obj;","\t\t\t}","\t\t} else return undefined;","\t};","","\tthis.size = function (obj) {","\t\treturn Object.keys(obj).length;","\t};","","\tthis.getKeys = function(obj, keys) {","\t\tvar nobj = {};","\t\tif (this.isArray(keys)) {","\t\t\tkeys.forEach(function (key) {","\t\t\t\tnobj[key] = obj[key];","\t\t\t});","\t\t} else nobj[keys] = obj[keys];","\t\treturn nobj;","\t};","","\tthis.repeatify = function (val, num) {","\t\tvar strArray = [];","\t\tfor (var i = 0; i < num; i++) {","\t\t\tstrArray.push(val.normalize());","\t\t}","\t\treturn strArray;","\t};","","\tthis.parallel = function (callbacks, response) {","\t\tvar it = 0;","\t\tvar data = [];","\t\tvar async = function (ix) {","\t\t\tsetTimeout(function () {","\t\t\t\tcallbacks[ix](done);","\t\t\t}, 0);","","\t\t\tvar done = function (gdata) {","\t\t\t\tif (gdata) data[ix] = gdata;","\t\t\t\tif (it < callbacks.length -1) it++;","\t\t\t\telse {","\t\t\t\t\tif (typeof response === 'function')response(data);","\t\t\t\t}","\t\t\t};","\t\t};","","\t\tif (callbacks instanceof Array) {","\t\t\tfor (var i = 0; i < callbacks.length; i++) async(i);","\t\t}","\t};","","\tthis.pl = this.parallelLimit = function (limit, callbacks, response) {","\t\tvar it = 0;","\t\tvar to = callbacks.length;","\t\tvar data = [];","\t\tvar async = function (ix) {","\t\t\tsetTimeout(function () {","\t\t\t\tcallbacks[ix](done);","\t\t\t}, 0);","","\t\t\tvar done = function (gdata) {","\t\t\t\tto--;","\t\t\t\tif (gdata) data[ix] = gdata;","\t\t\t\tif (it !== callbacks.length) {","\t\t\t\t\tasync(it);","\t\t\t\t\tit++;","\t\t\t\t} else if (to === 0 && typeof response === 'function') response(data);","\t\t\t};","\t\t};","","\t\tif (callbacks instanceof Array) {","\t\t\tfor (var i = 0; i < limit; i++) {","\t\t\t\tasync(i);","\t\t\t\tit++;","\t\t\t}","\t\t}","\t};","","\tthis.epl = this.eachpl = this.eachParallelLimit = function (array, limit, callback, response) {","\t\tvar it = 0;","\t\tvar to = array.length;","\t\tvar data = [];","\t\tvar async = function (item, index) {","\t\t\tsetTimeout(function () {","\t\t\t\tcallback(item, index, done);","\t\t\t}, 0);","","\t\t\tvar done = function (gdata) {","\t\t\t\tto--;","\t\t\t\tif (gdata) data[ix] = gdata;","\t\t\t\tif (it !== array.length) {","\t\t\t\t\tasync(array[it], it);","\t\t\t\t\tit++;","\t\t\t\t} else if (to === 0 && typeof response === 'function') response(data);","\t\t\t};","\t\t};","","\t\tif (array instanceof Array && array.length > 0) {","\t\t\tif (limit > array.length) limit =  array.length;","\t\t\tfor (var i = 0; i < limit; i++) {","\t\t\t\tasync(array[i], i);","\t\t\t\tit++;","\t\t\t}","\t\t} else if ( typeof response === 'function') response(data);","\t};","","\tthis.for = this.forSync = function (ini, fin, inc, callback, end) {","\t\tvar store = [];","\t\tvar done = function (data) {","\t\t\tstore.push(data);","\t\t\tif (ini < fin) {","\t\t\t\tini = ini + inc;","\t\t\t\tcallback(ini, done, end);","\t\t\t} else if (typeof end === 'function') end(store);","\t\t};","\t\tcallback(ini, done, end);","\t};","","","\tthis.times = function (fin, callback, end) {","\t\tthis.for(0, fin, 1, callback, end);","\t};","","","\tthis.extender = function () {","\t\tvar self = this;","\t\tif (!Array.prototype.remove) {","\t\t\tArray.prototype.remove = function (obj) {","\t\t\t\treturn self.remove(this, obj);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.clear) {","\t\t\tArray.prototype.clear = function () {","\t\t\t\treturn self.remove(this);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.random) {","\t\t\tArray.prototype.random = function () {","\t\t\t\treturn self.random(this);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.shuffle) {","\t\t\tArray.prototype.shuffle = function () {","\t\t\t\treturn self.shuffle(this);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.first) {","\t\t\tArray.prototype.first = function () {","\t\t\t\treturn self.first(this);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.last) {","\t\t\tArray.prototype.last = function () {","\t\t\t\treturn self.last(this);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.inArray) {","\t\t\tArray.prototype.inArray = function (value) {","\t\t\t\treturn self.inArray(this, value);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.contains) {","\t\t\tArray.prototype.contains = function (value) {","\t\t\t\treturn self.inArray(this, value);","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.each) {","\t\t\tArray.prototype.each = function (callback, response) {","\t\t\t\tself.each(this, callback, response);","\t\t\t};","\t\t}","","\t\tif (!Object.prototype.extend) {","\t\t\tObject.prototype.extend = function (obj) {","\t\t\t\tself.extend(this, obj);","\t\t\t};","\t\t}","","\t\tif (!Object.prototype.remove) {","\t\t\tObject.prototype.remove = function (keys) {","\t\t\t\treturn self.remove(this, keys);","\t\t\t};","\t\t}","","\t\tif (!Object.prototype.getKeys) {","\t\t\tObject.prototype.getKeys = function(keys) {","\t\t\t\treturn self.getKeys(this, keys);","\t\t\t};","\t\t}","","\t\tif (!String.prototype.repeatify) {","\t\t\tString.prototype.repeatify = function (num) {","\t\t\t\treturn self.repeatify(this, num);","\t\t\t};","\t\t}","","\t\tif (!Number.prototype.times) {","\t\t\tNumber.prototype.times = function (callback, end) {","\t\t\t\tself.for(0, this, 1, callback, end);","\t\t\t};","\t\t}","","\t\tif (!String.prototype.capitalize) {","\t\t\tString.prototype.capitalize = function () {","\t\t\t\treturn self.capitalize(this);","\t\t\t};","\t\t}","","\t\tif (!String.prototype.dos2unix) {","\t\t\tString.prototype.dos2unix = function () {","\t\t\t\treturn self.dos2unix(this);","\t\t\t};","\t\t}","","\t\tif (!Number.prototype.isInteger) {","\t\t\tNumber.prototype.isInteger = function () {","\t\t\t\tthis.isInteger = function () {","\t\t\t\t\treturn self.isInteger(this);","\t\t\t\t};","\t\t\t};","\t\t}","","\t\tif (!Array.prototype.isArray) {","\t\t\tthis.isArray = function () {","\t\t\t\treturn self.isArray(this);","\t\t\t};","\t\t}","","\t\tif (!Function.prototype.isFunction) {","\t\t\tthis.isFunction = function () {","\t\t\t\treturn self.isFunction(this);","\t\t\t};","\t\t}","","\t\tif (!Object.prototype.isObject) {","\t\t\tthis.isObject = function () {","\t\t \t\treturn self.isObject(this);","\t\t\t};","\t\t}","","\t\tif (!String.prototype.isString) {","\t\t\tthis.isString = function () {","\t\t\t\treturn self.isString(this);","\t\t\t};","\t\t}","","\t\tif (!Boolean.prototype.isBoolean) {","\t\t\tthis.isBoolean = function () {","\t\t \t   \treturn self.isBoolean(this);","\t\t\t};","\t\t}","\t};","};","","if (typeof process === 'object') {","\tSpellbook.prototype.cp = function (source, target) {","\t\treturn new Promise(function (resolve, reject) {","\t\t\tvar rd = fs.createReadStream(source);","\t\t\trd.on('error', reject);","\t\t\tvar wr = fs.createWriteStream(target);","\t\t\twr.on('error', function (err) {","\t\t\t\treject(err);","\t\t\t});","\t\t\twr.on('finish', function (d) {","\t\t\t\tresolve(d);","\t\t\t});","\t\t\trd.pipe(wr);","\t\t});","\t};","\tmodule.exports = new Spellbook();","} else {","\tSpellbook.prototype.ready = function (callback) {","\t\tdocument.addEventListener(\"DOMContentLoaded\", function(event) {","\t\t\tcallback(event);","\t\t});","\t};","","\tSpellbook.prototype.comp = {","\t\tdata : {},","\t\tstack : [],","\t\trun : function () {","\t\t\tfor (var i = 0; i < this.stack.length; i++) this.stack[i].action(this.stack[i].attr[0], this.stack[i].attr[1]);","\t\t\tthis.stack = [];","\t\t},","\t\tget : function (name, attr) {","\t\t\tif (typeof this.data[name].action === 'function') this.stack.push({ action : this.data[name].action, attr : [this, attr]});","\t\t\treturn this.data[name].html(this, attr);","\t\t},","\t\tset : function (name, html, action) {","\t\t\tthis.data[name] = {};","\t\t\tthis.data[name].html = html;","\t\t\tif (typeof action === 'function') this.data[name].action = action;","\t\t},","\t\tdestroy : function (name) {","\t\t\tdocument.getElementById(name).innerHTML = \"\";","\t\t},","\t\trender : function (name, id, attr) {","\t\t\tdocument.getElementById(id).innerHTML = this.data[name].html(this, attr);","\t\t\tif (typeof this.data[name].action === 'function') this.stack.push({ action : this.data[name].action, attr : [this, attr]});","\t\t\tthis.run();","\t\t}","\t};","","\tSpellbook.prototype.on = function (obj, eventHandler, callback) {","\t\tobj.addEventListener(eventHandler, function (event) {","\t\t\tcallback(event);","\t\t});","\t};","","\tSpellbook.prototype.id = function (id) {","\t\treturn document.getElementById(id);","\t};","","\tSpellbook.prototype.class = function (id) {","\t\treturn document.getElementsByClassName(id);","\t};","","\tSpellbook.prototype.ajax = {};","","\tSpellbook.prototype.ajax.get = function (url, callback) {","\t\tvar xhr = new XMLHttpRequest();","\t\txhr.open('GET', encodeURI(url));","\t\txhr.onload = function () {","\t\t\tif (xhr.status === 200) callback(false, xhr.responseText);","\t\t\telse callback(\"Request failed.  Returned status of \" + status);","\t\t};","\t\txhr.send();","\t};","","\tSpellbook.prototype.ajax.post = function (url, data, header, callback) {","\t\tvar finaldata = \"\";","\t\tfunction param(object) {","\t\t\tvar encodedString = '';","\t\t\tfor (var prop in object) {","\t\t\t\tif (object.hasOwnProperty(prop)) {","\t\t\t\t\tif (encodedString.length > 0) encodedString += '&';","\t\t\t\t\tencodedString += encodeURI(prop + '=' + object[prop]);","\t\t\t\t}","\t\t\t}","\t\t\treturn encodedString;","\t\t}","","\t\tif (typeof header === \"function\") {","\t\t\tcallback = header;","\t\t\theader = \"application/json\";","\t\t\tfinaldata = JSON.stringify(data);","\t\t} else finaldata = param(data);","","\t\tvar xhr = new XMLHttpRequest();","\t\txhr.open('POST', encodeURI(url));","\t\txhr.setRequestHeader('Content-Type', header);","\t\txhr.send(finaldata);","\t\txhr.onload = function () {","\t\t\tif (xhr.status === 200 && xhr.responseText !== undefined) callback(null, xhr.responseText);","\t\t\telse if (xhr.status !== 200) callback('Request failed.  Returned status of ' + xhr.status);","\t\t};","\t};","\tvar sb = new Spellbook();","}",""]);
// http://www.spellbook.io
_$jscmd("spellbook.js", "line", 2);

var Spellbook = function() {
    _$jscmd("spellbook.js", "line", 3);
    this.range = function(a, b, step) {
        _$jscmd("spellbook.js", "line", 4);
        var A = [];
        if (_$jscmd("spellbook.js", "cond", "5_6_30", _$jscmd("spellbook.js", "cond", "5_6_13", this.empty(a)) || _$jscmd("spellbook.js", "cond", "5_23_13", this.empty(b)))) return A;
        if (_$jscmd("spellbook.js", "cond", "6_6_20", typeof a == "number")) {
            _$jscmd("spellbook.js", "line", 7);
            A[0] = a;
            _$jscmd("spellbook.js", "line", 8);
            step = _$jscmd("spellbook.js", "cond", "8_10_4", step) || 1;
            while (a + step <= b) A[A.length] = a += step;
        } else {
            _$jscmd("spellbook.js", "line", 11);
            var s = "abcdefghijklmnopqrstuvwxyz";
            if (_$jscmd("spellbook.js", "cond", "12_7_21", a === a.toUpperCase())) {
                _$jscmd("spellbook.js", "line", 13);
                b = b.toUpperCase();
                _$jscmd("spellbook.js", "line", 14);
                s = s.toUpperCase();
            }
            _$jscmd("spellbook.js", "line", 16);
            s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
            _$jscmd("spellbook.js", "line", 17);
            A = s.split("");
        }
        _$jscmd("spellbook.js", "line", 19);
        return A;
    };
    _$jscmd("spellbook.js", "line", 22);
    this.isFunction = function(fn) {
        _$jscmd("spellbook.js", "line", 23);
        return typeof fn === "function";
    };
    _$jscmd("spellbook.js", "line", 26);
    this.isArray = function(obj) {
        _$jscmd("spellbook.js", "line", 27);
        return _$jscmd("spellbook.js", "cond", "27_9_23", typeof obj === "object") && _$jscmd("spellbook.js", "cond", "27_36_20", obj instanceof Array);
    };
    _$jscmd("spellbook.js", "line", 30);
    this.isObject = function(obj) {
        _$jscmd("spellbook.js", "line", 31);
        return _$jscmd("spellbook.js", "cond", "31_10_23", typeof obj === "object") && _$jscmd("spellbook.js", "cond", "31_37_30", this.isArray(obj) === false);
    };
    _$jscmd("spellbook.js", "line", 34);
    this.isNumber = function(obj) {
        _$jscmd("spellbook.js", "line", 35);
        return _$jscmd("spellbook.js", "cond", "35_9_23", typeof obj === "number") || _$jscmd("spellbook.js", "cond", "35_36_21", obj instanceof Number);
    };
    _$jscmd("spellbook.js", "line", 38);
    this.isString = function(obj) {
        _$jscmd("spellbook.js", "line", 39);
        return _$jscmd("spellbook.js", "cond", "39_9_23", typeof obj === "string") || _$jscmd("spellbook.js", "cond", "39_36_21", obj instanceof String);
    };
    _$jscmd("spellbook.js", "line", 42);
    this.isBoolean = function(obj) {
        _$jscmd("spellbook.js", "line", 43);
        return typeof obj === "boolean";
    };
    _$jscmd("spellbook.js", "line", 46);
    this.isInteger = function(obj) {
        if (_$jscmd("spellbook.js", "cond", "47_6_18", this.isNumber(obj))) return obj % 1 === 0; else return false;
    };
    _$jscmd("spellbook.js", "line", 51);
    this.random = function(min, max) {
        if (_$jscmd("spellbook.js", "cond", "52_6_50", _$jscmd("spellbook.js", "cond", "52_6_23", typeof min === "number") && _$jscmd("spellbook.js", "cond", "52_33_23", typeof max === "number"))) return Math.floor(Math.random() * (max - min)) + min; else {
            if (_$jscmd("spellbook.js", "cond", "54_6_18", !this.isArray(min))) return 0; else {
                _$jscmd("spellbook.js", "line", 56);
                var index = Math.floor(Math.random() * min.length);
                _$jscmd("spellbook.js", "line", 57);
                return min[index];
            }
        }
    };
    _$jscmd("spellbook.js", "line", 63);
    this.shuffle = function(array) {
        for (var i = array.length - 1; i >= 0; i--) {
            _$jscmd("spellbook.js", "line", 65);
            var randomIndex = Math.floor(Math.random() * (i + 1));
            _$jscmd("spellbook.js", "line", 66);
            var itemAtIndex = array[randomIndex];
            _$jscmd("spellbook.js", "line", 67);
            array[randomIndex] = array[i];
            _$jscmd("spellbook.js", "line", 68);
            array[i] = itemAtIndex;
        }
        _$jscmd("spellbook.js", "line", 70);
        return array;
    };
    _$jscmd("spellbook.js", "line", 73);
    this.first = function(array) {
        _$jscmd("spellbook.js", "line", 74);
        return array[0];
    };
    _$jscmd("spellbook.js", "line", 77);
    this.last = function(array) {
        _$jscmd("spellbook.js", "line", 78);
        return array[array.length - 1];
    };
    _$jscmd("spellbook.js", "line", 81);
    this.extend = function(obj, obj2) {
        for (var i in obj2) {
            if (_$jscmd("spellbook.js", "cond", "83_7_22", obj2.hasOwnProperty(i))) obj[i] = obj2[i];
        }
        _$jscmd("spellbook.js", "line", 85);
        return obj;
    };
    _$jscmd("spellbook.js", "line", 88);
    this.clone = this.assign = function(obj) {
        if (_$jscmd("spellbook.js", "cond", "89_5_66", _$jscmd("spellbook.js", "cond", "89_5_40", _$jscmd("spellbook.js", "cond", "89_5_12", obj === null) || _$jscmd("spellbook.js", "cond", "89_21_24", typeof obj !== "object")) || _$jscmd("spellbook.js", "cond", "89_49_22", "isActiveClone" in obj))) return obj;
        _$jscmd("spellbook.js", "line", 91);
        var temp = obj.constructor();
        for (var key in obj) {
            if (_$jscmd("spellbook.js", "cond", "93_6_46", Object.prototype.hasOwnProperty.call(obj, key))) {
                _$jscmd("spellbook.js", "line", 94);
                obj.isActiveClone = null;
                _$jscmd("spellbook.js", "line", 95);
                temp[key] = obj[key];
                _$jscmd("spellbook.js", "line", 96);
                delete obj.isActiveClone;
            }
        }
        _$jscmd("spellbook.js", "line", 99);
        return temp;
    };
    _$jscmd("spellbook.js", "line", 102);
    this.remove = function(array, obj) {
        function filter(array, obj) {
            _$jscmd("spellbook.js", "line", 104);
            return array.filter(function(e) {
                if (_$jscmd("spellbook.js", "cond", "105_8_41", JSON.stringify(e) !== JSON.stringify(obj))) return e;
            });
        }
        if (_$jscmd("spellbook.js", "cond", "108_6_47", _$jscmd("spellbook.js", "cond", "108_6_23", typeof obj === "object") && _$jscmd("spellbook.js", "cond", "108_33_20", obj instanceof Array))) {
            _$jscmd("spellbook.js", "line", 109);
            obj.forEach(function(e) {
                _$jscmd("spellbook.js", "line", 110);
                array = filter(array, e);
            });
            _$jscmd("spellbook.js", "line", 112);
            return array;
        } else return filter(array, obj);
    };
    _$jscmd("spellbook.js", "line", 116);
    this.clear = function(array) {
        _$jscmd("spellbook.js", "line", 117);
        return array.splice(array.length, 0);
    };
    _$jscmd("spellbook.js", "line", 120);
    this.inArray = function(a, b) {
        _$jscmd("spellbook.js", "line", 121);
        return !!~a.indexOf(b);
    };
    _$jscmd("spellbook.js", "line", 124);
    this.contains = function(a, b) {
        _$jscmd("spellbook.js", "line", 125);
        return !!~a.indexOf(b);
    };
    _$jscmd("spellbook.js", "line", 128);
    this.unq = this.uniq = function(array, key) {
        _$jscmd("spellbook.js", "line", 129);
        var narray = [];
        _$jscmd("spellbook.js", "line", 130);
        var keys = {};
        for (var i = 0; i < array.length; i++) {
            if (_$jscmd("spellbook.js", "cond", "132_6_64", _$jscmd("spellbook.js", "cond", "132_6_33", keys[array[i][key]] === undefined) && _$jscmd("spellbook.js", "cond", "132_43_27", array[i][key] !== undefined))) {
                _$jscmd("spellbook.js", "line", 133);
                narray.push(array[i][key]);
                _$jscmd("spellbook.js", "line", 134);
                keys[array[i][key]] = 1;
            }
        }
        _$jscmd("spellbook.js", "line", 137);
        return narray;
    };
    _$jscmd("spellbook.js", "line", 140);
    this.excerpt = function(str, nwords) {
        _$jscmd("spellbook.js", "line", 141);
        var words = str.split(" ");
        _$jscmd("spellbook.js", "line", 142);
        words.splice(nwords, words.length - 1);
        _$jscmd("spellbook.js", "line", 143);
        return words.join(" ");
    };
    _$jscmd("spellbook.js", "line", 146);
    this.isEmpty = this.empty = function(data) {
        _$jscmd("spellbook.js", "line", 147);
        return _$jscmd("spellbook.js", "cond", "147_10_28", _$jscmd("spellbook.js", "cond", "147_10_13", data === null) || _$jscmd("spellbook.js", "cond", "147_27_11", data === "")) || _$jscmd("spellbook.js", "cond", "147_42_18", data === undefined);
    };
    _$jscmd("spellbook.js", "line", 150);
    this.capitalize = function(data) {
        _$jscmd("spellbook.js", "line", 151);
        return data.charAt(0).toUpperCase() + data.slice(1);
    };
    _$jscmd("spellbook.js", "line", 154);
    this.dos2unix = function(data) {
        _$jscmd("spellbook.js", "line", 155);
        return data.replace(/\r\n/g, "\n");
    };
    _$jscmd("spellbook.js", "line", 158);
    this.each = function(array, callback, response) {
        _$jscmd("spellbook.js", "line", 159);
        var i = 0;
        _$jscmd("spellbook.js", "line", 160);
        var done = function() {
            if (_$jscmd("spellbook.js", "cond", "161_7_16", i < array.length)) {
                _$jscmd("spellbook.js", "line", 162);
                y = i;
                _$jscmd("spellbook.js", "line", 163);
                i++;
                _$jscmd("spellbook.js", "line", 164);
                callback(array[y], y, done, end);
            } else if (_$jscmd("spellbook.js", "cond", "165_14_30", typeof response === "function")) response();
        };
        _$jscmd("spellbook.js", "line", 168);
        var end = function(data) {
            if (_$jscmd("spellbook.js", "cond", "169_7_30", typeof response === "function")) response(data);
        };
        if (_$jscmd("spellbook.js", "cond", "172_6_16", i < array.length)) done(); else if (_$jscmd("spellbook.js", "cond", "173_11_30", typeof response === "function")) response();
    };
    _$jscmd("spellbook.js", "line", 176);
    this.wf = this.waterfall = function(callbacks, response) {
        _$jscmd("spellbook.js", "line", 177);
        var i = 0;
        _$jscmd("spellbook.js", "line", 178);
        var done = function(data, respdata) {
            if (_$jscmd("spellbook.js", "cond", "179_7_22", i < callbacks.length - 1)) {
                _$jscmd("spellbook.js", "line", 180);
                i++;
                if (_$jscmd("spellbook.js", "cond", "181_8_4", data)) {
                    if (_$jscmd("spellbook.js", "cond", "182_9_13", data === true)) {
                        if (_$jscmd("spellbook.js", "cond", "183_10_30", typeof response === "function")) response(respdata);
                    } else callbacks[i](done, data);
                } else callbacks[i](done);
            } else {
                if (_$jscmd("spellbook.js", "cond", "187_8_30", typeof response === "function")) {
                    if (_$jscmd("spellbook.js", "cond", "188_9_4", data)) {
                        if (_$jscmd("spellbook.js", "cond", "189_10_13", data === true)) response(respdata); else response(data);
                    } else response();
                }
            }
        };
        if (_$jscmd("spellbook.js", "cond", "195_6_26", callbacks instanceof Array)) callbacks[i](done);
    };
    _$jscmd("spellbook.js", "line", 198);
    this.fe = this.forever = function(callback, response) {
        _$jscmd("spellbook.js", "line", 199);
        var end = function(data) {
            if (_$jscmd("spellbook.js", "cond", "200_7_30", typeof response === "function")) response(data);
        };
        _$jscmd("spellbook.js", "line", 202);
        var next = function(data) {
            _$jscmd("spellbook.js", "line", 203);
            callback(next, end);
        };
        _$jscmd("spellbook.js", "line", 205);
        callback(next, end);
    };
    _$jscmd("spellbook.js", "line", 208);
    this.get = function(obj, route) {
        if (_$jscmd("spellbook.js", "cond", "209_6_46", _$jscmd("spellbook.js", "cond", "209_6_17", obj !== undefined) && _$jscmd("spellbook.js", "cond", "209_27_25", typeof route === "string"))) {
            _$jscmd("spellbook.js", "line", 210);
            route = route.split(".");
            if (_$jscmd("spellbook.js", "cond", "211_7_18", route.length === 1)) return obj[route[0]]; else {
                for (var i = 0; i < route.length; i++) {
                    if (_$jscmd("spellbook.js", "cond", "214_9_27", obj[route[i]] !== undefined)) obj = obj[route[i]]; else return undefined;
                }
                _$jscmd("spellbook.js", "line", 217);
                return obj;
            }
        } else return undefined;
    };
    _$jscmd("spellbook.js", "line", 222);
    this.size = function(obj) {
        _$jscmd("spellbook.js", "line", 223);
        return Object.keys(obj).length;
    };
    _$jscmd("spellbook.js", "line", 226);
    this.getKeys = function(obj, keys) {
        _$jscmd("spellbook.js", "line", 227);
        var nobj = {};
        if (_$jscmd("spellbook.js", "cond", "228_6_18", this.isArray(keys))) {
            _$jscmd("spellbook.js", "line", 229);
            keys.forEach(function(key) {
                _$jscmd("spellbook.js", "line", 230);
                nobj[key] = obj[key];
            });
        } else nobj[keys] = obj[keys];
        _$jscmd("spellbook.js", "line", 233);
        return nobj;
    };
    _$jscmd("spellbook.js", "line", 236);
    this.repeatify = function(val, num) {
        _$jscmd("spellbook.js", "line", 237);
        var strArray = [];
        for (var i = 0; i < num; i++) {
            _$jscmd("spellbook.js", "line", 239);
            strArray.push(val.normalize());
        }
        _$jscmd("spellbook.js", "line", 241);
        return strArray;
    };
    _$jscmd("spellbook.js", "line", 244);
    this.parallel = function(callbacks, response) {
        _$jscmd("spellbook.js", "line", 245);
        var it = 0;
        _$jscmd("spellbook.js", "line", 246);
        var data = [];
        _$jscmd("spellbook.js", "line", 247);
        var async = function(ix) {
            _$jscmd("spellbook.js", "line", 248);
            setTimeout(function() {
                _$jscmd("spellbook.js", "line", 249);
                callbacks[ix](done);
            }, 0);
            _$jscmd("spellbook.js", "line", 252);
            var done = function(gdata) {
                if (_$jscmd("spellbook.js", "cond", "253_8_5", gdata)) data[ix] = gdata;
                if (_$jscmd("spellbook.js", "cond", "254_8_24", it < callbacks.length - 1)) it++; else {
                    if (_$jscmd("spellbook.js", "cond", "256_9_30", typeof response === "function")) response(data);
                }
            };
        };
        if (_$jscmd("spellbook.js", "cond", "261_6_26", callbacks instanceof Array)) {
            for (var i = 0; i < callbacks.length; i++) async(i);
        }
    };
    _$jscmd("spellbook.js", "line", 266);
    this.pl = this.parallelLimit = function(limit, callbacks, response) {
        _$jscmd("spellbook.js", "line", 267);
        var it = 0;
        _$jscmd("spellbook.js", "line", 268);
        var to = callbacks.length;
        _$jscmd("spellbook.js", "line", 269);
        var data = [];
        _$jscmd("spellbook.js", "line", 270);
        var async = function(ix) {
            _$jscmd("spellbook.js", "line", 271);
            setTimeout(function() {
                _$jscmd("spellbook.js", "line", 272);
                callbacks[ix](done);
            }, 0);
            _$jscmd("spellbook.js", "line", 275);
            var done = function(gdata) {
                _$jscmd("spellbook.js", "line", 276);
                to--;
                if (_$jscmd("spellbook.js", "cond", "277_8_5", gdata)) data[ix] = gdata;
                if (_$jscmd("spellbook.js", "cond", "278_8_23", it !== callbacks.length)) {
                    _$jscmd("spellbook.js", "line", 279);
                    async(it);
                    _$jscmd("spellbook.js", "line", 280);
                    it++;
                } else if (_$jscmd("spellbook.js", "cond", "281_15_42", _$jscmd("spellbook.js", "cond", "281_15_8", to === 0) && _$jscmd("spellbook.js", "cond", "281_27_30", typeof response === "function"))) response(data);
            };
        };
        if (_$jscmd("spellbook.js", "cond", "285_6_26", callbacks instanceof Array)) {
            for (var i = 0; i < limit; i++) {
                _$jscmd("spellbook.js", "line", 287);
                async(i);
                _$jscmd("spellbook.js", "line", 288);
                it++;
            }
        }
    };
    _$jscmd("spellbook.js", "line", 293);
    this.epl = this.eachpl = this.eachParallelLimit = function(array, limit, callback, response) {
        _$jscmd("spellbook.js", "line", 294);
        var it = 0;
        _$jscmd("spellbook.js", "line", 295);
        var to = array.length;
        _$jscmd("spellbook.js", "line", 296);
        var data = [];
        _$jscmd("spellbook.js", "line", 297);
        var async = function(item, index) {
            _$jscmd("spellbook.js", "line", 298);
            setTimeout(function() {
                _$jscmd("spellbook.js", "line", 299);
                callback(item, index, done);
            }, 0);
            _$jscmd("spellbook.js", "line", 302);
            var done = function(gdata) {
                _$jscmd("spellbook.js", "line", 303);
                to--;
                if (_$jscmd("spellbook.js", "cond", "304_8_5", gdata)) data[ix] = gdata;
                if (_$jscmd("spellbook.js", "cond", "305_8_19", it !== array.length)) {
                    _$jscmd("spellbook.js", "line", 306);
                    async(array[it], it);
                    _$jscmd("spellbook.js", "line", 307);
                    it++;
                } else if (_$jscmd("spellbook.js", "cond", "308_15_42", _$jscmd("spellbook.js", "cond", "308_15_8", to === 0) && _$jscmd("spellbook.js", "cond", "308_27_30", typeof response === "function"))) response(data);
            };
        };
        if (_$jscmd("spellbook.js", "cond", "312_6_42", _$jscmd("spellbook.js", "cond", "312_6_22", array instanceof Array) && _$jscmd("spellbook.js", "cond", "312_32_16", array.length > 0))) {
            if (_$jscmd("spellbook.js", "cond", "313_7_20", limit > array.length)) limit = array.length;
            for (var i = 0; i < limit; i++) {
                _$jscmd("spellbook.js", "line", 315);
                async(array[i], i);
                _$jscmd("spellbook.js", "line", 316);
                it++;
            }
        } else if (_$jscmd("spellbook.js", "cond", "318_14_30", typeof response === "function")) response(data);
    };
    _$jscmd("spellbook.js", "line", 321);
    this.for = this.forSync = function(ini, fin, inc, callback, end) {
        _$jscmd("spellbook.js", "line", 322);
        var store = [];
        _$jscmd("spellbook.js", "line", 323);
        var done = function(data) {
            _$jscmd("spellbook.js", "line", 324);
            store.push(data);
            if (_$jscmd("spellbook.js", "cond", "325_7_9", ini < fin)) {
                _$jscmd("spellbook.js", "line", 326);
                ini = ini + inc;
                _$jscmd("spellbook.js", "line", 327);
                callback(ini, done, end);
            } else if (_$jscmd("spellbook.js", "cond", "328_14_25", typeof end === "function")) end(store);
        };
        _$jscmd("spellbook.js", "line", 330);
        callback(ini, done, end);
    };
    _$jscmd("spellbook.js", "line", 334);
    this.times = function(fin, callback, end) {
        _$jscmd("spellbook.js", "line", 335);
        this.for(0, fin, 1, callback, end);
    };
    _$jscmd("spellbook.js", "line", 339);
    this.extender = function() {
        _$jscmd("spellbook.js", "line", 340);
        var self = this;
        if (_$jscmd("spellbook.js", "cond", "341_6_23", !Array.prototype.remove)) {
            _$jscmd("spellbook.js", "line", 342);
            Array.prototype.remove = function(obj) {
                _$jscmd("spellbook.js", "line", 343);
                return self.remove(this, obj);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "347_6_22", !Array.prototype.clear)) {
            _$jscmd("spellbook.js", "line", 348);
            Array.prototype.clear = function() {
                _$jscmd("spellbook.js", "line", 349);
                return self.remove(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "353_6_23", !Array.prototype.random)) {
            _$jscmd("spellbook.js", "line", 354);
            Array.prototype.random = function() {
                _$jscmd("spellbook.js", "line", 355);
                return self.random(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "359_6_24", !Array.prototype.shuffle)) {
            _$jscmd("spellbook.js", "line", 360);
            Array.prototype.shuffle = function() {
                _$jscmd("spellbook.js", "line", 361);
                return self.shuffle(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "365_6_22", !Array.prototype.first)) {
            _$jscmd("spellbook.js", "line", 366);
            Array.prototype.first = function() {
                _$jscmd("spellbook.js", "line", 367);
                return self.first(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "371_6_21", !Array.prototype.last)) {
            _$jscmd("spellbook.js", "line", 372);
            Array.prototype.last = function() {
                _$jscmd("spellbook.js", "line", 373);
                return self.last(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "377_6_24", !Array.prototype.inArray)) {
            _$jscmd("spellbook.js", "line", 378);
            Array.prototype.inArray = function(value) {
                _$jscmd("spellbook.js", "line", 379);
                return self.inArray(this, value);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "383_6_25", !Array.prototype.contains)) {
            _$jscmd("spellbook.js", "line", 384);
            Array.prototype.contains = function(value) {
                _$jscmd("spellbook.js", "line", 385);
                return self.inArray(this, value);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "389_6_21", !Array.prototype.each)) {
            _$jscmd("spellbook.js", "line", 390);
            Array.prototype.each = function(callback, response) {
                _$jscmd("spellbook.js", "line", 391);
                self.each(this, callback, response);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "395_6_24", !Object.prototype.extend)) {
            _$jscmd("spellbook.js", "line", 396);
            Object.prototype.extend = function(obj) {
                _$jscmd("spellbook.js", "line", 397);
                self.extend(this, obj);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "401_6_24", !Object.prototype.remove)) {
            _$jscmd("spellbook.js", "line", 402);
            Object.prototype.remove = function(keys) {
                _$jscmd("spellbook.js", "line", 403);
                return self.remove(this, keys);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "407_6_25", !Object.prototype.getKeys)) {
            _$jscmd("spellbook.js", "line", 408);
            Object.prototype.getKeys = function(keys) {
                _$jscmd("spellbook.js", "line", 409);
                return self.getKeys(this, keys);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "413_6_27", !String.prototype.repeatify)) {
            _$jscmd("spellbook.js", "line", 414);
            String.prototype.repeatify = function(num) {
                _$jscmd("spellbook.js", "line", 415);
                return self.repeatify(this, num);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "419_6_23", !Number.prototype.times)) {
            _$jscmd("spellbook.js", "line", 420);
            Number.prototype.times = function(callback, end) {
                _$jscmd("spellbook.js", "line", 421);
                self.for(0, this, 1, callback, end);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "425_6_28", !String.prototype.capitalize)) {
            _$jscmd("spellbook.js", "line", 426);
            String.prototype.capitalize = function() {
                _$jscmd("spellbook.js", "line", 427);
                return self.capitalize(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "431_6_26", !String.prototype.dos2unix)) {
            _$jscmd("spellbook.js", "line", 432);
            String.prototype.dos2unix = function() {
                _$jscmd("spellbook.js", "line", 433);
                return self.dos2unix(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "437_6_27", !Number.prototype.isInteger)) {
            _$jscmd("spellbook.js", "line", 438);
            Number.prototype.isInteger = function() {
                _$jscmd("spellbook.js", "line", 439);
                this.isInteger = function() {
                    _$jscmd("spellbook.js", "line", 440);
                    return self.isInteger(this);
                };
            };
        }
        if (_$jscmd("spellbook.js", "cond", "445_6_24", !Array.prototype.isArray)) {
            _$jscmd("spellbook.js", "line", 446);
            this.isArray = function() {
                _$jscmd("spellbook.js", "line", 447);
                return self.isArray(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "451_6_30", !Function.prototype.isFunction)) {
            _$jscmd("spellbook.js", "line", 452);
            this.isFunction = function() {
                _$jscmd("spellbook.js", "line", 453);
                return self.isFunction(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "457_6_26", !Object.prototype.isObject)) {
            _$jscmd("spellbook.js", "line", 458);
            this.isObject = function() {
                _$jscmd("spellbook.js", "line", 459);
                return self.isObject(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "463_6_26", !String.prototype.isString)) {
            _$jscmd("spellbook.js", "line", 464);
            this.isString = function() {
                _$jscmd("spellbook.js", "line", 465);
                return self.isString(this);
            };
        }
        if (_$jscmd("spellbook.js", "cond", "469_6_28", !Boolean.prototype.isBoolean)) {
            _$jscmd("spellbook.js", "line", 470);
            this.isBoolean = function() {
                _$jscmd("spellbook.js", "line", 471);
                return self.isBoolean(this);
            };
        }
    };
};

if (_$jscmd("spellbook.js", "cond", "477_4_27", typeof process === "object")) {
    _$jscmd("spellbook.js", "line", 478);
    Spellbook.prototype.cp = function(source, target) {
        _$jscmd("spellbook.js", "line", 479);
        return new Promise(function(resolve, reject) {
            _$jscmd("spellbook.js", "line", 480);
            var rd = fs.createReadStream(source);
            _$jscmd("spellbook.js", "line", 481);
            rd.on("error", reject);
            _$jscmd("spellbook.js", "line", 482);
            var wr = fs.createWriteStream(target);
            _$jscmd("spellbook.js", "line", 483);
            wr.on("error", function(err) {
                _$jscmd("spellbook.js", "line", 484);
                reject(err);
            });
            _$jscmd("spellbook.js", "line", 486);
            wr.on("finish", function(d) {
                _$jscmd("spellbook.js", "line", 487);
                resolve(d);
            });
            _$jscmd("spellbook.js", "line", 489);
            rd.pipe(wr);
        });
    };
    _$jscmd("spellbook.js", "line", 492);
    module.exports = new Spellbook();
} else {
    _$jscmd("spellbook.js", "line", 494);
    Spellbook.prototype.ready = function(callback) {
        _$jscmd("spellbook.js", "line", 495);
        document.addEventListener("DOMContentLoaded", function(event) {
            _$jscmd("spellbook.js", "line", 496);
            callback(event);
        });
    };
    _$jscmd("spellbook.js", "line", 500);
    Spellbook.prototype.comp = {
        data: {},
        stack: [],
        run: function() {
            for (var i = 0; i < this.stack.length; i++) this.stack[i].action(this.stack[i].attr[0], this.stack[i].attr[1]);
            _$jscmd("spellbook.js", "line", 505);
            this.stack = [];
        },
        get: function(name, attr) {
            if (_$jscmd("spellbook.js", "cond", "508_7_44", typeof this.data[name].action === "function")) this.stack.push({
                action: this.data[name].action,
                attr: [ this, attr ]
            });
            _$jscmd("spellbook.js", "line", 509);
            return this.data[name].html(this, attr);
        },
        set: function(name, html, action) {
            _$jscmd("spellbook.js", "line", 512);
            this.data[name] = {};
            _$jscmd("spellbook.js", "line", 513);
            this.data[name].html = html;
            if (_$jscmd("spellbook.js", "cond", "514_7_28", typeof action === "function")) this.data[name].action = action;
        },
        destroy: function(name) {
            _$jscmd("spellbook.js", "line", 517);
            document.getElementById(name).innerHTML = "";
        },
        render: function(name, id, attr) {
            _$jscmd("spellbook.js", "line", 520);
            document.getElementById(id).innerHTML = this.data[name].html(this, attr);
            if (_$jscmd("spellbook.js", "cond", "521_7_44", typeof this.data[name].action === "function")) this.stack.push({
                action: this.data[name].action,
                attr: [ this, attr ]
            });
            _$jscmd("spellbook.js", "line", 522);
            this.run();
        }
    };
    _$jscmd("spellbook.js", "line", 526);
    Spellbook.prototype.on = function(obj, eventHandler, callback) {
        _$jscmd("spellbook.js", "line", 527);
        obj.addEventListener(eventHandler, function(event) {
            _$jscmd("spellbook.js", "line", 528);
            callback(event);
        });
    };
    _$jscmd("spellbook.js", "line", 532);
    Spellbook.prototype.id = function(id) {
        _$jscmd("spellbook.js", "line", 533);
        return document.getElementById(id);
    };
    _$jscmd("spellbook.js", "line", 536);
    Spellbook.prototype.class = function(id) {
        _$jscmd("spellbook.js", "line", 537);
        return document.getElementsByClassName(id);
    };
    _$jscmd("spellbook.js", "line", 540);
    Spellbook.prototype.ajax = {};
    _$jscmd("spellbook.js", "line", 542);
    Spellbook.prototype.ajax.get = function(url, callback) {
        _$jscmd("spellbook.js", "line", 543);
        var xhr = new XMLHttpRequest();
        _$jscmd("spellbook.js", "line", 544);
        xhr.open("GET", encodeURI(url));
        _$jscmd("spellbook.js", "line", 545);
        xhr.onload = function() {
            if (_$jscmd("spellbook.js", "cond", "546_7_18", xhr.status === 200)) callback(false, xhr.responseText); else callback("Request failed.  Returned status of " + status);
        };
        _$jscmd("spellbook.js", "line", 549);
        xhr.send();
    };
    _$jscmd("spellbook.js", "line", 552);
    Spellbook.prototype.ajax.post = function(url, data, header, callback) {
        _$jscmd("spellbook.js", "line", 553);
        var finaldata = "";
        function param(object) {
            _$jscmd("spellbook.js", "line", 555);
            var encodedString = "";
            for (var prop in object) {
                if (_$jscmd("spellbook.js", "cond", "557_8_27", object.hasOwnProperty(prop))) {
                    if (_$jscmd("spellbook.js", "cond", "558_9_24", encodedString.length > 0)) encodedString += "&";
                    _$jscmd("spellbook.js", "line", 559);
                    encodedString += encodeURI(prop + "=" + object[prop]);
                }
            }
            _$jscmd("spellbook.js", "line", 562);
            return encodedString;
        }
        if (_$jscmd("spellbook.js", "cond", "565_6_28", typeof header === "function")) {
            _$jscmd("spellbook.js", "line", 566);
            callback = header;
            _$jscmd("spellbook.js", "line", 567);
            header = "application/json";
            _$jscmd("spellbook.js", "line", 568);
            finaldata = JSON.stringify(data);
        } else finaldata = param(data);
        _$jscmd("spellbook.js", "line", 571);
        var xhr = new XMLHttpRequest();
        _$jscmd("spellbook.js", "line", 572);
        xhr.open("POST", encodeURI(url));
        _$jscmd("spellbook.js", "line", 573);
        xhr.setRequestHeader("Content-Type", header);
        _$jscmd("spellbook.js", "line", 574);
        xhr.send(finaldata);
        _$jscmd("spellbook.js", "line", 575);
        xhr.onload = function() {
            if (_$jscmd("spellbook.js", "cond", "576_7_52", _$jscmd("spellbook.js", "cond", "576_7_18", xhr.status === 200) && _$jscmd("spellbook.js", "cond", "576_29_30", xhr.responseText !== undefined))) callback(null, xhr.responseText); else if (_$jscmd("spellbook.js", "cond", "577_12_18", xhr.status !== 200)) callback("Request failed.  Returned status of " + xhr.status);
        };
    };
    _$jscmd("spellbook.js", "line", 580);
    var sb = new Spellbook();
}