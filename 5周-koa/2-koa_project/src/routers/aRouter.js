const Router = require('koa-router')
const a = require('../api/a')

const aRouter = new Router()

console.log("++++++a-1")
aRouter.get('/a', a)
console.log("++++++a-2")

module.exports = { aRouter }