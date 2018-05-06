import React, { Component } from "react";
import "./TermComments.css";
import Auth from "../../utils/Auth";
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

class TermComments extends Component {
    constructor(props, context) {
        super(props, context);

    }
    
    

    
    


    
    render() {
        return (
            <div className="termComments">
                {(this.props.comments).map(comment => {
                    
                    return (
                    <div key={comment._id}>
                        <div>{comment.authorName}</div>
                        <div>{moment(comment.createdAt).format('dddd-MMM-YYYY  HH:mm')}</div>
                        {this.props.update === true && this.props.commentId === comment._id ? <textarea onChange={this.props.handleChange} value={this.props.commentEdit} name='commentEdit'></textarea>
                        : <div style={{ whiteSpace:'pre-wrap', textAlign: 'left'}} >{comment.body}</div>}
                        <div>
                            {(this.props.update === false && this.props.username === comment.authorName) && <button onClick={() => this.props.updateComment(comment._id, comment.body)}>Update</button>}
                            {this.props.admin ? <button onClick={() => this.props.deleteComment(comment._id)}>Delete</button>
                            : this.props.username === comment.authorName && <button onClick={() => this.props.deleteComment(comment._id)}>Delete</button>
                        }
                            {(this.props.update === true && this.props.commentId === comment._id) && <button onClick={() => this.props.updateComment(comment._id, this.props.commentEdit)}>Submit</button>}
                        </div>
                    </div>
                    )
                })}
                    <h4>FORM</h4>
                {Auth.isUserAuthenticated() ?
                    (<div>
                        <h2>Commenting as: {this.props.username}</h2>
                        <form onSubmit={this.props.commentSubmit} >
                            <textarea style={{ width:'80%', height:'100px'}} name='comment' type='text' value={this.props.comment} onChange={this.props.handleChange} />
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