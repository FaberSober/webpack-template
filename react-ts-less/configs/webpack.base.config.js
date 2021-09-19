const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

const webpackConfigBase = {
	entry: ['./src/main.tsx'],
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
				test: /\.css|less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: [
					'thread-loader',
					'babel-loader',
				],
			},
      {
        test: /\.ts[x]?$/,
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              context: path.resolve(__dirname, '../'),
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
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
			template: 'src/index.html',
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new Webpack.ProvidePlugin({}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
	    '@': path.join(__dirname, '../src'),
		},
	},
  target: ['web', 'es5'],
};

module.exports = webpackConfigBase;
