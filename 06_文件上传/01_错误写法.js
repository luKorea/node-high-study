const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const writeStream = fs.createWriteStream('./demo.png', {
    flags: 'a+'
  })
  req.on('data', res => {
    console.log(res, 'res');
    writeStream.write(res)
  })
  req.on('end', () => {
    writeStream.close()
    res.end('写入成功')
  })
})

server.listen(8080, () => {
  console.log('服务已启动🚀');
})