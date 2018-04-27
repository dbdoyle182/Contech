import React, { Component, Link } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import Base from './components/Base.js'

const App = () => (

      <Router>
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Base />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SignUpPage} />
            </Switch>
            
          </MuiThemeProvider>
        </div>
      </Router>  

      
    );

export default App;
