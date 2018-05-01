import React from "react";
import "./SearchBar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginPage from '../../containers/LoginPage'

class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            search: '',
            auto: [],
            results: [],
            resultsNum: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/term/all')
            .then(res => 
               { const currentWords = res.data;
                const newWords = [];
                newWords.push(currentWords);
                
                this.setState({ auto: newWords })}
            )
            .catch(err => console.log(err));
        }
    

    handleChange = event => {
        
        const search = event.target.value;
        this.setState({
            search
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.get(`/search/${this.state.search}`)
            .then(res => {

                if (res.data.length > 1) {
                    console.log('More than 1 response') 
                    this.setState({ 
                        results: res.data,
                        resultsNum: res.data.length
                    })
                } else if (res.data.length === 1) {
                    console.log('One response')
                    window.location.replace(`/term/${res.data[0].word}`)
                    // Redirect to the page with res.data.word
                } else {
                    console.log('There were no responses')
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
                <form onSubmit={this.handleFormSubmit}>
                    <input name='search' value={this.state.search} type="text"  placeholder='Search here....' onChange={this.handleChange} className="search-box" required/>
                    <button type="submit" className="search-btn" ></button>
                </form>
            </div>
            {this.state.resultsNum > 1 &&
            (<div>
                {this.state.results.map(result => {
                    return (
                        <div>
                            <h5><Link to={`/term/${result.word}`} component={LoginPage}>{result.word}</Link></h5>
                        </div>
                    )
                })}
            </div>)}
            {this.state.resultsNum === 0 && (
                <div><h2>There were no available responses</h2></div>
            )}
            
        </div>
        )
    }
};

export default SearchBar;