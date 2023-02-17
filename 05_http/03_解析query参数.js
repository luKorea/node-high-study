const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // 1. 解析URL地址
  const urlInfo = url.parse(req.url)
  // 解析query参数
  const queryInfo = Object.fromEntries(new URLSearchParams(urlInfo.query))
  console.log(queryInfo.name, queryInfo.age);
  res.end('server is open')
})

server.listen(8080, () => {
  console.log('服务已启动🚀');
})