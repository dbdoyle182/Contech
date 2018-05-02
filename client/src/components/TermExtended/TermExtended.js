import React from "react";
import "./TermExtended.css";

const TermExtended = props => (
    <div className="termExtended">
            <h2>{props.word}</h2>
            <p>{props.definition}</p>
    </div>
);

export default TermExtended;