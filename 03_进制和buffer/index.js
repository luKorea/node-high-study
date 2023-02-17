const fs = require('fs')

const buffer = Buffer.from('korea')
console.log(buffer)
console.log('转换', buffer.toString());

// 指定编码
const buf1 = Buffer.from('测试数据', 'utf16le')
console.log(buf1);
console.log(buf1.toString('utf-8'));