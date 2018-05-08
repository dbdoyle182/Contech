import React, { Component } from "react";
import PropTypes from "prop-types";
import Auth from "../utils/Auth";

// This component is a faulty destination that logs the user out and then automatically pushes to the home route
class LogoutFunction extends Component {
  componentDidMount() {
    Auth.deauthenticateUser();

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <p>You are being logged out</p>
      </div>
    );
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
