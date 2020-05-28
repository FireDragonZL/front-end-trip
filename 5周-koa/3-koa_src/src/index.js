// 引入koa框架
const Koa = require('./koa/koa')
// 引入router路由插件
const Router = require('./koa-router/router')

// 创建koa实例对象
const koa = new Koa()
// 创建router实例对象
const router = new Router()

router.get('/', async ctx => {
  ctx.body = "Home Page!"
})
router.get('/about', async ctx => {
  ctx.body = "This is about page!"
})

koa.use(router.routes())

/*
// 调用use方法，执行中间件
koa.use(async (ctx,next) => {
  // 触发上下文对象的setter方法
  ctx.body = "1"
  await next()
  ctx.body += "4"
})

koa.use(async (ctx,next) => {
  // 触发上下文对象的setter方法
  ctx.body += "2"
  await next()
  ctx.body += "3"
})
*/

// 设置服务监听端口
koa.listen(3000, () => {
  console.log("server running at port 3000")
})