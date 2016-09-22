import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div id="login-box">
        <input
          name="email"
          value=""
          type="text"
          placeholder="email address"
        />
        <input
          name="password"
          value=""
          type="text"
          placeholder="password"
        />
        // this field only appears for the REGISTER screen
        <input
          name="screenName"
          value=""
          type="text"
          placeholder="screen name (ie. 'Lynn F')"
        />
      </div>
      )
  }
}

export default LoginForm;
