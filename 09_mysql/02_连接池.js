const mysql = require("mysql2");

// 1. 创建链接
const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "720495hg",
  database: "demo",
  connectionLimit: 5,
});

const statement = `select * from products where price > ? and score > ?`;
connectionPool.execute(statement, [100, 1], (err, values) => {
  console.log(values);
});
