const KoaRouter = require("@koa/router");

const userController = require("../controller/user");
const { verifyUser, handlePassword } = require("../middleware/user");
const userRouter = new KoaRouter({ prefix: "/user" });

userRouter.post("/", verifyUser, handlePassword, userController.create);

module.exports = userRouter;
