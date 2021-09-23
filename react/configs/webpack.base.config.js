const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const webpackConfigBase = {
	entry: ['babel-polyfill', './src/main.jsx'],
	output: {
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: 'images/[name].[hash:8][ext][query]',
    filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[contenthash].js',
    chunkFilename: devMode ? '[name].bundle.[hash:8].js' : '[name].bundle.[contenthash].js',
		publicPath: '/',
		environment: {
			// 是否使用箭头函数
			arrowFunction: false,
		},
	},
  module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
				  'css-loader',
				],
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
      filename: devMode ? '[name].[hash:8].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[name].[id].[hash:8].css' : '[name].[contenthash].[id].css',
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new CleanWebpackPlugin(),
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
