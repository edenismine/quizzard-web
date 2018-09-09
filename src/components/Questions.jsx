import React from "react";
import Question from "./Question";
import NewQuestion from "./NewQuestion";

export default props => {
  return (
    <div>
      {props.questions.map(question => (
        <Question
          question={question}
          key={question.id}
          examId={props.examId}
          onDeleteQuestion={props.onDeleteQuestion}
          onDeleteAnswer={props.onDeleteAnswer}
          onAddAnswer={props.onAddAnswer}
        />
      ))}
      <NewQuestion examId={props.examId} onAddQuestion={props.onAddQuestion} />
    </div>
  );
};
