const { OPERATION_NOT_ALLOWED } = require("../config/error");
const permissionService = require("../service/permission");

const verifyComment = async (ctx, next) => {
  const { commentId } = ctx.params;
  const { id } = ctx.user;
  const data = await permissionService.hasPermissionUpdateComment(
    commentId,
    id
  );
  console.log(data, "data");
  if (!data.length) {
    return ctx.app.emit("error", OPERATION_NOT_ALLOWED, ctx);
  }
  await next();
};

const verifyPermission = async (ctx, next) => {
  const { id } = ctx.user;
  const keyName = Object.keys(ctx.params)[0];
  const resourceId = ctx.params[keyName];
  let resourceName = keyName.replace("Id", "");
  // 这里用来解决表名跟参数名不同的问题, 后续需要相同
  if (keyName === "commentId") {
    resourceName = "moment";
  } else if (keyName === "momentId") {
    resourceName = "comment";
  }
  const data = await permissionService.hasPermission(
    resourceName,
    resourceId,
    id
  );
  if (!data.length) {
    return ctx.app.emit("error", OPERATION_NOT_ALLOWED, ctx);
  }
  await next();
};

module.exports = {
  verifyComment,
  verifyPermission,
};
