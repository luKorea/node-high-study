const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, 'URL地址');
  console.log(req.method, '请求方式');
  console.log(req.headers, '请求头');
  console.log(req.statusCode, '状态码');
  res.end('打开服务')
})


server.listen(9090, () => {
  console.log('服务器已经启动🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
})