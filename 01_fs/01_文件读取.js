const fs = require('fs')
// 1. 同步读取
// 默认返回的是buffer 二进制
const text = fs.readFileSync('./index.txt', {
  encoding: 'utf-8'
}); 
console.log(text);

// 2. 异步读取 回调函数
fs.readFile('./index.txt', {
  encoding: 'utf-8'
}, (err, data) => {
  console.log(err);
  if(!err) {
    console.log(data, 'readFile');
  }
})

// 3. 异步读取 promise
fs.promises.readFile('./index.txt', {
  encoding: 'utf-8'
})
.then(res => {
  console.log(res, 'promise');
}).catch(err => console.log(err))
