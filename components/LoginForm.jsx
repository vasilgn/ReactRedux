import React, {Component} from 'react';


class LoginForm extends Component {
  onSubmit(e){
    e.preventDefault()
    console.log('logging in');
    // Actions.login({
    //   username: e.target[0].value,
    //   password: e.target[1].value
    // });
    // e.target[0].value = '';
    // e.target[1].value = '';
  }
  
  render(){
    return(
      <div id="viewLogin">
        <h1>Please login</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
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
