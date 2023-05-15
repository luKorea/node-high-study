const app = require("./app");
require("./utils/handle-error");

app.listen(9091, () => {
  console.log("服务器启动成功");
});
