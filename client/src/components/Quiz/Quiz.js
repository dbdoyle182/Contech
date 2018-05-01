import React, { Component } from "react";
import "./Quiz.css";
import axios from 'axios';
import moment from 'moment';

class Quiz extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            quiz: {}
        }
    }


    componentDidMount() {
        axios.get('/quizquestions')
            .then(res =>{
                this.setState({ quiz: res.data[0] })
                console.log(this.state.quiz)
            })
            .catch(err =>{
                console.log(err)
            })
    }    
    
    render() {

    return (
    <div className="quiz">
        <h2 className="title">{moment().format('dddd')}'s Quiz</h2>
        <h1 className="question">{this.state.quiz.question}</h1>
        <ul>
            <li>{this.state.quiz.choice1}</li>
            <li>{this.state.quiz.choice2}</li>
            <li>{this.state.quiz.choice3}</li>
            <li>{this.state.quiz.choice4}</li>
        </ul>
    </div>
    )
    }
};

export default Quiz;