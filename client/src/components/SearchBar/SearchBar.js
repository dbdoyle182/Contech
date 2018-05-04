import React from "react";
import "./SearchBar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import Auth from '../../utils/Auth';

const searchStyles = {
    fontSize: '25px',
    padding: '15px 0 10px 0',
    transition: 'all .3s ease-in-out'
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
    

    handleChange = inputValue => {
        
        const input = inputValue
        this.setState({
            search: input
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.get(`/search/${this.state.search}`)
            .then(res => {

                if (res.data.length > 1) {
                    
                    this.setState({ 
                        results: res.data,
                        resultsNum: res.data.length
                    })
                } else if (res.data.length === 1) {
                    
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
        <div className=''>
            <div className="search">
                <form onSubmit={this.handleFormSubmit}>
                    <AutoComplete
                        hintText="Search for a Term..."
                        hintStyle={{margin: '10px 0 10px 10px'}}
                        textFieldStyle={searchStyles}
                        underlineShow={false}
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={this.state.auto}
                        maxSearchResults={5}
                        onUpdateInput={this.handleChange}
                        className='search-box'
                        fullWidth={true}
                        required
                    />
                    <button type="submit" className="search-btn" ></button>
                </form>
            </div>
            {this.state.resultsNum > 1 &&
            (<div>
                {this.state.results.map(result => {
                    return (
                        <div key={result._id}>
                            <h5><Link to={`/term/${result.word}`}>{result.word}</Link></h5>
                        </div>
                    )
                })}
            </div>)}
            {this.state.resultsNum === 0 && (
                Auth.isUserAuthenticated() ? (
                    <div>Would you like to add <Link to='/addterm'>{this.state.search}</Link> to our library?</div>
                ) : (
                    <div>Sorry, that word isn't available. <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign up</Link> to add to our library.</div>
                )

            )}
            
        </div>
        )
    }
};

export default SearchBar;