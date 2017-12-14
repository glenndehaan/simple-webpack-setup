const webpack = require('webpack');
const path = require('path');

//Get path so every environment works
const projectPath = path.resolve(__dirname);

//Define all the global config
const config = {
  entry: {
    final: projectPath + '/../src/main.js'
  },
  output: {
    path: projectPath + '/../dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve),
          sourceMaps: 'inline'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.join(__dirname, '/node_modules')]
  }
};

module.exports = config;
