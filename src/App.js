import React, { Component } from 'react';
import TodoItem from './TodoItem';

class App extends Component {
  state = {
    todos: [{
      name: 'Buy Milk',
      completed: true
    }, {
      name: 'Sell Bread',
      completed: false
    }]
  }

  handleComplete = (index, completed) => {
    this.setState(({ todos }) => ({
      todos: [
        ...todos.slice(0, index),
        {...todos[index], completed},
        ...todos.slice(index + 1)
      ]
    }))
  }

  countCompleted() {
    return this.state.todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  }

  render() {
    return (
      <div className="App">
        <h1>
          Todo List
          ({this.countCompleted()}
          /
          {this.state.todos.length})
        </h1>
        <ul>
          {this.state.todos.map((todo, index) =>
            <TodoItem key={todo.name} {...todo} index={index} onComplete={this.handleComplete} />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
