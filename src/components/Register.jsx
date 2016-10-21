import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
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
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({email: email})
      })
      .then(() => {
        this.props.router.push('/dashboard');
      })
  }
  render() {
    return (
      <div id="register-box" className="login-register-box" >
        <h1>REGISTER</h1>
        <div id="login-box">
          <input
            name="email"
            onChange={this.handleChange}
            type="text"
            placeholder="email address"
            value={this.state.email}
          />
          <input
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="password - min 6 characters"
            value={this.state.password}
          />
          <button
            className="btn"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      )
  }
}

export default withRouter(Register);
