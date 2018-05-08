// Route to show that authentication is working. Can be deleted once unnecessary
const express = require("express");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this message.",

    user: req.user
  });
});

module.exports = router;
