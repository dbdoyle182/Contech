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
                    <div className="commentBar">{moment(comment.createdAt).format('MMMM Do YYYY  hh:mma')} {props.update === false && props.username === comment.authorName && <img className="commentIcon"  onClick={() => props.updateComment(comment._id, comment.body)} src='/images/pencil.png' alt="edit" />} {(props.admin === true || props.username === comment.authorName) && <img onClick={() => props.deleteComment(comment._id)} className="commentIcon" src='/images/trashcan.png' alt="delete" />}</div>
                    <div>
                        {comment.body}
                    </div>
                </div>}
                {(props.username === comment.authorName) &&
                <div>
                    {(props.update === true && props.commentId === comment._id) && <button className="deleteComment" onClick={() => props.updateComment(comment._id, props.commentEdit)}>Done</button>}
                </div>}
            </div>
            )
        })}
        {Auth.isUserAuthenticated() ?
            (
                <div className="addCommentContainer">
                    <h4>Join the conversation</h4>
                    <span className="commenting">Commenting as: {props.username}</span>
                    <form onSubmit={props.commentSubmit} >
                        <textarea className="newComment" name='comment' type='text' value={props.comment} onChange={props.handleChange} />
                        <div className="buttonContainer"><button className="submitComment" type='submit'>Submit</button></div>
                    </form>
                </div>) : (
                <div><Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link> to post a comment!</div>
            )
        }
    </div>
)
export default TermComments;