import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";

class NotFound extends Component {
  render() {
    return (
      <div id="container">
        <div className="message">
          <h1>404</h1>
          <br />
          <h3>oops. this page does not exist.</h3>
        </div>
        <br />
        <br />
        <div className="button">
          <Link to="/">go home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
