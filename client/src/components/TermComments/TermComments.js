import React from "react";
import "./TermComments.css";
import Auth from "../../utils/Auth";
import { Link } from 'react-router-dom';
import moment from 'moment';

const TermComments = props =>  (

    <div className="termComments">
    <h3>Comments</h3>
        {(props.comments).map(comment => {
            
            return (
            <div className="commentContainer" key={comment._id}>
                <div className="commentAuthor">{comment.authorName}</div>
                {props.update === true && props.commentId === comment._id ? <textarea className="editBox" onChange={props.handleChange} value={props.commentEdit} name='commentEdit'></textarea>
                : <div className="commentBody">
                    <div className="commentBar">{moment(comment.createdAt).format('dddd-MMM-YYYY  HH:mm')} {props.update === false && <img className="commentIcon"  onClick={() => props.updateComment(comment._id, comment.body)} src='./images/pencil.svg' alt="edit" />} <img onClick={() => props.deleteComment(comment._id)} className="commentIcon" src='./images/trashcan.svg' alt="delete" /></div>
                    <div>
                        {comment.body}
                    </div>
                </div>}
                {props.username === comment.authorName &&
                <div>
                    {(props.update === true && props.commentId === comment._id) && <button className="deleteComment" onClick={() => props.updateComment(comment._id, props.commentEdit)}>Submit</button>}
                </div>}
            </div>
            )
        })}
        {Auth.isUserAuthenticated() ?
            (
                <div>
                    <span className="addComment">Add a comment</span>
                    <span className="commenting">Commenting as: {props.username}</span>
                    <form onSubmit={props.commentSubmit} >
                        <textarea style={{ width:'80%', height:'100px'}} name='comment' type='text' value={props.comment} onChange={props.handleChange} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>) : (
                <div><Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link> to post a comment!</div>
            )
        }
    </div>
)
export default TermComments;