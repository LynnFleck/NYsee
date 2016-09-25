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
          <Link className="login-links" to="login">Login</Link>
          <Link className="login-links" to="register">Register</Link>
        </div>
        );
    } else {
      return (
      <div>
        <Link className="login-links" onClick={this.signOut}>Logout</Link>
        <h4>Welcome {this.state.userEmail}</h4>
      </div>
      );
    };
  }
  render() {
    return (
      <div >
        <header className="clearfix">
          <h1>Lynn's NYC and do</h1>
          <div id="login-links-group">
            {
              this.loggedInLinks()
            }
          </div>
        </header>
        <div id="content">
          {this.props.children}
        </div>
      </div>
      );
  };
}

export default App;
