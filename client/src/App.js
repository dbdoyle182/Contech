import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import Base from './components/Base.js';
import DashboardPage from './components/Dashboard.js';
import Auth from './utils/Auth.js'
import LogoutFunction from './containers/LogoutFunction';

class App extends Component { 
  
  state = {
    authenticated: Auth.isUserAuthenticated(),
  }

  componentDidMount() {
    this.setState({
      authenticated: Auth.isUserAuthenticated()
    })
    console.log(Auth.isUserAuthenticated())
  }

  render() {
    return (
      <Router>
        <div>
            <Base />
            <Switch>
              <Route exact path='/' render={() => (
                Auth.isUserAuthenticated() ? (
                  <DashboardPage secretData={'this is a secret'} />
                ) : (
                  <HomePage/>
                )
              )} />
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/logout' component={LogoutFunction} />
            </Switch>  
        </div>
      </Router>
    )  
  }    
}

export default App;
