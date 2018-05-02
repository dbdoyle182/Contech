const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const config = require('./config');

const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

require('./models').connect(process.env.MONGODB_URI || config.dbUri);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view

app.use(passport.initialize());

const localSignupStrategy = require('./authentication/passport/local-signup');
const localLoginStrategy = require('./authentication/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./authentication/middleware/auth-check');
app.use('/api', authCheckMiddleware);


const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static("./client/build/"));
} else {
  app.use(express.static('./client/public/'))
}

// Import routes, both API and view
const terms = require("./routes/terms.js");
const comments = require("./routes/comments.js");
const quizzes = require("./routes/quizzes.js");
const user = require('./routes/user.js');
app.use(terms);
app.use(comments);
app.use(quizzes);
app.use(user);

// If deployed, use deployed database. Otherwise, use local database.
mongoose.set("debug", true);

// start the server
app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:3001 or http://127.0.0.1:3001"
  );
});
