import React, {Component} from 'react';

class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.addTodo(this.state.inputText)
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               placeholder="this your todo..."
               value={this.state.inputText}
               onChange={this.handleChange}>
        </input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default TodoInput