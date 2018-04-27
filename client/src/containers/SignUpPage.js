import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';


class SignUpPage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                username: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }


    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    processForm(event) {

        event.preventDefault();

        console.log(`name: ${this.state.user.name}`);
        console.log(`email: ${this.state.user.email}`);
        console.log(`password: ${this.state.user.password}`);
        console.log(`username: ${this.state.user.username}`)
    }


    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

export default SignUpPage;