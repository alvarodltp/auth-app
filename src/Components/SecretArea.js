import React from 'react'

class SecretArea extends React.Component {

  render(){
    return(
      <h1>This is the private area that only logged in users can see. <a href='/'>Back To Home</a></h1>
    )
  }
}

export default SecretArea
