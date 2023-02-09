const fs = require('fs')
// 文件描述符 fd 获取文件状态， 默认不会关闭
fs.open('./index.txt', (err, fd) => {
  if(!err) {
    console.log(fd)
    fs.fstat(fd, (err, state) => {
      if(!err) {
        console.log(state)
        fs.close(fd)
      }
    })
  }
})