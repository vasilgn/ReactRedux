import React, {Component} from 'react';

export default class UserHome extends Components{
  render(){
    return (
      <div id="viewUserHome">
        <h1 id="viewUserHomeHeading">Welcome, "user" !</h1>
        <a href="#" id="linkUserHomeMyMessages">My Messages</a>
        <a href="#" id="linkUserHomeSendMessage">Send Message</a>
        <a href="#" id="linkUserHomeArchiveSent">Archive (Sent)</a>
      </div>
      
    )
  }
}