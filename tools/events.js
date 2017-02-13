var type = require('./type');

var events = {
	'eventstack': {},
	'on': function (ev, callback, data) {
		if (type.isEmpty(ev)) throw new Error('on function need event');
		else if (type.isArray(ev)) {
			for (var y = 0; y < ev.length; y++) {
				if (type.isFunction(callback)) events.eventstack[ev[y]] = callback;
				else throw Error('Event need function');
			}
    } else if (type.isFunction(callback)) events.eventstack[ev] = callback;
		else throw Error('Event need function');
	},
	'emit': function (ev, data) {
		if (type.isEmpty(ev)) throw new Error('No event selected.');
		else if (type.isArray(ev)) {
			for (var i = 0; i < ev.length; i++) {
				if (type.isFunction(events.eventstack[ev[i]])) events.eventstack[ev[i]](data, this.data);
			}
		} else if (type.isFunction(events.eventstack[ev])) events.eventstack[ev](data, this.data);
	},
	'delete': function (ev) {
		if (type.isEmpty(ev)) throw new Error('No event selected.');
		else if (type.isEmpty(events.eventstack[ev])) throw Error('This event not exist');
		else delete events.eventstack[ev];
	}
}

module.exports = events
