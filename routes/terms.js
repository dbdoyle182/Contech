const express = require("express");
const db = require("../models");
const router = express.Router();

//----Create Routes----

//Get Route for all terms
router.get("/term/all", (req, res) => {
  db.Term.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Get Route for term by user input search

//Get Route for term by alphabet letter search
router.get("/term/:letter", (req, res) => {
  const letter = req.params.letter;
  db.Term.find({
    word: /^letter/
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term by filter search

//Get Route for term-of-the-day

//Post Route for user adding a new term

module.exports = router;
