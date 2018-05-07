const express = require("express");
const db = require("../models");
const router = express.Router();

//----Create Routes----

//Post Route for adding a new comment on a term
router.post("/newComment/:id", (req, res) => {
  db.Comment.create(req.body)
    .then(dbComm => {
      console.log(dbComm._id);
      return db.Term.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: dbComm._id } },
        { new: true }
      );
    })
    .then(dbTerm => {
      res.json(dbTerm);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/newComment/:id", (req, res) => {
  db.Comment.findById({ _id: req.params.id })
    .then(dbComment => dbComment.remove())
    .then(dbComment => res.json(dbComment))
    .catch(err => res.status(422).json(err));
});

router.post("/updateComment/:id", (req, res) => {
  db.Comment.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbComment => res.json(dbComment))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
