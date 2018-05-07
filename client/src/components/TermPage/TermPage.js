import React, { Component } from 'react';
import { CardTitle } from 'material-ui/Card';
import TermMain from "../TermMain";
import TermTags from "../TermTags";
import TermRelevant from "../TermRelevant";
import TermExtended from "../TermExtended";
import TermComments from "../TermComments";
import SearchBar from "../SearchBar";
import axios from 'axios';
import "./TermPage.css";
import Auth from '../../utils/Auth';


class TermPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // Page information
            word: {},
            comments: [],
            user: {},
            // Used during term information changes
            editWord: false,
            // Used with comments
            comment: '',
            commentEdit: '',
            update: false,
            commentId: ''
        }
        // Functions used in updating term db
        this.handleChange = this.handleChange.bind(this)
        this.updateTerm = this.updateTerm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        // Functions used in posting, deleting and updating comments db
        this.commentChange = this.commentChange.bind(this)
        this.commentSubmit = this.commentSubmit.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
        this.updateComment = this.updateComment.bind(this)
    }

    // Updates the entire term page component when any of our post and update routes are completed
    refreshWordInfo() {
        axios.get(this.props.match.params.input)
        .then(res => {
            this.setState({
                word: res.data[0],
                comments: res.data[0].comments
            })
            
        })
        .catch(err => console.log(err));
    }

    // Loads in term information and user information upon component mount
    componentDidMount() {
        this.refreshWordInfo()

        if(Auth.isUserAuthenticated()) {
            const username = localStorage.getItem('username')
            axios.get(`/user/${username}`)
                .then(res => {
                    this.setState({ user: res.data[0]})
                })
                .catch(err => console.log(err))
        }
    }

    // Handles change when editing the term summary and definition
    handleChange(event) {
        const field = event.target.name;
        const word = this.state.word;
        word[field] = event.target.value;

        this.setState({
            word
        });
    }

    // Triggers the edit state for the term information
    updateTerm(event) {
        if(this.state.editWord) {
            this.setState({
                editWord: false
            })
        } else {
            this.setState({
                editWord: true
            })
        }
    }

    // Handles the post route for updates to the term information
    handleSubmit(event) {
        const postRoute = '/updateTerm/' + this.state.word._id
    
        axios.post(postRoute, ({
            summary: this.state.word.summary,
            definition: this.state.word.definition
        }))
            .then(res => {
                this.setState({
                    editWord: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Handles the post route for user comments
    commentSubmit(event) {
        event.preventDefault();
        const postRoute = '/newComment/' + this.state.word._id
        

        axios.post(postRoute, ({
            body: this.state.comment,
            author: this.state.user._id,
            authorName: this.state.user.username
        }))
            .then(res => {
                this.setState({
                    comment: ''
                })
                this.refreshWordInfo()
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Handles the form for the comments and tracks changes
    commentChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
            });
    }

    // Handles the delete route for the comments
    deleteComment(id) {
        axios.delete('/newComment/' + id)
            .then(res => {
                this.refreshWordInfo()
            })
            .catch(err => {
                console.log(err)
            })
    }


    // Handles the update route for the comments
    updateComment(id, comment) {
        if(this.state.update === false) {
            this.setState({
                update: true,
                commentEdit: comment,
                commentId: id
            })
        }
        if(this.state.update === true) {
            const postRoute = '/updateComment/' + id;
            axios.post(postRoute, ({
                body: this.state.commentEdit
            }))
                .then(res => {
                    this.setState({
                        update: false
                    })
                    this.refreshWordInfo();
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    



    render() { return (
        
        <CardTitle className='container'>
            <div className="searchContainer">
                <SearchBar/>
            </div>
            <div className="entire-container">
                <div className="row-container">
                    <div className="float-left">
                        <TermMain 
                            word={this.state.word.word} 
                            summary={this.state.word.summary} 
                            editWord={this.updateTerm} 
                            edit={this.state.editWord}
                            admin={this.state.user.admin}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                    <div className="float-right">
                        <TermTags tags1={this.state.word.tags1} tags2={this.state.word.tags2} />
                        <TermRelevant relevant1={this.state.word.related1} relevant2={this.state.word.related2} />
                    </div>
                </div>
                <TermExtended 
                    word={this.state.word.word} 
                    definition={this.state.word.definition} 
                    handleChange={this.handleChange} 
                    editTerm={this.state.editWord}
                />
                <TermComments 
                    id={this.state.word._id} 
                    comments={this.state.comments}
                    update={this.state.update}
                    commentId={this.state.commentId}
                    handleChange={this.commentChange}
                    comment={this.state.comment}
                    updateComment={this.updateComment}
                    username={this.state.user.username}
                    admin={this.state.user.admin}
                    deleteComment={this.deleteComment}
                    commentSubmit={this.commentSubmit}
                    commentEdit={this.state.commentEdit}
                    />
            </div>
        </CardTitle>
    )}
}

export default TermPage;