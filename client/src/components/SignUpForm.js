import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, TextField } from 'material-ui';


const SignUpFrom = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <Card className='container'>
        <form action='/' onSubmit={onSubmit}>
            <h2 className='card-heading'>Sign Up</h2>

            {errors.summary && <p>{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText='Name'
                    name='name'
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>

            <div className='field-line'>
                <TextField
                    floatingLabelText='Email'
                    name='email'
                    errorText={error.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>
        </form>
    </Card>
)