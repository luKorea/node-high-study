const express = require('express')

const app = express()

app.use(express.json())

app.post('/login', (req, res, next) => {
  const {
    username,
    password
  } = req.body

  if (!username || !password) {
    next(-1001)
  } else if (username !== 'korea' || password !== '123456') {
    next(-1002)
  } else {
    res.json({
      code: 200,
      message: '登录成功',
      data: {
        token: 'daf'
      }
    })
  }
})

// 处理错误的middleware
function handleError(errorCode, req, res, next) {
  let message = ''
  switch (errorCode) {
    case -1001:
      message = '请输入用户名或者密码'
      break;
    case -1002:
      message = '用户名或密码错误'
      break;
  }
  res.json({
    code: errorCode,
    message,
    data: null
  })
}

app.use(handleError)

app.listen(9090, () => {
  console.log('express server is open');
})