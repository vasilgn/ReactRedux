import React, {Component} from 'react';


class Header extends Component {
  constructor(){
    super();
    
    this.onClick = this.onClick.bind(this)
  }
  
  onClick(e){
    // if(e.target.text == 'Login'){
    //   Actions.showLoginForm()
    // }else if(e.target.text == 'Register'){
    //   Actions.showRegisterForm()
    // }else if(e.target.text == 'Home'){
    //   Actions.showHomeView()
    // }else if(e.target.text == 'Logout'){
    //   Actions.logout(false)
    // }
  }
  render() {
    let navMenu = (
      <div>
        <a href="#" className="anonymous" onClick={this.onClick}>Home</a>
        <a href="#" className="anonymous" onClick={this.onClick}>Login</a>
        <a href="#" className="anonymous" onClick={this.onClick}>Register</a>
      </div>
    );
    if(sessionStorage.getItem('authToken')!= null){
      navMenu = (
        <div>
          <a href="#" className="useronly" id="linkMenuUserHome">Home</a>
          <a href="#" className="useronly" id="linkMenuMyMessages">My Messages</a>
          <a href="#" className="useronly" id="linkMenuArchiveSent">Archive (Sent)</a>
          <a href="#" className="useronly" onClick={this.onClick}>Send Message</a>
          <a href="#" className="useronly" onClick={this.onClick}>Logout</a>
        </div>
      )
    }
    
    return (
      <header id="menu">
        {navMenu}
        <span className="useronly" id="spanMenuLoggedInUser">Welcome, {sessionStorage.getItem('username')?sessionStorage.getItem('username'): '{guest}'} !</span>
      </header>
    );
  }
  
}
export default Header