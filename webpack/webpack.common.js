const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.resolve('build'),
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        // fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024, // 50kb 미만은 base64형태로 사용
          },
        },
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]',
        },
      },
      {
        // image & video
        test: /\.(png|jpe?g|gif|ico|webp|mp4|webm)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb 미만은 base64형태로 사용
          },
        },
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]',
        },
      },
      // svg
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // 2kb 미만은 base64형태로 사용
          },
        },
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]',
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      // minify 속성 참고 https://github.com/terser/html-minifier-terser
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[id].[contenthash:8].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
  ],
};
