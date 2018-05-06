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
            user: {},
            update: false,
            commentEdit: ''
        }

        this.updateComment = this.updateComment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
        event.preventDefault();
        const postRoute = '/newComment/' + this.props.id
        

        axios.post(postRoute, ({
            body: this.state.comment,
            author: this.state.user._id,
            authorName: this.state.user.username
        })).then(res => {
            console.log('Comment posted')
            this.setState({
                comment: ''
            })
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

    deleteComment(id) {
        axios.delete('/newComment/' + id)
            .then(res => {
                console.log('Your comment has been deleted')
            })
            .catch(err => {
                console.log(err)
            })
    }

    updateComment(id, comment) {
        if(this.state.update === false) {
            this.setState({
                update: true,
                comment: comment,
                commentEdit: id
            })
        }
        if(this.state.update === true) {
            const postRoute = '/updateComment/' + id;
            axios.post(postRoute, ({
                body: this.state.comment
            }))
                .then(res => {
                    console.log('Your comment has been updated')
                    this.setState({
                        update: false
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    
    render() {
        return (
            <div className="termComments">
            <h3>Comments</h3>
                {(this.props.comments).map(comment => {
                    
                    return (
                    <div className="commentContainer" key={comment._id}>
                        <div className="commentAuthor">{comment.authorName}</div>
                        {this.state.update === true && this.state.commentEdit === comment._id ? <textarea className="editBox" onChange={this.handleChange.bind(this)} value={this.state.comment} name='comment'></textarea>
                        : <div className="commentBody">
                            <div className="commentBar">October 20, 2017 {this.state.update === false && <img className="commentIcon"  onClick={() => this.updateComment(comment._id, comment.body)} src='./images/pencil.svg' alt="edit" />} <img onClick={() => this.deleteComment(comment._id)} className="commentIcon" src='./images/trashcan.svg' alt="delete" /></div>
                            <div>
                                {comment.body}
                            </div>
                        </div>}
                        {this.state.user.username === comment.authorName &&
                        <div>
                            {(this.state.update === true && this.state.commentEdit === comment._id) && <button className="deleteComment" onClick={() => this.updateComment(comment._id, this.state.comment)}>Submit</button>}
                        </div>}
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
export default TermComments;