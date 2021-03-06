/**
 * Created by yanmeng on 2017/2/20.
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  
  devServer: {
    port              : 8080,
    historyApiFallback: true
  }
});
