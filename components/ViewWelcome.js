import React, {Component} from 'react';

class ViewWelcome extends Component{
  render(){
    return (
      <div id="viewWelcomeHome">
        <h4> Welcome to our messaging system , {this.props.name} !</h4>
      </div>
    
    )
  }
}
export default ViewWelcome