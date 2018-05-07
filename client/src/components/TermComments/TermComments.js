import React, { Component } from "react";
import "./TermComments.css";
import Auth from "../../utils/Auth";
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TermComments = props =>  (

    <div className="termComments">
            <h3>Comments</h3>
                {(this.props.comments).map(comment => {
                    
                    return (
                    <div className="commentContainer" key={comment._id}>
                        <div className="commentAuthor">{comment.authorName}</div>
                        {this.state.update === true && this.state.commentEdit === comment._id ? <textarea className="editBox" onChange={this.handleChange.bind(this)} value={this.state.comment} name='comment'></textarea>
                        : <div className="commentBody">
                            <div className="commentBar">{moment(comment.createdAt).format('MMMM Do YYYY  hh:mma')} {this.state.update === false && <img className="commentIcon"  onClick={() => this.updateComment(comment._id, comment.body)} src='/images/pencil.png' alt="edit" />} <img onClick={() => this.deleteComment(comment._id)} className="commentIcon" src='/images/trashcan.png' alt="delete" /></div>
                            <div>
                                {comment.body}
                            </div>
                        </div>}
                        {this.state.user.username === comment.authorName &&
                        <div>
                            {(this.state.update === true && this.state.commentEdit === comment._id) && <button className="deleteComment" onClick={() => this.updateComment(comment._id, this.state.comment)}>Done</button>}
                        </div>}
                    </div>
                    )
                })}
                {Auth.isUserAuthenticated() ?
                    (
                        <div className="addCommentContainer">
                            <h4>Join the conversation</h4>
                            <span className="commenting">Commenting as: {this.state.user.username}</span>
                            <form onSubmit={this.onSubmit.bind(this)} >
                                <textarea className="newComment" name='comment' type='text' value={this.state.title} onChange={this.handleChange.bind(this)} />
                                <div className="buttonContainer"><button className="submitComment" type='submit'>Submit</button></div>
                            </form>
                        </div>) : (
                        <div><Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link> to post a comment!</div>
                    )
                }
    </div>
)
export default TermComments;