var path = require('path');
var webpack = require('webpack');

module.exports = {
  "entry": "./src/main.js",
  "output": {
    "path": path.resolve("./"),
    "library": "sb",
    "filename": "spellbook.js",
    "libraryTarget": "umd"
  },
  "plugins": [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
