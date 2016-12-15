import React, {Component} from 'react';

class TodoItem extends Component {
  
  handleComplete(e){
    this.props.completeTodo(this.props.todo.id)
  }
  
  handleDelete(e){
    this.props.deleteTodo(this.props.todo.id)
  }
  render(){
    return(
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}> Mars as complete </button>
        <button onClick={this.handleDelete.bind(this)}> Delete </button>
      </li>
    )
  }
}
export default TodoItem