import React, { Component } from "react";
import "./WordOfTheDay.css";
import axios from "axios";

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
<<<<<<< HEAD
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
=======
    <div className="wordoftheday">
        <h2 className="title">Word of the Moment</h2>
        <h1 className="word">{this.state.word.word}</h1>
        <p className="definition">{this.state.word.summary}</p>
      </div>
    );
  }
}
>>>>>>> 208a651abc4a56b3165e36022e9d78960f348e0a

export default WordOfTheDay;
