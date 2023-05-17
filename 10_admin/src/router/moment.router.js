const KoaRouter = require("@koa/router");
const verifyAuth = require("../middleware/auth");

const momentController = require("../controller/moment");

const momentRouter = new KoaRouter({
  prefix: "/moment",
});
momentRouter.post("/", verifyAuth, momentController.create);
momentRouter.post("/reply", verifyAuth, momentController.reply);

module.exports = momentRouter;
