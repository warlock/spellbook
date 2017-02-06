module.exports = {
  toInt : function (value) {
      return parseInt(value)
  },
  dos2unix : function (data) {
    return data.replace(/\r\n/g, '\n');
  },
  capitalize : function (data) {
    return data.slice(0,1).toUpperCase() + data.slice(1);
  },
  excerpt : function (str, nwords) {
    var words = str.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ');
  }
}
