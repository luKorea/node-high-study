const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    req.setEncoding('binary') // 将文件格式转为二进制
    // 1. 获取boundary
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
    let formData = ''
    req.on('data', res => {
      formData += res
    })
    req.on('end', () => {
      console.log('---');
      const imageType = formData.replace(/\s\s*/g, '').split('Content-Type:')[1].substring(0, 10).trim()
      const imageTypePosition = formData.indexOf(imageType) + imageType.length
      let imageData = formData.substring(imageTypePosition)
      // 去除图片开始位置的两个空格
      imageData = imageData.replace(/^\s\s*/, '')
      console.log(imageData, 'imageData');
      // 替换最后的boundary
      imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
      console.log(imageData);
      fs.writeFile('./test.jpeg', imageData,
        'binary', (err) => {
          res.end('写入成功')
        })
    })
  } else {
    res.end('demo')
  }
})

server.listen(8080, () => {
  console.log('服务已启动🚀');
})