import React, { Component } from 'react';
import TermForm from '../components/TermForm';

class TermFormPage extends Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            errors: {},
            word: {
                word: '',
                summary: '',
                definition: '',
                tags: []
            }
        };


        this.processForm = this.processForm.bind(this);
        this.changeWord = this.changeWord.bind(this);
        this.handleChecks = this.handleChecks.bind(this);
    }

    changeWord(event) {
        const field = event.target.name;
        const word = this.state.word;
        word[field] = event.target.value;


        this.setState({
            word
        })
    }

    handleChecks(event) {
        
    }    

    processForm(event) {
        event.preventDefault();
        

        console.log(this.state.word)
    }

    render() {
        return (
            <TermForm
                onSubmit={this.processForm}
                onChange={this.changeWord}
                errors={this.state.errors}
                word={this.state.word}
                wordlibrary={['word','word','word']}
            />
        )
    }
}

export default TermFormPage;