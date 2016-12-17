import React, {Component} from 'react';
import {Helpers} from '../rest/kinveyRequster.js';

class MyMessages extends Component {
  
  render() {
    var titles = (<tr><th>From</th> <th>Message</th> <th>DateReceived</th></tr>)
    let cells = [];
    this.props.myMessages.map(function (m) {
      cells.push(
        <tr>
          <td>{Helpers.formatSender(m.sender_name, m.sender_username)}</td>
          <td> {m.text} </td>
          <td>{ Helpers.formatDate(m._kmd.ect)}</td>
        </tr>
      )
    })
    return (
      <div className="messages" id="myMessages">
        <h1>My Messages</h1>
        <table>
          <thead>
          {titles}
          </thead>
          <tbody>
          {cells}
          </tbody>
        </table>
      </div>
    )
    
  }
}

export default MyMessages