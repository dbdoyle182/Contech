import React, { Component } from 'react';
import Auth from '../utils/Auth';
import Dashboard from '../components/Dashboard';

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secretData: 'This is the secret data'
        };
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/dashboard');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            console.log('-----------')
            console.log(xhr.response.message)
            if (xhr.status === 200) {
                this.setState({
                    secretData: xhr.response.message
                });
            }
        });
        xhr.send();
        console.log(this.state.secretData)

    }

    render() {
        return (<Dashboard secretData={this.state.secretData} />)
    }
}

export default DashboardPage;