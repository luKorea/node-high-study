const jwt = require("jsonwebtoken");
const { privateKey, publicKey } = require("../config/secret");
const { UN_AUTHORIZATION } = require("../config/error");

const genToken = (payload) => {
  const token = jwt.sign(payload, privateKey, {
    expiresIn: 24 * 60 * 60,
    algorithm: "RS256",
  });
  return token;
};

const parseToken = (ctx) => {
  // 获取用户传递的 token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  try {
    return jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
  } catch (error) {
    ctx.app.emit("error", UN_AUTHORIZATION, ctx);
  }
};

module.exports = {
  genToken,
  parseToken,
};
