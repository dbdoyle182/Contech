import React, { Component } from "react";
import "./TermComments.css";
import Auth from "../../utils/Auth";
import axios from 'axios';

class TermComments extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comment: '',
            user: {}
        }
    }
    
    componentDidMount() {
        
        if(Auth.isUserAuthenticated()) {
            const username = localStorage.getItem('username')
            axios.get(`/user/${username}`)
                .then(res => {
                    this.setState({ user: res.data[0]})
                })
                .catch(err => console.log(err))
        }
        
    }

    
    

    onSubmit(event) {
        
        const postRoute = '/newComment/' + this.props.id
        

        axios.post(postRoute, ({
            body: this.state.comment,
            author: this.state.user._id,
            authorName: this.state.user.username
        })).then(res => {
            console.log('Comment posted')
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
            });

        
    }
    
    render() {
        return (
            <div className="termComments">
                {(this.props.comments).map(comment => {
                    return (
                    <div key={comment._id}>
                        <div>{comment.authorName}</div>
                        <div>{comment.body}</div>
                    </div>
                    )
                })}
                    <h4>FORM</h4>
                {Auth.isUserAuthenticated() &&
                    <div>
                        <form onSubmit={this.onSubmit.bind(this)} >
                            <input name='comment' type='text' value={this.state.title} onChange={this.handleChange.bind(this)} />
                        </form>
                    </div>
                }
            </div>
        )};

}

export default TermComments;