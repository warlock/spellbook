var type = require('./type');

module.exports = {
  range : function (a, b, step) {
		var A = [];
		if (type.isEmpty(a) || type.isEmpty(b)) return A;
		if (typeof a == 'number') {
			A[0] = a;
			step = step || 1;
			while (a+step<= b) A[A.length] = a += step;
		} else {
			var s = 'abcdefghijklmnopqrstuvwxyz';
			if (a === a.toUpperCase()) {
				b = b.toUpperCase();
				s = s.toUpperCase();
			}
			s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
			A = s.split('');
		}
		return A;
	},
  random : function (min, max) {
    if (typeof min === "number" && typeof max === "number") return Math.floor(Math.random() * (max - min)) + min;
    else {
      if(!type.isArray(min)) return 0;
      else {
        var index = Math.floor(Math.random() * (min.length));
        return min[index];
      }
    }
  },
  repeatify : function (val, num) {
		var strArray = [];
		for (var i = 0; i < num; i++) strArray.push(val);
		return strArray;
	}
}
