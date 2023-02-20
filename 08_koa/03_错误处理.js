const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({
  prefix: '/user'
})

userRouter.get('/', (ctx, next) => {
  const isAuth = false
  if (isAuth) {
    ctx.body = {
      code: 200,
      data: [{
        name: 'korea',
        age: 20
      }]
    }
  } else {
    ctx.app.emit('error', -1002, ctx)
  }
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 错误处理
app.on('error', (code, ctx) => {
  let message = ''
  switch (code) {
    case -1001:
      message = '未授权， 请先授权'
      break;
    case -1002:
      message = 'error'
      break
  }
  ctx.body = {
    code,
    message
  }
})

app.listen(9090, () => {
  console.log('服务已启动🚀');
})