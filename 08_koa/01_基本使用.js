const Koa = require('koa')

const app = new Koa()


app.use((ctx, next) => {
  console.log(ctx);
  ctx.body = {
    code: 200,
    data: {
      message: 'korea',
      username: 'korea',
      password: "123456"
    }
  }
})

app.listen(8080, () => {
  console.log('服务已启动🚀');
})