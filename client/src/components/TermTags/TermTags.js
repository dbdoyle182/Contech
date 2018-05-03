import React from "react";
import { Link } from 'react-router-dom';
import "./TermTags.css";

const TermTags = props => (
    <div className="termTags">
        <h4>Tags</h4>
        {props.tags1 && <button><Link to={'/search/' + props.tags1}>{props.tags1}</Link></button>}
        {props.tags2 && <button><Link to={'/search/' + props.tags2}>{props.tags2}</Link></button>}
    </div>
);

export default TermTags;