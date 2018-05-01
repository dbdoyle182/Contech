const express = require("express");
const db = require("../models");
const router = express.Router();

//----Create Routes----

//Get Route for all terms
router.get("/term/all", (req, res) => {
  db.Term.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term by user input search
router.get("/search/:input", (req, res) => {
  console.log(req.query);
  console.log(req.params.input);
  const input = req.params.input;
  db.Term.find({
    word: new RegExp('^'+input+'$', "i")
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term by alphabet letter search
router.get("/search/:letter", (req, res) => {
  console.log(req.query);
  console.log(req.params.letter);
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
router.get("/search/:filter", (req, res) => {
  console.log(req.query);
  console.log(req.params.filter);
  const filter = req.params.filter;
  db.Term.find({
    tags: filter
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term-of-the-day

//Post Route for user adding a new term
router.post("/api/newTerm", (req, res) => {
  const word = req.body.word;
  const summary = req.body.summary;
  const definition = req.body.defintion;
  const tags = req.body.tags;
  const related = req.body.related;
  db.Term.insert({
    word: word,
    summary: summary,
    definition: definition,
    tags: tags,
    related: related
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
