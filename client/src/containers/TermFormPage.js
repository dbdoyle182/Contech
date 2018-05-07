import React, { Component } from 'react';
import { Card, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import axios from 'axios';
import Auth from '../utils/Auth';
import { Link } from 'react-router-dom';
import "./TermFormPage.css";

const filtertags = ['Git','Framework','Library','Language','Data','Software','World Wide Web', 'Language Feature', 'Miscellaneous','Frontend','Backend'];

class TermFormPage extends Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            errors: {},
            word: '',
            summary: '',
            definition: '',
            tags1: '',
            tags2: '',
            related1:'',
            related2: '',
            filter1: '',
            filter2: ''
        };


        this.processForm = this.processForm.bind(this);
        this.changeWord = this.changeWord.bind(this);
        this.selectItems = this.selectItems.bind(this);
        this.selectFilter1 = this.selectFilter1.bind(this);
        this.selectFilter2 = this.selectFilter2.bind(this);
    }
    

    changeWord(event) {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });

        if(name === 'tags1') {
            axios.get('/filterBy/' + value)
                .then(res => {
                    const filters = res.data;
                    const filterArray = [];
                    filters.map(filter => filterArray.push(filter.word))
                    this.setState({
                        filter1: filterArray
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if(name === 'tags2') {
            axios.get('/filterBy/' + value)
                .then(res => {
                    const filters = res.data;
                    const filterArray = [];
                    filters.map(filter => filterArray.push(filter.word))
                    this.setState({
                        filter2: filterArray
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }



    processForm(event) {
        event.preventDefault();
        axios.post('/newTerm', ({
            word: this.state.word,
            summary: this.state.summary,
            definition: this.state.definition,
            tags1: this.state.tags1,
            tags2: this.state.tags2,
            related1: this.state.related1,
            related2: this.state.related2
        }))
            .then(
                window.location.replace('/')
            )
            .catch(err => {
                console.log(err)
            })
    }
    

    selectItems() {
        return filtertags.map(tag => (
            <RadioButton
                key={filtertags.indexOf(tag)}
                value={tag}
                label={tag}
            />
        ));
    }

    selectFilter1() {
        return this.state.filter1.map(tag => (
            <RadioButton
                key={this.state.filter1.indexOf(tag)}
                value={tag}
                label={tag}
            />
        ));
    }

    selectFilter2() {
        return this.state.filter2.map(tag => (
            <RadioButton
                key={this.state.filter2.indexOf(tag)}
                value={tag}
                label={tag}
            />
        ));
    }

    render() {
        
        return (
        Auth.isUserAuthenticated() ?    
            (<Card className='container termform-page'>
            <form action='/' onSubmit={this.processForm}>
            <div className="field-container">
            <h2 className='card-heading'>Add a Term</h2>

            {this.state.errors.summary && <p className='error-message'>{this.state.errors.summary}</p>}
            <div className="form-options">
                <div className='field-line message'>
                    <TextField
                        floatingLabelText="Enter the name of the term you would like to add..."
                        floatingLabelStyle={{fontSize: "1.3em"}}
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={2}
                        fullWidth={true}
                        name='word'
                        errorText={this.state.errors.term}
                        onChange={this.changeWord}
                        value={this.state.word.word}
                    />
                </div>

                <div className='field-line message'>
                    <TextField  
                        floatingLabelText="Enter a short summary that describes the term..."
                        floatingLabelStyle={{fontSize: "1.3em"}}
                        floatingLabelFixed={true}
                        fullWidth={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        errorText={this.state.errors.summary}
                        value={this.state.word.summary}
                        onChange={this.changeWord}
                    />
                </div>

                <div className='field-line message'>
                    <TextField  
                        floatingLabelText="Enter an extended definition of the term..."
                        floatingLabelFixed={true}
                        floatingLabelStyle={{fontSize: "1.3em"}}
                        fullWidth={true}
                        name='definition'
                        multiLine={true}
                        rows={2}
                        rowsMax={7}
                        errorText={this.state.errors.definition}
                        value={this.state.word.definition}
                        onChange={this.changeWord}
                    />
                </div>

                <div className='field-line'>
                    <h4 className="options-header">First Tag</h4>
                    <RadioButtonGroup name='tags1' value={this.state.tags1} onChange={this.changeWord}>
                        {this.selectItems()}
                    </RadioButtonGroup>
                    <br />
                </div>

                {this.state.tags1 !== '' && <div className='field-line'>
                    <h4 className="options-header">Second Tag</h4>
                    <RadioButtonGroup name='tags2' value={this.state.tags2} onChange={this.changeWord}>
                        {this.selectItems()}
                    </RadioButtonGroup>
                    <br />
                </div>}

                
                {this.state.filter1 !== '' && <div className='field-line'>
                    <h4>First Related Term</h4>
                    <RadioButtonGroup name='related1' value={this.state.related1} onChange={this.changeWord}>
                        {this.selectFilter1()}
                    </RadioButtonGroup>
                    <br />
                </div>}

                {this.state.filter2 !== '' && this.state.related1 !== '' && <div className='field-line'>
                    <h4>Second Related Term</h4>
                    <RadioButtonGroup name='related2' value={this.state.related2} onChange={this.changeWord}>
                        {this.selectFilter2()}
                    </RadioButtonGroup>
                    <br />
                </div>}

                </div>

                <div className='button-line'>
                    <button type='submit' label='Add this term' primary>Add This Term</button>
                </div>
            </div>
            </form>
        </Card>) :(<h1 className="warning-message">Be sure to <Link to='/login' className="form-link">Log In</Link> or <Link to='/signup' className="form-link">Sign Up</Link> to access this page!</h1>)
        )
    }
}

export default TermFormPage;