const labelService = require("../service/label");

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const data = await labelService.create(name);
    ctx.body = {
      code: 200,
      message: "创建标签成功",
      data,
    };
  }

  async getList(ctx) {
    // 可传入分页
    const data = await labelService.getList();
    ctx.body = {
      code: 200,
      message: "查询成功",
      data,
    };
  }
}

module.exports = new LabelController();
