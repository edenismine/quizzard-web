import React from "react";
import Question from "./Question";

export default props => {
  return (
    <div className="card">
      {props.questions.map(question => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
};
