const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.base.config');

module.exports = merge(webpackConfigBase, {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/',
		environment: {
			// 是否使用箭头函数
			arrowFunction: false,
		},
	},
  devtool: 'cheap-module-source-map',
});
