import React, { Component } from "react";
import "./Quiz.css";
import axios from 'axios';
import moment from 'moment';

class Quiz extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            quiz: {},
            clicked: false,
            correct: false 
        }
    }


    componentDidMount() {
        axios.get('/quizquestions')
            .then(res =>{
                this.setState({ 
                    quiz: res.data[0]
                 })
                
                console.log(this.state.quiz.question)
            })
            .catch(err =>{
                console.log(err)
            })
    }    

    handleClick(event) {
        
        const userChoice = event.target.getAttribute('value')

        
        this.setState({
            correct: userChoice === this.state.quiz.answer,
            clicked: true
        })

        console.log(this.state.correct)
    }
    
    render() {

    return (
    <div className="quiz">
        <h2 className="title">{moment().format('dddd')}'s Quiz</h2>
        <h1 className="question">{this.state.quiz.question}</h1>
        <ul>
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice1}>{this.state.quiz.choice1}</li>
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice2}>{this.state.quiz.choice2}</li>
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice3}>{this.state.quiz.choice3}</li>
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice4}>{this.state.quiz.choice4}</li>
        </ul>

        {(this.state.correct === true && this.state.clicked === true) && <div>That is correct!</div>}
        {(this.state.correct === false && this.state.clicked === true) && <div>Wrong, try again!</div>}
        
    </div>
    )
    }
};

export default Quiz;