import React, { Component } from "react";
import "./WordOfTheDay.css";
import axios from 'axios';

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
    
    
    render() {
    
        return (
    <div className="wordoftheday">
        <h2 className="title">Word of the Moment</h2>
        <h1 className="word">{this.state.word.word}</h1>
        <p className="definition">{this.state.word.summary}</p>
    </div>)
    }
};

export default WordOfTheDay;