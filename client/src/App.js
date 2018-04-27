import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import Base from './components/Base.js'

const App = () => (

      <Router>
        <div>
            <Base />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SignUpPage} />
            </Switch>  
        </div>
      </Router>  

      
    );

export default App;
