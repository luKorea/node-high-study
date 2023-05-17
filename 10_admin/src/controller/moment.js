const momentService = require("../service/moment");
class MomentController {
  async create(ctx, next) {
    const { id } = ctx.user;
    const { content, momentId } = ctx.request.body;
    const data = await momentService.create(content, momentId, id);
    ctx.body = {
      code: 200,
      message: "发表评论成功",
      data,
    };
  }

  //  回复评论
  async reply(ctx, next) {
    const { id } = ctx.user;
    const { content, momentId, commentId } = ctx.request.body;
    const data = await momentService.reply(content, momentId, commentId, id);
    ctx.body = {
      code: 200,
      message: "回复评论成功",
      data,
    };
  }
}

module.exports = new MomentController();
