import React from "react";
import Questions from "./Questions";

export default props => {
  const handleDeleteButtonPress = e => {
    props.onDeleteQuiz(props.exam.id);
  };
  const handleSaveButtonPress = e => {
    props.onSaveQuiz(props.exam.id);
  };
  return (
    <div className="mb-5 jumbotron bg-light rounded">
      <h2 className="mb-3">{props.exam.name}</h2>
      <Questions
        questions={props.exam.questions}
        examId={props.exam.id}
        onAddQuestion={props.onAddQuestion}
        onDeleteQuestion={props.onDeleteQuestion}
        onDeleteAnswer={props.onDeleteAnswer}
        onAddAnswer={props.onAddAnswer}
      />
      <hr className="my-4" />
      <button className="btn btn-danger" onClick={handleDeleteButtonPress}>
        Delete
      </button>
      <button className="btn btn-light ml-2" onClick={handleSaveButtonPress}>
        Save changes
      </button>
    </div>
  );
};
