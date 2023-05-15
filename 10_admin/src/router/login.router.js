const KoaRouter = require("@koa/router");

const verifyLogin = require("../middleware/login");
const verifyAuth = require("../middleware/auth");
const loginController = require("../controller/login");

const loginRouter = new KoaRouter({ prefix: "/login" });

loginRouter.post("/", verifyLogin, loginController.sign);
loginRouter.post("/test", verifyAuth, loginController.test);

module.exports = loginRouter;
