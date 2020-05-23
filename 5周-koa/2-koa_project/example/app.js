const Koa = require('koa')
const helmet = require('koa-helmet')
const koaStatic = require('koa-static')
const path = require('path')
const router = require('./routers/routers')

const app = new Koa()

// 设置安全的通信头
app.use(helmet())
// 使用 localhost:3000/001.jpg 访问public目录下的静态资源
app.use(koaStatic(path.join(__dirname, '../public')))
// 执行路由跳转
app.use(router())

// 设置服务监听端口
app.listen(3000)