import React, {Component} from 'react';


class LoginForm extends Component {
  
  
  render(){
    return(
      <div id="viewLogin" style={this.props.style}>
        <h1>Please login</h1>
        <form
          id="login"
          onSubmit={this.props.onsubmit}>
          <label>
            <div>Username:</div>
            <input type="text" name="username" id="loginUsername" required />
          </label>
          <label>
            <div>Password:</div>
            <input type="password" name="password" id="loginPasswd" required />
          </label>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}
export default LoginForm
