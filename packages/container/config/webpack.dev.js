const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const port = 8080;

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
      name: 'container',
      remotes: {
        dashboard: 'dashboard@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
