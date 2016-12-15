import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import MyMessages from './MyMessages.jsx';
import ArchiveSent from './ArchiveSent.jsx';
import SendMessage from './SendMessage.jsx';
import AppHome from './AppHome.jsx';

class Main extends Component {
  
  render(){
    
    let actionForm;
    if(this.props.loginForm){
      actionForm = <LoginForm/>
    }
    if(this.props.regForm){
      actionForm = <RegisterForm/>
    }
    
    return(
      <main>
        <div id="loadingBox">Loading ...</div>
    
        <div id="infoBox">Info</div>
    
        <div id="errorBox">Error</div>
        
        {actionForm ? actionForm: <AppHome/>}
        
        
      </main>
    )
  }
}
export default Main