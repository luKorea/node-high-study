const fs = require('fs')

const str = `Access denied
You do not have access to chat.openai.com.
The site owner may have set restrictions that prevent you from accessing the site.
Ray ID: 796938bd5fb12512
Timestamp: 2023-02-09 02:37:10 UTC
Your IP address: 61.140.125.14
Requested URL: chat.openai.com/
Error reference number: 1020
Server ID: FL_4F564
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36`;

// 文件写入
// 同步
const res = fs.writeFileSync('./txt/write.txt', str)
console.log(res);
// 异步 回调函数
fs.writeFile('./txt/write1.txt', str, (err) => {
  if(!err) {
    console.log('文件写入成功')
  }
})

// 异步 promise
fs.promises.writeFile('./txt/write2.txt', str).then(res => {
  console.log('写入成功');
}).catch(err => console.log(err))