import React from "react";
import { Link } from "react-router-dom";
import { Card, TextField, CardText } from "material-ui";
import PropTypes from "prop-types";
import "./SignUpForm.css";

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  // Same deal as the login form, try and avoid altering the the structure of the form page.
  <Card className="container signup-page">
    <form action="/" onSubmit={onSubmit}>
      <div className="field-container">
        <h2 className="card-heading">Sign Up</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Username"
            name="username"
            errorText={errors.username}
            onChange={onChange}
            value={user.username}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <button type="submit" label="Create New Account">
            Create New Account
          </button>
        </div>

        <CardText>
          Already have an account?{" "}
          <Link to={"/login"} className="form-link">
            Log in
          </Link>
        </CardText>
      </div>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
