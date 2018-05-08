import React from "react";
import "./TermMain.css";

const TermMain = (props) => (
    <div className="termMain">
            <h2>{props.word}</h2>
            {props.edit ? <textarea className="editDefinition" onChange={props.handleChange} value={props.summary} name='summary'></textarea>
            : <p>{props.summary}</p>}
            {props.admin && props.edit === false && <button className="button" onClick={props.editWord}>Edit Term</button>}
            {props.admin && props.edit && <button className="button" onClick={props.handleSubmit}>Submit</button>}
    </div>
);

export default TermMain;