import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery';

import { browserHistory } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.sendCreds = this.sendCreds.bind(this);
  }
  sendCreds(e) {
    e.preventDefault();
    let newState = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };

    $.ajax({
      url : "/login",
      type: "POST",
      data : newState,
      success: function(data, textStatus, jqXHR)
      {
        this.setState = (newState);
        const path = `/yohdl/rooms`
        browserHistory.push(path)
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
        console.log('no bueno');
        let newState = Object.assign({}, this.state, {error: 'Login Error!'});
        this.setState = newState;
      }
    });
  }
  render() {
    return (
      <div id="login-form">
        <div id="error-message">{this.state.error}</div>
        <h1>Login</h1>
          <form onSubmit={this.sendCreds}>
            <input type="text" placeholder="username" value={this.state.username}/>
            <input type="text" placeholder="password" value={this.state.password}/>
            <button type="submit">submit</button>
          </form>
          <br></br>
      </div>
    );
  }
}

export default Login;
