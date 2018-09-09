import React from "react";
import Answers from "./Answers";

export default props => {
  return (
    <div>
      <div>{props.question.question}</div>
      <Answers answers={props.question.answers} />
    </div>
  );
};
