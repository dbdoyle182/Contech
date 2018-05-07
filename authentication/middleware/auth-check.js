const jwt = require("jsonwebtoken");
const User = require("mongoose").model("User");
const config = require("../../config");

module.exports = (req, res, next) => {
  // Ends the transaction if user is unauthorized
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // Grabs the session token
  const token = req.headers.authorization.split(" ")[1];

  // Uses the secret phrase and token to verify
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).end();
    }

    const userId = decoded.sub;

    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      req.user = user;
      return next();
    });
  });
};
