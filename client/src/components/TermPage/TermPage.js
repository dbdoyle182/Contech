import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
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
            word: {},
            comments: [],
            browseResults: [],
            editWord: false,
            user: {}
        }

        this.filterHandler = this.filterHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateTerm = this.updateTerm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get(this.props.match.params.input)
            .then(res => {
                this.setState({
                    word: res.data[0],
                    comments: res.data[0].comments
                })
                
            })
            .catch(err => console.log(err));

        if(Auth.isUserAuthenticated()) {
            const username = localStorage.getItem('username')
            axios.get(`/user/${username}`)
                .then(res => {
                    this.setState({ user: res.data[0]})
                    console.log(this.state.user)
                })
                .catch(err => console.log(err))
        }
    }

    // componentDidUpdate() {
    //     axios.get(this.props.match.params.input)
    //         .then(res => {
    //             this.setState({
    //                 comments: res.data[0].comments
    //             })
                
    //         })
    //         .catch(err => console.log(err));
    // }

    filterHandler(filter) {
        axios.get('/filterBy/' + filter)
            .then(res => {
                this.setState({
                    browseResults: res.data
                })
                console.log(this.state.browseResults)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChange(event) {
        const field = event.target.name;
        const word = this.state.word;
        word[field] = event.target.value;

        this.setState({
            word
        });
    }

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



    render() { return (
        
        <Card className='container'>
            <CardTitle />
            <SearchBar/>
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
                        <TermTags tags1={this.state.word.tags1} tags2={this.state.word.tags2} filterHandler={this.filterHandler}/>
                        <TermRelevant relevant1={this.state.word.related1} relevant2={this.state.word.related2} />
                    </div>
                </div>
                <TermExtended 
                    word={this.state.word.word} 
                    definition={this.state.word.definition} 
                    handleChange={this.handleChange} 
                    editTerm={this.state.editWord}
                />
                <TermComments id={this.state.word._id} comments={this.state.comments}/>
            </div>
        </Card>
    )}
}

export default TermPage;