import React from "react";
import "./TermMain.css";

const TermMain = (props) => (
    <div className="termMain">
            <h2>{props.word}</h2>
            <p>{props.summary}</p>
    </div>
);

export default TermMain;