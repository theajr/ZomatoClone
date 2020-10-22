const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const environment = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack/webpack.${environment}.js`);
module.exports = env => webpackMerge(common(env), envConfig);
