var spawn = require('child_process').spawn;

exports.whois = function (domini, callback) {
	var prc = spawn('whois',  [domini]);
	var whoisObj = {};
	prc.stdout.setEncoding('utf8');
	prc.stdout.on('data', function (data) {
                var str = data.toString();
		//var lines = str.split(/(\r?\n)/g);
		var lines = str.split("\n");
		var domini = [];
                for (var i in lines) {
			if (lines[i].indexOf(':') != -1) {
				//console.log(lines[i]);
				domini.push(lines[i].split(":"));
			}
		}
		console.log(domini);
	});

};
