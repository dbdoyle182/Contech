import React from "react";
import "./TermTags.css";

const TermTags = props => ( 
    <div className="termTags">
        <h4>Tags</h4>
        <div className="flex-tags">
        {props.tags1 && <span>{props.tags1}</span>}
        {props.tags2 && <span>{props.tags2}</span>}
        </div>
    </div>
);

export default TermTags;