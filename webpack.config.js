// webpack.config.js
'use strict';

module.exports = {
  devtool: "eval",
  resolve: {
    modulesDirectories: ['src/js'],
    extensions: ['', '.es6', '.js']
  },
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: 'build/',
    filename: 'main.js'
  },
  externals: {
  },
  module: {
    loaders: [
      {test: /\.es6$/, loader: 'babel-loader'}
    ]
  }
};
