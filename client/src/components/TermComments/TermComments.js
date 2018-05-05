import React, { Component } from "react";
import "./TermComments.css";
import Auth from "../../utils/Auth";
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <h3>Comments</h3>
                {(this.props.comments).map(comment => {
                    
                    return (
                    <div className="commentContainer" key={comment._id}>
                        <div className="commentAuthor">{comment.authorName}</div>
                        <div className="commentBody">
                        <div className="commentBar">October 20, 2017 (pencil) (trashcan)</div>
                        <div>{comment.body}</div>
                        </div>
                    </div>
                    )
                })}
                {Auth.isUserAuthenticated() ?
                    (
                        <div>
                            <span className="addComment">Add a comment</span>
                            <span className="commenting">Commenting as: {this.state.user.username}</span>
                            <form onSubmit={this.onSubmit.bind(this)} >
                                <textarea style={{ width:'80%', height:'100px'}}name='comment' type='text' value={this.state.title} onChange={this.handleChange.bind(this)} />
                                <button type='submit'>Submit</button>
                            </form>
                        </div>) : (
                        <div><Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link> to post a comment!</div>
                    )
                }
            </div>
        )};

}
/*
 <div className="termComments">
            <h3>User Comments</h3>
            <button>Add a comment</button>
            <div className="commentContainer">
                <p>Sample comment 1 by a user</p>
                <p>Sample crazy comment 2 by a user</p>
            </div>
    </div>
*/
export default TermComments;