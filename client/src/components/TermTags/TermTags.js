import React from "react";
import "./TermTags.css";

const TermTags = props => (
  <div className="termTags">
    <h4>Tags</h4>
    {props.tags1 && <span>{props.tags1}</span>}
    {props.tags2 && <span>{props.tags2}</span>}
  </div>
);

export default TermTags;
