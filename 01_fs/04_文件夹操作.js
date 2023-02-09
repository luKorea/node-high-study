const fs = require('fs');
const path = require('path');

// fs操作文件夹

// 1. 创建文件夹
// fs.mkdirSync('file-demo')
// 2. 读取文件夹 只能读取一级目录
// fs.readdir('./txt', (err, files) => {
//   if(!err) {
//     console.log(files)
//   }
// })

// 3. 获取文件类型
// fs.readdir('./txt', {
//   withFileTypes: true
// }, (err, files) => {
//   if(!err) {
//     for(const item of files) {
//       if(item.isDirectory()) {
//         console.log(item.name, '：是一个文件夹')
//         fs.readdir('./txt/' + item.name, {
//           withFileTypes: true
//         }, (err, files) => {
//           if(!err) {
//             console.log(files)
//           }
//         })
//       } else {
//         console.log(item.name, '： 是一个文件')
//       }
//     }
//   }
// })

// 4. 递归获取文件夹中的文件
function recursionDir(dirPath) {
  const fileList = []
  function _recursion(dirPath) {
    // 这里需要先获取在操作， 否则fileList会一直返回空
    const files = fs.readdirSync(dirPath, {
      withFileTypes: true
    });
    files.forEach(item => {
      if(item.isDirectory()) {
        _recursion(`${dirPath}/${item.name}`)
      } else {
        fileList.push({
          parentPath: dirPath,
          name: item.name,
          dirPath: path.resolve(__dirname, `${dirPath}/${item.name}`)
        })
      }
    })
  }
  _recursion(dirPath)
  return fileList
}

console.log(recursionDir('./txt'))
const res = recursionDir('../01_fs')
console.log(res)