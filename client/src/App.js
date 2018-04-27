import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </MuiThemeProvider>
      </Router>  
    );
  }
}

export default App;
