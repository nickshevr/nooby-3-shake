const path = require('path');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: [['@babel/env', { 'modules': false }]]
          }
      },
      test: /\.js$/,
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
    }),
  ],
};
