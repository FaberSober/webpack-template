const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

const devMode = process.env.NODE_ENV !== 'production';
console.log('process.env.NODE_ENV', process.env.NODE_ENV, 'devMode', devMode)s

const webpackConfigBase = {
	entry: ['babel-polyfill', './src/main.js'],
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
		new Webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new Webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
		alias: {
	    '@': path.join(__dirname, '../src'),
		},
	},
  target: ['web', 'es5'],
};

module.exports = webpackConfigBase;
