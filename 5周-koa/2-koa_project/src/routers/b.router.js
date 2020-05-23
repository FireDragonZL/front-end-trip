const Router = require('koa-router')
const { b } = require('../api/b')

const bRouter = new Router()

bRouter.get("/b", b)

module.exports = bRouter