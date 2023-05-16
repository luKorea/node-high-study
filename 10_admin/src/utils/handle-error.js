const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRE,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_EXISTS,
  PASSWORD_IS_INCORRECT,
  UN_AUTHORIZATION,
  OPERATION_NOT_ALLOWED,
} = require("../config/error");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRE:
      code = -1001;
      message = "用户名或者密码不能为空";
      break;
    case NAME_IS_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已经存在";
      break;
    case NAME_IS_EXISTS:
      code = -1003;
      message = "用户名不存在";
      break;
    case PASSWORD_IS_INCORRECT:
      code = -1004;
      message = "您输入的密码有误, 请重新输入";
      break;
    case UN_AUTHORIZATION:
      code = -1005;
      message = "无效的 token 或者token 已经过期";
      break;
    case OPERATION_NOT_ALLOWED:
      code = -1006;
      message = "您没有权限操作";
      break;
  }
  ctx.body = {
    code,
    message,
  };
});
