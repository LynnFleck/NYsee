import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { Link } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
    // this.getScreenName = this.getScreenName.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        })
        console.log(`Currently logged in ----- ${user.email} -----`)
        this.setState({
          userEmail: user.email,
        })
      });
    }, 200)
    // this.getScreenName();
  }
  //can't get this to work
  // getScreenName() {
  //   const loggedInUser = firebase.auth().currentUser;
  //   firebase.database().ref('users').orderByChild('email').equalTo(`${loggedInUser.email}`).on('child_added', function(snapshot) {
  //     const sN = snapshot.val();
  //     console.log(`The ScreenName is: ${sN.screenName}`);
  //   });
  // }
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
