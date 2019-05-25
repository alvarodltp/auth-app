import React from 'react'

class MainLogin extends React.Component {

  render(){

    return(
      <React.Fragment>
        <h1>Check out the secret area <a href='/secret-area'>Click here</a></h1>
        {this.props.auth.isAuthenticated()? null : <button type="button" onClick={this.props.auth.login}>LOGIN</button> }
      </React.Fragment>
    )
  }
}

export default MainLogin
