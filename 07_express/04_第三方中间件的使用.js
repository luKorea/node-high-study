const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

const logStream = fs.createWriteStream('./logs/info.log')
app.use(morgan('combined', {
  stream: logStream
}))

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})

app.listen(9090, () => {
  console.log('服务器启动');
})