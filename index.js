Array.prototype.deleteOf = function (element) {
	return this.splice(this.indexOf(element),1);
}


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
