const models = require("../models");

const getPokemons = (req, res) => {
  models.pokemon
    .findAll()
    .then(([pokemons]) => {
      if ([pokemons] !== null) {
        res.json(pokemons);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retriving data form database");
    });
};

const getPokemonById = (req, res) => {
  models.pokemon
    .find(req.params.id)
    .then(([user]) => {
      if (user[0] !== null) {
        res.json(user[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data fron database");
    });
};

const putPokemonById = (req, res) => {
  const user = req.body;
  user.id = parseInt(req.params.id, 10);
  models.pokemon
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postPokemon = (req, res) => {
  const user = req.body;
  models.pokemon
    .insert(user)
    .then(([result]) => {
      res.location(`/api/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getPokemons,
  getPokemonById,
  putPokemonById,
  postPokemon,
};
