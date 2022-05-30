'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const users = require('../src/data/users.json');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pages/index.njk',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/about.njk',
      templateParameters: {
        username: 'Joe',
      },
      filename: 'about/index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/users.njk',
      templateParameters: {
        users: users,
      },
      filename: 'users/index.html',
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
