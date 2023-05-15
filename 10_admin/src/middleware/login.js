const {
  NAME_OR_PASSWORD_IS_REQUIRE,
  NAME_IS_EXISTS,
  PASSWORD_IS_INCORRECT,
} = require("../config/error");

const userService = require("../service/user");

const md5 = require("../utils/md5");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 验证用户名密码是否填写完整
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }
  // 验证用户名是否存在
  const user = await userService.findUserByName(name);
  if (!user[0]) {
    return ctx.app.emit("error", NAME_IS_EXISTS, ctx);
  }
  // 验证密码是否正确
  console.log(user[0].password, "----", md5(password));
  if (user[0].password !== md5(password)) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRECT, ctx);
  }

  //   将 user 信息放到 ctx 中
  ctx.user = user[0];
  await next();
};

module.exports = verifyLogin;
