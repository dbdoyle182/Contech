import React, { Component } from "react";
import "./WordOfTheDay.css";
import axios from "axios";
import { Link } from "react-router-dom";

class WordOfTheDay extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      word: {}
    };

    this.selectRandomWord = this.selectRandomWord.bind(this);
  }

  // Loads all terms from database, selects a random term from that response and sets the state with chosen term
  selectRandomWord() {
    axios
      .get("/term/all")
      .then(res => {
        const number = Math.floor(Math.random() * res.data.length);
        this.setState({ word: res.data[number] });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.selectRandomWord();
  }

  render() {
    return (
      <div className="wordoftheday">
        <h2 className="title">Featured Term</h2>
        <h1 className="word">{this.state.word.word}</h1>
        <p className="definition">{this.state.word.summary}</p>
        <button>
          <Link to={`/term/${this.state.word.word}`} className="word-link">
            Learn More
          </Link>
        </button>
        <button type="button" onClick={this.selectRandomWord}>
          Next Term
        </button>
      </div>
    );
  }
}

export default WordOfTheDay;
