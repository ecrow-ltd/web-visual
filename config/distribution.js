/* global __dirname, require, module*/

const webpack = require('webpack');
const common = require('./assets/common');
const loaders = require('./assets/loaders');
const plugins = require('./assets/plugins');
const argv = require('yargs').argv; // use --env with webpack 2
const pkg = require('../package.json');

let outputFile, mode, modeType;

if (argv.env === 'prod') {
  mode = 'production';
  outputFile = `${pkg.library}.min.js`;
} else {
  mode = 'development';
  outputFile = `${pkg.library}.js`;
}

modeType = mode === 'production';

const config = {
  mode: mode,
  entry: `${common.ROOT_PATH}/src/index.js`,
  devtool: modeType ? false : 'inline-source-map',
  output: {
    path: common.DISTRIBUTION_PATH,
    filename: outputFile,
    library: pkg.library,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      loaders.babel,
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [plugins.uglifyjs],
  resolve: {
    modules: [`${common.ROOT_PATH}/node_modules`, `${common.ROOT_PATH}/../../node_modules`, `${common.ROOT_PATH}/src`],
    extensions: ['.json', '.js']
  },
  performance: {
    hints: false
  }
};

module.exports = config;
