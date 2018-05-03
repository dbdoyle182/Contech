import React, { Component } from 'react';
import { Card, TextField, RaisedButton, MenuItem, SelectField, Checkbox } from 'material-ui'

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
            related2: ''
        };


        this.processForm = this.processForm.bind(this);
        this.changeWord = this.changeWord.bind(this);
        this.selectItems = this.selectItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    changeWord(event) {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
    }



    processForm(event) {
        event.preventDefault();
        

        console.log(this.state)
    }

    selectItems() {
        return filtertags.map(tag => (
            <MenuItem
                key={filtertags.indexOf(tag)}
                value={this.state.tags1}
                primaryText={tag}
                name='tags1'
            />
        ));
    }

    handleChange = (event, index, value) => {
        console.log(index)
        console.log(value)
        this.setState({value})
    }

    render() {
        
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
                        floatingLabelText='Category Tag'
                        value={this.state.tags1}
                        onChange={this.handleChange}
                        name='tags1'
                    >
                    {this.selectItems()}
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