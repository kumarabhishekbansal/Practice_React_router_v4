import React, { Component, createContext } from "react";
import { fakeAuth } from "./fakeAuth";

const AuthContext = createContext();

export default class ProvideAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  signin = (cb) => {
    fakeAuth.signin(() => {
      this.setState({ user: "user" });
      cb();
    });
  };

  signout = (cb) => {
    fakeAuth.signout(() => {
      this.setState({ user: null });
    });
    cb();
  };

  render() {
    const auth = {
      user: this.state.user,
      signin: this.signin,
      signout: this.signout,
    };

    return (
      <>
        <AuthContext.Provider value={auth}>
          {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}
