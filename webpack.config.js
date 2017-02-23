var webpack = require('webpack');

module.exports = {
  "entry": './spellbook.js',
  "output": {
    "libraryTarget": "var",
    "library": "sb",
    "filename": 'bundle.js',
    "path": 'build/'
  },
  "plugins": [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
