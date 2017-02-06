module.exports = {
  shuffle : function (array) {
		for (var i = array.length-1; i >=0; i--) {
			var randomIndex = Math.floor(Math.random()*(i+1));
			var itemAtIndex = array[randomIndex];
			array[randomIndex] = array[i];
			array[i] = itemAtIndex;
		}
		return array;
	},
  first : function (array) {
		return array[0];
	},
  last : function (array) {
		return array[array.length - 1];
	},
  remove : function (array, obj) {
    function filter(array, obj) {
      return array.filter(function (e) {
        if (JSON.stringify(e) !== JSON.stringify(obj)) return e;
      });
    }
    if (typeof obj === 'object' && obj instanceof Array) {
      obj.forEach(function (e) {
        array = filter(array, e);
      });
      return array;
    } else return filter(array, obj);
  },
  clear : function (array) {
    return array.splice(array.length,0);
  },
  inArray : function (a, b) {
		return !!~a.indexOf(b);
	},
  contains : this.inArray,
  uniq : function (array, key) {
    var narray = [];
    var keys = {};
    for (var i = 0; i < array.length; i++) {
      if(keys[array[i][key]] === undefined && array[i][key] !== undefined) {
        narray.push(array[i][key]);
        keys[array[i][key]] = 1;
      }
    }
    return narray;
  },
  unq : this.unq,
  filter : function (array, obj) {
		if (this.empty(array)) throw new Error('Filter function not contains array.');
		else if (this.empty(obj) && typeof obj !== 'object') throw new Error('Find in array need a object.');
		else {
			var keys = Object.keys(obj);
			return array.filter(function (e) {
				var chck = true;
				keys.forEach(function (k) {
					if (typeof e[k] === 'string') {
						if(e[k].indexOf(obj[k]) < 0) chck = false;
					} else {
						if(e[k] !== obj[k]) chck = false;
					}
				});
				return chck;
			});
		}
	}
}
