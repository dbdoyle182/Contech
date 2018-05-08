import React from "react";
import "./TermExtended.css";
import Modal from "../Modal";


const TermExtended = props => (
    <div className="termExtended">
            <h3>Extended Definition: {props.word}</h3>
            {props.editTerm ? <textarea className="editDefinition" onChange={props.handleChange} value={props.definition} name='definition'></textarea> 
            : <p>{props.definition}</p>}
            <Modal />
    </div>
);

export default TermExtended;
