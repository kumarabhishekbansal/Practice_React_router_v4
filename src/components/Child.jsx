import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class Child extends Component {
  render() {
    console.log("props",this.props);
    return (
      <>
        <div>ID : {this.props.match.params.id}</div>
      </>
    )
  }
}

export default withRouter(Child);
