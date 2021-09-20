const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const serverConfig = require('./server.config');

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);
const devMode = process.env.NODE_ENV !== 'production';

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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src/assets')],
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: devMode ? '[name].[ext]' : '[name].[hash:4].[ext]',
          outputPath: 'img',
        },
      },
      {
        test: /\.(ico|woff|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: devMode ? '[name].[ext]' : 'font/[name].[hash:4].[ext]',
          outputPath: 'font',
        },
      },
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
      // filename: devMode ? '[name].[fullhash:8].css' : '[name].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		// new Webpack.HotModuleReplacementPlugin(),
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
