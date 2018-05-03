import React from "react";
import { Link } from 'react-router-dom';
import "./TermTags.css";

const TermTags = props => (
    <div className="termTags">
        <h4>Tags</h4>
        {props.tags1 && <button>{props.tags1}</button>}
        {props.tags2 && <button>{props.tags2}</button>}
    </div>
);

export default TermTags;