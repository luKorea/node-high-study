const connection = require("../app/database");

class PermissionService {
  //   查询是否有权限修改评论
  async hasPermissionUpdateComment(commentId, userId) {
    const statement = "SELECT * FROM `moment` WHERE id = ? AND user_id = ?;";
    const [result] = await connection.execute(statement, [commentId, userId]);
    return result;
  }
  async hasPermission(resourceName, resourceId, userId) {
    const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [resourceId, userId]);
    return result;
  }
}

module.exports = new PermissionService();
