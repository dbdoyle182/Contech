import React, { Component } from 'react';
import { Card, TextField, RaisedButton, MenuItem, SelectField } from 'material-ui'

const filtertags = ['Git','Framework','Library','Language','Data','Software','World Wide Web', 'Language Feature', 'Miscellaneous','Frontend','Backend'];

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
        this.handleChange = this.handleChange.bind(this);
        this.menuItems = this.menuItems.bind(this);
    }
    

    changeWord(event) {
        const field = event.target.name;
        const word = this.state.word;
        word[field] = event.target.value;


        this.setState({
            word
        })
    }

    handleChange(event, index, values) {

        this.setState({
            tag: values
        })
    }



    processForm(event) {
        event.preventDefault();
        

        console.log(this.state.word)
    }

    menuItems(values) {
        return filtertags.map((tag) => (
            <MenuItem
                key={tag}
                insetChildren={true}
                checked={values && values.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
        ));
    }

    render() {
        const {tags} = this.state.word.tags
        return (
            
            <Card className='container'>
                <form action='/' onSubmit={this.processForm}>
                <h2 className='card-heading'>Add a Term</h2>

                {this.state.errors.summary && <p className='error-message'>{this.state.errors.summary}</p>}

                <div className='field-line'>
                    <TextField
                        floatingLabelText='Word'
                        name='word'
                        errorText={this.state.errors.term}
                        onChange={this.changeWord}
                        value={this.state.word.word}
                    />
                </div>

                <div className='field-line'>
                    <TextField  
                        floatingLabelText='Summary'
                        name='summary'
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        errorText={this.state.errors.summary}
                        value={this.state.word.summary}
                        onChange={this.changeWord}
                    />
                </div>

                <div className='field-line'>
                    <TextField  
                        floatingLabelText='Definition'
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
                    <SelectField
                        multiple={true}
                        hintText='Select tags'
                        value={tags}
                        onChange={this.handleChange}
                    >
                        {this.menuItems(tags)}
                    </SelectField>
                </div>

            <div className='field-line'>
                
            </div>

            <div className='field-line'>
            </div>

            <div className='button-line'>
                <RaisedButton type='submit' label='Add this term' primary/>
            </div>
        </form>
    </Card>
        )
    }
}

export default TermFormPage;