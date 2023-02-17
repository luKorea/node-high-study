const fs = require('fs')

const readStream = fs.createReadStream('./index.txt', {
  start: 10,
  end: 20,
  highWaterMark: 3 // 每次读取长度
})

readStream.on('data', (res) => {
  console.log(res.toString());
  // 暂停读取
  readStream.pause()

  // 重新开始读取
  setTimeout(() => {
    readStream.resume()
  }, 2000)
})