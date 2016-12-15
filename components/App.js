import React, {Component} from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import UserInfo from './UserInfo.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions.js';

class App extends Component {
 
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <br/>
        <div>
          <UserInfo
            user={this.props.user}
            createNewUserId={this.props.actions.createNewUserId} />
        </div>
        <br/>
        <h3>New TODO</h3>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <br/>
        <TodoList todos={this.props.todos}
                  actions={this.props.actions} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App)