import React, { Component } from 'react';

class ArchiveSent extends Component{
  render(){
    return(
      <div id="viewArchiveSent">
        <h1>Archive (Sent Messages)</h1>
        <div className="messages" id="sentMessages">
          <table>
            <thead>
            <tr>
              <th>To</th>
              <th>Message</th>
              <th>Date Sent</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>peter</td>
              <td>Hi, Peter</td>
              <td>29.11.2016 9:43:18</td>
              <td><button>Delete</button></td>
            </tr>
            <tr>
              <td>todor</td>
              <td>Todor, how are you?</td>
              <td>3.07.2016 8:06:03</td>
              <td><button>Delete</button></td>
            </tr>
            <tr>
              <td>maria</td>
              <td>Party this evening?</td>
              <td>9.06.2016 19:55:59</td>
              <td><button>Delete</button></td>
            </tr>
        
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ArchiveSent