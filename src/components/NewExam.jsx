import React, { Component } from "react";

export default class NewExam extends Component {
  handleSaveButtonPress = e => {
    var result = this.refs.name.value;
    console.log(result);
    this.props.onNewQuiz(result);
  };
  render() {
    return (
      <div className="mb-5 jumbotron bg-light rounded text-center">
        <div className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Quiz name"
              ref="name"
            />
          </div>
          <hr className="my-4" />
          <button
            className="btn btn-success btn-lg"
            onClick={this.handleSaveButtonPress}
          >
            <i className="fas fa-file-alt"></i> &nbsp; New quiz
          </button>
        </div>
      </div>
    );
  }
}
