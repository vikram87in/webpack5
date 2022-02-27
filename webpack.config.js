const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';

module.exports = {
  entry: "./src/index",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  // mode is getting set from the package json CLI
  mode: mode,
  resolve:
  {
    extensions: ['.js', '.ts']
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
          /* without additional settings, it refers to the tsconfig.json. It also looks at the .browserslistrc file to see how much backward compatibility to provide*/
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        /* without additional settings, it refers to the .babelrc. It also looks at the .browserslistrc file to see how much backward compatibility to provide*/
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        use: [
          // The order below is important. Works in the reverse order.
          MiniCssExtractPlugin.loader,          //3. creates a separate css file instead of injecting into the DOM. Either use this or style-loader, but not both.
          // 'style-loader',                    // 3.inject the css into the DOM (head probably)
          'css-loader',                         // 2. converts the css into js
          'sass-loader',                        // 1. compiles the scss into css
          'postcss-loader'                      // looks at the .browserslistrc file
        ]
      }
    ]
  },
  // enables the live reloading. does all the work in memory.
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  devtool: 'source-map'
}