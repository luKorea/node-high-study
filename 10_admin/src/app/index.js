const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const registerRoute = require("../router");

const app = new Koa();

app.use(bodyParser());
registerRoute(app);
module.exports = app;
