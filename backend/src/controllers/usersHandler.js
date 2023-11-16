const models = require("../models");

const getUsers = (req, res) => {
  models.users
    .findAll()
    .then(([users]) => {
      if ([users] !== null) {
        res.json(users);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retriving data form database");
    });
};

const getUserById = (req, res) => {
  models.users
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

const putUserById = (req, res) => {
  const user = req.body;
  user.id = parseInt(req.params.id, 10);
  models.users
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

const postUser = (req, res) => {
  const user = req.body;
  models.users
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
  getUsers,
  getUserById,
  putUserById,
  postUser,
};
