const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve("./"),
    library: "sb",
    filename: 'spellbook.js',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
