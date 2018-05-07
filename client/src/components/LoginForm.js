import React  from 'react';
import { Card, TextField, CardText } from 'material-ui';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./LoginForm.css";


const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user
}) => (
    <Card className='container login-page'>
        <form action='/' onSubmit={onSubmit}>
        <div className="field-container">
            <h2 className='card-heading'>Login</h2>

            {successMessage && <p className='success-message'>{successMessage}</p>}
            {errors.summary && <p className='error-message'>{errors.summary}</p>}

            <div className='field-line'>
                <TextField
                    floatingLabelText='Email'
                    name='email'
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className='field-line'>
                <TextField
                    floatingLabelText='Password'
                    type='password'
                    name='password'
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>

            <div className='button-line'>
                <button type='submit' label='log in' primary>Log In</button>
            </div>

            <CardText>Don't Have an Account? <Link to={'/signup'} className="form-link">Create One</Link></CardText>
        </div>
        </form>
    </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;