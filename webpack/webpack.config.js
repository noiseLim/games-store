/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/extensions
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  // eslint-disable-next-line global-require
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
