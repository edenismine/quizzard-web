import React, { Component } from "react";

export default class NewQuestion extends Component {
  handleButtonPress = e => {
    this.props.onAddQuestion(this.props.examId, this.refs.question.value);
    this.refs.question.value = "";
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          className="form-control mb-2"
          ref="question"
          placeholder="New question."
        />
        <button
          className="w-100 text-center btn btn-light"
          onClick={this.handleButtonPress}
        >
          <i className="fas fa-plus" />
        </button>
      </div>
    );
  }
}
