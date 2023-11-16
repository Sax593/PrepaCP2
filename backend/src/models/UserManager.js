const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, email, wallet) values (?,?,500)`,
      [user.pseudo, user.email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, wallet = ? where id = ?`,
      [user.pseudo, user.wallet, user.id]
    );
  }
}

module.exports = UserManager;
