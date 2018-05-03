import React from "react";
import "./TermExtended.css";

const TermExtended = props => (
    <div className="termExtended">
<<<<<<< HEAD
            <h3>Extended Definition: Term</h3>
            <p>This is like the short definition placeholder. Except it will be long. I get tired of typng real quick though so hopefully this is sufficient</p>
=======
            <h2>{props.word}</h2>
            <p>{props.definition}</p>
>>>>>>> d2addcca43a5b0cb26248e24eb71d067d5eb9cec
    </div>
);

export default TermExtended;