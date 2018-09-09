import React from "react";
import Answer from "./Answer";

export default props => {
  
  return (
    <div>
      {props.answers.map(answer => (
        <Answer answer={answer} key={answer.id} />
      ))}
    </div>
  );
};
