const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.scss$/, //files ending with scss
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'], // use this loaders
          fallback: 'style-loader' // fallback for any css not extracted
        }) // end extract
      }
    ] // end rules
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin and pass the file name
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // a directory or url to serve html content from
    historyApiFallback: true, // fallback to index.html incase of single page app
    inline: true, // inline mode(set to false to disable including client script (like live-reload))
    open: true // open default browser
  },
  devtool: 'eval-source-map' //enable devtools for better debugging behavior
}

module.exports = config;
