var webpack = require('webpack');

module.exports = {
  "entry": './spellbook.js',
  "output": {
    "path": __dirname + "/build",
    "libraryTarget": "var",
    "library": "sb",
    "filename": 'bundle.js'
  },
  "plugins": [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
