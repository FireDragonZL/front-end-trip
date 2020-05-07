// 引入 node 的 path 模块
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 压缩JS文件
const TerserPlugin = require('terser-webpack-plugin')
// 压缩CSS文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// 提取CSS文件整合到单个文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  mode: "production",
  // 开启热模块更替
  devServer: {
    hot: true
  },
  // loader配置：链式传递 + 反向加载，
  module: {
    rules: [
      // 加载 CSS
      /**
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      */
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
      },
      // 将css文件提取打包到一个文件中（注意，同时配置两个Css加载器时，打包会报错）
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  // 压缩 JS + CSS 文件资源
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  // plugins 插件配置
  plugins: [
    // 打包时，自动生成 index.html 文件。template.html 是生成文件的模板内容（因为生成的index.html默认是空的）
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.html"
    }),
    // 热模块替换需要借助 webpack-dev-server，用于更新浏览器的修改（即：自动刷新）
    new webpack.HotModuleReplacementPlugin(),
    // 完整复制项目中需要的静态文件夹
    new CopyWebpackPlugin([
      {
        //from: path.resolve(__dirname, "caseDetail"),
        from: "caseDetail",
        to: "caseDetail"
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = config