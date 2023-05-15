const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const userRouter = require("../router/user");
const loginRouter = require("../router/login");

const app = new Koa();

app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());

module.exports = app;
