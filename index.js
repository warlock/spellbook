var spawn = require('child_process').spawn;

exports.whois = function (domini, callback) {
	var query = spawn('whois',  [domini]);
	var domini = [];
	query.stdout.setEncoding('utf8');
	query.stdout.on('data', function (data) {
                var str = data.toString();
		//var lines = str.split(/(\r?\n)/g);
		var lines = str.split("\n");
                for (var i in lines) {
			if (lines[i].indexOf(':') != -1) {
				//console.log(lines[i]);
				domini.push(lines[i].split(":"));
			}
		}
		console.log(domini);
	});

	query.on('close', function () {
                callback(null, domini);
        });

};

