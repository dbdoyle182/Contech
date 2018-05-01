import React from "react";
import "./SearchBar.css";
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            search: '',
            auto: [],
            results: []
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
                console.log(currentWords)
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

                console.log(res.data)
                // if (res.data.length > 1) {
                //     console.log(res.data)
                //     this.setState({
                //         results: res.data
                //     }) 
                // } else {
                //     console.log(res.data)
                //     // Redirect to the page with res.data.word
                // }
            })
            .catch(err => console.log(err))
        
    }

    render() {
        return (
        <div className="search">
            <form onSubmit={this.handleFormSubmit}>
                <input name='search' value={this.state.search} type="text"  placeholder='Search here....' onChange={this.handleChange} className="search-box" required/>
                <button type="submit" className="search-btn" ></button>
            </form>
        </div>
        )
    }
};

export default SearchBar;