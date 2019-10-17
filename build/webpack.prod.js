const path = require('path')
// 合并配置文件
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

// 打包之前清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UnlifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UnlifyJsPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  module: {},
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js', // contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  }
})
