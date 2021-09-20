module.exports = function (env, argv) {
  return argv.NODE_ENV === 'production' ? require('./configs/webpack.prod.config.js') : require('./configs/webpack.dev.config.js');
};
