import React from "react";
import "./TermRelevant.css";
import { Link } from 'react-router-dom';

const TermRelevant = props => (
    

    <div className="termRelevant">
        <button onClick={() => {window.location.reload()}}><Link to={'/search/' + props.relevant1} replace>{props.relevant1}</Link></button>
        <button onClick={() => {window.location.reload()}}><Link to={'/search/' + props.relevant2} replace>{props.relevant2}</Link></button>
    </div>
);

export default TermRelevant;