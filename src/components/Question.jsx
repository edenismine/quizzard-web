import React from "react";
import Answers from "./Answers";

export default props => {
  const handleButtonPressed = () => {
    props.onDeleteQuestion(props.examId, props.question.id);
  };
  return (
    <div className="card mb-2">
      <div className="card-header bg-light align-middle">
        {props.question.id}) {props.question.question}
        <div style={{ float: "right" }}>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleButtonPressed}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <Answers
          answers={props.question.answers}
          examId={props.examId}
          questionId={props.question.id}
          onDeleteAnswer={props.onDeleteAnswer}
          onAddAnswer={props.onAddAnswer}
        />
      </div>
    </div>
  );
};
