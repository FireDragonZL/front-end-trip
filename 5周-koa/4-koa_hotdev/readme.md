### 初始化npm项目
```
npm init -y
```

### 配置 koa 框架
```
npm install -S koa @koa/cors koa-body koa-router koa-helmet koa-static
```

### 配置 koa 热加载
```
npm install -D nodemon

// 检查版本
npx nodemon --version
// 启动命令
npx nodemon src/index.js
```

### 安装 webpack webpack-cli
```
npm install -D webpack webpack-cli
```

### 基于 webpack 配置 ES6 的语法
```
npm install -D 
clean-webpack-plugin    // 清理dist目录下的一些文件
webpack-node-externals  // 处理时排除处理node_modules下的不需要的模块文件
@babel/core             // babel语法的核心
@babel/node             // 调试需要的插件
@babel/preset-env       // 支持一些很新的特性
babel-loader            // webpack中使用到的loader
cross-env               // 设置环境变量
```

### 添加webpack配置文件
```
webpack.config.js
```

### 添加ES6语法支持的配置
```
.babelrc

// ES6语法环境，使用以下启动命令
npx babel-node src/index.js
// 执行热加载(nodemon使用commonJS的语法规范，使用一下命令执行ES6语法规范)
npx nodemon --exec babel-node src/index.js

// commonJS与ES6语法的区别
https://juejin.im/post/5e5f10176fb9a07cd443c1e2
```

### webpack调试
```
// window下执行
npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress
// linux下执行
npx node --inspect-brk ./node_modules/webpack/bin/webpack.js --inline --progress

// 进入调试页面，点击 inspect
chrome://inspect/#devices
```