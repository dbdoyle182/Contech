import React from "react";
import "./TermTags.css";

class TermTags extends React.Component {  
    render() {
        return(
    <div className="termTags">
        <h4>Tags</h4>
        {this.props.tags1 && <span>{this.props.tags1}</span>}
        {this.props.tags2 && <span>{this.props.tags2}</span>}
    </div>)}
};

export default TermTags;