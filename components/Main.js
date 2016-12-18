import React, {Component} from 'react';

class Main extends Component {
 
  render() {
  
    return (
      <div className="main" style={{textAlign: 'center'}}>
        {this.props.children}
      </div>
    )
  }
}
export default Main