import React from "react";
import { Link } from 'react-router-dom';
import "./TermTags.css";

class TermTags extends React.Component {  
    render() {
        return(
    <div className="termTags">
        {this.props.tags1 && <div>{this.props.tags1}</div>}
        {this.props.tags2 && <div>{this.props.tags2}</div>}
    </div>)}
};

export default TermTags;