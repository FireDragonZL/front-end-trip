const path = require("path")

// 引入 node 的 path 模块
const path = require("path")

const config = {
  // 入口文件
  entry: {
    main: './src/index.js'
  },
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // loader配置：链式 + 反向加载，
  module: {
    rules: [
      // 加载 CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 加载 图片
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
  // plugins 插件配置
  
}

module.exports = config