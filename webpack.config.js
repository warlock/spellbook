var path = require('path');
var webpack = require('webpack');

module.exports = {
  "entry": './src/main.js',
  "output": {
    "path": path.resolve('./'),
    "libraryTarget": "var",
    "library": "sb",
    "filename": 'spellbook.js'
  },
  "plugins": [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
