const http = require('http')

const content = require('./component/content')
const request = require('./component/request')
const response = require('./component/response')
/**
 * 创建KOA类：
 * 1. use方法
 * 2. listen方法
 * 3. ctx上下文对象，挂载req和res
 */
class Koa {

  // use方法
  use(callback){
    // 将函数callback挂载到当前类对象this上
    this.callback = callback
  }

  // listen方法
  listen(...args){
    const server = http.createServer((req, res) => {
      // 创建上下文对象，挂载req + res
      const ctx = this.createCtx(req, res)
      // 回调传入的函数
      this.callback(ctx)
      // 响应信息（调用上下文对象的getter方法）
      res.end(ctx.body)
    })

    server.listen(...args)
  }

  // 创建ctx对象，挂载req和res对象
  createCtx(req, res){
    // object.create(...)创建一个新对象
    const ctx = Object.create(content)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    // 将req+res挂载到ctx对象
    ctx.request = req
    ctx.response = res
    
    return ctx
  }
}

// 开放类
module.exports = Koa
