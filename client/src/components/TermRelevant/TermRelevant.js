import React from "react";
import "./TermRelevant.css";
import { Link } from "react-router-dom";

const TermRelevant = props => (
  <div className="termRelevant">
    <h4>Relevant Terms</h4>
    {props.relevant1 && (
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        <Link
          className="relevantLink"
          to={"/search/" + props.relevant1}
          replace
        >
          {props.relevant1} ►
        </Link>
      </button>
    )}
    {props.relevant2 && (
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        <Link
          className="relevantLink"
          to={"/search/" + props.relevant2}
          replace
        >
          {props.relevant2} ►
        </Link>
      </button>
    )}
  </div>
);

export default TermRelevant;
