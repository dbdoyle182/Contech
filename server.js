const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const config = require('./config');



const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./models')
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static('./server/static/'))
app.use(express.static("/client/dist/"));
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
app.use(authRoutes);
app.use(apiRoutes);

// start the server

  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3001 or http://127.0.0.1:3001');
  });