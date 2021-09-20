const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const serverConfig = require('./server.config');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== 'production';

const webpackConfigBase = {
	entry: ['babel-polyfill', './src/main.tsx'],
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
				test: /\.css|less$/,
				use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '/img/',
            // },
          }, // 使用mini-css-loader时，不要再使用style-loader
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                modifyVars: {
                  // 修改antd主题色
                  'primary-color': serverConfig.primaryColor,
                  'link-color': serverConfig.linkColor,
                },
                javascriptEnabled: true,
              },
            },
          },
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new CleanWebpackPlugin(),
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
