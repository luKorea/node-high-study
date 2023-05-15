const jwt = require("jsonwebtoken");
const { UN_AUTHORIZATION } = require("../config/error");
const { publicKey } = require("../config/secret");

const verifyAuth = async (ctx, next) => {
  // 获取用户传递的 token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    ctx.user = {
      id: result.id,
      name: result.name,
      createAt: result.createAt,
      updateAt: result.updateAt,
      token: token,
    };
    await next();
  } catch (error) {
    ctx.app.emit("error", UN_AUTHORIZATION, ctx);
  }
};

module.exports = verifyAuth;
