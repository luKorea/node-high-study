const express = require('express')

const app = express()


app.post('/login', (req, res) => {

  res.end('登录成功')
})

app.get('/home', (req, res) => {

  res.json({
    code: 200,
    data: {
      name: 'korea',
      age: 20,
    }
  })
})

app.listen(9090, () => {
  console.log('express server is open');
})