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
    axios.get("/api/exam").then(res => {
      this.setState({ exams: res.data });
    });
  }

  render() {
    return <div className="container pt-3">
      <Exams exams={this.state.exams} />
    </div>  ;
  }
}

export default App;
