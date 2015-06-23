var spawn = require('child_process').spawn;

exports.whois = function (domini, callback) {
	var query = spawn('whois',  [domini]);
	var domini = {};
	query.stdout.setEncoding('utf8');
	query.stdout.on('data', function (data) {
                var str = data.toString();
		var lines = str.split("\n");
                for (var i in lines) {
			if (lines[i].indexOf(':') != -1) {
				var cut = lines[i].split(":");
				var c1 = cut[0].replace(/^\s+/g,'').replace(/\s+$/g,'');
				var c2 = cut[1].replace(/^\s+/g,'').replace(/\s+$/g,'');

				if (c1 != undefined && c2 != undefined) {
					domini[cut[0]] = cut[1];
				}
			}
		}
	});

	query.on('close', function (code) {
                callback(null, domini);
        });

};

