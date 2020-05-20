// 此处没有安装babel，因此使用ES5的语法
const Koa = require('koa')

// 1.创建 koa 应用实例
const app = new Koa()

// 2.异步执行上下文Content = ctx
app.use(async ctx => {
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = "Hello World!"
})

// 3.设置服务的监听端口
app.listen(3000)