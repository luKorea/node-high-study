const labelService = require("../service/label");

const verifyLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const newLabels = [];
  for (const name of labels) {
    const result = await labelService.queryListByName(name);
    const obj = { name };
    if (result) {
      // 获取 ID
      obj.id = result.id;
    } else {
      // 不 存在, 插入, 并且获取 ID
      const result = await labelService.create(name);
      obj.id = result.insertId;
    }
    newLabels.push(obj);
  }
  //   将数据传递到下一个中间件
  console.log(newLabels);
  ctx.labels = newLabels;
  await next();
};

module.exports = {
  verifyLabelExists,
};
