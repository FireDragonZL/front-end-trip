// 1.引入插件
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const Cors = require('@koa/cors')

// 2.创建实例对象
const app = new Koa()
const router = new Router()

// 请求前缀
router.prefix('/api')

// 3.创建restful请求
router.post('/post', async (ctx) => {
  const {body} = ctx.request
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    ...body
  }
})

// 获取get请求中的参数信息
router.get('/get', async (ctx) => {
  const params = ctx.request.query
  console.log(params)
  ctx.body = {
    params
  }
})

// 根据header中role属性返回响应信息
router.post('/user', async ctx => {
  const {header, body} = ctx.request
  const role = header.role
  console.log(!role)
  console.log(body.age === "")
  console.log(typeof body.age === "undefined")
  if(typeof role === 'undefined' || role !== "admin"){
    ctx.body = {
      "status": 401,
      "msg": "unauthorized post request"
    }
  } else if (typeof body.age !== "undefined" && typeof body.name !== "undefined") {
    if (body.age !== "" && body.name !== "") {
      ctx.body = {
        "status": 200,
        "data": body,
        "msg": "上传成功"
      }
    } else {
      ctx.body = {
        "status": 401,
        "msg": "request params must not be null"
      }
    }
  }else{
    ctx.body = {
      "status": 401,
      "msg": "request params is not correct"
    }
  }
  
})

// 引入插件，接收响应信息 + 跨域处理
app.use(koaBody())
app.use(Cors())
// 4.基于use执行请求(插件执行存在顺序)
app.use(router.routes())
// 5.设置监听端口
app.listen(3000)