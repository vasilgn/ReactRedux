import React, {Component} from 'react';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
import ViewUserHome from './ViewUserHome.js';
import ViewWelcome from './ViewWelcome.js';
import MyMessages from './MyMessages.js';
import ArchiveSent from './ArchiveSent.js';
import SendMessage from './SendMessage.js';

class Main extends Component {
 
  render() {
    
    return (
      <div>
          {this.props.user.name !== 'Guest'?
            <ViewUserHome name={this.props.user.name}
                          onclick={this.props.onclick} /> :
            <ViewWelcome name={this.props.user.name}/> }
        </div>
      
    )
  }
}
export default Main