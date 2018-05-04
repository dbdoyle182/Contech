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

        
    }
    
    render() {

    return (
    <div className="quiz">
        <h2 className="title">{moment().format('dddd')}'s Quiz</h2>
        <h1 className="question">Which of the following is NOT a programming language?</h1>
        {/* {this.state.quiz.question} */}
        <ul>
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice1}>PHP</li>
            {/* {this.state.quiz.choice1} */}
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice2}>JavaScript</li>
            {/* {this.state.quiz.choice2} */}
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice3}>Bootstrap</li>
            {/* {this.state.quiz.choice3} */}
            <li onClick={this.handleClick.bind(this)} value={this.state.quiz.choice4}>C#</li>
            {/* {this.state.quiz.choice4} */}
        </ul>

        {(this.state.correct === true && this.state.clicked === true) && <div className="right">That is correct!</div>}
        {(this.state.correct === false && this.state.clicked === true) && <div className="wrong">Wrong, try again!</div>}
        
    </div>
    )
    }
};

export default Quiz;