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
                console.log(this.state.word)
            })
            .catch(err => console.log(err));
    }
    
    
    render() {
    
        return (
            <div className="wordoftheday">
                <h2 className="title">Featured Term</h2>
                <h1 className="word">AJAX</h1>
                {/* {this.state.word.word} */}
                <p className="definition">A web development technique for creating interactive web applications.</p>
                {/* {this.state.word.summary} */}
                <button>Learn More</button>
                <button>New Term</button>
            </div>
        )
    }
};

export default WordOfTheDay;