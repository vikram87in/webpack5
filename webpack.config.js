const path = require('path');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  // mode is getting set from the package json CLI
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, it refers to the .babelrc  
          loader: 'babel-loader'
        }
      }
    ]
  },
  // enables the live reloading. does all the work in memory.
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true
  },
  devtool: 'source-map'
}