import React, {Component} from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import Requester from '../rest/kinveyRequster.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main  />
        <Footer/>
      </div>
    );
  }
  
  componentDidMount(){
    if(!this.props.loggedIn){
      this.props.actions.checkLoggedIn()
    }
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App)