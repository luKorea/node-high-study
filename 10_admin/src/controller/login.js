const { genToken } = require("../utils/jwt-token");

class LoginController {
  sign(ctx, next) {
    const { id, name } = ctx.user;
    const token = genToken(ctx.user);
    ctx.body = {
      code: 200,
      data: {
        token,
        id,
        name,
      },
    };
  }

  test(ctx, next) {
    if (!ctx.headers.authorization) {
      ctx.body = {
        code: 401,
        message: "token 不存在",
      };
      return;
    }
    ctx.body = {
      code: 200,
      data: ctx.user,
    };
  }
}

module.exports = new LoginController();
