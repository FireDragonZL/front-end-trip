/**
 * 压缩路由
 */
const combineRouters = require('koa-combine-routers')

const aRouter = require('./aRouter')
const bRouter = require('./b.router')

const router = combineRouters(
  aRouter, 
  bRouter
)

module.exports = router