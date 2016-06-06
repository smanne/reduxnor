'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      include: path.join(__dirname, 'app'),
      query: {
        plugins: [
          ['react-transform', {
            'transforms': [{
              transform: 'react-transform-hmr',
              // If you use React Native, pass 'react-native' instead:
              imports: ['react'],
              // This is important for Webpack HMR:
              locals: ['module']
            }]
          }],
          ['transform-object-assign'],
          ['transform-class-properties']
        ]
      }
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  }
};
