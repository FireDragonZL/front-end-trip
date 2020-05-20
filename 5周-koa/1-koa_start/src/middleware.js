// 此处没有安装babel，因此使用ES5的语法
const Koa = require('koa')

// 1.创建 koa 应用实例
const app = new Koa()

// 2.创建中间件方法
const middleware01 = function async (ctx, next) {
  console.log("中间件-1")
  //next()
  console.log("中间件-1#end")
}
const middleware02 = function async(ctx, next) {
  console.log("中间件-2")
  next()
  console.log("中间件-2#end")
}
const middleware03 = function async(ctx, next) {
  console.log("中间件-3")
  next()
  console.log("中间件-3#end")
}

/**
 * 顺序执行，反向回调，先进后出
 * 中间件-3
   中间件-2
   中间件-1
   中间件-1#end
   中间件-2#end
   中间件-3#end
 */
app.use(middleware03)
app.use(middleware02)
app.use(middleware01)

//设置服务监听端口
app.listen(3000)