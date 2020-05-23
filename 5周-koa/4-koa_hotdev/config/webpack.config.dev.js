// 引入 webpack-merge 插件
const webpackMerge = require('webpack-merge')
// 引入 webpack 的基础配置
const baseConfig = require('./webpack.config.base')

const config = webpackMerge(baseConfig, {
  mode: "development",
  // 方便后期进行开发调试
  devtool: "eval-source-map",
  // 不打印webpack的日志消息
  stats: {
    children: false
  }
});

module.exports = config