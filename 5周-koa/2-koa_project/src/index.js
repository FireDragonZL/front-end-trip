const Koa = require('koa')
const router = require("./routers/routers")
//const router = require('./routers/a.router')

const app = new Koa()

// 启用安全的通信头插件
//app.use(koaHelmet)
// 引入静态文件资源
//app.use(koaStatic(path.join(__dirname, '../public/001.jpg')))
// 执行路由
app.use(router)
// 设置监听
app.listen(5000)