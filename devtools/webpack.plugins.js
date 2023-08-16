const webpack = require('webpack');
const { devMode } = require('./webpack.func');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const Dotenv = require('dotenv-webpack');




module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  devMode() && new webpack.HotModuleReplacementPlugin(),
  devMode() && new ReactRefreshWebpackPlugin(),
  new Dotenv(),
  new WebpackMessages({
    name: 'client',
    logger: str => console.log(`>> ${str}`)
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'assets/images/favicon.png',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
].filter(Boolean);