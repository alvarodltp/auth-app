import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from './Auth'

const auth = new Auth()

let state = {}
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

ReactDOM.render(
  <Router>
    <App {...state}/>
  </Router>,
  document.getElementById('root'));

}

/* eslint no-restricted-globals: 0 */
let initialState = {
  location: location.pathname.replace(/\//g, ""),
  auth
};

window.setState(initialState)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
