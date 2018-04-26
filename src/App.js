import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      inputText: '',
      todos: [
        // {
        //   id: 1,
        //   title: "Teach Cypress Testing Suite",
        //   isComplete: false
        // }
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/todos')
      .then(res => this.setState({todos: res.data}))
      .catch(err => this.setState({error: true}));
  }

  handleInputChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/api/todos', {
        title: this.state.inputText,
        isComplete: false,
      })
      .then(response => this.setState({inputText: ''}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {this.state.error && <span className="error">Error!</span>}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="new_todo"
            placeholder="Add new Todo"
            value={this.state.inputText}
            autoFocus
            onChange={e => this.handleInputChange(e)}
          />
        </form>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
