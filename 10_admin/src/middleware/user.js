const {
  NAME_OR_PASSWORD_IS_REQUIRE,
  NAME_IS_EXISTS,
} = require("../config/error");
const userService = require("../service/user");

const md5 = require("../utils/md5");

// 校验用户信息
const verifyUser = async (ctx, next) => {
  const user = ctx.request.body;
  // 1. 判空处理
  if (!user.name || !user.password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRE, ctx);
  }

  // 2. 判断用户名是否存在
  const values = await userService.findUserByName(user.name);
  if (values.length) {
    return ctx.app.emit("error", NAME_IS_EXISTS, ctx);
  }
  await next();
};

// 加密密码
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  // 对密码进行加密
  ctx.request.body.password = md5(password);
  await next();
};

module.exports = { verifyUser, handlePassword };
