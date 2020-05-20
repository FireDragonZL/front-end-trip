/**
 * 使用 koa-router 进行路由跳转
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

/**
 * () => {} 即为中间件逻辑
 */
router.get('/', ctx => {
  console.log("这是根目录！")
  ctx.body = "Hello Koa!"
})

router.get('/api', ctx => {
  console.log("Hello API！")
  ctx.body = "Hello API!"
})

// 异步函数执行实例
router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(function(){
      resolve("hello world 2s later!")
    }, 2000)
  })
  ctx.body = result
})

/**
 * routes()：将前面路由中定义的方法逻辑添加到koa实例对象app中，作为中间件引用；
 * allowedMethods：起到拦截器的作用，将前面没有的路由即返回4XX，5XX的错误页面
 */
app.use(router.routes())
   .use(router.allowedMethods)

// 设置服务的监听端口
app.listen(3000)