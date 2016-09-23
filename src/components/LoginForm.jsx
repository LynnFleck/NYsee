import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then(() => {
        this.props.router.push('/dashboard');
        console.log('user has signed in')
      })
  }
  render() {
    return (
      <div id="login-box">
        <h1> this is the LOGIN page </h1>
        <input
          name="email"
          onChange={this.handleChange}
          type="text"
          placeholder="email address"
        />
        <input
          name="password"
          onChange={this.handleChange}
          type="password"
          placeholder="password"
        />
        <button
          className="btn"
          onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(LoginForm);
