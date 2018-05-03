import React from "react";
import "./TermRelevant.css";
import { Link } from 'react-router-dom';

const TermRelevant = props => (
    

    <div className="termRelevant">
<<<<<<< HEAD
    <h4>Relevant</h4>
        <span>RelTerm1</span> <span>RelTerm2</span>
=======
        {props.relevant1 && <button onClick={() => {window.location.reload()}}><Link to={'/search/' + props.relevant1} replace>{props.relevant1}</Link></button>}
        {props.relevant2 && <button onClick={() => {window.location.reload()}}><Link to={'/search/' + props.relevant2} replace>{props.relevant2}</Link></button>}
>>>>>>> d2addcca43a5b0cb26248e24eb71d067d5eb9cec
    </div>
);

export default TermRelevant;