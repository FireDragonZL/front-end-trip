import Koa from 'koa'
import router from './routers/index'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import path from 'path'
import compose from 'koa-compose'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import compress from 'koa-compress'

const app = new Koa();

// 运行前检查 生产模式/开发模式
const isProd = process.env.NODE_ENV === "production" ? true : false

// 将多个中间件整合到一起
const middleware = compose([
  helmet(),
  statics(path.join(__dirname, '../public')),
  koaBody(),
  // 美化返回的JSON格式的数据
  koaJson({ pretty: false, param: 'pretty' })
])

// 生产模式，则使用koa-compress插件进行压缩优化
if (isProd) {
  app.use(compress());
}

app.use(middleware)
app.use(router());

app.listen(3000);
