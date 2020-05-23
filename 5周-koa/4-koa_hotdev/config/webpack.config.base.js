const path = require("path");
const nodeExternal = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack')

const config = {
  target: "node",
  entry: {
    main: path.join(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      // 配置ES6语法
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        // 排除在外的文件
        exclude: [path.join(__dirname, "./node_modules")],
      },
    ],
  },
  // 打包时排除掉不会使用的node模块
  externals: [nodeExternal()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (
          process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'
          ? '"production"'
          : '"development"'
        )
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __dirname: true,
    __filename: true,
    setImmediate: true,
    path: true,
  },
};

module.exports = config;
