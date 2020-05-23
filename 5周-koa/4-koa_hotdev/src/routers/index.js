import combineRouters from "koa-combine-routers"

import controllerRouter from './controllerRouter'

// 将多个路由组件整合在一起
const router = combineRouters(
  controllerRouter
);

export default router;
