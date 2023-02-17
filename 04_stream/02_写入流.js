const fs = require('fs')


const writeStream = fs.createWriteStream('./write.txt', {
  flags: 'a+',
  start: 4
})


writeStream.on('open', () => {
  console.log('文件打开');
})

writeStream.write('demo', (err) => {
  console.log('学徒成功', err);
})

writeStream.end('\n写入并且关闭')

writeStream.on('finish', () => {
  console.log('文件写入结束');
})

writeStream.on('close', () => {
  console.log('文件关闭');
})