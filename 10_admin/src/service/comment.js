const connection = require("../app/database");

class CommentService {
  async create(content, userId) {
    const statement = "INSERT INTO `moment` (content, user_id) VALUES (?, ?);";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }

  async getCommentList(pageSize, pageNum) {
    // 分页查询, 并且返回是谁发表
    // ? offset limit
    const statement = `SELECT 
	m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
	JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) user
FROM moment m
LEFT JOIN user u ON u.id = m.user_id
LIMIT ? OFFSET ?;`;
    const [result] = await connection.execute(statement, [
      String(pageSize),
      String(pageNum),
    ]);
    return result;
  }
  async findCommentDetail(commentId) {
    console.log(commentId, "commentId");
    const statement = `SELECT 
	m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
	JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) user
FROM moment m
LEFT JOIN user u ON u.id = m.user_id
WHERE m.id = ?;`;
    const [result] = await connection.execute(statement, [commentId]);
    console.log(result, "result");
    return result;
  }
  async findContentByUserId(userId) {
    const statement = "SELECT * FROM `moment` WHERE user_id = ?;";
    const [result] = await connection.execute(statement, [userId]);
    return result;
  }

  async updateComment(content, commentId) {
    const statement = "UPDATE `moment` SET content = ? WHERE id = ?;";
    const [result] = await connection.execute(statement, [content, commentId]);
    return result;
  }
  async deleteComment(commentId) {
    const statement = "DELETE FROM `moment` WHERE id = ?;";
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }
}

module.exports = new CommentService();
