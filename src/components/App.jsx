import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { Link } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      useremail: '',
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  getUserInfo() {
    const user = firebase.auth().currentUser;
      if (user) {
        this.setState({
          useremail: user.email,
        })
        console.log(`${user.email} is logged in`);
      } else {
        console.log('No user is logged in');
      };
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        })
        this.getUserInfo();
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
        <h3>Welcome {this.state.useremail}</h3>
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
          <div id="nav-links-group">
            <Link className="nav-links" to="/">Home |</Link>
            <Link className="nav-links" to="login"> Login |</Link>
            <Link className="nav-links" to="dashboard"> Dashboard |</Link>
            <Link className="nav-links" onClick={this.signOut}> Logout</Link>
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
