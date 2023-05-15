const mysql = require("mysql2");

// 1. 创建链接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "720495hg",
  database: "demo",
});

// 1. 插入数据
/* const statement = `INSERT INTO products SET ?;`;
const phoneJson = require("./phone.json");
for (let phone of phoneJson) {
  connection.query(statement, phone);
} */

// 2. 查询数据
/* const statement = `select * from products`;
connection.query(statement, (error, result) => {
  if (error) {
    console.log(error, "错误");
    return;
  }
  console.log(result, "查询的结果");
  // console.log(fields, "数据库字段");
}); */

// 3. 执行预处理语句

const statement = `select * from products where price > ? and score > ?`;
connection.execute(statement, [100, 1], (err, values) => {
  console.log(values);
});
