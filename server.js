const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("./client/public/"));

// Import routes, both API and view
const terms = require("./routes/terms.js");
const comments = require("./routes/comments.js");
const quizzes = require("./routes/quizzes.js");
const auth = require("./routes/auth.js");
app.use(terms);
app.use(comments);
app.use(quizzes);
app.use(auth);

//Set mongoose to leverage built in promises and connect to Mongo DB
mongoose.Promise = Promise;
// If deployed, use deployed database. Otherwise, use local database.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DevDic");
mongoose.connect(MONGODB_URI);
mongoose.set("debug", true);

// start the server
app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:3001 or http://127.0.0.1:3001"
  );
});
