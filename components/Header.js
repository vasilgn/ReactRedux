import React, {Component} from 'react';

class Header extends Component {
  
  
  render() {
    let navMenu = (
      <div>
        <a href="#" className="anonymous" onClick={this.props.onclick}>Home</a>
        <a href="#" className="anonymous" onClick={this.props.onclick}>Login</a>
        <a href="#" className="anonymous" onClick={this.props.onclick}>Register</a>
      </div>
    );
    
    if(this.props.user._kmd != null){
      navMenu = (
        <div>
          <a href="#" className="useronly" onClick={this.props.onclick}>Home</a>
          <a href="#" className="useronly" onClick={this.props.onclick}>My Messages</a>
          <a href="#" className="useronly" onClick={this.props.onclick}>Archive (Sent)</a>
          <a href="#" className="useronly" onClick={this.props.onclick}>Send Message</a>
          <a href="#" className="useronly" onClick={this.props.onclick}>Logout</a>
        </div>
      )
    }
    
    return (
      <header id="menu" style={{textAlign: 'center'}}>
        {navMenu}
        <span className="useronly" id="spanMenuLoggedInUser">Welcome, {this.props.user.name} !</span>
      </header>
    );
  }
  
}
export default Header