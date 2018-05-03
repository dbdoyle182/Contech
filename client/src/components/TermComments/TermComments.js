import React from "react";
import "./TermComments.css";

const TermComments = props => (
    <div className="termComments">
            <h3>User Comments</h3>
            <button>Add a comment</button>
            <div className="commentContainer">
                <p>Sample comment 1 by a user</p>
                <p>Sample crazy comment 2 by a user</p>
            </div>
    </div>
);

export default TermComments;