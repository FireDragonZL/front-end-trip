/*
const Koa = require("koa");
const router = require("./routers/index.js");
*/
import Koa from 'koa'
import router from './routers/index'

const app = new Koa();

app.use(router());

app.listen(3000);
