const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');

console.log('[production]process.env.NODE_ENV :>> ', process.env.NODE_ENV);

module.exports = merge(webpackConfigBase, {
  mode: "production",
  devtool: 'cheap-module-source-map',
});
