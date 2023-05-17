const KoaRouter = require("@koa/router");
const verifyAuth = require("../middleware/auth");

const commentController = require("../controller/comment");
const { verifyPermission } = require("../middleware/permission");
const { verifyLabelExists } = require("../middleware/label");

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

// 关联标签
commentRouter.post(
  "/:commentId/label",
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  commentController.addLabels
);

module.exports = commentRouter;
