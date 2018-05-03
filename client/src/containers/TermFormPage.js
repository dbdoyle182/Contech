import React, { Component } from 'react';
import { Card, TextField, RaisedButton, MenuItem, RadioButton, RadioButtonGroup} from 'material-ui'

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
            <RadioButton
                key={filtertags.indexOf(tag)}
                value={tag}
                label={tag}
            />
        ));
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
                    <h4>First Category</h4>
                    <RadioButtonGroup name='tags1' value={this.state.tags1} onChange={this.changeWord}>
                        {this.selectItems()}
                    </RadioButtonGroup>
                </div>

                {this.state.tags1 !== '' && <div className='field-line'>
                    <h4>Second Category</h4>
                    <RadioButtonGroup name='tags2' value={this.state.tags2} onChange={this.changeWord}>
                        {this.selectItems()}
                    </RadioButtonGroup>
                </div>}

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