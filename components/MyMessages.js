import React, {Component} from 'react';
import {Helpers} from '../rest/kinveyRequster.js';

class MyMessages extends Component {
  
  render() {
    var titles = (<tr><th>From</th><th>Message</th><th>DateReceived</th></tr>)
    let cells = [];
    this.props.myMessages.map( (m,i)=> {
      cells.push(
        <tr key={i}>
          <td>{Helpers.formatSender(m.sender_name, m.sender_username)}</td>
          <td> {m.text} </td>
          <td>{ Helpers.formatDate(m._kmd.ect)}</td>
        </tr>
      )
    })
    return (
      <div className="messages"
           style={this.props.style}>
        <h1>My Messages</h1>
        <table className="center">
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