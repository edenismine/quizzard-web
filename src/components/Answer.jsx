import React from "react";

export default props => {
  const handleButtonPress = e => {
    props.onDeleteAnswer(props.examId, props.questionId, props.answer.id);
  };
  var classes = ["py-3"];
  if (props.answer.valid) {
    classes.push("text-success");
  }
  return (
    <div className={classes.join(" ")}>
      {props.answer.answer}{" "}
      <button
        onClick={handleButtonPress}
        className="btn btn-danger btn-sm rounded-circle"
        style={{ float: "right" }}
      >
        <i className="far fa-trash-alt" />
      </button>
    </div>
  );
};
