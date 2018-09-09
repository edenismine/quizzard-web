import React from "react";
import Answer from "./Answer";
import NewAnswer from "./NewAnswer";

export default props => {
  return (
    <div>
      {props.answers.map(answer => (
        <Answer
          answer={answer}
          key={answer.id}
          examId={props.examId}
          questionId={props.questionId}
          onDeleteAnswer={props.onDeleteAnswer}
        />
      ))}
      <NewAnswer examId={props.examId} questionId={props.questionId} onAddAnswer={props.onAddAnswer}/>
    </div>
  );
};
