import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import Base from './components/Base.js';
import DashboardPage from './components/Dashboard.js';
import Auth from './utils/Auth.js'

const App = () => (

      <Router>
        <div>
            <Base />
            <Switch>
              <Route exact path='/' component={(Auth.isUserAuthenticated()) ? DashboardPage : HomePage } />
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/logout' component={(Auth.deauthenticateUser()) && HomePage} />
            </Switch>  
        </div>
      </Router>  

      
    );

export default App;
