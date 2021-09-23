const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackConfigBase = require('./webpack.base.config');

console.log('[production]process.env.NODE_ENV :>> ', process.env.NODE_ENV);

module.exports = merge(webpackConfigBase, {
  mode: "production",
  devtool: 'cheap-module-source-map',
  plugins: [
    // 分析代码
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
});
