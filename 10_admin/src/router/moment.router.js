const KoaRouter = require("@koa/router");
const verifyAuth = require("../middleware/login");

// TODO 面试完成后完成
const momentRouter = new KoaRouter({
  prefix: "/moment",
});
momentRouter.post("/", verifyAuth);

module.exports = momentRouter;
