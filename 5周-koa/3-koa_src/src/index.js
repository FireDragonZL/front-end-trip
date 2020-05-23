// 引入koa框架
const Koa = require('./koa/koa')

// 创建koa实例对象
const koa = new Koa()

// 调用use方法，执行中间件
koa.use((ctx) => {
  // 触发上下文对象的setter方法
  ctx.body = "Hello KOA!"
})

// 设置服务监听端口
koa.listen(3000, () => {
  console.log("server running at port 3000")
})