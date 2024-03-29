const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const REACT_PDF_DIR = path.resolve(__dirname, '../node_modules/@react-pdf-viewer');

const devMode = process.env.NODE_ENV !== 'production';
console.log('process.env.NODE_ENV', process.env.NODE_ENV, 'devMode', devMode)

const webpackConfigBase = {
    entry: ['babel-polyfill', './src/main.tsx'],
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
        rules: [{
                test: /\.css$/,
                include: [APP_DIR, REACT_PDF_DIR],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
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
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist') }],
        }),
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
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, '../src'),
        },
    },
    target: ['web', 'es5'],
};

module.exports = webpackConfigBase;