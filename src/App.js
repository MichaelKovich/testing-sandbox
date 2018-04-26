import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      todos: [
        // {
        //   id: 1,
        //   title: "Teach Cypress Testing Suite",
        //   isComplete: false
        // }
      ],
    };
  }

  componentDidMount() {
    axios
      .get('/api/todos')
      .then(res => this.setState({todos: res.data}))
      .catch(err => this.setState({error: true}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {this.state.error && <span className="error">Error!</span>}
        <input className="new_todo" placeholder="Add new Todo" />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
