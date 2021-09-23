const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');

module.exports = merge(webpackConfigBase, {
  devtool: 'cheap-module-source-map',
});
