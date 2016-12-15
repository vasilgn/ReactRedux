import React, {Component} from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (<TodoItem key={todo.id}
                            todo={todo}
                            deleteTodo={this.props.actions.deleteTodo}
                            completeTodo={this.props.actions.completeTodo}
          />)
        })}
      </ul>
    )
  }
}

export default TodoList