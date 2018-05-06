import React, { Component } from "react";
import "./WordOfTheDay.css";
import axios from "axios";
import { Link } from 'react-router-dom';

class WordOfTheDay extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        word: {}
    }
}
    
    componentDidMount() {
        axios.get('/term/all')
            .then(res => {
                const number = Math.floor(Math.random() * res.data.length)
                this.setState({ word: res.data[number]})
                
            })
            .catch(err => console.log(err));
    }

    // function refreshPage(){ 
    //     window.location.reload(); 
    // }
    
    
    render() {
    
        return (
            <div className="wordoftheday">
                <h2 className="title">Featured Term</h2>
                <h1 className="word">{this.state.word.word}</h1>
                <p className="definition">{this.state.word.summary}</p>
                <button><Link to={`/search/${this.state.word.word}`} className="word-link">Learn More</Link></button>
                <button type="button" onClick={() => window.location.reload()}>Next Term</button>
            </div>
        )
    }
};

export default WordOfTheDay;
