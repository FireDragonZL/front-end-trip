const Router = require('koa-router')
const dog = require('../api/dog')

const dogRouter = new Router()

/*
dogRouter.get('/dogs', async ctx => {
  ctx.body = 'ok'
})
*/
dogRouter.get('/dogs', dog)

module.exports = dogRouter