import React, {Component} from 'react';


class RegisterForm extends Component {
  onSubmit(e){
    // e.preventDefault()
    // console.log('registering in');
    // Actions.register({
    //   username: e.target[0].value,
    //   password: e.target[1].value,
    //   name: e.target[2].value
    // });
    // e.target[0].value = '';
    // e.target[1].value = '';
    // e.target[2].value = '';
    //
  }
  render(){
    return(
      <div id="viewRegister">
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

