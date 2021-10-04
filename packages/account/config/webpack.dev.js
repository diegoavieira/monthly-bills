const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const port = 8082;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
    sourceMapFilename: '[name].js.map'
  },
  devtool: 'source-map',
  devServer: {
    port,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'account',
      filename: 'remoteEntry.js',
      exposes: {
        './AccountApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
