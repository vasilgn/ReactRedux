import React, { Component } from 'react';
import {Helpers} from '../rest/kinveyRequster.js';
class ArchiveSent extends Component{
  
  
  render(){
  
    var titles = (<tr><th>To</th><th>Message</th><th>Date Sent</th><th>Actions</th></tr>)
    let cells = [];
    this.props.sendMessages.map( (m,i)=> {
      cells.push(
        <tr key={i}>
          <td>{m.recipient_username}</td>
          <td> {m.text} </td>
          <td>{ Helpers.formatDate(m._kmd.ect)}</td>
          <td><button onClick={this.props.deleteClickHandler.bind(null, m._id)}>Delete</button></td>
        </tr>
      )
    })
    
    return(
      <div id="viewArchiveSent" style={this.props.style}>
        <h1>Archive (Sent Messages)</h1>
        <div className="messages"
             id="sentMessages" >
          <table className="center">
            <thead>
            {titles}
            </thead>
            <tbody>
            {cells}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ArchiveSent