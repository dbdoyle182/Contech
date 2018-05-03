import React from "react";
import { Link } from 'react-router-dom';
import "./TermTags.css";

const TermTags = props => (
    <div className="termTags">
        <button><Link to={'/search/' + props.tags1}>{props.tags1}</Link></button>
        <button><Link to={'/search/' + props.tags2}>{props.tags2}</Link></button>
    </div>
);

export default TermTags;