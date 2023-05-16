const commentService = require("../service/comment");
class CommentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    const data = await commentService.create(content, id);
    ctx.body = {
      code: 200,
      message: "新建评论成功",
      data,
    };
  }

  async getCommentList(ctx, next) {
    // 分页查询
    const { pageSize = 10, pageNum = 0 } = ctx.query;
    const data = await commentService.getCommentList(pageSize, pageNum);
    ctx.body = {
      code: 200,
      message: "查询成功",
      data,
    };
  }
  // 获取单个评论
  async getCommentDetail(ctx, next) {
    const { commentId } = ctx.params;
    console.log(commentId);
    const data = await commentService.findCommentDetail(commentId);
    ctx.body = {
      code: 200,
      message: "查询成功",
      data: data[0],
    };
  }

  // 更新评论
  async updateComment(ctx, next) {
    const { content } = ctx.request.body;
    const { commentId } = ctx.params;
    const data = await commentService.updateComment(content, commentId);
    ctx.body = {
      code: 200,
      message: "修改成功",
      data,
    };
  }
  async deleteComment(ctx) {
    const { commentId } = ctx.params;
    const data = await commentService.deleteComment(commentId);
    ctx.body = {
      code: 200,
      message: "删除成功",
      data,
    };
  }

  // 根据用户 ID 获取用户评论列表
  async getContent(ctx, next) {
    const { id } = ctx.user;
    const data = await commentService.findContentByUserId(id);
    ctx.body = {
      code: 200,
      message: "查询成功",
      data,
    };
  }
}

module.exports = new CommentController();
