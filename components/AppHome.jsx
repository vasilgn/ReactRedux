import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions.js';
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHome)
