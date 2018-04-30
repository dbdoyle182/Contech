import React from 'react';
import { Link } from 'react-router-dom';
import { Card, TextField, Checkbox, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
import FiltersCheckBox from './FiltersCheckBox';

const tags = ['Git','Framework','Library','Language','Data','Software','World Wide Web', 'Language Feature', 'Miscellaneous','Frontend','Backend'];

const TermForm = ({
    onSubmit,
    onChange,
    errors,
    word,
    wordlibrary
}) => (

    

    <Card className='container'>
        <form action='/' onSubmit={onSubmit}>
            <h2 className='card-heading'>Add a Term</h2>

            {errors.summary && <p className='error-message'>{errors.summary}</p>}

            <div className='field-line'>
                <TextField
                    floatingLabelText='Word'
                    name='word'
                    errorText={errors.term}
                    onChange={onChange}
                    value={word.word}
                />
            </div>

            <div className='field-line'>
                <TextField  
                    floatingLabelText='Summary'
                    name='summary'
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    errorText={errors.summary}
                    value={word.summary}
                    onChange={onChange}
                />
            </div>

            <div className='field-line'>
                <TextField  
                    floatingLabelText='Definition'
                    name='definition'
                    multiLine={true}
                    rows={2}
                    rowsMax={7}
                    errorText={errors.definition}
                    value={word.definition}
                    onChange={onChange}
                />
            </div>

            <div className='field-line'>
                {tags.map(tag => (
                    <FiltersCheckBox  key={tags.indexOf(tag)} tag={tag} value={tag} />
                ))}
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
);

TermForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    word: PropTypes.object.isRequired,
    wordlibrary: PropTypes.array.isRequired
}

export default TermForm;