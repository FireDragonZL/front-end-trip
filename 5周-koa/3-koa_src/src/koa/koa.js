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
  // 初始化的时候构建一个函数数组
  constructor(){
    this.middllewares = []
  }

  // use方法 - 传入异步中间件
  use(middleware){
    // 将中间件挂载到函数数组中
    this.middllewares.push(middleware)
  }

  // listen方法
  listen(...args){
    const server = http.createServer(async (req, res) => {
      // 创建上下文对象，挂载req + res
      const ctx = this.createCtx(req, res)
      // 回调传入的函数
      const func_tmp = this.compose(this.middllewares)
      // 等待一个Promise对象
      await func_tmp(ctx)
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

  // 组合函数 - 返回一个函数对象
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0)

      function dispatch(num) {
        let func = middlewares[num]
        if (!func) {
          // 向上返回一个promise对象
          return Promise.resolve()
        }
        return Promise.resolve(
          func(ctx, function () {
            return dispatch(num + 1)
          })
        )
      }
    }
  }
}

// 开放类
module.exports = Koa
