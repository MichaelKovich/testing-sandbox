import React, { Component } from "react";

import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   title: "Teach Cypress Testing Suite",
        //   isComplete: false
        // }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <input className="new_todo" placeholder="Add new Todo" />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
