const express = require('express')

const app = express()


// 解析请求的数据
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', res => {
      req.body = JSON.parse(res.toString())
    })
    req.on('end', () => {
      next()
    })
  } else {
    next()
  }
})

// express
// app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body);
  res.end('登录')
})


app.post('/register', (req, res) => {
  console.log(req.body);
  res.end('注册')
})

app.listen(9090, () => {
  console.log('服务已启动🚀');
})