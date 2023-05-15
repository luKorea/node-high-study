const userService = require("../service/user");

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    const data = await userService.create(user);
    ctx.body = {
      message: "创建用户成功",
      data: data,
    };
  }
}

module.exports = new UserController();
