const AbstractManager = require("./AbstractManager");

class pokemonManager extends AbstractManager {
  constructor() {
    super({ table: "pokemon" });
  }

  insert(pokemon) {
    return this.connection.query(
      `insert into ${this.table} (name, img_url, level, pv, price) values (?,?,?,?,?)`,
      [pokemon.name, pokemon.img_url, pokemon.level, pokemon.pv, pokemon.price]
    );
  }

  update(pokemon) {
    return this.connection.query(
      `update ${this.table} set price = ? where id = ?`,
      [pokemon.name, pokemon.id]
    );
  }
}

module.exports = pokemonManager;
