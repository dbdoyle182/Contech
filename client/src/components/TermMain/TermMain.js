import React from "react";
import "./TermMain.css";

const TermMain = props => (
  <div className="termMain">
    <h2>{props.word}</h2>
    {props.edit ? (
      <textarea
        style={{ width: "80%", height: "100px" }}
        onChange={props.handleChange}
        value={props.summary}
        name="summary"
      />
    ) : (
      <p>{props.summary}</p>
    )}
    {props.admin &&
      props.edit === false && (
        <button onClick={props.editWord}>Edit Term</button>
      )}
    {props.admin &&
      props.edit && <button onClick={props.handleSubmit}>Submit</button>}
  </div>
);

export default TermMain;
