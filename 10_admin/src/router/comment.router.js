const KoaRouter = require("@koa/router");
const verifyAuth = require("../middleware/auth");

const commentController = require("../controller/comment");
const { verifyPermission } = require("../middleware/permission");

const commentRouter = new KoaRouter({
  prefix: "/comment",
});

commentRouter.post("/", verifyAuth, commentController.create);
commentRouter.get("/list", commentController.getCommentList);
commentRouter.get("/:commentId", commentController.getCommentDetail);
commentRouter.patch(
  "/:commentId",
  verifyAuth,
  verifyPermission,
  commentController.updateComment
);
commentRouter.delete(
  "/:commentId",
  verifyAuth,
  verifyPermission,
  commentController.deleteComment
);
commentRouter.post(
  "/getContentByUserId",
  verifyAuth,
  commentController.getContent
);

module.exports = commentRouter;
