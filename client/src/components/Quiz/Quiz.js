import React from "react";
import "./Quiz.css";

const Quiz = props => (
    <div className="quiz">
        <h2 className="title">Quiz</h2>
        <h1 className="question">Which of the following is NOT a programming language?</h1>
        <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>C#</li>
        </ul>
    </div>
);

export default Quiz;