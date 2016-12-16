import React, {Component} from 'react';

class ViewUserHome extends Component{
  render(){
    return (
      <div id="viewUserHome">
        <h1 id="viewUserHomeHeading">Welcome, {this.props.name} !</h1>
        <a href="#" name="myMessages" onClick={this.props.onclick}>My Messages</a>
        <a href="#" name="sendMessage" onClick={this.props.onclick}>Send Message</a>
        <a href="#" name="archived" onClick={this.props.onclick}>Archive (Sent)</a>
      </div>
      
    )
  }
}
export default ViewUserHome