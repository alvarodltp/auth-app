import React from 'react'
import Auth from '../Auth'

class Callback extends React.Component {

  componentDidMount(){
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render(){
    return(
      <h1>Loading...</h1>
    )
  }
}

export default Callback
