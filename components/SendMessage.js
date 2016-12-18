import React, {Component} from 'react';
import {Helpers} from '../rest/kinveyRequster.js';

class SendMessage extends Component {
  
  render() {
    
    let options = []
    this.props.users.map((u, i) => {
      options.push(
        <option key={i} value={u.username}>{Helpers.formatSender(u.name, u.username)}</option>
      )
    })
    return (
      <div id="viewSendMessage"
           style={this.props.style}
            className="messages">
        <h1>Send Message</h1>
        <form id="formSendMessage" onSubmit={this.props.onsubmit}>
          <div>Recipient:</div>
          <div>
            <select name="recipient" required id="msgRecipientUsername">
              {options}
            </select>
          </div>
          <div>Message Text:</div>
          <div><input type="text" name="text" required id="msgText"/></div>
          <div><input type="submit" value="Send"/></div>
        </form>
      </div>
    )
  }
}
export default SendMessage
