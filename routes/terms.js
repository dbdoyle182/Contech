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
  }).populate('comments').populate('users')
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term by alphabet letter search
router.get("/searchBy/:letter", (req, res) => {
  console.log(req.query);
  console.log(req.params.letter);
  const letter = req.params.letter;
  db.Term.find({
    word: new RegExp('^'+letter, "i")
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for term by filter search
router.get("/filterBy/:filter", (req, res) => {
  console.log(req.query);
  console.log(req.params.filter);
  const filter = req.params.filter;
  db.Term.find().or([{'tags1':filter}, {'tags2':filter}])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get Route for letter and filter search

router.get('/browseBy/:filter/:letter', (req, res) => {
  const filter = req.params.filter
  const letter = req.params.letter
  db.Term.find({
    word: new RegExp('^'+letter, "i")
  }).or([{'tags1':filter}, {'tags2':filter}])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
})

//Post Route for user adding a new term
router.post("/newTerm", (req, res) => {
  const word = req.body
  db.Term.create(
    req.body
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
