### 说明

本工程用于练习 css，图片，字体等非JS资源文件的加载。相关配置如下：

```json
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
}
```

效果图如下：

![1588686360008](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1588686360008.png)