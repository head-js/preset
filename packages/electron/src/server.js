var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/api/ping', (ctx, next) => {
  ctx.body = {
    code: 0,
    message: 'pong',
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 8424;

app.listen(PORT);
console.log(`Koa listening on port ${PORT}`);
