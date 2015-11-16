/* Spellbook Class Extension */

if (!Array.prototype.deleteOf) {
	Array.prototype.deleteOf = function (element) {
		return this.splice(this.indexOf(element),1);
	}
}

if (!Array.prototype.clear) {
    Array.prototype.clear = function() {
       this.splice(0, this.length);
    };
}

/*
function isFunction( fn ) {
    return typeof fn === 'function';
}

function isArray( obj ) {
    return typeof obj === "object" && obj instanceof Array;
}


function isObject( obj ) {
    return typeof obj === "object" && (isArray(obj) === false );
}

function isNumber( obj ) {
    return typeof obj === "number" || obj instanceof Number;
}

function isString( obj ) {
    return typeof obj === "string" || obj instanceof String;
}

function isBoolean( obj ) {
    return typeof obj === "boolean";
}

Array.range = function( start, max, step ) {

    if( arguments.length === 0 )        throw "range method needs one or more arguments"
    if( start && !start.isNumber())     throw _MESSAGE_OF_INVALID_ARGUMENTS("start", "Number");
    if( max   && !max.isNumber())       throw _MESSAGE_OF_INVALID_ARGUMENTS("max", "Number");
    if( step  && !step.isNumber())      throw _MESSAGE_OF_INVALID_ARGUMENTS("step", "Number");


    var arr = [];
    _range(arr, start, max, step);

    return arr;
};


function _range( arr, start, max, step ) {
    step = step || 1;

    if( !arr || !arr.isArray() ) throw _MESSAGE_OF_NULL_ARGUMENTS("arr");
    if( !max ) {
        max     = start;
        start   = 0;
    }

    if( start >= max ) return;

    for(var i=start; i<max; i+= step) {
        arr.push( i );
    }
}

*/

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
}

module.exports = new Spellbook();
