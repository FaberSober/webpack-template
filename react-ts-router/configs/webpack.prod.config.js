const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');

module.exports = merge(webpackConfigBase, {
  mode: "production",
  devtool: 'cheap-module-source-map',
});
