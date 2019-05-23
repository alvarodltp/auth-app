import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'
import SecretArea from './SecretArea'
import Callback from './Callback'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React and Auth0 App
          </p>
          <h1>LOGIN</h1>
          <Route exact path="/secret-area" render={props => <SecretArea /> } />
          <Route exact path="/secret-area" render={props => <Callback /> } />
        </header>
      </div>
    )
  }
}

export default App;
