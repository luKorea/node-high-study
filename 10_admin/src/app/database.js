// 数据库配置
const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "720495hg",
  database: "koreahub",
  connectionLimit: 5,
});

// 测试连接
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log(err, "连接失败");
    } else {
      console.log("数据库链接成功");
    }
  });
});

const connection = connectionPool.promise();

module.exports = connection;
