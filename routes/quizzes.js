const express = require("express");
const db = require("../models");
const router = express.Router();

//----Create Routes----

//Get Route for daily quiz question
router.get('/quizquestions', (req, res) => {
    db.Quiz.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;
