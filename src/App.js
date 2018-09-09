import React, { Component } from "react";
import "./App.css";
import Exams from "./components/Exams";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = { exams: [] };
  }

  componentDidMount() {
    this.fetchQuizzes();
  }

  fetchQuizzes = () => {
    axios.get("/api/exam").then(res => {
      this.setState({ exams: res.data });
    });
  };

  handleNewQuiz = name => {
    if (name) {
      axios.post("/api/exam", { name: name, questions: [] }).then(res => {
        if (res.status === 200) {
          this.fetchQuizzes();
        }
      });
    }
  };

  handleDeleteQuiz = id => {
    if (id) {
      axios.delete(`/api/exam/${id}`).then(res => {
        if (res.status === 200) {
          this.fetchQuizzes();
        }
      });
    }
  };

  handleSaveQuiz = id => {
    if (id) {
      var saving = this.state.exams.find(e => e.id === id);
      axios.put(`/api/exam/${id}`, saving).then(res => {
        if (res.status === 200) {
          this.fetchQuizzes();
        }
      });
    }
  };

  handleAddQuestion = (id, question) => {
    const state = { ...this.state };
    const questions = state.exams.find(e => e.id === id).questions;
    const newQuestion = {
      id: questions.length + 1,
      question: question,
      answers: []
    };
    questions.push(newQuestion);
    this.setState(state);
  };

  handleDeleteQuestion = (id, questionIndex) => {
    const state = { ...this.state };
    const exam = state.exams.find(e => e.id === id);
    const questions = exam.questions.filter(q => q.id !== questionIndex);
    exam.questions = questions;
    this.setState(state);
  };

  handleDeleteAnswer = (eId, qId, aId) => {
    const state = { ...this.state };
    const question = state.exams
      .find(e => e.id === eId)
      .questions.find(q => q.id === qId);
    const answers = question.answers.filter(a => a.id !== aId);
    question.answers = answers;
    this.setState(state);
  };

  handleAddAnswer = (eId, qId, answer, correct) => {
    const state = { ...this.state };
    const question = state.exams
      .find(e => e.id === eId)
      .questions.find(q => q.id === qId);
    const newAnswer = {
      id: question.answers.length + 1,
      answer: answer,
      valid: correct
    };
    question.answers.push(newAnswer);
    this.setState(state);
  };

  render() {
    return (
      <div className="container pt-3">
        <Exams
          exams={this.state.exams}
          onNewQuiz={this.handleNewQuiz}
          onDeleteQuiz={this.handleDeleteQuiz}
          onSaveQuiz={this.handleSaveQuiz}
          onAddQuestion={this.handleAddQuestion}
          onDeleteQuestion={this.handleDeleteQuestion}
          onDeleteAnswer={this.handleDeleteAnswer}
          onAddAnswer={this.handleAddAnswer}
        />
      </div>
    );
  }
}

export default App;
