import Router from 'koa-router';
import { MockoonServer } from './server';

interface RouteOptions {
  server: MockoonServer;
}

export function createRoutes(options: RouteOptions): Router {
  const router = new Router();

  // 添加简单的 ping 路由
  router.get('/api/ping', (ctx) => {
    ctx.body = { code: 0, message: 'pong' };
  });

  router.get('/api/server-uuid', (ctx) => {
    // @ts-ignore
    const version = options.server.environment.uuid;
    ctx.body = {
      code: 0,
      message: 'ok',
      data: version,
    };
  });

  router.get('/api/emits/from-main/to-renderer', (ctx) => { // TODO: POST
    options.server.emit('from-main.to-renderer', { k1: 'v1' });
    ctx.body = {
      code: 0,
      message: 'ok',
    };
  });

  return router;
}
