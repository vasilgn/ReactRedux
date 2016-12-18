import React, {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import MyMessages from './MyMessages.js';

import ViewWelcome from './ViewWelcome.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
import ViewUserHome from './ViewUserHome.js';
import SendMessage from './SendMessage.js';

// import ArchiveSent from './ArchiveSent.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions/index.js'

const mapStateToProps = (store) => {
  return {
    user: store.user.user,
    nodes: store.nodes.nodes,
    users: store.users.users,
    myMessages: store.messages.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  
  render() {
    const {user, nodes} = this.props;
    
    return (
      <div className="App">
        <Header user={user}
                onclick={this.onClickHandler.bind(this)}/>
        <Main user={user}
        >
          <div id="loadingBox">Loading ...</div>
          <div id="infoBox">Info</div>
          <div id="errorBox">Error</div>
          
          {this.props.user.name !== 'Guest' ?
            <ViewUserHome user={this.props.user}
                          onclick={this.userActionsHandler.bind(this)}/> :
            <ViewWelcome name={this.props.user.name}/> }
          
          <LoginForm
            style={nodes['Login']}
            onsubmit={this.onSubmitHandler.bind(this)}/>
          <RegisterForm
            style={nodes['Register']}
            onsubmit={this.onSubmitHandler.bind(this)}/>
          
          <MyMessages
            style={nodes['MyMessages']}
            myMessages={this.props.myMessages}/>
          <SendMessage
            style={nodes['SendMessage']}
            onsubmit={this.onSubmitHandler.bind(this)}
            users={this.props.users}/>
        
        </Main>
        <footer>Messaging System - Simple SPA Application</footer>
      </div>
    );
  }
  
  onSubmitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    e.persist();
    
    if (e.target['id'] == 'register') {
      let userData = {
        username: e.target[0].value,
        password: e.target[1].value,
        name: e.target[2].value
      };
      console.log(userData);
      this.props.actions.registerUser(userData);
    } else if (e.target['id'] == 'login') {
      this.props.actions.loginUser({
        username: e.target[0].value,
        password: e.target[1].value
      })
    } else if (e.target['id'] == 'formSendMessage') {
      //e.target[0].selectedOptions.item(index here).value
      console.dir(e.target[1].value)
      let body = {
        sender_username: this.props.user.username,
        sender_name: this.props.user.name,
        recipient_username: e.target[0].selectedOptions.item(0).value,
        text: e.target[1].value
      }
      this.props.actions.sendMessage(body, this.props.user._kmd.authtoken)
      e.target[1].value = '';
    }
    
  }
  
  onClickHandler(e) {
    console.log(e);
    switch (e.target.text) {
      case 'Login':
        this.props.actions.showNodeActions({name: e.target.text, visible: 'block'});
        break;
      case 'Register':
        this.props.actions.showNodeActions({name: e.target.text, visible: 'block'});
        break;
      case 'Home':
        this.props.actions.showNodeActions({name: 'Main', visible: 'block'});
        break;
      case 'Logout':
        this.props.actions.logoutUser(this.props.user);
        break;
      default:
        break;
    }
  }
  
  userActionsHandler(e) {
    e.preventDefault()
    switch (e.target.name) {
      case 'myMessages':
        
        this.props.actions.fetchMessages(this.props.user)
          .then((e) => {
            this.props.actions.showNodeActions({name: 'MyMessages', visible: 'block'})
          })
        break;
      case 'sendMessage':
        this.props.actions.fetchUsers(this.props.user._kmd.authtoken)
          .then((e) => {
            
            this.props.actions.showNodeActions({name: 'SendMessage', visible: 'block'})
          })
        break;
      case 'archived':
        this.props.actions.logoutUser(this.props.user);
        break;
      default:
        break;
    }
  }
  
}
export default App