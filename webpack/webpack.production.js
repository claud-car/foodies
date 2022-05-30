'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const { StatsWriterPlugin } = require('webpack-stats-plugin');

// Data
const users = require('../src/data/users.json');

const minifyParameters = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
};

const production = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pages/index.njk',
      filename: 'index.html',
      minify: { ...minifyParameters },
    }),
    new HtmlWebpackPlugin({
      template: 'pages/about.njk',
      templateParameters: {
        username: 'Joe',
      },
      filename: 'about/index.html',
      minify: { ...minifyParameters },
    }),
    new HtmlWebpackPlugin({
      template: 'pages/users.njk',
      templateParameters: {
        users: users,
      },
      filename: 'users/index.html',
      minify: { ...minifyParameters },
    }),
    new StatsWriterPlugin({ fields: null, filename: '../stats.json' }),
    new WebpackAssetsManifest(),
    new CssoWebpackPlugin(),
  ],
  devtool: 'source-map',
};

module.exports = production;
