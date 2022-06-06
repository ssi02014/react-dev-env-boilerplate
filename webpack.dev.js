const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.development' });

// merge를 이용해서 webpack.common 와 병합
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname + '/build'),
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    static: false,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 3000,
    compress: true,
    hot: true, // HMR 적용
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});
