const fs = require('fs')

const readStream = fs.createReadStream('./index.txt')
const writeStream = fs.createWriteStream('./index_copy2.txt')

// 方式一
// readStream.on('data', res => {
//   writeStream.write(res)
// })

// readStream.on('close', () => {
//   writeStream.close()
// })

// 方式二 pipe管道形式
readStream.pipe(writeStream)