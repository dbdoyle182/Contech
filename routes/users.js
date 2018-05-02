const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/findUser/all", (req, res) => {
  db.User.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
