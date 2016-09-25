import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      screenName: '',
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
    const { email, password, screenName } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({email: email,
           screenName: screenName})
      })
      .then(() => {
        this.props.router.push('/dashboard');
      })
  }
  render() {
    return (
      <div>
        <h1>This is the REGISTER PAGE - this is NOT protected</h1>
        <div id="login-box">
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
          <input
            name="screenName"
            onChange={this.handleChange}
            type="text"
            placeholder="screen name"
          />
          <button
            className="btn"
            onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
      )
  }
}

export default withRouter(Register);
