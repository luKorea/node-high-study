// 读取文件
const fs = require("fs");

const registerRoute = (app) => {
  const files = fs.readdirSync(__dirname);
  console.log(files);
  for (let file of files) {
    if (!file.endsWith(".router.js")) continue;
    const router = require(`./${file}`);
    app.use(router.routes());
    app.use(router.allowedMethods());
  }
};

module.exports = registerRoute;
