import Router from 'koa-router'
import controllerRouter from '../api/controller'

const router = new Router();

router.get("/", controllerRouter.func);

export default router;
