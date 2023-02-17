const http = require('http')

const server = http.createServer((req, res) => {

  res.end('server is open')
})

server.listen(8080, () => {
  console.log('服务已启动🚀');
})