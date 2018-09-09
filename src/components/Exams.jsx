import React from "react";
import Exam from "./Exam";
import NewExam from "./NewExam";

export default props => {
  return (
    <div>
      {props.exams.map(exam => (
        <Exam
          exam={exam}
          key={exam.id}
          onDeleteQuiz={props.onDeleteQuiz}
          onSaveQuiz={props.onSaveQuiz}
          onAddQuestion={props.onAddQuestion}
          onDeleteQuestion={props.onDeleteQuestion}
          onDeleteAnswer={props.onDeleteAnswer}
          onAddAnswer={props.onAddAnswer}
        />
      ))}
      <NewExam onNewQuiz={props.onNewQuiz} />
    </div>
  );
};
