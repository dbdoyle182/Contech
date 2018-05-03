import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import LogoutFunction from './containers/LogoutFunction';
import Navbar from './components/Navbar.js';
import TermPage from './components/TermPage';
import TermFormPage from './containers/TermFormPage';

class App extends Component { 

  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/logout' component={LogoutFunction} />
              <Route path='/addterm' component={TermFormPage} />
              <Route path='/search/:input' component={TermPage} />

            </Switch>  
        </div>
      </Router>
    )  
  }    
}

export default App;
