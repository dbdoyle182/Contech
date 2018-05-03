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

class TermPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            word: {},
            comments: [],
            browseResults: []
        }

        this.filterHandler = this.filterHandler.bind(this)
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
    }

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



    render() { return (
        
        <Card className='container'>
            <CardTitle />
            <SearchBar/>
            <div className="entire-container">
                <div className="row-container">
                    <div className="float-left">
                        <TermMain word={this.state.word.word} summary={this.state.word.summary}/>
                    </div>
<<<<<<< HEAD
                    <div className="float-right">
                        <TermTags tags1={this.state.word.tags1} tags2={this.state.word.tags2}/>
=======
                    <div className="TermPage-flex-container25">
                        <TermTags tags1={this.state.word.tags1} tags2={this.state.word.tags2} filterHandler={this.filterHandler}/>
>>>>>>> 92ac0a1d41aa7a621821c661be658ab02bfff27f
                        <TermRelevant relevant1={this.state.word.related1} relevant2={this.state.word.related2} />
                    </div>
                </div>
                <TermExtended word={this.state.word.word} definition={this.state.word.definition}/>
                <TermComments id={this.state.word._id} comments={this.state.comments}/>
            </div>
        </Card>
    )}
}

export default TermPage;