import React from "react";
import Questions from "./Questions";

export default props => {
  return <div className="mb-3">
    <h2>{props.exam.name}</h2>
    <Questions questions={props.exam.questions} />
  </div> ;
};
