import React, {Component} from 'react';


class RegisterForm extends Component {
  
  render(){
    return(
      <div id="viewRegister"  style={this.props.style} >
        <h1>Please register here</h1>
        <form id="register"
          onSubmit={this.props.onsubmit}>
          <label>
            <div>Username:</div>
            <input type="text" name="username" id="registerUsername" required />
          </label>
          <label>
            <div>Password:</div>
            <input type="password" name="password" id="registerPasswd" required />
          </label>
          <label>
            <div>Name:</div>
            <input type="text" name="name" id="registerName" />
          </label>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    )
  }
}
export default RegisterForm

