const KoaRouter = require("@koa/router");
const verifyAuth = require("../middleware/auth");
const labelController = require("../controller/label");

const labelRouter = new KoaRouter({ prefix: "/label" });

labelRouter.post("/", verifyAuth, labelController.create);
labelRouter.get("/list", verifyAuth, labelController.getList);

module.exports = labelRouter;
