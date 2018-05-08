const express = require("express");
const validator = require("validator");
const passport = require("passport");

const router = new express.Router();

// Validates the sign up form on the clientside
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 7
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 7 characters.";
  }

  if (
    !payload ||
    typeof payload.name !== "string" ||
    payload.name.trim().length === 0
  ) {
    isFormValid = false;
    errors.name = "Please provide your name.";
  }

  if (
    !payload ||
    typeof payload.username !== "string" ||
    payload.username.trim().length === 0
  ) {
    isFormValid = false;
    errors.username = "Please provide a username.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// Validates the login form on the clientside
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    payload.email.trim().length === 0
  ) {
    isFormValid = false;
    errors.email = "Please provide your email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors.password = "Please provide your password.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// Posts the user information to the MongoDB
router.post("/signup", (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return passport.authenticate("local-signup", err => {
    if (err) {
      console.log(err);
      if (err.name === "BulkWriteError" && err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Check the form for errors.",
          errors: {
            email: "This email is already taken."
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      });
    }

    return res.status(200).json({
      success: true,
      message: "You have successfully signed up! Now you may log in."
    });
  })(req, res, next);
});

router.post("/login", (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return passport.authenticate("local-login", (err, token, userData) => {
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      });
    }

    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
