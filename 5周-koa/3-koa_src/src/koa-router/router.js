/**
 * 创建koa的路由类，核心思想是：
 * 将路由地址和对应的函数写到一个对象里面
 *    url地址  请求类型    中间件
 *      '/'    get/post  middleware
 */
class Router {
  // 实例化的同时创建保存路由地址和对应函数的数组
  constructor () {
    this.routerArray = []
  }

  // 注册路由
  register (url, method, middleware) {
    this.routerArray.push({
      url, method, middleware
    })
  }

  // get方法
  get (url, middleware) {
    this.register(url, 'GET', middleware)
  }

  // post方法
  post (url, middleware) {
    this.register(url, 'POST', middleware)
  }

  /**
   * 遍历寻找对应的IP地址，调用其对应的方法
   * return 异步函数
   */ 
  routes() {
    return async (ctx, next) => {
      // 1.获取当前上下文对象的 url 和 请求类型
      let path = ctx.request.url
      let method = ctx.request.method
      let func
      // 2.遍历获取url对应的中间件函数
      this.routerArray.some(function (element) {
        if (element.url === path && element.method === method) {
          func = element.middleware
          return true
        }
      })
      // 3.判断传入参数是否是函数类型
      if (typeof func === 'function') {
        // await函数等待func返回一个promise对象，这种写法有效避免了死亡回调
        await func(ctx, next)
        /**
         * 添加return语句返回上一级，有利于多个if语句解耦；
         * 即，后面继续添加逻辑的时候不会相互影响
         */
        return
      }
    }
  }
}

module.exports = Router


/**
 * 没有await关键字，需要无限嵌套回调函数
 * @param {*} url 
 * @param {*} params 
 * @param {*} callback 回调函数
 */
function request(url, params, callback) {
  // do some stuff
  const data = 123
  callback(data)
}

/**
 * await关键字在得到一个promise对象时才会继续往下执行
 * 否则一直等待，直到后续方法执行完毕
 * @param {*} url 
 * @param {*} params 
 */
function request(url, params) {
  // TODO SOME
  const data = 123
  return data
}

const data = await request()

callback(data)
