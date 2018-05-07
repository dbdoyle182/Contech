import React from "react";
import "./SearchBar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import Auth from '../../utils/Auth';

const searchStyles = {
    fontSize: '20px',
    padding: '15px 0 10px 0'
};

class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            search: '',
            auto: [],
            results: [],
            resultsNum: '',
            browseResults: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // Load all terms from database to feed to autocomplete functionality
    componentDidMount() {
        axios.get('/term/all')
            .then(res => { 
                const currentWords = res.data;
                const newWords = currentWords.map(word => word.word)
                this.setState({ 
                    auto: newWords 
                })
                
            })
            .catch(err => console.log(err));
            
        }
    
    // Handles user input in search bar
    handleChange = inputValue => {
        
        const input = inputValue
        this.setState({
            search: input
        });
    };

    // Handles user submission in the search bar
    handleFormSubmit = event => {
        event.preventDefault();
        axios.get(`/search/${this.state.search}`)
            .then(res => {
                if (res.data.length === 1) {
                    
                    window.location.replace(`/search/${res.data[0].word}`)
                    // Redirect to the page with res.data.word
                } else { 
                    this.setState({ 
                        results: res.data,
                        resultsNum: res.data.length
                    })
                }
            })
            .catch(err => console.log(err))
        
    }

    render() {
        return (
        <div>
            <div className="search">
                <form className='search-box' onSubmit={this.handleFormSubmit}>
                    <AutoComplete
                        hintText="Search for a Term..."
                        hintStyle={{margin: '10px 0 10px 3px'}}
                        textFieldStyle={searchStyles}
                        underlineShow={false}
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={this.state.auto}
                        maxSearchResults={5}
                        onUpdateInput={this.handleChange}
                        fullWidth={true}
                        required
                    />
                    <button type="submit" className="search-btn" ></button>
                </form>
            </div>
            {this.state.resultsNum === 0 && (
                Auth.isUserAuthenticated() ? (
                    <div className="no-search-results">Would you like to add <Link to='/addterm' className="results-link">{this.state.search}</Link> to our library?</div>
                ) : (
                    <div className="no-search-results">Sorry, that word isn't available. <Link to='/login' className="results-link">Log In</Link> or <Link to='/signup' className="results-link">Sign up</Link> to add it to our library.</div>
                )

            )}
            
        </div>
        )
    }
};

export default SearchBar;