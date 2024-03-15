import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class LoginPage extends Component {
    constructor(props){
        super(props);
        console.log("Login constructor calling");
    }
  render() {
    return (
      <div>LoginPage</div>
    )
  }
}

export default withRouter(LoginPage)
