const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userHandlers = require("./controllers/usersHandler");

router.get("/api/users", userHandlers.getUsers);
router.get("/api/users/:id", userHandlers.getUserById);
router.put("/api/users/:id", userHandlers.putUserById);
router.post("/api/user", userHandlers.postUser);

const pokemonHandlers = require("./controllers/pokeHandler");

router.get("/api/pokemon", pokemonHandlers.getPokemons);
router.get("/api/pokemon/:id", pokemonHandlers.getPokemonById);
router.put("/api/pokemon/:id", pokemonHandlers.putPokemonById);
router.post("/api/pokemon", pokemonHandlers.postPokemon);

module.exports = router;
