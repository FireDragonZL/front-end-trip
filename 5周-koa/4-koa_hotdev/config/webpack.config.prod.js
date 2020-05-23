// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 打包时压缩JS代码（官方最新推荐使用该插件）
const  TerserWebpackPlugin = require('terser-webpack-plugin')
// 引入 webpack 的基础配置
const baseConfig = require("./webpack.config.base");

const config = webpackMerge(baseConfig, {
  mode: "production",
  stats: {
    children: false,
    warnings: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      // 使用官方的默认配置(后期看一下相关参数的含义)
      new TerserWebpackPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
      }),
    ],
    // 提炼通用的JS代码模块
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        },
      },
    },
  },
});

module.exports = config;
