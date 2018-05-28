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
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]

  }
}
