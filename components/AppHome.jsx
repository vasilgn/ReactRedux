import React, {Component} from 'react';

class AppHome extends Component {
  
  render() {
    let viewHome = (
      <div id="viewAppHome">
      <h1>Welcome</h1>
      Welcome to our messaging system.
    </div>)
    if (sessionStorage.getItem('username') != null) {
      viewHome = (
        <div id="viewUserHome">
          <h1 id="viewUserHomeHeading">Welcome, {sessionStorage.getItem('username')}!</h1>
          <a href="#" id="linkUserHomeMyMessages">My Messages</a>
          <a href="#" id="linkUserHomeSendMessage">Send Message</a>
          <a href="#" id="linkUserHomeArchiveSent">Archive (Sent)</a>
        </div>
      )
    }
    return (
      <div>
        {viewHome}
      </div>
    )
  }
}

export default AppHome
