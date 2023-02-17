const express = require('express')
const multer = require('multer')

const app = express()

// 自定义文件名称
const upload = multer({
  // dest: './upload'
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './upload')
    },
    filename(req, file, callback) {
      callback(null, Date.now() + '_' + file.originalname)
    }
  })
})


// 单图上传
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file, '文件');
  res.end('上传成功')
})

// 多图上传
app.post('/uploadAll', upload.array('files'), (req, res) => {
  console.log(req.files, '文件');
  res.end('上传成功')
})

app.listen(9090, () => {
  console.log('express server is open');
})