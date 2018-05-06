import React from "react";
import "./TermExtended.css";

const TermExtended = props => (
    <div className="termExtended">
            <h3>Extended Definition: {props.word}</h3>
            {props.editTerm ? <textarea onChange={props.handleChange} value={props.definition} name='definition'></textarea> 
            : <p>{props.definition}</p>}
    </div>
);

export default TermExtended;