const { merge } = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');
const { EsbuildPlugin } = require('esbuild-loader');

require('dotenv').config({ path: './.env.production' });

// merge를 이용해서 webpack.common 와 병합
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'esnext',
        css: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      algorithm: 'gzip', // gzip으로 압축
      threshold: 10240, // 10kb 이상 압축
      minRatio: 0.8,
    }),
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});
