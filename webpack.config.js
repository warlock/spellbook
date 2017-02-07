const webpack = require('webpack');

module.exports = {
    entry: './spellbook.js',
    output: {
        filename: 'bundle.js',
        path: 'build/'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
};
