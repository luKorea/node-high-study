const express = require('express')


const app = express()


// 解析 application/x-www-form-urlencoded
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    req.on('data', data => {
      const res = Object.fromEntries(new URLSearchParams(data.toString()))
      req.body = res;
    })
    req.on('end', () => next())
  } else next()
})

// app.use(express.urlencoded({
//   extended: true
// }))

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})

app.listen(9090, () => {
  console.log('服务器启动');
})