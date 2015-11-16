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
}

module.exports = new Spellbook();
