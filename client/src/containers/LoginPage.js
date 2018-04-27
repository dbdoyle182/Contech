import React, { Component } from 'react';

import LoginForm from '../components/LoginForm.js';

class LoginPage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            errors: {},
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

        console.log(`email: ${this.state.user.email}`);
        console.log(`password: ${this.state.user.password}`)
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
            />
        );
    }
}

export default LoginPage;