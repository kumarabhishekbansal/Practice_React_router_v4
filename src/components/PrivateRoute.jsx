import React, { Component } from 'react'
import { Route,Redirect } from 'react-router-dom';
import { AuthContext } from './ProvideAuth';
export default class PrivateRoute extends Component {
  render() {
    let auth=this.context;
    const {children,...rest}=this.props;
    return (
      <>
            <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
      </>
    )
  }
}
PrivateRoute.contextType = AuthContext;
