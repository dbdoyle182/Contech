import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm.js';
import Auth from '../utils/Auth'

class LoginPage extends Component {

    constructor(props, context) {
        super(props, context);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        event.preventDefault();

        // create a string for an HTTP body message
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success

                // change the component-container state
                this.setState({
                    errors: {}
                });

                Auth.authenticateUser(xhr.response.token);
                console.log(this.props)
                this.props.history.push('/')
            } else {
                // failure

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
            });
            xhr.send(formData);
        }
    

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }


    render() {
        return (
            <LoginForm  
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
                successMessage={this.state.successMessage}
            />
        );
    }
}

export default LoginPage;