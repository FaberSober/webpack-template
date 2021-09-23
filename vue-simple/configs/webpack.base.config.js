const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

const webpackConfigBase = {
  entry: ['@babel/polyfill', './src/main.js'],
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
					},
				],
			},
			{
				test: /\.ts|js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					},
				],
			},
			{
				// webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
				test: /\.png|jpg|gif|jpeg|svg/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024,
					},
				},
			},
			{
				test: /\.txt|xlsx/,
				type: 'asset',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new Webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
	},
};

module.exports = webpackConfigBase;
