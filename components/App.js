import React, {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import MyMessages from './MyMessages.js';
// import ArchiveSent from './ArchiveSent.js';
// import SendMessage from './SendMessage.js';
import ViewUserHome from './ViewUserHome.js';
import ViewWelcome from './ViewWelcome.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';

import {showNodeActions} from '../redux/actions/showNodeActions.js';
import {loginUser} from '../redux/actions/baseUserActions.js';
import {logoutUser} from '../redux/actions/baseUserActions.js';
import {registerUser} from '../redux/actions/baseUserActions.js';
import {fetchMessages} from '../redux/actions/messagesActions.js';

import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';

@connect((store) => {
  return {
    user: store.user.user,
    nodes: store.nodes.nodes,
    users: store.users,
    myMessages: store.messages.messages
  }
})
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }
  
  onSubmitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    e.persist();
    console.log(e.target[0])
    if (e.target['id'] == 'register') {
      let userData = {
        username: e.target[0].value,
        password: e.target[1].value,
        name: e.target[2].value
      };
      console.log(userData);
      this.props.dispatch(registerUser(userData));
    } else {
      this.props.dispatch(loginUser({
        username: e.target[0].value,
        password: e.target[1].value
      }))
    }
    
  }
  
  onClickHandler(e) {
    switch (e.target.text) {
      case 'Login':
        this.props.dispatch(showNodeActions({name: e.target.text, visible: true}));
        break;
      case 'Register':
        this.props.dispatch(showNodeActions({name: e.target.text, visible: true}));
        break;
      case 'Home':
        this.props.dispatch(showNodeActions({name: 'Main', visible: true}));
        break;
      case 'Logout':
        this.props.dispatch(logoutUser(this.props.user));
        break;
      default:
        break;
    }
  }
  
  userActionsHandler(e) {
    
    console.log(e.target.name)
    switch (e.target.name) {
      case 'myMessages':
        
        
        this.props.dispatch(fetchMessages(this.props.user))
          .then((e) => {
            console.log(this)
            this.props.dispatch(showNodeActions({'MyMessages': true}))
          })
        break;
      case 'sendMessage':
        this.props.dispatch(logoutUser(this.props.user));
        break;
      case 'archived':
        this.props.dispatch(logoutUser(this.props.user));
        break;
      default:
        break;
    }
  }
  
  render() {
    const {user, nodes} = this.props
    
    return (
      <div className="App">
        <Header user={user}
                onclick={this.onClickHandler.bind(this)}/>
        <Main user={user}
        >
          <div id="loadingBox">Loading ...</div>
          <div id="infoBox">Info</div>
          <div id="errorBox">Error</div>
          {nodes['Login'] ? <LoginForm onsubmit={this.onSubmitHandler.bind(this)}/> : null}
          {nodes['Register'] ? <RegisterForm onsubmit={this.onSubmitHandler.bind(this)}/> : null}
          {this.props.user.name !== 'Guest' ?
            <ViewUserHome user={this.props.user}
                          onclick={this.userActionsHandler.bind(this)}/> :
            <ViewWelcome name={this.props.user.name}/> }
          {nodes['MyMessages'] ? <MyMessages myMessages={this.props.myMessages}/> : null}
        
        </Main>
        <Footer/>
      </div>
    );
  }
  
}
//
// const mapDispatchToProps = (dispatch) => {
//   return dispatch
// }

export default App