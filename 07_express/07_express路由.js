const express = require('express')

const app = express()

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.end('user路由')
})
userRouter.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.end('user.params')
})


app.use('/user', userRouter)

app.listen(9090, () => {
  console.log('express server is open');
})