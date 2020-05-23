const Router = require('koa-router')
const cat = require('../api/cat')

const catRouter = new Router()

/*
dogRouter.get('/dogs', async ctx => {
  ctx.body = 'ok'
})
*/
catRouter.get('/cats', cat)

module.exports = catRouter