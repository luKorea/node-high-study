const http = require('http')

const server = http.createServer((req, res) => {
  // 设置情头头
  req.setEncoding('utf-8');
  let isLogin = false
  req.on('data', res => {
    const data = JSON.parse(res)
    if (data.name === 'korea' && data.password === '123456') {
      isLogin = true
    } else isLogin = false
  })

  req.on('end', () => {
    isLogin ? res.end('登录成功') : res.end('请检查账号密码是否正确');
  })
})

server.listen(8080, () => {
  console.log('服务已启动🚀');
})