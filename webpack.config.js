let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, './deploy');
let APP_DIR = path.resolve(__dirname, './app');

let config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js'
  }
};

module.exports = config;
