import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./ProvideAuth";
class AuthButton extends Component {
  render() {
    let auth = this.context;
    return (
      <>
        {auth.user ? (
          <>
          <h1>Welcome user</h1>
            <button
              onClick={() => {
                auth.signout(() => this.props.history.push("/"));
              }}
            ></button>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </>
    );
  }
}
AuthButton.contextType = AuthContext;
export default withRouter(AuthButton);
