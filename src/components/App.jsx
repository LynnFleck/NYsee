import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { Link } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      loggedIn: false,
      screenName: '',
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        })
        this.setState({
          userEmail: user.email,
        })
        console.log(`Currently logged in ----- ${user.email} -----`)
      });
    }, 200)
  }
  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user has been signed out');
      });
  }
  loggedInLinks() {
    if (this.state.loggedIn !== true) {
      return (
        <div>
          <Link className="login-link" to="login">Login</Link>
          <Link className="register-link" to="register">Register</Link>
        </div>
        );
    } else {
      return (
      <div>
        <Link className="login-link logout" onClick={this.signOut}>Logout</Link>
        <h4>Welcome <span>{this.state.userEmail}</span></h4>
      </div>
      );
    };
  }
  render() {
    return (
      <div >
        <header className="clearfix">
          <div id="logo"></div>
          <h1>Lynn’s List of things to and see while in the Big Apple</h1>
        </header>
        <div id="login-links-group">
          {
            this.loggedInLinks()
          }
        </div>
        <div id="content">
          {this.props.children}
        </div>
      </div>
      );
  };
}

export default App;
