import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./ProvideAuth";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    console.log("Login constructor calling");
  }
  render() {
    let auth = this.context;
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        this.props.history.replace(from);
      });
    };
    return (
      <div>
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={login}>Log in</button>
        </div>
      </div>
    );
  }
}
LoginPage.contextType = AuthContext;

export default withRouter(LoginPage);
