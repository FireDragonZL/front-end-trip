const path = require('path')
const nodeExternal = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

debugger

const config = {
  target: "node",
  mode: "development",
  entry: {
    main: path.join(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  // 方便后期进行调试
  devtool: "eval-source-map",
  module: {
    rules: [
      // 配置ES6语法
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        // 排除在外的文件
        exclude: [path.join(__dirname, "./node_modules")]
      },
    ]
  },
  // 打包时排除掉不会使用的node模块
  externals: [nodeExternal()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __dirname: true,
    __filename: true,
    setImmediate: true,
    path: true
  }
};

// 打印webpack的配置信息
console.log(config)

module.exports = config