import React, { Component } from "react";

export default class NewAnswer extends Component {
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onAddAnswer(
        this.props.examId,
        this.props.questionId,
        e.target.value,
        this.refs.checked.checked
      );
      e.target.value = "";
      this.refs.checked.checked = false;
    }
  };
  render() {
    return (
      <div>
        <div className="form-inline">
          <div className="form-check col-sm-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
              ref="checked"
            />
            <label className="form-check-label" htmlFor="inlineFormCheck">
              Correct
            </label>
          </div>
          <input
            id="inlineFormInputName2"
            type="text"
            className="form-control mr-2 col-sm-9"
            placeholder="Another answer."
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}
