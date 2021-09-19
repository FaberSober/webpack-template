const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

const webpackConfigBase = {
	entry: ['./src/main.jsx'],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/',
		environment: {
			// 是否使用箭头函数
			arrowFunction: false,
		},
	},
  module: {
		rules: [
			{
				test: /\.css|sass|scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env', {}]],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							additionalData: '$primary-color: #42b983;',
						},
					},
				],
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				// webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
				test: /\.png|jpg|gif|jpeg|svg/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: 'images/[base]',
				},
			},
			{
				test: /\.txt|xlsx/,
				type: 'asset',
				generator: {
					filename: 'files/[base]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: '/src/index.html',
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new Webpack.ProvidePlugin({}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
	    '@': path.join(__dirname, '../src'),
		},
	},
  target: ['web', 'es5'],
};

module.exports = webpackConfigBase;
