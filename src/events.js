var type = require('./type');

var events = {
  'eventstack': {},

  /**
   * @param {String} ev : The name of event.
   * @param {Function} callback : Function executed when event is triggered.
   * @returns {undefined}
   */
  'on': function (ev, callback) {
    if (type.isEmpty(ev)) throw new Error('on function need event');
    else if (type.isArray(ev)) {
      for (var y = 0; y < ev.length; y++) {
        if (type.isFunction(callback)) events.eventstack[ev[y]] = callback;
        else throw Error('Event need function');
      }
    } else if (type.isFunction(callback)) events.eventstack[ev] = callback;
    else throw Error('Event need function');
  },

  /**
   * @param {String} ev : The name of event.
   * @param {Any} data : Data for a event callback.
   * @returns {undefined}
   */
  'emit': function (ev, data) {
    if (type.isEmpty(ev)) throw new Error('No event selected.');
    else if (type.isArray(ev)) {
      for (var i = 0; i < ev.length; i++) {
        if (type.isFunction(events.eventstack[ev[i]])) events.eventstack[ev[i]](data, this.data);
      }
    } else if (type.isFunction(events.eventstack[ev])) events.eventstack[ev](data, this.data);
  },

  /**
   * @param {String} ev : The name of event for destroy.
   * @returns {undefined}
   */
  'delete': function (ev) {
    if (type.isEmpty(ev)) throw new Error('No event selected.');
    else if (type.isEmpty(events.eventstack[ev])) throw Error('This event not exist');
    else delete events.eventstack[ev];
  }
};

module.exports = events;
