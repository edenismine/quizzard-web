import React from "react";
import Exam from "./Exam";

export default props => {
  return (
    <div>
      {props.exams.map(exam => <Exam exam={exam} key={exam.id} />)}
    </div>
  );
};
