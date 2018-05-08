const express = require("express");
const db = require("../models");
const router = express.Router();

//----Create Routes----

//Get Route for a specific user
router.get("/user/:user", (req, res) => {
  const username = req.params.user;
  db.User.find({ username: username })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
