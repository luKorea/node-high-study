const crypto = require("crypto");

const md5 = (password) => {
  const cryptoMd5 = crypto.createHash("md5");
  const newPassword = cryptoMd5.update(password).digest("hex");
  return newPassword;
};

module.exports = md5;
