const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require('./routes/auth')
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static('./server/static/'))
app.use(express.static("/client/dist/"));
// Add routes, both API and view

app.use(authRoutes)

// start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3001 or http://127.0.0.1:3001');
});