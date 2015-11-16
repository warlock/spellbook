/* Spellbook Class Extension */

if (!Array.prototype.remove) {
	Array.prototype.remove = function (element) {
		return this.splice(this.indexOf(element),1);
	}
}

if (!Array.prototype.clear) {
    Array.prototype.clear = function() {
       this.splice(0, this.length);
    };
}

/* Spellbook Utils */

var Spellbook = function () {
	this.getDomain = function(url) {
		if (url.indexOf("://") > -1) {
			url = url.split('/')[2];
		} else {
			url = url.split('/')[0];
		}
		url = url.split(':')[0];
		return url.replace('www.','');
	}

	// Range by kennebec
	this.range = function(a, b, step) {
    		var A= [];
    		if(typeof a == 'number'){
        		A[0]= a;
        		step = step || 1;
        		while(a+step<= b){
            			A[A.length]= a+= step;
        		}
    		} else {
        		var s = 'abcdefghijklmnopqrstuvwxyz';
        		if(a=== a.toUpperCase()){
            			b=b.toUpperCase();
            			s= s.toUpperCase();
        		}
        		s= s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        		A= s.split('');        
    		}
    		return A;
	}

	this.isFunction = function ( fn ) {
    		return typeof fn === 'function';
	}

	this.isArray = function ( obj ) {
		return typeof obj === "object" && obj instanceof Array;
	}	

	this.isObject = function ( obj ) {
 		return typeof obj === "object" && (isArray(obj) === false );
	}

	this.isNumber = function ( obj ) {
    		return typeof obj === "number" || obj instanceof Number;
	}

	this.isString = function ( obj ) {
    		return typeof obj === "string" || obj instanceof String;
	}

	this.isBoolean = function ( obj ) {
 	   	return typeof obj === "boolean";
	}
}

module.exports = new Spellbook();
