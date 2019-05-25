import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'
import SecretArea from './SecretArea'
import Callback from './Callback'
import MainLogin from './MainLogin'
import NotFound from './NotFound'



class App extends React.Component {

  render(){

    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <MainLogin {...this.props}/>;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret-area":
        mainComponent = this.props.auth.isAuthenticated() ? <SecretArea /> : <NotFound />;
        break
      default:
        mainComponent = <NotFound />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React and Auth0 App
          </p>
          {mainComponent}
        </header>
      </div>
    )
  }
}

export default App;
