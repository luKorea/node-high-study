const Koa = require('koa')
const KoaRouter = require('@koa/router')
const app = new Koa()

const userRouter = new KoaRouter({
  prefix: '/user'
})

userRouter.get('/', (ctx, next) => {
  ctx.body = '用户接口'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


app.listen(8080, () => {
  console.log('服务已启动🚀');
})