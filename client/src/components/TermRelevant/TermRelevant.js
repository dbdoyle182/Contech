import React from "react";
import "./TermRelevant.css";
import { Link } from "react-router-dom";

const TermRelevant = props => (
  <div className="termRelevant">
    <h4>Related Terms</h4>
    <div className="flex-relevant">
    {props.relevant1 && (
      <Link
        className="relevantLink"
        to={"/term/" + props.relevant1}
        replace
      >
        {props.relevant1} ►
      </Link>
    )}
    {props.relevant2 && (
      <Link
        className="relevantLink"
        to={"/term/" + props.relevant2}
        replace
      >
        {props.relevant2} ►
      </Link>
    )}
    </div>
  </div>
);

export default TermRelevant;
